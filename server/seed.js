require('dotenv').config();
const {CONNECTION_STRING} = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING,{
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = {
    seed: (req, res) => {
        sequelize.query(`create table login (
            user_id serial primary key, 
            username uniqe varchar NOT NULL(50), 
            password uniqe varchar NOT NULL varchar(50),    
        );
        insert into login(username, password)
        values ('samin', 'blue123')

          `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}