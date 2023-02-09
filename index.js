const express = require("express")
const tagIsActivated = require ("./helpers/checkTagActivationStatus")

const app = express()
const port = 5001

app.set('view engine', 'ejs')

app.get('/redirect/:tagid', (req, res) => {
    const tagId = req.params.tagid
    const tagHasBeenActivated = tagIsActivated(tagId)
    if(tagHasBeenActivated){
        res.redirect(301, '/found/' + tagId)
    }
    else {
        res.redirect(301, '/activate/' + tagId)
    }
})

app.get('/401', (req, res) => {
    res.render('401')
})

app.get('/adminlogin', (req, res) => {
    res.render('adminlogin')
})

app.get('/admin', (req, res) => {
    // if token and role is admin
    res.render('admin')
    //res.redirect('/401')
})

app.get('/activate/:tagid', (req, res) => {
    res.render('activation', {
        tagId: req.params.tagid
    })
})

app.get('/found/:tagid', (req, res) => {
    res.render('founditem', {
        tagId: req.params.tagid
    })
})

app.listen(port)
