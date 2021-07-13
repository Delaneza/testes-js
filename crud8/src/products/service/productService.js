const { NotFoundException, BadRequestException } = require('../../config/errors')

class Service {
    constructor(database) {
        this.database = database
    }

    getAll = () => {
        return this.database
    }

    getProduct = ({id}) => {
        return this.database[id]
    }

    createProduct = ({id, prod_name, price}) => {
        const created = this.database.push({id, prod_name, price})

        return created
    }

    updateProduct = ({id, prod_name, price}) => {
        this.database[id] = {id, prod_name, price}

        return this.database[id]
    }

    deleteProduct = ({id}) => {
        const deleted = this.database.splice(id, 1)

        return deleted
    }

}

module.exports = { Service }