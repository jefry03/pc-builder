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

router.get("/:buildid/edit" , async (req , res)=>{
  const build = await PcBuild.findOne({
    _id:req.params.buildid,
    owner:req.session.user._id
  })

  const allcomponents = await Component.find()
  res.render("edit-build.ejs", {
  build ,
  cpucomponent: allcomponents.filter(c => c.category === "CPU"),
  gpucomponent: allcomponents.filter(c => c.category === "GPU"),
  Casecomponent: allcomponents.filter(c => c.category === "Case"),
  powerSupplycomponent: allcomponents.filter(c => c.category === "PowerSupply"),
  motherboardcomponent: allcomponents.filter(c => c.category === "Motherboard"),
  Ramcomponent: allcomponents.filter(c => c.category === "RAM"),
  storagecomponent: allcomponents.filter(c => c.category === "Storage")
  })
})


module.exports = router