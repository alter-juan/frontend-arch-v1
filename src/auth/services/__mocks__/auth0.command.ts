import { AuthCommand } from "../auth.repository";

export class Auth0Command implements AuthCommand {
    async login(): Promise<void> {
       console.info("Login request sent");
    }

    async logout(): Promise<void> {
        console.info("Logout request sent");
    }
}