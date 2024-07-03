export interface LoginRequestInterface {
    username: string;
    password: string;

    getUsername(): string;
    getPassword(): string;
}