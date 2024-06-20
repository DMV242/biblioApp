import { UserType } from "../enum/userType";
import { User } from "../models/user";
import { SignUpRequestInterface } from "./interfaces/signUpRequest";

class SignUpRequest implements SignUpRequestInterface {
    username: string;
    password: string;
    email: string;
    type?: UserType;

    private constructor(username: string, password: string, email: string, type?: UserType) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.type = type;
    }

    static get(username: string, password: string, email: string, type?: UserType): SignUpRequest {
        return new SignUpRequest(username, password, email, type);
    }

}

export { SignUpRequest }