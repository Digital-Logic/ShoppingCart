import Query from "./Query";
import Entry from "./Entry";

class Collection<T extends Entry> {
    private data:Map<string, T> = new Map();
    //private sorters:Map<string, Function> = new Map();

    add(item: T) {
        this.data.set(item.id, item);
    }

    findById(id: string) {
        return new Query(
            this.data.has(id) ? [this.data.get(id)] as Array<T> : [] );
    }

    // find all items in the collection that match the required criteria
    // find({ name: "Joe" })
    find(fields: { [key: string]: string } = {}):Query<T> {
        let resultSet = [...this.data.values()];
        Object.entries(fields)
            .forEach(([ field, value]) => {
                resultSet = resultSet.filter( item =>
                    item[field] === value
                )
            });
        return new Query(resultSet);
    }

    [Symbol.iterator]() {
        return this.data.values();
    }
    entries() {
        return this.data.entries();
    }
    keys() {
        return this.data.keys();
    }
    values() {
        return this.data.values();
    }


    toJSON() {
        return [];
    }
}

export default Collection;

export {
    Entry
};