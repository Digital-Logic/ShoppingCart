

class JSONMap<T> {
    private _data: Map<string,T> = new Map();

    // getter
    get data() {
        return this._data;
    }

    // Basic Map Methods
    set(key:string, data: T) {
        this.data.set(key, data);
    }
    has(key:string) {
        return this.data.has(key);
    }
    get(key:string) {
        return this.data.get(key);
    }

    // Iterators
    entries() {
        return this.data.entries();
    }
    keys() {
        return this.data.keys();
    }
    values() {
        return this.data.values();
    }


    // default response for toJSON
    toJSON() {
        return Array.from(this.data.keys());
    }
}

export default JSONMap;