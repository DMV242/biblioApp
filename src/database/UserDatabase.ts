import { User } from "../features/authentication/models/user";
import {  DatabaseInterface } from "./interfaces/database";

class UserDatabase implements DatabaseInterface {
    private data: any[] = [];

    create(data: any): any {
        this.data.push(data);
        return data;
    }

    connection(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(this.data);
        });
    }






}

export { UserDatabase }