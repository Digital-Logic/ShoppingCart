import { skuGen, idGen } from "../keyGen";
import Entry from "../Entry";

class ProductSpec implements Entry {
    private _id: string;
    private _productId: string;
    private _name: string;
    private _sku: string;
    private _sold: number;
    private _quantity: number;
    private _price: number;

    constructor(productId: string, name: string, price: number, sold: number, quantity: number) {
        this._productId = productId;
        this._name = name;
        this._id = idGen();
        this._sku = skuGen();
        this._price = price;
        this._sold = sold;
        this._quantity = quantity;
    }

    get id() {
        return this._id;
    }
    get productId() {
        return this._productId;
    }
    get name() {
        return this._name;
    }
    get sku() {
        return this._sku;
    }
    get sold() {
        return this._sold;
    }
    get quantity() {
        return this._quantity;
    }
    get price() {
        return this._price;
    }
    toJSON() {
        return {
            id: this.id,
            productId: this.productId,
            name: this.name,
            sku: this.sku,
            price: this.price,
            sold: this.sold,
            quantity: this.quantity
        };
    }
}

export default ProductSpec;