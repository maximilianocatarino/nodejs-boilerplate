import { Controller, Inject } from "@nestjs/common";
import CrudController from "../../../core/controller/crud-controller";
import { UserDocumentInterface } from "../../../../infrastructure/persistence/user";
import Entity from "../../../../domain/customer/user/user";
import Factory from "../../../../domain/customer/user/user-factory";
import Service from "../../../../domain/customer/user/user-service";

@Controller("user/:id/user")
export default class UserController
    extends CrudController<UserDocumentInterface, Entity, Factory> {

    constructor(@Inject('UserService') service: Service,
                @Inject('UserFactory') entityFactory: Factory) {
        super(service, entityFactory);
    }
}
