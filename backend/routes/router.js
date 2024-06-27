import express from "express";
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello world coni!")
});

router.get("/test", (req, res) => {
    res.send("Hello world desde test!")
});

router.post("/usuarios", (req, res) => {
    res.send("Hello world desde usuarios!")
});

export default router;