import { UserService } from "../../../../users/application/service/user.service";
import { LoginUsecaseInterface } from "./login.usecase.interface";
import { LoginRequestInterface } from "./request/login.request.interface";

export class loginUseCase implements LoginUsecaseInterface{
    private readonly userService: UserService;
    constructor(userService: UserService){
        this.userService = userService;
    }
    execute(loginRequest: LoginRequestInterface): Promise<string> {
        const username = loginRequest.getUsername();
        const password = loginRequest.getPassword();
        return this.userService.makeLogin(username, password);
    }
}