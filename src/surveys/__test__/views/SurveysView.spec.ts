import { render } from "@testing-library/vue";

import FormCognito from "../../views/surveys/components/FormCognito.vue";
import StepsTextAndNumber from "../../views/surveys/components/StepsTextAndNumber.vue";
import SurveysView from "../../views/surveys/SurveysView.vue";

vi.mock("vue-router", () => ({
  useRouter: vi.fn().mockReturnValue({
    push: vi.fn(),
  }),
  useRoute: vi.fn().mockReturnValue({
    query: {
      page: 1,
    },
  }),
}));

vi.mock("@/surveys/services/surveysFetch.query.ts");

describe("SurveysView", () => {
  describe("Given a view to surveys", () => {
    describe("When the user is on the surveys page", () => {
      it("then the user should be able to see the steps", async () => {
        const { findByText } = render(SurveysView, {
          global: {
            components: {
              FormCognito,
              StepsTextAndNumber,
            },
          },
        });
        const stepOne = await findByText(/personal information/i);
        expect(stepOne).toBeTruthy();
      });
      it("then the user should be able to see the form", async () => {
        const { findByTestId } = render(SurveysView, {
          global: {
            components: {
              FormCognito,
              StepsTextAndNumber,
            },
          },
        });

        const form = await findByTestId(/cognito/i);
        expect(form).toBeTruthy();
      });
    });
  });
});
