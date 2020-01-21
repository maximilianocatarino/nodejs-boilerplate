import { Document } from "mongoose";
import AbstractRepository from "../repository/abstract-repository";
import Entity from "../entity/entity";

export interface ServiceInterface<E extends Entity> {
    getById(id: string): Promise<E>;

    getAll(params: object): Promise<Array<E>>;

    create(entity: E): Promise<E>;

    update(id: string, entity: E): Promise<E>;

    delete(id: string): Promise<E>;
}

export default abstract class AbstractService<D extends Document, E extends Entity> implements ServiceInterface<E> {
    protected repository: AbstractRepository<D>;

    constructor (repository: AbstractRepository<D>, protected entityClass: new() => E) {
        this.repository = repository;
    }

    protected async throwEntityNotFoundException(id: string) {
        const collectionName = await this.repository.getCollectionName();
        throw new Error(`Entity ${id} not found in collection ${collectionName}`);
    }

    protected documentToEntity(document: Document): E {
        const entity = new this.entityClass();
        return Object.assign(entity, document);
    }
    
    async getById(id: string): Promise<E> {
        const document = await this.repository.getById(id);
        return this.documentToEntity(document);
    }

    async getAll(params: object): Promise<Array<E>> {
        const collection = await this.repository.get(params);
        return collection.map(document => {
           return this.documentToEntity(document);
        });
    }

    async create(entity: Entity): Promise<E> {
        const document = await this.repository.add(entity);
        return this.documentToEntity(document);
    }

    async delete(id: string): Promise<E> {
        const entity = await this.getById(id);
        if (entity) {
            const document = await this.repository.delete(entity);
            return this.documentToEntity(document);
        }
        this.throwEntityNotFoundException(id);
    }

    async update(id: string, entity: Entity): Promise<E> {
        const foundedEntity = await this.getById(id);
        if (foundedEntity) {
            Object.assign(foundedEntity, entity);
            const document = await this.repository.save(foundedEntity);
            return this.documentToEntity(document);
        }
        this.throwEntityNotFoundException(entity.id);
    }
}