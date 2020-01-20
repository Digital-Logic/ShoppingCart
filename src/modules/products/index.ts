import { Router, Application } from "express";
import { productCollection } from "@/data";

function config(app: Application) {
    const router = Router();

    router.route("/")
        .get((req, res, next) => {
            const resultSet =
                productCollection.find()
                    .select(["id", "name", "description", "price", "sold", "variations"]);

            console.log(JSON.stringify(resultSet));
            res.json(resultSet);

        });

    app.use("/api/products",router);
}

export default config;
