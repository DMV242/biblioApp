import { UserType } from "../../enum/userType";
import { User } from "../../models/user";

interface CreateUserRequestInterface {
    username: string;
    password: string;
    email: string;
    type?: UserType

}

export { CreateUserRequestInterface };