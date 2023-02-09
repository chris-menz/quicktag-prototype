const express = require("express")
const router = express.Router()

router.post("/", createQrTag)
router.get("/", getAllQrTags)
router.get("/:tagid", getQrTagById)
router.put("/:tagid", updateQrTagById)