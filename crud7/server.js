const port = 3000

const express = require('express')
const server = express()

const userRoutes = require ('./src/users/routes')
const productRoutes = require('./src/products/routes') 

server.use(express.json())

server.use('/users', userRoutes)
server.use('/products', productRoutes)



const errorHandler = require('./src/middleware/error.handler')

//
server.use(errorHandler)

//
server.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

