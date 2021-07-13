const {NotFoundException, BadRequestException } = require('../../config/errors')

class Service {
    constructor(database) {
        this.database = database
    }

    getAll = () => {
        return this.database
    }

    getUser = ({id}) => {
        return this.database[id]
    }

    createUser = ({id, name, age}) => {
        const created = this.database.push({id, name, age})

        return created
    }

    updateUser = ({id, name, age}) => {
        this.database[id] = {id, name, age}

        return this.database[id]
    }

    deleteUser = ({id}) => {
        const deleted = this.database.splice(id, 1)

        return deleted
    }
}

module.exports = { Service }