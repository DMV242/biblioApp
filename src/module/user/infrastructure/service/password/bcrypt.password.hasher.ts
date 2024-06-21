import {PasswordHasherInterface} from "../../../domain/password/password.hasher.interface";
import bcrypt from 'bcrypt';

export class BcryptPasswordHasher implements PasswordHasherInterface {
    private saltRounds: number = 10;
    
    async hash(plainPassword: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.saltRounds);
        return bcrypt.hash(plainPassword, salt);
    }

    async verify(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
}