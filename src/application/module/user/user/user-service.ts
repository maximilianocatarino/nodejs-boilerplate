import AbstractService from "../../core/service/abstract-service";
import User from "./-user";
import { UserDocumentInterface } from "../../../infrastructure/persistence/-user";
import { Injectable } from "@nestjs/common";

Injectable();
export default class UserService extends AbstractService<UserDocumentInterface, User> {

}
