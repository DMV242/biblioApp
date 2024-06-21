import {LoginRequestInterface} from "./login.request.interface";
import {BadRequestContentError} from "../../../../../../shared/domain/error/bad-request-content.error";

export class LoginRequest implements LoginRequestInterface {
    constructor(
        public username: string,
        public password: string,
    ) {
        try {
            // valider le username
            // valider le password
        } catch (error: any) {
            throw new BadRequestContentError({
                message: 'invalid.request.content',
                details: error,
            })
        }
    }
}