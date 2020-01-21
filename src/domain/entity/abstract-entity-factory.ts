import Entity from "./entity";

export default abstract class AbstractEntityFactory<E extends Entity> {
    protected entityClass: new() => E;

    constructor (entityClass: new() => E) {
        this.entityClass = entityClass;
    }

    createFromObject(data: object): E {
        if (data) {
            const entity = new this.entityClass();
            Object.assign(entity, data);
            return entity;
        }
        return null;
    }
}