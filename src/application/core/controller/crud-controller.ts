import { Get, Post, Put, Delete, Param, Body, Inject } from "@nestjs/common";
import Entity from "../../../domain/core/entity/entity";
import AbstractService from "../../../domain/core/service/abstract-service";
import {Document} from "mongoose";
import AbstractEntityFactory from "../../../domain/core/entity/abstract-entity-factory";

export default abstract class CrudController<D extends Document, E extends Entity, F extends AbstractEntityFactory<E>> {
    constructor(protected readonly service: AbstractService<D, E>, protected entityFactory: F) {

    }

    @Get()
    async findAll(): Promise<Array<E>> {
        return this.service.getAll({});
    }

    @Get(":id")
    async findById(@Param("id") id: string): Promise<E> {
        return this.service.getById(id);
    }

    @Post()
    async add(@Body() data: Partial<E>): Promise<E> {
        const entity: E = this.entityFactory.createFromObject(data);
        return this.service.create(entity);
    }

    @Put(":id")
    async save(@Param("id") id: string, @Body() data: Partial<E>): Promise<E> {
        const entity: E = this.entityFactory.createFromObject(data);
        return this.service.update(id, entity);
    }

    @Delete(":id")
    async delete(@Param("id") id: string): Promise<E> {
        return this.service.delete(id);
    }
}