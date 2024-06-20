import { UserDatabase } from "../../src/database/UserDatabase";
import {login, signUp} from "../../src/features/authentication/authentication";
import {UserType} from "../../src/features/authentication/enum/userType";
import { SignUpRequest } from "../../src/features/authentication/request/signUpDto";


describe('Test authentification flow', () => {
   it('should create a new user successfully', async () => {
        const request = SignUpRequest.get('testUser', 'testPassword', 'test@example.com', UserType.USER)
       const message = await signUp(request);
       expect(message).toBe('Account:created_successfully');
   });

   it('should create a new admin user successfully', async () => {
    const request = SignUpRequest.get('adminUser', 'testPassword', 'test@example.com', UserType.ADMIN)
   const message = await signUp(request);
   expect(message).toBe('Account:created_successfully');
   const adminUser = (await UserDatabase.getInstance().connection()).filter((user)=>{
      return user.type === UserType.ADMIN
   });
   expect(adminUser.length).toBe(1);
   expect(adminUser[0].type).toBe(UserType.ADMIN);
  });


   it('should throw an error if username, password, or email is missing', async () => {
        const requestInvalid = SignUpRequest.get('', 'testPassword', 'test@example.com', UserType.USER)
       await expect(signUp(requestInvalid)).rejects.toThrow('Username, password, and email are required parameters.');
         const requestInvalid2 = SignUpRequest.get('testUser', '', 'test@example.com', UserType.USER)
       await expect(signUp(requestInvalid2)).rejects.toThrow('Username, password, and email are required parameters.');
        const requestInvalid3 = SignUpRequest.get('testUser', 'testPassword', '', UserType.USER)
       await expect(signUp(requestInvalid3)).rejects.toThrow('Username, password, and email are required parameters.');
   });


//    it('should throw an error if username already taken', async () => {
//        await expect(signUp('testUser', 'OthertestPassword',"test@test.io")).rejects.toThrow('Username already taken');
//    });
//    it('should throw an error if email is not correctly formatted', async () => {
//        await expect(signUp('testUser', 'OthertestPassword',"testtest.io")).rejects.toThrow('Email is not correctly formatted');
//    });

//    it('should log in a user successfully', async () => {
//        const message = await login('testUser', 'testPassword');
//          expect(message).toBe('Welcome to your account testUser');
//    });
});

