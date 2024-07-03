import { PasswordHasherInterface } from "./password.hasher.interface";
import bcrypt from "bcrypt";


export class BcryptHasher implements PasswordHasherInterface{

    async hash(plainPassword: string): Promise<string> {
        return bcrypt.hash(plainPassword, 10);
    }

    async verify(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashedPassword);
    }
}