import express from "express";
import routes from "./src/routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("server online in port 3333"));
