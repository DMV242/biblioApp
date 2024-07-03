export interface UserServiceInterface {

    makeLogin(username: string, password: string): Promise<string>;
}