const { response } = require("express")
const pool = require("../pgpool")

const createQrCode = (req, res) => {
    const query = 'INSERT INTO qrCodes(isActivated) VALUES($1) RETURNING *'
    const params = ['False']

    pool.query(query, params)
        .then(pgres => {
            return res.status(200).send({"qrCode": pgres.rows[0]})
        })
        .catch(error => {
            return res.status(500).send({
                "qrCode": {},
                "error": error.stack
            })
        })
}

const getAllQrCodes = (req, res) => {
    const query = 'SELECT * FROM qrCodes'

    pool.query(query)
        .then(pgres => {
            return res.send({"qrCodes": pgres.rows})
        })
        .catch(error => {
            console.log(error.stack)
            return res.send({
                "qrCodes": {},
                "error": error.stack
            })
        })
}

const getQrCodeById = (req, res) => {
    res.send({route: "create qr tag scna route"})
}

const updateQrCodeById = (req, res) => {
    res.send({route: "create qr tag scna route"})
}

module.exports = {
    createQrCode,
    getAllQrCodes,
    getQrCodeById,
    updateQrCodeById
}