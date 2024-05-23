import { ISurvey } from "./survey.entity";

export interface ISurveyGroup {
  id: string;
  name: string;
  description: string;
  surveyGroupId: string;
  isCompleted: boolean;
}

export interface ISurveyGroupWithSurveyDetail extends ISurveyGroup {
  surveys: ISurvey[];
}
