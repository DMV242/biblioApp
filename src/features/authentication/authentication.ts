import { User } from "./models/user";
import validator from "validator";
import { LoginUserRequest } from "./request/loginUserDto";
import { SignUpRequest } from "./request/signUpDto";
import { UserRepository } from "./repository/userRepository";
import { UserDatabase } from "../../database/UserDatabase";
import { Bcrypt } from "../cypher/brypct";


/**
 * This function manages user login in the system.
 *
 * @param username - The username of the user trying to log in.
 * @param password - The password of the user trying to log in.
 * @returns A promise that resolves to a success message if the login is successful.
 * @throws An error if the username or password is not provided, or if the credentials are invalid.
 */
async function login(request:LoginUserRequest): Promise<string> {
    const {username,password} = request;
    try {
        if (!username || password) {
            throw new Error("Username and password are required parameters.");
        }
       const user = await new UserRepository(UserDatabase.getInstance()).getUser(username);
        if (!user) throw new Error("Invalid credentials");
        const isCorrectPassword = await Bcrypt.getInstance().verifyPassword(password, user.password);
        if (!isCorrectPassword) throw new Error("Invalid credentials");
        return "Account:welcomed_to_your_account";
    } catch (error) {
        throw error;
    }
}

/**
 * This function manages user sign-up in the system.
 *
 * @param username - The username for the new user.
 * @param password - The password for the new user.
 * @param email - The email for the new user.
 * @param type - The type of the user (default is UserType.USER).
 * @returns A promise that resolves to a success message if the account is created successfully.
 * @throws An error if the username, password, or email is not provided.
 */
async function signUp(request:SignUpRequest): Promise<string> {
    const {username,password,email,type} = request;
    try {
        if (!username || !password || !email) {
            throw new Error("Username, password, and email are required parameters.");
        }
        if (!validator.isEmail(email)) throw new Error("Email is not correctly formatted");
        const user = await new UserRepository(UserDatabase.getInstance()).getUser(username);
        if (user) throw new Error("Username already taken");
        const passwordHash = await Bcrypt.getInstance().hashPassword(password);
        const newUser = User.create(username, passwordHash, email, type);
        await new UserRepository(UserDatabase.getInstance()).createUser(newUser);
        return "Account:created_successfully";
    } catch (error) {
        throw error;
    }
}

export {login,signUp};