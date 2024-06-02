import { UserType,UserInterface } from "../Interfaces/user";

class User implements UserInterface {
    username: string;
    password: string;
    email: string;
    type: UserType;

    constructor(username: string, password: string, email: string, type: UserType) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.type = type;
    }
}

export {User}
