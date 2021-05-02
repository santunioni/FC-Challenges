import express, { Router } from 'express'
import mysql from 'mysql'

let randomNames = ["Cassidy Crowder", "Warren Wagstaff", "Terrance Tucker", "Malisa Miguel", "Coretta Creed", "Rosann Rodriguez", "Shameka Swearengin", "Rogelio Rudd", "Johanne Jagger", "Otto Owensby", "Katheleen Kiker", "Nereida Nerney", "Noel Nilles", "Rasheeda Reidhead", "Melaine Moring", "Yasmin Yancey", "Lannie Lacy", "Ai Abbot", "Kristian Kinch", "Jade Jacobus", "Heather Harber", "Lavina Linden", "Carol Curtsinger", "Howard Hooser", "Cassie Child", "Romaine Regalado", "Caron Culpepper", "Fredda Fedele", "Suk Stull", "Daryl Dement", "Ammie Alvarado", "Santa Stepney", "Marissa Musselwhite", "Glenn Grim", "Tracie Trimm", "Carissa Casper", "Julene Jarrard", "Evelin Eppinger", "Aurea Andresen", "Cherry Cienfuegos", "Marica Mcguffin", "Moses Mccready", "Wenona Ware", "Marge Mayers", "Felica Frappier", "Buena Blazier", "Ben Buchan", "India Ison", "Regenia Repka", "Kieth Kraft"]

const connection = mysql.createConnection({
    host: process.env.MYSQL_LINK,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

const app = express();
const routes = new Router()

let getPeople = () => new Promise((resolve, reject) => {
    connection.query('SELECT * FROM People;', (err, rows) => {
        if (rows === undefined) {
            reject(new Error("Error rows is undefined"));
        } else {
            resolve(rows);
        }
    })
})

let postNewPerson = (personName) => {
    let sql = `INSERT INTO People (Name) VALUES ('${personName}')`
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted into database: ID = " + result.insertId + ", name = " + personName);
    })
}

app.set('view engine', 'pug')
// app.get('/p', function (req, res) {
//     res.render('index', { people: randomNames })
//   })


routes.get('/', async (request, response) => {

    postNewPerson(randomNames.pop());

    try {
        let queryResult = await getPeople()
            .then(rows => {
                return rows.map(row => row.Name)
            })
            .catch(err => {
                console.log("Promise rejection error: " + err);
            })
        return response.render('index', { people: queryResult })
    } catch (err) {
        return response.status(500).json({ error: err })
    }
})

app.use(routes);
app.listen(3000);
