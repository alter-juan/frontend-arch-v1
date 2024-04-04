import { EmailError } from "../../../common/errors";

type Email = string;
type Password = string;
type Username = string;

class PasswordError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PasswordError";
    }
}

export function isEmailValid(email:  string): boolean {
    return email !== undefined && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isPasswordValid(password: string): boolean {
    return password !== undefined && password.length >= 5;
}

export function isUsernameValid(username: string): boolean {
    return username.length >= 4;
}

export interface LoginPayload {
   email: Email;
   username: Username;
   password: Password; 
}

export function ensureLoginPayloadIsValid(payload: LoginPayload): void {
    if (!isEmailValid(payload.email)) {
        throw new EmailError("Email is invalid");
    }
    if (!isPasswordValid(payload.password)) {
        throw new PasswordError("Password is invalid");
    }
    if (!isUsernameValid(payload.username)) {
        throw new Error("Username is invalid");
    }
}