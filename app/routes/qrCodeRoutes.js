const express = require("express")
const {createQrCode, getAllQrCodes, getQrCodeById, updateQrCodeById} = require('../handlers/qrCodeHandler')

const router = express.Router({mergeParams: true})

router.post("/", createQrCode)
router.get("/", getAllQrCodes)
router.get("/:tagid", getQrCodeById)
router.put("/:tagid", updateQrCodeById)

module.exports = router