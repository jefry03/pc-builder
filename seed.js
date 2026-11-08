const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const connectToDB = require('./db.js')
const Component = require('./models/Componnent.js')
const mongoose = require('mongoose');
async function seedComponnent() {
    try {
        await connectToDB();
        console.log("Connected to the database.");
    } catch (error) {
        console.error("Error connecting to the database:", error)}

   const componnent = [

    { componnentname: "Intel-Core-I3-13100-Desktop-Processor-4-Cores-4-5-GHz-LGA1700-Computer-CPU", category: "CPU", brand: "Intel", price: 389.99 , image: "/css/images/intel-i3-13100.avif" },
    { componnentname: "Intel Core I3-14100F CPU", category: "CPU", brand: "intel", price: 369.00 },
    { componnentname: "AMD Ryzen 5 8500g CPU", category: "CPU", brand: "AMD", price: 283.00 },
    { componnentname: "Intel Core i5-12400F Tray CPU", category: "CPU", brand: "intel", price: 209.00 },
    { componnentname: "Intel Core Ultra 5 250KF Plus CPU", category: "CPU", brand: "intel", price: 589.99 },

    { componnentname: "Colorful GeForce RTX 5050 Battle AX DUO 8GB GPU", category: "GPU", brand: "NVIDIA", price: 489.99 },
    { componnentname: "ZOTAC Gaming GeForce RTX 5050 Twin Edge OC 8GB GPU", category: "GPU", brand: "NVIDIA", price: 379.99 },
    { componnentname: "Colorful Game GeForce RTX 5060 Ultra DUO OC 8GB-V GPU", category: "GPU", brand: "ASUS", price: 999.99 },
    { componnentname: "ZOTAC Gaming GeForce RTX 5060 Ti 8GB Twin Edge OC GDDR7 GPU", category: "GPU", brand: "Corsair", price: 119.99 },
    { componnentname: "Manli GeForce RTX Nebula 5060 8GB GDDR7 V2 GPU", category: "GPU", brand: "G.Skill", price: 112.99 },

    { componnentname: "XANDER XP II - 650W - 80 Plus White - 120mm Fan - PSU", category: "powerSupply", brand: "Kingston", price: 44.99 },
    { componnentname: "Aigo AP550 550W 80+ Power Supply Non-Modular Black", category: "powerSupply", brand: "Samsung", price: 169.99 },
    { componnentname: "Aigo AT550 550W 80+ Bronze Power Supply Black", category: "powerSupply", brand: "Crucial", price: 68.99 },
    { componnentname: "DeepCool PF600X 600W 80+ Bronze PSU", category: "powerSupply", brand: "Western Digital", price: 154.99 },
    { componnentname: "DeepCool PF500D 500W 80 PLUS 230V EU White Non-Modular PSU", category: "powerSupply", brand: "MSI", price: 199.99 },

    { componnentname: "Adata Legend 710 Gen 3 M.2 - 256gb", category: "Storage", brand: "ASUS", price: 349.99 },
    { componnentname: "Hiksemi Wave NVMe M.2 - 512GB", category: "Storage", brand: "Gigabyte", price: 179.99 },
    { componnentname: "ADDLINK S70L M.2 NVMe - 512gb", category: "Storage", brand: "NZXT", price: 129.99 },
    { componnentname: "XPG Gammix S70 Blade Gen 4 M.2 - 512gb", category: "Storage", brand: "Corsair", price: 89.99 },
    { componnentname: "XPG GAMMIX S60 Gen 4 NVME M.2 - Black - 512gb", category: "Storage", brand: "Lian Li", price: 149.99 },

    { componnentname: "Gamdias Aura GC9M Elite ARGB Mini Tower Case - White", category: "case", brand: "Corsair", price: 129.99 },
    { componnentname: "Gamdias Aura GC7 ARGB Mid Tower Case", category: "case", brand: "EVGA", price: 99.99 },
    { componnentname: "Gamdias Aura GC9M Elite ARGB Mini Tower Case - Black", category: "case", brand: "Seasonic", price: 169.99 } ,
    { componnentname: "Gamdias Aura GC5 Elite ARGB Mid Tower Case", category: "case", brand: "Seasonic", price: 169.99 } ,
    { componnentname: "Gamdias Aura GC5 Elite ARGB Mid Tower Case - White", category: "case", brand: "Seasonic", price: 169.99 } ,

    { componnentname: "Asus Prime H610M-K DDR5 gaming motherboard", category: "MOTHERBOARD", brand: "Corsair", price: 129.99 },
    { componnentname: "Asus Prime H610M-K DDR5 ARGB gaming motherboard", category: "MOTHERBOARD", brand: "EVGA", price: 99.99 },
    { componnentname: "Colorful H610M-E M.2 V20 Motherboard", category: "MOTHERBOARD", brand: "Seasonic", price: 169.99 } ,
    { componnentname: "Colorful Battle-AX B760M-K D5 V20 Motherboard", category: "MOTHERBOARD", brand: "Seasonic", price: 169.99 } ,
    { componnentname: "Gigabyte H810M H Motherboard", category: "MOTHERBOARD", brand: "Seasonic", price: 169.99 } ,
    
    { componnentname: "XPG Spectrix D35G DDR4 8gb - 3200Mhz (1x8gb) - Black", category: "RAM", brand: "Corsair", price: 129.99 },
    { componnentname: "ADATA Premier DDR5 8GB 5600MHz U-DIMM - Single Stick", category: "RAM", brand: "EVGA", price: 99.99 },
    { componnentname: "XPG GAMMIX D35 DDR4 16gb - 3600Mhz (2x8gb) - White", category: "RAM", brand: "Seasonic", price: 169.99 } ,
    { componnentname: "XPG Spectrix D60G DDR4 16GB - 3600Mhz (2x8Gb) - RGB", category: "RAM", brand: "Seasonic", price: 169.99 } ,
    { componnentname: "XPG Armax DDR5 RGB 32GB - 6000MHz (2x16GB) - Black", category: "RAM", brand: "Seasonic", price: 169.99 } ,

];   


    const cpuComponnent = componnent.filter((component) => {
    return component.category === "CPU";
});

const gpuComponnent = componnent.filter((component) => {
    return component.category === "GPU";
});

const ramComponnent = componnent.filter((component) => {
    return component.category === "RAM";
});

const storageComponnent = componnent.filter((component) => {
    return component.category === "Storage";
});

const powerSupplyComponnent = componnent.filter((component) => {
    return component.category === "powerSupply";
});
const caseComponnent = componnent.filter((component) => {
    return component.category === "case";
});

    try {
        await Component.insertMany(componnent);
        console.log("Componnent seeded successfully.");
    } catch (error) {
        console.error("Error seeding Componnent:", error);
    }


    mongoose.connection.close();
    }

seedComponnent();