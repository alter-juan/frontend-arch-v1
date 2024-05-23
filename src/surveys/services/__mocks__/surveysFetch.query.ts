import { faker } from "@faker-js/faker";

import { ISurvey } from "@/surveys/models";
import { ISurveyGroupWithSurveyDetail } from "../../models";
import { EventSubmitCognitoForm } from "../../types";
import { SurveysQueryRepository } from "../surveys.repository";

export class SurveysFetchService implements SurveysQueryRepository {
  getByUser(): Promise<ISurvey[]> {
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

  getSurveysGroup(): Promise<ISurveyGroupWithSurveyDetail[]> {
    return Promise.resolve([createFakeSurveyGroup("Personal Information")]);
  }

  getSurveysBySurveyGroupId(
    surveyGroupId: string
  ): Promise<ISurveyGroupWithSurveyDetail> {
    return Promise.resolve({
      id: faker.number.int().toString() + surveyGroupId,
      name: faker.lorem.sentence(),
      surveyGroupId: faker.number.int().toString(),
      isCompleted: faker.datatype.boolean(),
      description: faker.lorem.sentence(),
      surveys: [
        createFakeSurvey("Personal Information"),
        createFakeSurvey("Details"),
        createFakeSurvey("Payment"),
      ],
    });
  }
}

export const createFakeSurvey = (text?: string): ISurvey => ({
  id: faker.number.int().toString(),
  name: text ?? '',
  description: faker.lorem.sentence(),
  surveyId: faker.datatype.boolean(),
  isCompleted: faker.datatype.boolean(),
});

export const createFakeSurveyGroup = (
  name?: string
): ISurveyGroupWithSurveyDetail => ({
  id: faker.number.int().toString(),
  name: name || faker.lorem.sentence(),
  surveyGroupId: faker.number.int().toString(),
  isCompleted: faker.datatype.boolean(),
  description: faker.lorem.sentence(),
  surveys: [createFakeSurvey(""), createFakeSurvey(""), createFakeSurvey("")],
});
