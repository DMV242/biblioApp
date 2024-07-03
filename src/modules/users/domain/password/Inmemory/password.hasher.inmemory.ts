import { PasswordHasherInterface } from "../password.hasher.interface";

export class PasswordHasherInMemory implements PasswordHasherInterface{

    async hash(password:string) {
        return password;
    }
    async verify(plainPassword:string, hashedPassword:string) {
        return plainPassword === hashedPassword;
    }
}