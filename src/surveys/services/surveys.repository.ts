import { ISurvey,ISurveyGroupWithSurveyDetail } from "../models/entity";
import { EventSubmitCognitoForm } from "../types";

export interface SurveysQueryRepository {
  getByUser(): Promise<ISurvey[]>;
  postSurvey(e: EventSubmitCognitoForm): Promise<EventSubmitCognitoForm>;
  getSurveysGroup(): Promise<ISurveyGroupWithSurveyDetail[]>;
  getSurveysBySurveyGroupId(
    surveyGroupId: string
  ): Promise<ISurveyGroupWithSurveyDetail>;
}
