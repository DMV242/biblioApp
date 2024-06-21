import { UserType } from "../../../../module/user/domain/enum/userType";

interface SignUpRequestInterface {
    username: string;
    password: string;
    email: string;
    type?: UserType ;
}

export { SignUpRequestInterface };