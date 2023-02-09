// check db to see if tag is activated
// if tag is activated, that means it is scanned by a finder of the lost item
// if not activated, that means it is scanned by item owner
module.exports = function tagIsActivated(tagId){
    if(tagId > 50){
        return false
    }
    return true
}

