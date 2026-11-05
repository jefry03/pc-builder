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

    { componnentname: "Intel Core i7-14700K", category: "CPU", brand: "Intel", price: 389.99 },
    { componnentname: "AMD Ryzen 7 7800X3D", category: "CPU", brand: "AMD", price: 369.00 },
    { componnentname: "Intel Core i5-13600K", category: "CPU", brand: "Intel", price: 283.00 },
    { componnentname: "AMD Ryzen 5 7600X", category: "CPU", brand: "AMD", price: 209.00 },
    { componnentname: "NVIDIA GeForce RTX 4070 Super", category: "GPU", brand: "NVIDIA", price: 589.99 },
    { componnentname: "AMD Radeon RX 7800 XT", category: "GPU", brand: "AMD", price: 489.99 },
    { componnentname: "NVIDIA GeForce RTX 4060 Ti 8GB", category: "GPU", brand: "NVIDIA", price: 379.99 },
    { componnentname: "ASUS TUF Gaming RTX 4080 Super 16GB", category: "GPU", brand: "ASUS", price: 999.99 },
    { componnentname: "Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz", category: "RAM", brand: "Corsair", price: 119.99 },
    { componnentname: "G.Skill Trident Z5 RGB 32GB (2x16GB) DDR5 6000MHz", category: "RAM", brand: "G.Skill", price: 112.99 },
    { componnentname: "Kingston FURY Beast DDR4 16GB (2x8GB) 3200MHz", category: "RAM", brand: "Kingston", price: 44.99 },
    { componnentname: "Samsung 990 PRO 2TB NVMe M.2 SSD", category: "Storage", brand: "Samsung", price: 169.99 },
    { componnentname: "Crucial P3 Plus 1TB PCIe Gen4 NVMe M.2 SSD", category: "Storage", brand: "Crucial", price: 68.99 },
    { componnentname: "Western Digital WD_BLACK SN850X 2TB SSD", category: "Storage", brand: "Western Digital", price: 154.99 },
    { componnentname: "MSI MAG B650 TOMAHAWK WIFI", category: "MOTHERBOARD", brand: "MSI", price: 199.99 },
    { componnentname: "ASUS ROG STRIX Z790-A GAMING WIFI", category: "MOTHERBOARD", brand: "ASUS", price: 349.99 },
    { componnentname: "Gigabyte B760 AORUS ELITE AX", category: "MOTHERBOARD", brand: "Gigabyte", price: 179.99 },
    { componnentname: "NZXT H7 Flow RGB Mid-Tower Case", category: "case", brand: "NZXT", price: 129.99 },
    { componnentname: "Corsair 4000D Airflow Tempered Glass", category: "case", brand: "Corsair", price: 89.99 },
    { componnentname: "Lian Li O11 Dynamic EVO", category: "case", brand: "Lian Li", price: 149.99 },
    { componnentname: "Corsair RM850x 850W 80+ Gold Fully Modular", category: "powerSupply", brand: "Corsair", price: 129.99 },
    { componnentname: "EVGA SuperNOVA 750 GT 80+ Gold 750W", category: "powerSupply", brand: "EVGA", price: 99.99 },
    { componnentname: "Seasonic FOCUS GX-1000 1000W 80+ Gold", category: "powerSupply", brand: "Seasonic", price: 169.99 }
];
Componnent.price.forEach(function(price) {
  total += price;
});
console.log("Total price: " + total);
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