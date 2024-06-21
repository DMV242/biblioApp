export class UserNameRequiredError extends Error {
    constructor(){
        super("Username:error_required");
    }
}

export class PasswordRequiredError extends Error{
    constructor(){
        super("Password:error_required");
    }
}

export class EmailRequiredError extends Error{
    constructor(){
        super("Email:error_required");
    }
}

export class InvalidCredentialsError extends Error{
    constructor(){
        super("credentials:Invalid_credentials");
    }
}

export class UserAlreadyExistsError extends Error{
    constructor(){
        super("Username:already_taken");
    }
}