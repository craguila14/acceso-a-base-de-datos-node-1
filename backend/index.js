import express from "express";
import router from "./routes/router.js";
const app = express();

const PORT = process.env.PORT || 3000; //variable de entorno

//routes
app.use("/", router)

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})