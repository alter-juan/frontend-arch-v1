import { EventSubmitCognitoForm } from "../types";
import { SurveysCommandRepository } from "./surveys.repository";

export class SurveysCommandServices implements SurveysCommandRepository {
  postSurvey(e: EventSubmitCognitoForm): Promise<EventSubmitCognitoForm> {
    const response = new Promise<EventSubmitCognitoForm>((resolve) => {
      setTimeout(() => {
        resolve(e);
      }, 5000);
    });
    return response;
  }
}
