import { userType } from "../enum/userType";
import { UserModel } from "./user.model";

export class Student extends UserModel {

    private constructor(id: string, username: string, password: string, email: string, createdAt: number = Date.now(), type: userType = userType.STUDENT) {
        super(id, username, password, email, createdAt, type);
    }

    public static create(id: string, username: string, password: string, email: string, createdAt: number = Date.now(), type: userType = userType.STUDENT) : UserModel{
        return  new Student(id, username, password, email, createdAt, type);
    }
}