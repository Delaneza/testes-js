const { BadRequestException, NotFoundException } = require('../../config/errors')

class Service {
    constructor(database) {
        this.database = database
    }

    getAll = () => {
        const db = this.database

        return db
    }

    getProduct = (id) => {
        const product = this.database[id]

        return product
    }

    createProduct = ({id, prod_name, price}) => {
        const created = this.database.push({id, prod_name, price})

        return {id: created}
    }
    
    updateProduct = ({id, prod_name, price}) => {
        this.database[id] = {id, prod_name, price}
        
        return this.database[id]
    }

    deleteProduct = ({id}) => {
        this.database.splice(id, 1)

        return id
    }
}

module.exports = { Service }