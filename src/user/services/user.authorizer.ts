export class UserAuthorizer {
    constructor(private readonly roles: string[]) {}

    canRead() {
        return this.roles.includes('admin');
    }

    canReadDetail() {
        return this.roles.includes('admin');
    }
}