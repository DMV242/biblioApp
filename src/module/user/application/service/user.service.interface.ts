export interface UserServiceInterface {
    makeLogin(username: string, plainPassword: string): Promise<void>;
}