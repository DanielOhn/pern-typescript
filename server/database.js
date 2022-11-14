'use strict'
exports.__esModule = true
var pg_1 = require('pg')
require('dotenv').config()
var devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
}
var pool = new pg_1.Pool(devConfig)
exports['default'] = pool
