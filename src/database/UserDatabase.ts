import { User } from "../features/authentication/models/user";
import { DatabaseInterface } from "./interfaces/database";

class UserDatabase implements DatabaseInterface {
    private static instance: UserDatabase | null = null;
    private data: any[] = [];

    private constructor() { }

    public static getInstance(): UserDatabase {
        if (this.instance === null) {
            this.instance = new UserDatabase();
        }
        return this.instance;
    }

    create(data: any): any {
        this.data.push(data);
        return data;
    }

    connection(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            resolve(this.data);
        });
    }
}

export { UserDatabase };
