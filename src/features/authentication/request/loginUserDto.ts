
import { LoginUserRequestInterface } from "../request/interfaces/loginUserDto";

class LoginUserRequest implements LoginUserRequestInterface{
    username: string;
    password: string;

    private constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    static create(username: string, password: string): LoginUserRequest {
        return new LoginUserRequest(username, password);
    }

    static getUsername(username: string): string {
        return username;
    }

    static getPassword(password: string): string {
        return password;
    }

}

export { LoginUserRequest }