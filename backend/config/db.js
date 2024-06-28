import pg from "pg";
const { Pool } = pg;

const config = {
    user : "postgres",
    password: "conya1405",
    host: "localhost",
    port: 5432,
    database: "ejercicio_db_pg",
    allowExitOnIdle: true
}

const pool = new Pool(config);

export default pool

try {
    await pool.query("SELECT NOW()")
    console.log("database is connected")
} catch (error) {
    console.log(error.message)
}