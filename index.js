const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const connect = require('./src/utils/db')

const server = express()
connect()
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

//Routes

server.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

const PORT = process.env.PORT
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
