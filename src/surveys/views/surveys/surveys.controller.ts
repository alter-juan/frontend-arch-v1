import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useSurveyInjection } from "../../dependencies/useSurveyInjection";
import { SurveyWithText } from "../../models";
import { EventSubmitCognitoForm } from "../../types";

export function surveyController() {
  const router = useRouter();
  const route = useRoute();

  const { surveysQuery } = useSurveyInjection();

  const page = ref(route.query.page ? parseInt(route.query.page as string) : 1);
  const steps = ref<SurveyWithText[]>([]);
  const isLoading = ref(false);

  const getSurveys = async () => {
    try {
      const surveys = await surveysQuery.getByUser();
      steps.value = surveys;
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e: EventSubmitCognitoForm) => {
    isLoading.value = true;
    try {
      await surveysQuery.postSurvey(e);
      const newPage = page.value + 1;
      page.value = newPage;
      await router.push({ query: { page: newPage } });
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(async () => {
    await getSurveys();
    page.value = route.query.page ? parseInt(route.query.page as string) : 1;
    steps.value.forEach((step, index) => {
      step.active = index < page.value;
    });
  });

  return {
    page,
    steps,
    onSubmit,
    isLoading,
  };
}
