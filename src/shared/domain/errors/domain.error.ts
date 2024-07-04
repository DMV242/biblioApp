export class DomainError extends Error {

    errors: Record<string, any>;

    constructor(errors: Record<string, any>) {
        super(errors["message"]);
        delete errors["message"];
        this.errors = errors;

    }
}