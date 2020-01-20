import express from "express";
import http from "http";
import { modules } from "./modules";


const app = express();

for (let [name, config] of Object.entries(modules)) {
    console.log(`Configuring: ${name} module...`);
    config(app);
}

const server = http.createServer(app);

server.listen(process.env.PORT || 4000, () => {
    console.log(`Express listening on PORT: ${process.env.PORT || 4000 }`);
});