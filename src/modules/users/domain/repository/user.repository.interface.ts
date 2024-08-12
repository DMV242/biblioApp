import { UserModel } from "../models/user.model";


export interface UserRepositoryInterface {

    retreiveByUsername(username: string): Promise<UserModel|undefined>;
    retreiveByEmail(email: string): Promise<UserModel|undefined>;
    save(user: UserModel): void;
}