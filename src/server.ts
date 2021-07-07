import dontenv from "dotenv";
import express from "express";
import mustache from "mustache-express";
import path from "path";

import pageRoutes from "./routes";

dontenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.resolve(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.resolve(__dirname, "..", "public")));

server.use(pageRoutes);

server.use((request, response) => {
  response.send("Página não encontrada");
});

server.listen(process.env.PORT, () => {
  console.info(`Server is running on PORT ${process.env.PORT}`);
});
