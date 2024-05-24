import { SurveysQueryRepository } from "../services/surveys.repository";
import { SurveysCommandServices } from '../services/surveysFetch.command';
import { SurveysFetchService } from "../services/surveysFetch.query";
import { Service } from "../types";
import { SurveysCommandRepository } from './../services/surveys.repository';

export function useSurveyInjection(): Service {
  const surveyQuery: SurveysQueryRepository = new SurveysFetchService();
  const surveyCommand: SurveysCommandRepository = new SurveysCommandServices();

  return {
    surveysQuery: surveyQuery,
    surveyCommand: surveyCommand,
  };
}
