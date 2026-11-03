const router = require("express").Router()
const isSignedIn = require('../middleware/is-signed-in')
const Component = require('../models/componnent')

// Create routes

router.get('/', isSignedIn, async (req, res) => {
        const allComponents = await Component.find();
        res.render('components.ejs', { components: allComponents });
    
});


router.get('/new', isSignedIn, (req, res) => {
    res.render('components.ejs'); 
});

module.exports = router