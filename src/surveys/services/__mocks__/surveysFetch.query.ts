import { faker } from "@faker-js/faker";

import { SurveyWithText } from "../../models";
import { EventSubmitCognitoForm } from "../../types";
import { SurveysQueryRepository } from "../surveys.repository";

export class SurveysFetchService implements SurveysQueryRepository {
  getByUser(): Promise<SurveyWithText[]> {
    return Promise.resolve([
      createFakeSurvey("Personal Information"),
      createFakeSurvey("Details"),
      createFakeSurvey("Payment"),
    ]);
  }

  postSurvey(e: EventSubmitCognitoForm): Promise<EventSubmitCognitoForm> {
    const response = new Promise<EventSubmitCognitoForm>((resolve) => {
      setTimeout(() => {
        resolve(e);
      }, 5000);
    });
    return response;
  }
}

export const createFakeSurvey = (text?: string) => ({
  id: faker.number.int().toString(),
  text,
  active: faker.datatype.boolean(),
});
