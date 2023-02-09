const render401 = (req, res) => {
    res.render('401')
}

const renderAdminLogin = (req, res) => {
    res.render('adminlogin')
}

const renderAdmin = (req, res) => {
    // if token and role is admin
    res.render('admin')
    //res.redirect('/401')
}

const renderActivate = (req, res) => {
    res.render('activate', {
        tagId: req.params.tagid
    })
}

const renderFound = (req, res) => {
    res.render('founditem', {
        tagId: req.params.tagid
    })
}

module.exports = {
    render401,
    renderActivate,
    renderAdmin,
    renderAdminLogin,
    renderFound
}