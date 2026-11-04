const router = require("express").Router()
const Componnent = require('../models/Componnent.js')
const isSignedIn = require('../middleware/is-signed-in')


// Create routes

router.get('/', isSignedIn, async (req, res) => {
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

res.render('componnent.ejs', {
        cpuComponents: cpuComponnents,
        gpuComponents: gpuComponnents,
        ramComponents: ramComponnents,
        storageComponents: storageComponnents,
        powerSupplyComponents: powerSupplyComponnents,
        caseComponents: caseComponnents,
        motherboardComponents: motherboardComponnents
    });

});








module.exports = router