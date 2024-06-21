export class DomainError extends Error {
    private errors: Record<string, any>;

    constructor(errors: Record<string, any>) {
        super(errors['message']);
        delete errors['message'];
        this.errors = errors;
    }
}