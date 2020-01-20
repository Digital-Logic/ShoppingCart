import { idGen, skuGen } from '../keyGen';
import Entry from "../Entry";

class User implements Entry {
    private _name: string;
    private _id: string;

    constructor(name: string) {
        this._name = name;
        this._id = idGen();
    }

    get name():string {
        return this._name;
    }
    get id(): string {
        return this._id;
    }
    // customized toJSON behavior
    toJSON() {
        return {
            name: this.name,
            id: this.id
        };
    }
}

export default User;