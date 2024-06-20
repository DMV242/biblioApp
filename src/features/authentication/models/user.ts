import { UserType } from "../enum/userType";


class User  {
    username: string;
    password: string;
    email: string;
    type: UserType;

    private constructor(username: string, password: string, email: string, type: UserType) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.type = type;
    }

    static create(username: string, password: string, email: string, type: UserType=UserType.USER): User {
        return new User(username, password, email, type);
    }

}

export {User}
