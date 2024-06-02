enum UserType {
    USER = 'user',
    ADMIN = 'admin',
}

interface UserInterface {
    username: string;
    password: string;
    email:string;
    type: UserType;
}


export {UserType,UserInterface}