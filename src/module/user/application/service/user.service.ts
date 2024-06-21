import {UserServiceInterface} from "./user.service.interface";
import {UserRepositoryInterface} from "../../domain/repository/user.repository.interface";
import {PasswordHasherInterface} from "../../domain/password/password.hasher.interface";

export class UserService implements UserServiceInterface {
    constructor(
        private readonly userRepository: UserRepositoryInterface,
        private readonly passwordHasher: PasswordHasherInterface
    ) {
    }

    create(email: string, firstname: string, lastname: string, plainPassword: string): Promise<void> {
        // à modifier
        // instancier un user
        // hasher le mot de passe

        // this.userRepository.save(userModel);
        return Promise.resolve(undefined);
    }

    retrieveById(userId: string): Promise<void> {
        // à modifier

        // this.userRepository.retrieveById(userId);
        return Promise.resolve(undefined);
    }

    makeLogin(username: string, plainPassword: string): Promise<void> {
        // recuperation de l'utilisateur
        // verification du mot de passe
        return Promise.resolve(undefined);
    }
}