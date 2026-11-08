const router = require("express").Router()
const isSignedIn = require('../middleware/is-signed-in')
const Component = require('../models/Componnent')
const PcBuild = require('../models/PcBuild')
const Componnent = require('../models/Componnent.js')

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
  }).populate('components')


      const allComponnents = await Componnent.find();
  
      const cpuComponnents = allComponnents.filter((Componnent) => {
          return Componnent.category === "CPU";
      });
      const gpuComponnents = allComponnents.filter((Componnent) => {
      return Componnent.category === "GPU";
  });
  
  const ramComponnents = allComponnents.filter((Componnent) => {
      return Componnent.category === "RAM";
  });
  
  const storageComponnents = allComponnents.filter((Componnent) => {
      return Componnent.category === "Storage";
  });
  
  const powerSupplyComponnents = allComponnents.filter((Componnent) => {
      return Componnent.category === "powerSupply";
  });
  const caseComponnents = allComponnents.filter((Componnent) => {
      return Componnent.category === "case";
  });
  const motherboardComponnents = allComponnents.filter((Componnent) => {
      return Componnent.category === "MOTHERBOARD";
  });
  



  const componentNames = build.components.map((oneComponent)=>oneComponent.componnentname)
  console.log(componentNames)

  const allcomponents = await Component.find()
  res.render("edit-build.ejs", {
  build ,
        cpuComponents: cpuComponnents,
        gpuComponents: gpuComponnents,
        ramComponents: ramComponnents,
        storageComponents: storageComponnents,
        powerSupplyComponents: powerSupplyComponnents,
        caseComponents: caseComponnents,
        motherboardComponents: motherboardComponnents,
        componentNames
  })
})



router.put ( "/:buildid" , async (req ,res ) => {
    const newBuild = await PcBuild.findByIdAndUpdate (req.params.buildid,{
      name: req.body.name,
      owner: req.session.user._id,
      components: req.body.components,
      totalPrice: req.body.totalPrice
    })
    console.log("save build:" ,newBuild)
     res.redirect("/pc-builds")
} )


module.exports = router