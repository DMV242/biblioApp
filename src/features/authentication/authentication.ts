import { User } from "./models/user";
import validator from "validator";
import { LoginUserRequest } from "./request/loginUserDto";
import { SignUpRequest } from "./request/signUpDto";
import { UserRepository } from "./repository/userRepository";
import { UserDatabase } from "../../database/UserDatabase";
import { Bcrypt } from "../cypher/brypct";
import { EmailRequiredError, InvalidCredentialsError, PasswordRequiredError, UserNameRequiredError } from "./errors/error";

class Authentication {
    private userRepository: UserRepository;
    private bcrypt: Bcrypt;

    constructor() {
        this.userRepository = new UserRepository(UserDatabase.getInstance());
        this.bcrypt = Bcrypt.getInstance();
    }

    /**
     * This method manages user login in the system.
     *
     * @param request - The login request containing username and password.
     * @returns A promise that resolves to a success message if the login is successful.
     * @throws An error if the username or password is not provided, or if the credentials are invalid.
     */
    async login(request: LoginUserRequest): Promise<string> {
        const { username, password } = request;
        try {
            if (!username) throw new UserNameRequiredError();
            if(!password) throw new PasswordRequiredError();
            const user = await this.userRepository.getUser(username);
            if (!user) throw new Error("Invalid credentials");
            const isCorrectPassword = await this.bcrypt.verifyPassword(password, user.password);
            if (!isCorrectPassword) throw new InvalidCredentialsError();
            return "Account:welcomed_to_your_account";
        } catch (error) {
            throw error;
        }
    }

    /**
     * This method manages user sign-up in the system.
     *
     * @param request - The sign-up request containing username, password, email, and user type.
     * @returns A promise that resolves to a success message if the account is created successfully.
     * @throws An error if the username, password, or email is not provided.
     */
    async signUp(request: SignUpRequest): Promise<string> {
        const { username, password, email, type } = request;
        try {
            if (!username) throw new UserNameRequiredError();
            if(!password) throw new PasswordRequiredError();
            if(!email) throw new EmailRequiredError()
            if (!validator.isEmail(email)) throw new Error("Email:not_correctly_formatted");
            const user = await this.userRepository.getUser(username);
            if (user) throw new Error("Username:already_taken");
            const passwordHash = await this.bcrypt.hashPassword(password);
            const newUser = User.create(username, passwordHash, email, type);
            await this.userRepository.createUser(newUser);
            return "Account:created_successfully";
        } catch (error) {
            throw error;
        }
    }
}

export { Authentication };
