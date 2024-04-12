import { LoginPayload } from "@/auth/models/entity";
import { AuthCommandRepository } from "../auth.repository";

export class AuthFirebaseCommand implements AuthCommandRepository {

  async login(payload: LoginPayload): Promise<void> {
    console.info("Firebase Login request sent", payload);
  }

  async loginWithGoogle(): Promise<void> {
    console.info("Firebase Login with Google request sent");
  }

  async logout(): Promise<void> {
    console.info("Firebase Logout request sent");
  }
}
