import mysql from "mysql2/promise";

export default async function handler(req, res)
{
    const db = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT,
            database: process.env.MYSQL_DATABASE,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD
    });
    try{
        const query = "select * from bares";
        const values = [];
        const [data] = await db.execute(query, values);
        db.end();
        res.status(200).json({ bares: data })
    }catch(error)
    {
        res.status(500).json({error: error.message});
    }
}