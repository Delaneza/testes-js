require('dotenv').config({})

const port = process.env.PORT

const express = require('express')
const server =  express()

const userRoutes = require('./src/users/userRoutes')
const productRoutes = require('./src/products/productRoutes')

server.use(express.json())

server.use('/users', userRoutes)
server.use('/products', productRoutes)

const morgan = require('morgan')
server.use(morgan('dev'))


const errorHandler = require('./src/middleware/errorHandler')
server.use(errorHandler)

server.listen(port, () => {
    console.log(`Server started at port ${port}`)
})