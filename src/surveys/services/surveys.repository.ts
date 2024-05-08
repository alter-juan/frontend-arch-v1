import { SurveyWithText } from "../models";
import { EventSubmitCognitoForm } from "../types";

export interface SurveysQueryRepository {
  getSurveysByUser(): Promise<SurveyWithText[]>;
  sendSurvey(e: EventSubmitCognitoForm): Promise<EventSubmitCognitoForm>;
}
