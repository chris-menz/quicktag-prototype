// POST qrTagScan
// GET all qrTagScans
// GET one qrTagScan given ID
// PUT qrTagScan given ID - update with fields from user

const express = require("express")
const router = express.Router()

router.post("/", createQrTagScan)
router.get("/", getAllQrTagScans)
router.get("/:tagid", getQrTagScanById)
router.put("/:tagid", updateQrTagScanById)