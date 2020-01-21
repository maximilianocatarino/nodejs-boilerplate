
export interface EntityInterface {
    id?: string;
}

export default class Entity implements EntityInterface {
    protected _id: string;

    private _entityName: string;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get entityName(): string {
        return this._entityName;
    }

    set entityName(value: string) {
        this._entityName = value;
    }
}


