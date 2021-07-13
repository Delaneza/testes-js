const { BadRequestException, NotFoundException } = require('../../config/errors')

class Service {
    constructor(database) {
        this.database = database
    }

    getAll = () => {
        const db = this.database

        return db
    }

    getUser = (id) => {
        const user = this.database[id]

        return user
    }

    createUser = ({id, name, age}) => {
        const created = this.database.push({id, name, age})

        return {id: created}
    }

    updateUser = ({id, name, age}) => {
        this.database[id] = {id, name, age}
        
        return this.database[id]
    }

    deleteUser = ({id}) => {
        this.database.splice(id, 1)

        return id
    }
}

module.exports = { Service }