import { InMemoryUserRepository } from "../../src/modules/users/infrastructure/persistence/repository/inmemory/inmemory.user.repository"
import { PasswordHasherInMemory } from "../../src/modules/users/domain/password/Inmemory/password.hasher.inmemory";
import { UserService } from "../../src/modules/users/application/service/user.service";
import { Student } from "../../src/modules/users/domain/models/student.model";
import { loginUseCase } from "../../src/modules/security/app/usecase/login/login.usecase";
import { LoginRequest } from "../../src/modules/security/app/usecase/login/request/login.request";



describe('Login backend test', ()=>{

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
})