import { BadContentRequestError } from "../../../../../shared/domain/errors/bad-content-request.error";
import { LoginRequestInterface } from "./login.request.interface";

export class LoginRequest implements LoginRequestInterface{
    username: string;
    password: string;

    private constructor(username: string, password: string){
      try{
        if(!username) throw new Error("Username:required");
        if(!password) throw new Error("Password:required");
        this.username = username;
        this.password = password;
      }catch(error:any){
        const errorRecord: Record<string, any> = {
            message: error.message,
            status: "BAD_LOGIN_REQUEST_ERROR",
            code:400,
        }
        throw new BadContentRequestError(errorRecord);
      };

    }

    public static create(username: string, password: string): LoginRequest{
        return new LoginRequest(username, password);
    }

    getPassword(): string {
        return this.password;
    }
    getUsername(): string {
        return this.username;
    }


}