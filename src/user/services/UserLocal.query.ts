import { User } from "../models/entity";
import { UserQueryRepository } from "./UserQuery.repository";

export class UserLocalService implements UserQueryRepository {

    getUsers(): Promise<User[]> {
        return Promise.resolve([{
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'alternova@yopmail.com',
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
        }]);
    }
}