const redirectHandler = (req, res) => {
    const tagId = req.params.tagid
    const tagHasBeenActivated = tagIsActivated(tagId)
    if(tagHasBeenActivated){
        res.redirect(301, '/found/' + tagId)
    }
    else {
        res.redirect(301, '/activate/' + tagId)
    }
}

module.exports = redirectHandler