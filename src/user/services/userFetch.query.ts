import client from "../../core/client/client";
import { FetchError } from "../../core/errors/FetchError";
import { InvalidError } from "../../core/errors/InvalidError";
import { UnauthorizedError } from "../../core/errors/UnauthorizedError";
import { UserDto } from "../models/dto";
import { User } from "../models/entity";
import { ensureUserIsValid } from "../models/entity/user.entity";
import { UserAuthorizer } from "./user.authorizer";
import { UserQueryRepository } from "./user.repository";


const UserTranslate = {
    toEntity(dto: UserDto): User {
        return {
            id: dto.id,
            name: dto.maidenName,
            username: dto.username,
            email: dto.email,
            phone: dto.phone,
            website: dto.bloodGroup
        };
    }

}

export class UserFetchService implements UserQueryRepository {
    constructor(private readonly authorizer: UserAuthorizer) { }
    async getUsers() {
        if (!this.authorizer.canRead()) throw new UnauthorizedError('Unauthorized to read users');

        const { data, status } = await client.get('auth/users');
        if (status !== 200) throw new FetchError('Failed to fetch users');

        const usersDto: UserDto[] = data.users;
        const users = usersDto.map(UserTranslate.toEntity);

        return users
    }

    async getUser(id: string) {
        if (!this.authorizer.canReadDetail()) throw new UnauthorizedError('Unauthorized to read users');

        const { data, status } = await client.get(`auth/users/${id}`);
        if (status !== 200) throw new FetchError('Failed to fetch users');

        const userDto: UserDto = data;
        const user = UserTranslate.toEntity(userDto);

        if (!ensureUserIsValid(user)) throw new InvalidError('Invalid user data');

        return user;
    }
}