import { Module } from '@nestjs/common';
import UserController from "./user/-user-controller";
import UserService from "../../../domain//user/-user-service";
import UserFactory from "../../../domain//user/-user-factory";
import UserModel from "../../../infrastructure/persistence/-user";
import User from "../../../domain//user/-user";
import UserRepository from "../../../domain//user/-user-repository";

const UserService = {
    provide: "UserService",
    useFactory: () => {
        const repository = new UserRepository(UserModel);
        return new UserService(repository, User);
    }
};
const UserFactory = {
    provide: "UserFactory",
    useFactory: () => {
        return new UserFactory(User);
    }
};

@Module({
    imports: [],
    controllers: [
        UserController
    ],
    providers: [
        UserService,
        UserFactory
    ],
})

export class Module { }
