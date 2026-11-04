const router = require("express").Router()
const isSignedIn = require('../middleware/is-signed-in')
const Component = require('../models/Componnent')

router.use(isSignedIn)

router.post ( "/" , async , (req ,res ) => {
    const newBuild = PcBuild.create ({
      name: req.body.name,
      gpu: req.body.gpu ,
      cpu: req.body.cpu ,
      motherboard: req.body.motherboard,
      powerSupply: req.body.powerSupply,
      case: req.body.case,
      ram : req.body.ram
    })

} )