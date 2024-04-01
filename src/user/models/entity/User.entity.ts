export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export function ensureIsValidUsername(username: string): boolean {
    return username !== undefined && /^[a-zA-Z0-9]{3,20}$/.test(username);
}

export function ensureIsValidEmail(email: string): boolean {
    return email !== undefined && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ensureUserIsValid(user: User): boolean {
    return user.id !== undefined &&
        user.name !== undefined &&
        user.phone !== undefined &&
        user.website !== undefined &&
        ensureIsValidUsername(user.username) && 
        ensureIsValidEmail(user.email)   
}
