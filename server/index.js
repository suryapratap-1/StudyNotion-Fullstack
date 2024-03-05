import dotenv from "dotenv";
import { connectDatabase } from "./database/database.js";
import { app } from "./app.js";

dotenv.config();

connectDatabase()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️  Server is running at http://localhost:${process.env.PORT}`)
    });
})
.catch((error) => {
    console.log("MongoDB connection failed. ", error);
})