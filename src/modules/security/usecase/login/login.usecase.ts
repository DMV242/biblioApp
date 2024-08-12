import { UserService } from "../../../users/application/service/user.service";
import { LoginUsecaseInterface } from "./login.usecase.interface";
import { LoginRequestInterface } from "./request/login.request.interface";

export class LoginUseCase implements LoginUsecaseInterface{
    private readonly userService: UserService;
    private constructor(userService: UserService){
        this.userService = userService;
    }

    public static create(userService:UserService): LoginUseCase{
        return new LoginUseCase(userService);
    }


    execute(loginRequest: LoginRequestInterface): Promise<string> {

        return this.userService.makeLogin( loginRequest.getUsername(), loginRequest.getPassword());
    }
}