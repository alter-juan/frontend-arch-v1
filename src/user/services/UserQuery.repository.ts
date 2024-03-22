import { User } from "../models/entity/User.entity";

export interface UserQueryRepository {
    getUsers(): Promise<User[]>;
    getUser(id: string): Promise<User>;
}