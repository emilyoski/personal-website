import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

app.use(express.static("public"));

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
