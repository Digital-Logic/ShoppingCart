import Entry from "./Entry";

class Query<T extends Entry> {

    private _resultSet:Array<T>;
    private _selectedFields: Array<string>;

    constructor(resultSet: Array<T>) {
        this._resultSet = resultSet;
        this._selectedFields = [];
    }

    // Define which fields to select
    select(fields: Array<string>) {
        this._selectedFields = fields;
        return this; // make select chainable
    }

    // TODO implement sort
    sort() {

    }
    // TODO implement limit return set
    limit() {

    }

    get resultSet() {
        return this._resultSet;
    }
    get selectedFields() {
        return this._selectedFields;
    }

    toString() {
        console.log("toString");
        return JSON.stringify(this);
    }

    valueOf() {
        console.log("ValueOf");
        return JSON.stringify(this);
    }

    // convert the data to json
    toJSON() {
        if (this.selectedFields.length > 0) {
            return this.resultSet.map(item => {
                return this.selectedFields.reduce(
                    (acc:{[key: string]: any}, curField) => {
                        // execute toJSON method on object that provide it.
                        acc[curField] = item[curField];
                        return acc;
                    },{})
            })
        }
        // if (this.selectedFields.length > 0) {

        // }
        return [...this.resultSet];
    }
}

export default Query;