import { Router, Application} from "express";
import { userCollection } from "@/data";

function config(app: Application) {
    const router = Router();

    router.route("/")
        .get((req, res, next) => {
            return res.json(userCollection.find({}));
        });

    app.use("/api/users", router);
}

export default config;