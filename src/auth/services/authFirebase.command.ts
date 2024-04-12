import { Auth, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { FirebaseError } from "@/core/errors/FirebaseError";
import firebaseApp from "@/core/firebase/configuration";
import { LoginDto } from "../models/dto/login.dto";
import { LoginPayload } from "../models/entity";
import { AuthCommandRepository } from "./auth.repository";

namespace EmailLoginTranslator {
  export function toDto(payload: LoginPayload): LoginDto  {
    return {
      email: payload.email,
      password: payload.password
    };
  }
}

export class AuthFirebaseCommand implements AuthCommandRepository {
  private authClient: Auth
  constructor() {
    console.log("Firebase Auth initialized");

    this.authClient = getAuth(firebaseApp);
  }

  async login(payload: LoginPayload): Promise<void> {
    try {
      const dto = EmailLoginTranslator.toDto(payload);
      await signInWithEmailAndPassword(this.authClient, dto.email, dto.password);
    } catch (error) {
      throw new FirebaseError("Login failed. Please try again");
    }
  }

  async loginWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.authClient, provider);
    } catch (error) {
      console.log(error);

      throw new FirebaseError("Login with Google failed. Please try again");
    }
  }

  async logout(): Promise<void> {
    try {
      await this.authClient.signOut();
    } catch (error) {
      throw new FirebaseError("logout failed. Please try again");
    }
  }
}
