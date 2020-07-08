const db = require("../database/config")

module.exports = {
    find,
    findBy,
    findById,
    add
}

function find() {
    return db("authUsers").select("id", "username")
}

function findBy(filter) {
    return db("authUsers").select("id", "username", "password")
}

function findById(id) {
    return db("authUsers").select("id", "username").where({ id }).first()
}

function add(user) {
    const [id] = await db("authUsers").insert(user)
    return findById(id)
}