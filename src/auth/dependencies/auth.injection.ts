import { AuthCommand } from "../services/auth.repository";
import { AuthRestCommand } from "../services/authRest.command";

export const authCommands: AuthCommand = new AuthRestCommand();