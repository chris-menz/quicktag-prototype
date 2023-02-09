// POST qrTagScan -- accept body, create row in db, return ID
// GET all qrTagScans -- no params, get all qrtagScan rows from db, return all qrTagScan rows
// GET one qrTagScan -- accept ID param, find in db, return single qrScanId
// PUT qrTagScan  -- accept ID param, update in db, return ID
const createQrTagScan = (req, res) => {
    res.send({route: "create qr tag scna route"})
}

const getAllQrTagScans = (req, res) => {
    res.send({route: "create qr tag scna route"})
}

const getQrTagScanById = (req, res) => {
    res.send({route: "create qr tag scna route"})
}

const updateQrTagScanById = (req, res) => {
    res.send({route: "create qr tag scna route"})
}

module.exports = {
    createQrTagScan,
    getAllQrTagScans,
    getQrTagScanById,
    updateQrTagScanById
}

