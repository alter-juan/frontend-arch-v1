export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export function ensureUserIsValid(user: User): boolean {
    return user.id !== undefined && user.name !== undefined && user.username !== undefined && user.email !== undefined && user.phone !== undefined && user.website !== undefined;
}