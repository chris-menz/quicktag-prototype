// const tagIsActivated = require("../../app/handlers/helpers/checkTagActivationStatus")
const axios = require("axios")

const redirectHandler = async (req, res) => {
    const response = await axios.get("http://app:8080/qrCode")
    console.log(response)
    const tagId = req.params.qrcodeid
    // const tagHasBeenActivated = tagIsActivated(tagId)
    const tagHasBeenActivated = true
    if(tagHasBeenActivated){
        res.redirect(301, '/found/' + tagId)
    }
    else {
        res.redirect(301, '/activate/' + tagId)
    }
}

module.exports = redirectHandler