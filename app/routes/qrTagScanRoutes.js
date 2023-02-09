const express = require("express")
const {createQrTagScan, getAllQrTagScans, getQrTagScanById, updateQrTagScanById} = require("../handlers/qrTagScanHandler")

const router = express.Router({mergeParams: true})

router.post("/", createQrTagScan)
router.get("/", getAllQrTagScans)
router.get("/:tagid", getQrTagScanById)
router.put("/:tagid", updateQrTagScanById)

module.exports = router