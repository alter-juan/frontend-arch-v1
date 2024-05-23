import { SurveyWithText } from "../models";
import { EventSubmitCognitoForm } from "../types";

export interface SurveysQueryRepository {
  getByUser(): Promise<SurveyWithText[]>;
  postSurvey(e: EventSubmitCognitoForm): Promise<EventSubmitCognitoForm>;
}
