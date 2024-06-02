import { UserType } from "../models/user";
import { User } from "../models/user";
import { verifyPassword } from "../utils/auth";
import { hashPassword } from "../utils/auth";
import validator from "validator";
const users: User[]  = [];
/**
 * This function manages user login in the system.
 *
 * @param username - The username of the user trying to log in.
 * @param password - The password of the user trying to log in.
 * @returns A promise that resolves to a success message if the login is successful.
 * @throws An error if the username or password is not provided, or if the credentials are invalid.
 */
async function login(username: string, password: string): Promise<string> {
    try {
        if (!username || !password) {
            throw new Error("Username and password are required parameters.");
        }
        const user = users.find((user) => {
            return user.username === username;
        });
        if (!user) throw new Error("Invalid credentials");
        const isCorrectPassword = await verifyPassword(password, user.password);

        if (!isCorrectPassword) throw new Error("Invalid credentials");
        return "Welcome to your account " + user.username;
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
async function signUp(username: string, password: string, email: string, type: UserType = UserType.USER): Promise<string> {
    try {

        if (!username || !password || !email) {
            throw new Error("Username, password, and email are required parameters.");
        }
        if (!validator.isEmail(email)) throw new Error("Email is not correctly formatted");
        const user = users.find((user) => {
            return user.username === username;
        });
        if (user) throw new Error("Username already taken");
        const passwordHash = await hashPassword(password);
        const newUser = new User(username, passwordHash, email, type);
        users.push(newUser);
        return "Account created successfully for " + newUser.username;
    } catch (error) {
        throw error;
    }
}




export {login,signUp,users};