import {UserRepositoryInterface} from "../../../../domain/repository/user.repository.interface";

export class InMemoryUserRepository implements UserRepositoryInterface {
    retrieveByEmail(email: string): Promise<void> {
        // à modifier
        return Promise.resolve(undefined);
    }

    retrieveById(id: string): Promise<void> {
        // à modifier
        return Promise.resolve(undefined);
    }

    nextIdentifier(): Promise<void> {
        return Promise.resolve(undefined);
    }

    retrieveByUsername(username: string): Promise<void> {
        return Promise.resolve(undefined);
    }
}