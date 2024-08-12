import { LoginRequestInterface } from "./request/login.request.interface";

export interface LoginUsecaseInterface{
    execute(loginRequestInterface: LoginRequestInterface): Promise<string>;
}