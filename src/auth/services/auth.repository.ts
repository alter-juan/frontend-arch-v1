import { LoginPayload } from "../models/entity";

export interface AuthCommandRepository {
  login: (payload: LoginPayload) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}
