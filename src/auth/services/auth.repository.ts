export interface AuthCommand {
    login: () => Promise<void>;
    logout: () => Promise<void>;
}
