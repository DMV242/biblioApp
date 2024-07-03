import { userType } from "../enum/userType";
import { UserModel } from "./user.model";

export class Student extends UserModel{

    constructor(id: string, username: string, password: string, email: string, createdAt: number = Date.now(),type: userType = userType.STUDENT) {
        super(id, username, password, email, createdAt, type);
    }
}