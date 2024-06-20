import bcrypt from 'bcrypt';
import { cypherInterface } from './interfaces/cypher';

class Bcrypt implements cypherInterface {
    private static instance: Bcrypt | null = null;
    private saltRounds: number = 10;

    private constructor() { }

    public static getInstance(): Bcrypt {
        if (this.instance === null) {
            this.instance = new Bcrypt();
        }
        return this.instance;
    }

    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }

    async verifyPassword(password: string, hash: string): Promise<boolean> {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    }
}

export { Bcrypt };
