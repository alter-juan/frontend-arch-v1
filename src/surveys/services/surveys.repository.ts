import { ISurvey,ISurveyGroupWithSurveyDetail } from "../models/entity";
import { EventSubmitCognitoForm } from "../types";

export interface SurveysQueryRepository {
  getByUser(): Promise<ISurvey[]>;
  getSurveysGroup(): Promise<ISurveyGroupWithSurveyDetail[]>;
  getSurveysBySurveyGroupId(
    surveyGroupId: string
  ): Promise<ISurveyGroupWithSurveyDetail>;
}

export interface SurveysCommandRepository {
  postSurvey(e: EventSubmitCognitoForm): Promise<EventSubmitCognitoForm>;
}