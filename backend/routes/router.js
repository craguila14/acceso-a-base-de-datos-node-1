import express from "express";
//funciones nombradas van entre llaves
import { addProduct } from "../models/queries.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello world coni!")
});

router.get("/test", (req, res) => {
    res.send("Hello world desde test!")
});

router.post("/usuarios", (req, res) => {
    res.send("Hello world desde usuarios!")
});

router.post("/product", async (req, res) => {
    const { name, description, price, stock } = req.body
    await addProduct(name, description, price, stock)
    res.send("Product added")
});

export default router;