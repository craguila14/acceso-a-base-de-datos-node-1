import pool from "../config/db.js"

//siempre que trabajemos con base de datos son peticiones asincronas
export const addProduct = async(name, description, price, stock) => {
    //consultas parametizadas
    const sql = "INSERT INTO products (name, description, price, stock) values ($1, $2, $3, $4) returning *"
    //valores
    const values = [name, description, price, stock];

    try {
        const results = await pool.query(sql, values)
        return results.rows;
    } catch (error) {
        console.log(error.message)
    }
}

