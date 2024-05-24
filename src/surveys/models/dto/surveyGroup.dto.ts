import { ISurveyDto } from "./survey.dto";

export interface ISurveyGroupDto {
  id: string;
  name: string;
  description: string;
  survey_group_id: string;
  isCompleted: boolean;
}

export interface ISurveyGroupWithSurveyDetailDto extends ISurveyGroupDto {
  surveys: ISurveyDto[];
}
