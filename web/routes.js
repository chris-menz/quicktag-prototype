const express = require("express")
const {
    render401,
    renderActivate,
    renderAdmin,
    renderAdminLogin,
    renderFound
} = require('./handlers/viewHandlers')
const redirectHandler = require('./handlers/redirect')

const router = express.Router({mergeParams: true})

// redirect based on activation status of tag
router.get('/redirect/:qrcodeid', redirectHandler)

router.get('/401', render401)

router.get('/adminlogin', renderAdminLogin)

router.get('/admin', renderAdmin)

router.get('/activate/:qrcodeid', renderActivate)

router.get('/found/:qrcodeid', renderFound)

module.exports = router