import { SurveysCommandRepository, SurveysQueryRepository } from "./../services/surveys.repository";

export type Service = {
  surveysQuery: SurveysQueryRepository;
  surveyCommand: SurveysCommandRepository;
};
