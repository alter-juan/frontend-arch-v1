import { SurveysQueryRepository } from "../services/surveys.repository";
import { SurveysFetchService } from "../services/surveysFetch.query";
import { Service } from "../types";

export function useSurveyInjection(): Service {
  const surveyQuery: SurveysQueryRepository = new SurveysFetchService();

  return {
    surveysQuery: surveyQuery,
  };
}
