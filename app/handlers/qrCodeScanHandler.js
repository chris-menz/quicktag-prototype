// POST qrTagScan -- accept body, create row in db, return ID
// GET all qrTagScans -- no params, get all qrtagScan rows from db, return all qrTagScan rows
// GET one qrTagScan -- accept ID param, find in db, return single qrScanId
// PUT qrTagScan  -- accept ID param, update in db, return ID
const createQrCodeScan = (req, res) => {
    res.send({route: "create qr tag scna route"})
}

const getAllQrCodeScans = (req, res) => {
    res.send({route: "create qr tag scna route"})
}

const getQrCodeScanById = (req, res) => {
    res.send({route: "create qr tag scna route"})
}

const updateQrCodeScanById = (req, res) => {
    res.send({route: "create qr tag scna route"})
}

module.exports = {
    createQrCodeScan,
    getAllQrCodeScans,
    getQrCodeScanById,
    updateQrCodeScanById
}

