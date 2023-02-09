const express = require("express")
const router = express.Router()
const {
    render401,
    renderActivate,
    renderAdmin,
    renderAdminLogin,
    renderFound
} = require('../handlers/views')

router.get('/401', render401)

router.get('/adminlogin', renderAdminLogin)

router.get('/admin', renderAdmin)

router.get('/activate/:tagid', renderActivate)

router.get('/found/:tagid', renderFound)

module.exports = router