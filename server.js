const { error } = require('console')
const fs = require('fs')
const {Pool} = require('pg')
require('dotenv').config()

const pool = new Pool ({
    username: 'nicole',
    password: process.env.PASSWORD,
    host: 'free-tier.gcp-us-central1.cockroachlabs.cloud',
    port: 26257,
    database: 'sticky-otter-1546.defaultdb',
    ssl: {
        ca: fs.readFileSync('/Users/Nicole/Downloads/cc-ca.crt')
        .toString()
    }
})

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err) throw error;
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers
}