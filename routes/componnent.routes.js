const router = require("express").Router()
const isSignedIn = require('../middleware/is-signed-in')
const Component = require('../models/componnent')

// Create routes

router.get('/', isSignedIn, async (req, res) => {
    const allComponents = await Component.find();

    const cpuComponents = allComponents.filter((component) => {
        return component.category === "CPU";
    });
    const gpuComponents = allComponents.filter((component) => {
    return component.category === "GPU";
});

const ramComponents = allComponents.filter((component) => {
    return component.category === "RAM";
});

const storageComponents = allComponents.filter((component) => {
    return component.category === "Storage";
});

const powerSupplyComponents = allComponents.filter((component) => {
    return component.category === "powerSupply";
});
const caseComponents = allComponents.filter((component) => {
    return component.category === "case";
});
const motherboardComponents = allComponents.filter((component) => {
    return component.category === "MOTHERBOARD";
});

    res.render('components.ejs', {
        cpuComponents,
        gpuComponents,
        ramComponents,
        storageComponents,
        powerSupplyComponents,
        caseComponents ,
        motherboardComponents
    });

});








module.exports = router