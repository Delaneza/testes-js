const router = require('express').Router()
const database = require('../repository/userDatabase')
const Service = require('../service/userService').Service
const service = new Service(database)

function getAll(_, res, next) {
    const db = service.getAll()
    
    res.json(db)

    next()
}

function getUser(req, res, next) {
    const { id } = req.params
    const user = service.getUser({id})

    res.json(user)

    next()    
}

function createUser(req, res, next) {
    const { id, name, age } = req.body
    const created = service.createUser({id, name, age})

    res.json(created)
    
    next()
}

function updateUser(req, res, next) {
    const { id } = req.params
    const { name, age } = req.body

    const updated = service.updateUser({id, name, age})

    res.json(updated)

    next()    
}

function deleteUser(req, res, next) {
    const { id } = req.params
    const deleted = service.deleteUser({id}, 1)

    res.json(deleted)

    next()
}

module.exports = { getAll, getUser, createUser, updateUser, deleteUser }