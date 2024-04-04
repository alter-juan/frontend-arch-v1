import Client from "../../core/client/client";
import { FetchError } from "../../core/errors/FetchError";
import { LoginDto } from "../models/dto";
import { LoginPayload } from "../models/entity";
import {  AuthCommand } from "./auth.repository";

namespace LoginTranslator {
    export function toDto(payload: LoginPayload): LoginDto  {
        return {
            username: payload.username,
            password: payload.password,
            expiresInMins: 60
        };
    }
}


export class AuthRestCommand implements AuthCommand {
    async login(payload: LoginPayload): Promise<void> {
        try {
            const dto = LoginTranslator.toDto(payload);
            await Client.post("auth/login", dto);
        } catch (error) {
            throw new FetchError("Login failed. Please try again");
        }
    }
}