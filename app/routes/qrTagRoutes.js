const express = require("express")
const {createQrTag, getAllQrTags, getQrTagById, updateQrTagById} = require('../handlers/qrTagHandler')

const router = express.Router({mergeParams: true})

router.post("/", createQrTag)
router.get("/", getAllQrTags)
router.get("/:tagid", getQrTagById)
router.put("/:tagid", updateQrTagById)

module.exports = router