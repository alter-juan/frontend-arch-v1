import { LoginPayload } from "../models/entity";

export interface AuthCommand {
    login: (payload: LoginPayload) => Promise<void>;
}
