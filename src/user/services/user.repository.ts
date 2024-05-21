import { User } from "../models/entity/user.entity";

export interface UserQueryRepository {
    getUsers(): Promise<User[]>;
    getUser(id: string): Promise<User>;
    getUserSocialMedia(id: string): Promise<Partial<User>>;
}