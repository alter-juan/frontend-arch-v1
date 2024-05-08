import { SurveyWithText } from "../models";
import { EventSubmitCognitoForm } from "../types";
import { createFakeSurvey } from "./__mocks__/surveysFetch.query";
import { SurveysQueryRepository } from "./surveys.repository";

export class SurveysFetchService implements SurveysQueryRepository {
  getSurveysByUser(): Promise<SurveyWithText[]> {
    return Promise.resolve([
      createFakeSurvey(),
      createFakeSurvey(),
      createFakeSurvey(),
    ]);
  }

  sendSurvey(e: EventSubmitCognitoForm): Promise<EventSubmitCognitoForm> {
    const response = new Promise<EventSubmitCognitoForm>((resolve) => {
      setTimeout(() => {
        resolve(e);
      }, 5000);
    });
    return response;
  }
}
