import { PasswordHasherInterface } from "../password.hasher.interface";

export class PasswordHasherInMemory implements PasswordHasherInterface{

    private constructor() {
    }

    public static create():PasswordHasherInMemory{
        return new PasswordHasherInMemory();
    }


    async hash(password:string) {
        return password;
    }
    async verify(plainPassword:string, hashedPassword:string) {
        return plainPassword === hashedPassword;
    }
}