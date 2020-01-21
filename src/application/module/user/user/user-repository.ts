import { Model } from "mongoose";
import AbstractRepository from "../../core/repository/abstract-repository";
import { Injectable } from "@nestjs/common";
import {UserDocumentInterface} from "../../../infrastructure/persistence/user";

Injectable();
export default class UserRepository extends AbstractRepository<UserDocumentInterface> {
    constructor(dao: Model<UserDocumentInterface>) {
        super(dao);
    }
}
