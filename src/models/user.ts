enum UserType {
    USER = 'user',
    ADMIN = 'admin',
}

class User  {
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

export {User,UserType}
