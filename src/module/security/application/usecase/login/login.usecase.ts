import {LoginUsecaseInterface} from "./login.usecase.interface";
import {UserServiceInterface} from "../../../../user/application/service/user.service.interface";
import {LoginRequestInterface} from "./request/login.request.interface";

export class LoginUsecase implements LoginUsecaseInterface {
    constructor(private readonly userService: UserServiceInterface) {
    }

    execute(request: LoginRequestInterface): Promise<string> {

        // this.userService.makeLogin()
        return Promise.resolve("undefined");
    }
}