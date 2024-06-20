import { UserDatabase } from "../../src/database/UserDatabase";
import {Authentication} from "../../src/features/authentication/authentication";
import {UserType} from "../../src/features/authentication/enum/userType";
import { LoginUserRequest } from "../../src/features/authentication/request/loginUserRequest";
import { SignUpRequest } from "../../src/features/authentication/request/signUpRequest";


const authentication = new Authentication();
describe('Test authentification flow', () => {
   it('should create a new user successfully', async () => {
        const request = SignUpRequest.get('testUser', 'testPassword', 'test@example.com', UserType.USER)
       const message = await authentication.signUp(request);
       expect(message).toBe('Account:created_successfully');
   });

   it('should create a new admin user successfully', async () => {
    const request = SignUpRequest.get('adminUser', 'testPassword', 'test@example.com', UserType.ADMIN)
   const message = await authentication.signUp(request);
   expect(message).toBe('Account:created_successfully');
   const adminUser = (await UserDatabase.getInstance().connection()).filter((user)=>{
      return user.type === UserType.ADMIN
   });
   expect(adminUser.length).toBe(1);
   expect(adminUser[0].type).toBe(UserType.ADMIN);
  });


   it('should throw an error if username, password, or email is missing', async () => {
        const requestInvalid = SignUpRequest.get('', 'testPassword', 'test@example.com', UserType.USER)
       await expect(authentication.signUp(requestInvalid)).rejects.toThrow('Username:error_required');
         const requestInvalid2 = SignUpRequest.get('testUser', '', 'test@example.com', UserType.USER)
       await expect(authentication.signUp(requestInvalid2)).rejects.toThrow('Password:error_required');
        const requestInvalid3 = SignUpRequest.get('testUser', 'testPassword', '', UserType.USER)
       await expect(authentication.signUp(requestInvalid3)).rejects.toThrow('Email:error_required');
   });


   it('should throw an error if username already taken', async () => {
         const request = SignUpRequest.get('testUser', 'OthertestPassword',"test@test.io")
       await expect(authentication.signUp(request)).rejects.toThrow('Username:already_taken');
   });
   it('should throw an error if email is not correctly formatted', async () => {
    const request = SignUpRequest.get('testUser', 'OthertestPassword',"testtest.io")
       await expect(authentication.signUp(request)).rejects.toThrow('Email:not_correctly_formatted');
   });

   it('should log in a user successfully', async () => {
    const request = LoginUserRequest.get('testUser', 'testPassword')
       const message = await authentication.login(request);
         expect(message).toBe('Account:welcomed_to_your_account');
   });
});

