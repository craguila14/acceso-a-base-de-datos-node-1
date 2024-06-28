import express from "express";
import router from "./routes/router.js";
const app = express();

const PORT = process.env.PORT || 3000; //variable de entorno

//middlewares
app.use(express.json());

//routes
app.use("/", router)

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})