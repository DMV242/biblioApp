import { InMemoryUserRepository } from "../../src/modules/users/infrastructure/persistence/repository/inmemory/inmemory.user.repository"
import { PasswordHasherInMemory } from "../../src/modules/users/domain/password/Inmemory/password.hasher.inmemory";
import { UserService } from "../../src/modules/users/application/service/user.service";
import { Student } from "../../src/modules/users/domain/models/student.model";
import { loginUseCase } from "../../src/modules/security/app/usecase/login/login.usecase";
import { LoginRequest } from "../../src/modules/security/app/usecase/login/request/login.request";




describe('Login backend test', ()=>{

    it('Should be faild cause user doesn\'t exist', async ()=>{
        const username = "username";
        const password = "password";
        const userRepository = new InMemoryUserRepository();
        const passwordHasher = new PasswordHasherInMemory();
        const userService = new UserService(userRepository, passwordHasher);
        const request = new LoginRequest(username, password);
        const loginUsecase = new loginUseCase(userService);
       expect( async ()=>{return await loginUsecase.execute(request)}).rejects.toThrow("user:not_found");

    }
    )




    it('Should be failed cause user password is not correct', async ()=>{
        const username = "username";
        const password = "password";
        const userRepository = new InMemoryUserRepository();
        const passwordHasher = new PasswordHasherInMemory();
        const userService = new UserService(userRepository, passwordHasher);
        const student = new Student("id", username, password, "email@gmail.com");
        await userRepository.save(student);
        const request = new LoginRequest(username, "wrongPassword");
        const loginUsecase = new loginUseCase(userService);
        expect( async ()=>{return await loginUsecase.execute(request)}).rejects.toThrow("password:incorrect");
    }
    )
    it('Should be success', async ()=>{
        const username = "username";
        const password = "password";
        const userRepository = new InMemoryUserRepository();
        const passwordHasher = new PasswordHasherInMemory();
        const userService = new UserService(userRepository, passwordHasher);
        const student = new Student("id", username, password, "email@gmail.com");
        await userRepository.save(student);
        const request = new LoginRequest(username, password);
        const loginUsecase = new loginUseCase(userService);
        const result = await loginUsecase.execute(request);
        expect(result).toBe("login:success");
    }
    )

    it('should throw an error when username is missing', () => {
        const username = '';
        const password = 'testPassword';

        expect(() => new LoginRequest(username, password)).toThrow('Username:required');
      });

      it('should throw an error when password is missing', () => {
        const username = 'testUser';
        const password = '';

        expect(() => new LoginRequest(username, password)).toThrow('Password:required');
      });

      it('should throw a BadContentRequestError with correct properties', () => {
        const username = '';
        const password = 'testPassword';

        try {
          new LoginRequest(username, password);
        } catch (error:any) {
          expect(error).toBeInstanceOf(Error);
          expect(error.message).toBe('Username:required');
          expect(error.errors.status).toBe('BAD_LOGIN_REQUEST_ERROR');
          expect(error.errors.code).toBe(400);
        }
      });

})