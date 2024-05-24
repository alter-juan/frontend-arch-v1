import { ISurveyDto } from "../models/dto/survey.dto";
import { ISurveyGroupWithSurveyDetailDto } from "../models/dto/surveyGroup.dto";
import { ISurvey } from "../models/entity";
import { ISurveyGroupWithSurveyDetail } from "../models/entity/surveyGroup.entity";
import { EventSubmitCognitoForm } from "../types";
import {
  mockDtoSurvey,
  mockDtoSurveyGroupWithSurvey,
} from "./__mocks__/surveysFetch.query";
import { SurveysQueryRepository } from "./surveys.repository";

const SurveyDetailTranslate = {
  toEntity(dto: ISurveyDto): ISurvey {
    return {
      id: dto.id,
      name: dto.name,
      surveyId: dto.survey_id,
      isCompleted: dto.is_completed,
      description: dto.description,
    };
  },
};

const SurveyGroupDetailTranslate = {
  toEntity(dto: ISurveyGroupWithSurveyDetailDto): ISurveyGroupWithSurveyDetail {
    return {
      id: dto.id,
      name: dto.name,
      surveyGroupId: dto.survey_group_id,
      isCompleted: dto.isCompleted,
      description: dto.description,
      surveys: dto.surveys.map(SurveyDetailTranslate.toEntity),
    };
  },
};

export class SurveysFetchService implements SurveysQueryRepository {
  async getByUser(): Promise<ISurvey[]> {
    const response = await Promise.resolve([
      mockDtoSurvey(1),
      mockDtoSurvey(2),
      mockDtoSurvey(3),
    ]);
    return response.map(SurveyDetailTranslate.toEntity);
  }

  postSurvey(e: EventSubmitCognitoForm): Promise<EventSubmitCognitoForm> {
    const response = new Promise<EventSubmitCognitoForm>((resolve) => {
      setTimeout(() => {
        resolve(e);
      }, 5000);
    });
    return response;
  }

  async getSurveysGroup(): Promise<ISurveyGroupWithSurveyDetail[]> {
    const response = await Promise.resolve([
      mockDtoSurveyGroupWithSurvey(),
      mockDtoSurveyGroupWithSurvey(),
      mockDtoSurveyGroupWithSurvey(),
    ]);

    return response.map((surveyGroup) =>
      SurveyGroupDetailTranslate.toEntity(surveyGroup)
    );
  }

  async getSurveysBySurveyGroupId(): Promise<ISurveyGroupWithSurveyDetail> {
    const response = await Promise.resolve(mockDtoSurveyGroupWithSurvey());
    return SurveyGroupDetailTranslate.toEntity(response);
  }
}
