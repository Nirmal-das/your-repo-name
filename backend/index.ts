import express from "express";
import cors from "cors";
import routes from './routes/route'
import { dbConnection } from "./connections/dbConnection";

const app = express();
const port = '3000';

app.use(express.json({ limit: "50mb" }));
app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(port, async () => {
    console.log(`Express server started at Port - ${port}`);
    await dbConnection();
});