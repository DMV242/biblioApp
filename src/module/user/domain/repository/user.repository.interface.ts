export interface UserRepositoryInterface {
    nextIdentifier(): Promise<void>;
    retrieveById(id: string): Promise<void>; // à modifier
    retrieveByEmail(email: string): Promise<void>; // à modifier
    retrieveByUsername(username: string): Promise<void>; // à modifier
}