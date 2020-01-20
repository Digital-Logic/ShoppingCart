import Collection from "./Collection";
import { User, userData } from "./users"
import { Product, productData } from "./products";

const userCollection = new Collection<User>();

userData.forEach(user => {
    userCollection.add(new User(user.name));
});

const productCollection = new Collection<Product>();

productData.forEach(product => {
    productCollection.add(
        new Product(
            product.name,
            product.description,
            product.variations,
            product.features,
            product.tags)
        );
});

export {
    userCollection,
    productCollection
};