const router = require("express").Router()
const isSignedIn = require('../middleware/is-signed-in')
const Component = require('../models/Componnent')
const PcBuild = require('../models/PcBuild')

router.use(isSignedIn)

router.get("/", async (req, res) => {
  const builds = await PcBuild.find({
    owner: req.session.user._id
  }).populate("components");
  res.render("my-builds.ejs", { builds: builds });
});
router.post ( "/" , async (req ,res ) => {
    const newBuild = await PcBuild.create ({
      name: req.body.name,
      owner: req.session.user._id,
      components: req.body.components,
      totalPrice: req.body.totalPrice
    })
    console.log("save build:" ,newBuild)
     res.redirect("/pc-builds")
} )


router.delete("/:buildid" , async (req , res) =>{
  await PcBuild.findOneAndDelete({
    _id:req.params.buildid,
    owner:req.session.user._id
  }) ;
   res.redirect("/pc-builds")
})


module.exports = router