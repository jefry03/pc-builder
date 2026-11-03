const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const connectToDB = require('./db.js')
const Component = require('./models/componnent.js')
const mongoose = require('mongoose');
async function seedComponents() {
    try {
        await connectToDB();
        console.log("Connected to the database.");
    } catch (error) {
        console.error("Error connecting to the database:", error)}

    const components = [
        { componentname: "Intel Core i9-11900K", category: "CPU", brand: "Intel", price: 539.99 },
        { componentname: "AMD Ryzen 9 5900X", category: "CPU", brand: "AMD", price: 549.99 },
        { componentname: "NVIDIA GeForce RTX 3080", category: "GPU", brand: "NVIDIA", price: 699.99 },
        { componentname: "AMD Radeon RX 6800 XT", category: "GPU", brand: "AMD", price: 649.99 },
        { componentname: "Corsair Vengeance LPX 16GB (2 x 8GB) DDR4-3200", category: "RAM", brand: "Corsair", price: 89.99 },
        { componentname: "G.Skill Trident Z RGB 32GB (2 x 16GB) DDR4-3600", category: "RAM", brand: "G.Skill", price: 179.99 },
        { componentname: "Samsung 970 EVO Plus 1TB NVMe SSD", category: "Storage", brand: "Samsung", price: 149.99 },]
        

    try {
        await Component.insertMany(components);
        console.log("Components seeded successfully.");
    } catch (error) {
        console.error("Error seeding components:", error);
    }


    mongoose.connection.close();
    }

seedComponents();