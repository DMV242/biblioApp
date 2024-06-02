import {login, signUp,users} from "../src/services/auth";
import {UserType}  from "../src/Interfaces/user";


describe('Test authentification flow', () => {
   it('should create a new user successfully', async () => {
       const message = await signUp('testUser', 'testPassword', 'test@example.com', UserType.USER);
       expect(message).toBe('Account created successfully for testUser');

      expect(users.length).toBe(1);
   });

   it('should throw an error if username, password, or email is missing', async () => {

       await expect(signUp('', 'testPassword', 'test@example.com', UserType.USER)).rejects.toThrow('Username, password, and email are required parameters.');
       await expect(signUp('testUser', '', 'test@example.com', UserType.USER)).rejects.toThrow('Username, password, and email are required parameters.');
       await expect(signUp('testUser', 'testPassword', '', UserType.USER)).rejects.toThrow('Username, password, and email are required parameters.');
   });

   it('should throw an error if username already taken', async () => {
       await expect(signUp('testUser', 'OthertestPassword',"test.test.io")).rejects.toThrow('Username already taken');

   });

   it('should log in a user successfully', async () => {
       const message = await login('testUser', 'testPassword');
         expect(message).toBe('Welcome to your account testUser');
   });
});

