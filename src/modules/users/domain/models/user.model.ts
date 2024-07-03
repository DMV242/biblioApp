import { userType } from "../enum/userType";

export abstract class UserModel {
    id: string;
    username: string;
    password: string;
    email: string;
    createdAt: number;
    type: userType;

    constructor(id: string, username: string, password: string, email: string, createdAt: number = Date.now(),type: userType ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.createdAt = createdAt;
        this.type = type;
    }
}