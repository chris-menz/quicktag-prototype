const express = require("express")
const {createQrCodeScan, getAllQrCodeScans, getQrCodeScanById, updateQrCodeScanById} = require("../handlers/qrCodeScanHandler")

const router = express.Router({mergeParams: true})

router.post("/", createQrCodeScan)
router.get("/", getAllQrCodeScans)
router.get("/:qrcodeid", getQrCodeScanById)
router.put("/:qrcodeid", updateQrCodeScanById)

module.exports = router