import { faker } from "@faker-js/faker";

import { ISurveyDto } from "@/surveys/models/dto/survey.dto";
import { ISurveyGroupWithSurveyDetailDto } from "@/surveys/models/dto/surveyGroup.dto";
import { ISurvey } from "@/surveys/models/entity";
import { ISurveyGroupWithSurveyDetail } from "../../models/entity";
import { EventSubmitCognitoForm } from "../../types";
import { SurveysQueryRepository } from "../surveys.repository";

export const FORM_ID_MOCK = "vUM6bewWfU2gozW7YQwrMQ";

export class SurveysFetchService implements SurveysQueryRepository {
  getByUser(): Promise<ISurvey[]> {
    return Promise.resolve([
      createFakeSurvey({
        name: "Personal Information",
        surveyId: 1,
      }),
      createFakeSurvey({
        name: "Details",
        surveyId: 2,
      }),
      createFakeSurvey({
        name: "Payment",
        surveyId: 3,
      }),
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
    return Promise.resolve([createFakeSurveyGroup()]);
  }

  getSurveysBySurveyGroupId(
    surveyGroupId: string
  ): Promise<ISurveyGroupWithSurveyDetail> {
    return Promise.resolve(createFakeSurveyGroup(surveyGroupId));
  }
}

export const mockDtoSurveyGroupWithSurvey =
  (): ISurveyGroupWithSurveyDetailDto => ({
    id: faker.number.int().toString(),
    name: faker.lorem.sentence(),
    survey_group_id: FORM_ID_MOCK,
    isCompleted: faker.datatype.boolean(),
    description: faker.lorem.sentence(),
    surveys: [mockDtoSurvey(), mockDtoSurvey(), mockDtoSurvey()],
  });

export const mockDtoSurvey = (): ISurveyDto => ({
  id: faker.number.int().toString(),
  name: "" ?? faker.lorem.sentence(),
  description: faker.lorem.sentence(),
  survey_id: faker.number.int(),
  is_completed: faker.datatype.boolean(),
});

export const createFakeSurvey = ({
  name = "",
  surveyId = 1,
}: {
  name?: string;
  surveyId: number;
}): ISurvey => ({
  id: faker.number.int().toString(),
  name: name ?? "",
  description: faker.lorem.sentence(),
  surveyId: surveyId ?? faker.number.int(),
  isCompleted: faker.datatype.boolean(),
});

export const createFakeSurveyGroup = (
  surveyId?: string
): ISurveyGroupWithSurveyDetail => ({
  id: faker.number.int().toString(),
  name: faker.lorem.sentence(),
  surveyGroupId: surveyId ?? FORM_ID_MOCK,
  isCompleted: faker.datatype.boolean(),
  description: faker.lorem.sentence(),
  surveys: [
    createFakeSurvey({
      name: "Personal Information",
      surveyId: 1,
    }),
    createFakeSurvey({
      name: "Details",
      surveyId: 2,
    }),
    createFakeSurvey({
      name: "Payment",
      surveyId: 3,
    }),
  ],
});
