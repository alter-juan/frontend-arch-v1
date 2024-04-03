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
            name: dto.name,
            username: dto.username,
            email: dto.email,
            phone: dto.phone,
            website: dto.website
        };
    }

}

export class UserFetchService implements UserQueryRepository {
    constructor(private readonly authorizer: UserAuthorizer) { }
    async getUsers() {
        if (!this.authorizer.canRead()) throw new UnauthorizedError('Unauthorized to read users');

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new FetchError('Failed to fetch users');

        const usersDto: UserDto[] = await response.json();
        const users = usersDto.map(UserTranslate.toEntity);

        return users
    }

    async getUser(id: string) {
        if (!this.authorizer.canReadDetail()) throw new UnauthorizedError('Unauthorized to read users');

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new FetchError('Failed to fetch user');

        const userDto: UserDto = await response.json();
        const user = UserTranslate.toEntity(userDto);

        if (!ensureUserIsValid(user)) throw new InvalidError('Invalid user data');

        return user;
    }
}