import { UserModel } from "../../../../domain/models/user.model";
import { UserRepositoryInterface } from "../../../../domain/repository/user.repository.interface";
import {UserService} from "../../../../application/service/user.service";

export class InMemoryUserRepository implements UserRepositoryInterface {

    private users: UserModel[];

    private constructor() {
        this.users = [];
    }

    static create(): InMemoryUserRepository {
        return new InMemoryUserRepository();
    }

    async retreiveByUsername(username:string) {
        return this.users.find(user => user.username === username);
    }
    async retreiveByEmail(email:string) {
        return this.users.find(user => user.email === email);
    }
    async save(user: UserModel) {
        this.users.push(user);

    }


}