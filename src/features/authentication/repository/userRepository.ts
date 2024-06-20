import { UserDatabase } from "../../../database/UserDatabase";
import { User } from "../models/user";

class UserRepository {

    private database ;

    constructor( database: UserDatabase) {
        this.database = database;
    }

    createUser(data: any): any {
        return this.database.create(data);
    }

    async getUser(username: string): Promise<User> {
        const databaseConnection = await this.database.connection();
        return databaseConnection.find((user: User) => user.username === username);
    }

}

export { UserRepository }