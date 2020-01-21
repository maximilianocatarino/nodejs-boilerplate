import { Document, Model } from "mongoose";
import Entity from "../entity/entity";

export default abstract class AbstractRepository<T extends Document> {
    protected constructor(protected readonly model: Model<T>) { }

    async getCollectionName(): Promise<string> {
        return this.model.collection.collectionName;
    }

    async get(params: object, options: object = {}): Promise<Array<T>> {
        return this.model.find(params, options);
    }

    async getById(id: string): Promise<T> {
        const document = await this.model.findById(id);
        if (document) {
            return document;
        }
    }

    async add(data: Entity): Promise<T> {
        const document: T = await this.model.create(data);
        await document.save();
        return document;
    }

    async save(data: Entity): Promise<T> {
        if (data.id) {
            const document: T = await this.model.findById(data.id);
            Object.assign(document, data);
            await document.save();
            return document;
        }
    }

    async remove(data: Entity): Promise<T> {
        if (data.id) {
            const document: T = await this.model.findById(data.id);
            await document.remove();
            return document;
        }
    }

    async delete(data: Entity): Promise<T> {
        if (data.id) {
            const document: T = await this.model.findById(data.id);
            document.set("deletedAt", new Date);
            await document.save();
            return document;
        }
    }
}