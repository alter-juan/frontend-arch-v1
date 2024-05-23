import { ISurvey } from "../models/";
import { ISurveyGroupWithSurveyDetail } from "../models/surveyGroup.entity";
import { EventSubmitCognitoForm } from "../types";
import {
  createFakeSurvey,
  createFakeSurveyGroup,
} from "./__mocks__/surveysFetch.query";
import { SurveysQueryRepository } from "./surveys.repository";

export class SurveysFetchService implements SurveysQueryRepository {
  getByUser(): Promise<ISurvey[]> {
    return Promise.resolve([
      createFakeSurvey(),
      createFakeSurvey(),
      createFakeSurvey(),
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
    return Promise.resolve([
      createFakeSurveyGroup(),
      createFakeSurveyGroup(),
      createFakeSurveyGroup(),
    ]);
  }

  getSurveysBySurveyGroupId(): Promise<ISurveyGroupWithSurveyDetail> {
    return Promise.resolve(createFakeSurveyGroup());
  }
}
