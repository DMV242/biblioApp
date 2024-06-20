import { UserType } from "../../enum/userType";

interface SignUpRequestInterface {
    username: string;
    password: string;
    email: string;
    type?: UserType ;
}

export { SignUpRequestInterface };