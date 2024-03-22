import { FetchError } from "../../chore/errors/FetchError";
import { UnauthorizedError } from "../../chore/errors/UnauthorizedError";
import { UserDto } from "../models/dto";
import { User } from "../models/entity";
import { UserAuthorizer } from "./User.authorizer";
import { UserQueryRepository } from "./UserQuery.repository";


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
}