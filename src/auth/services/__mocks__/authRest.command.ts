import { LoginPayload } from "../../models/entity";
import { AuthCommand } from "../auth.repository";

export class AuthRestCommand implements AuthCommand {
    async login(payload: LoginPayload): Promise<void> {
       console.info("Login request sent", payload);
    }

    async logout(): Promise<void> {
        console.info("Logout request sent");
    }
}