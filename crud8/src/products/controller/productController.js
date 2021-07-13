const router = require('express').Router()
const database = require('../repository/productDatabase')
const Service = require('../service/productService').Service
const service = new Service(database)

function getAll(_, res, next) {

    const db = service.getAll()

    res.send(db)

    next()
}

function getProduct(req, res, next) {
    const { id } = req.params

    const product = service.getProduct({id})

    res.send(product)

    next()
}

function createProduct(req, res, next) {
    const { id, prod_name, price } = req.body

    const created = service.createProduct({id, prod_name, price})

    res.json({id: created})

    next()
}

function updateProduct(req, res, next) {
    const { id } = req.params
    const { prod_name, price } = req.body

    const updated = service.updateProduct({id, prod_name, price})

    res.json(updated)

    next()
}

function deleteProduct(req, res, next) {
    const { id } = req.params

    const deleted = service.deleteProduct({id}, 1)

    res.json(deleted)

    next()
}

module.exports = { getAll, getProduct, createProduct, updateProduct, deleteProduct }