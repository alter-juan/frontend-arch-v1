import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useSurveyInjection } from "../../dependencies/useSurveyInjection";
import { ISurveyGroupWithSurveyDetail } from "../../models/entity";
import { EventSubmitCognitoForm } from "../../types";

export function surveyController() {
  const router = useRouter();
  const route = useRoute();

  const { surveysQuery } = useSurveyInjection();

  const page = ref(route.query.page ? parseInt(route.query.page as string) : 1);
  const steps = ref<ISurveyGroupWithSurveyDetail>();
  const isLoading = ref(false);

  const getSurveys = async () => {
    try {
      const surveys = await surveysQuery.getSurveysBySurveyGroupId(
        "vUM6bewWfU2gozW7YQwrMQ"
      );
      steps.value = surveys;
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e: EventSubmitCognitoForm) => {
    isLoading.value = true;
    try {
      await surveysQuery.postSurvey(e);
      if(page.value === steps.value?.surveys.length) return router.push({ name: "DashboardLayout" });
      const newPage = page.value + 1;
      page.value = newPage;
      await router.push({ query: { page: newPage } });
      updateStepCompletion();
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  const updateStepCompletion = () => {
    steps.value?.surveys.forEach((step, index) => {
      step.isCompleted = index < page.value;
    });
  };

  const surveySelected = computed(() => {
    if (!steps.value?.surveys) return;
    return steps.value.surveys[page.value - 1]?.surveyId;
  });

  const isPageOutOfRange = computed(
    () => page.value - 1 > steps.value!?.surveys.length && !isLoading.value
  );

  onMounted(async () => {
    page.value = route.query.page ? parseInt(route.query.page as string) : 1;
    await getSurveys();
    if (page.value > steps.value!?.surveys.length) {
      page.value = 1;
      await router.push({ query: { page: 1 } });
    }
    updateStepCompletion();
  });

  return {
    page,
    steps,
    onSubmit,
    surveySelected,
    isLoading,
    isPageOutOfRange
  };
}