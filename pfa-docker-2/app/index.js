import express, { Router } from 'express'
import mysql from 'mysql'

// console.log(`Look at my envs before connecting: MYSQL_LINK=${process.env.MYSQL_LINK}, MYSQL_USER=${process.env.MYSQL_USER}, MYSQL_PASSWORD=${process.env.MYSQL_PASSWORD}, MYSQL_DATABASE=${process.env.MYSQL_DATABASE}`)
const connection = mysql.createConnection({
    host: process.env.MYSQL_LINK,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

const app = express();
const routes = new Router()

let getModules = () => new Promise((resolve, reject) => {
    connection.query('SELECT * FROM ModulosFullCycle;', (err, rows) => {
        if (rows === undefined) {
            reject(new Error("Error rows is undefined"));
        } else {
            resolve(rows);
        }
    })
})

routes.get('/modules', async (request, response) => {

    try {
        let queryResult = await getModules()
            .then(rows => {
                return rows.map(row => row.ModuloNome)
            })
            .catch(err => {
                console.log("Promise rejection error: " + err);
            })
        return response.status(200).json(queryResult)
    } catch (err) {
        return response.status(500).json({ error: err })
    }
})

app.use(routes);
app.listen(3000);
