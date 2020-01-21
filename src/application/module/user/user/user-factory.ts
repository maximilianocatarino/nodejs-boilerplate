import AbstractEntityFactory from "../../core/entity/abstract-entity-factory";
import User, {UserInterface} from "./-user";
import { Injectable } from "@nestjs/common";


Injectable();
export default class UserFactory extends AbstractEntityFactory<User> {

}
