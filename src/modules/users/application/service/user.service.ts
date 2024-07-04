import { LoginFailedError } from "../../../../shared/domain/errors/login-failed.error";
import { PasswordHasherInterface } from "../../domain/password/password.hasher.interface";
import { UserRepositoryInterface } from "../../domain/repository/user.repository.interface";
import { UserServiceInterface } from "./user.service.interface";

export class UserService implements UserServiceInterface{

    private readonly userRepository: UserRepositoryInterface;
    private readonly passwordHasher: PasswordHasherInterface;

    constructor(userRepository: UserRepositoryInterface, passwordHasher: PasswordHasherInterface){
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }

    async makeLogin(username: string, plainPassword: string): Promise<string> {
        try{
            const user = await this.userRepository.retreiveByUsername(username);
            if(!user)  throw Error("user:not_found");
            const iscorrectPassword =  await this.passwordHasher.verify(plainPassword, user.password);
            if(!iscorrectPassword) throw Error("password:incorrect");
            return Promise.resolve("login:success");
        }catch(error:any){
            const errorRecord: Record<string, any> = {
                message: error.message,
                status: "LOGIN_FAILED_ERROR",
                code:400,
            }
            throw new LoginFailedError(errorRecord);
        }
    }

}