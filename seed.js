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

    { componnentname: "Intel-Core-I3-13100-Desktop-Processor-4-Cores-4-5-GHz-LGA1700-Computer-CPU", category: "CPU", brand: "Intel", price: 389.99 , image: "https://image.made-in-china.com/365f3j00afSbJQEtIBcT/Intel-Core-I3-13100-Desktop-Processor-4-Cores-4-5-GHz-LGA1700-Computer-CPU.webp" },
    { componnentname: "Intel Core I3-14100F CPU", category: "CPU", brand: "intel", price: 369.00 , image: "https://api.cazasouq.com/storage/v1/render/image/public/media-library/opencart/7dd072620a9a1d092ce7fb06258f40336706859d1016f01280b25bcf2a532e37.png?width=1024&quality=70&resize=contain" },
    { componnentname: "AMD Ryzen 5 8500g CPU", category: "CPU", brand: "AMD", price: 283.00 , image: "https://plecom.imgix.net/iil-373673-664864.jpg?fitfill&fill=solid&fill-color=00ffffff&bg-remove=true&bg-remove-semi-transparency=false&auto=format&w=1000&h=1000" },
    { componnentname: "Intel Core i5-12400F Tray CPU", category: "CPU", brand: "intel", price: 209.00 , image:"https://ttx.sa/UploadedFiles/ProductsPhotos/dca3359d-4652-4b4f-a79f-d280fabfe3a2.png" },
    { componnentname: "Intel Core Ultra 5 250KF Plus CPU", category: "CPU", brand: "intel", price: 589.99 , image:"https://pcbstore.com.bd/img/w1920/q80/storage/products/intel-core-ultra-5-250kf-plus-processor.webp"},

    { componnentname: "Colorful GeForce RTX 5050 Battle AX DUO 8GB GPU", category: "GPU", brand: "NVIDIA", price: 489.99 , image :"https://cdn.gccgamers.com/media/products/97326c96-12cb-4d61-a4b8-0cae30e24557.webp" },
    { componnentname: "ZOTAC Gaming GeForce RTX 5050 Twin Edge OC 8GB GPU", category: "GPU", brand: "NVIDIA", price: 379.99 , image :"https://cdn.gccgamers.com/media/products/c694671b-a484-4ac6-9e5b-13c58d70e2b0.webp"},
    { componnentname: "Colorful Game GeForce RTX 5060 Ultra DUO OC 8GB-V GPU", category: "GPU", brand: "ASUS", price: 999.99 , image:"https://cdn.gccgamers.com/media/products/82e9ae9e-8091-4499-9e7a-fc67e1d79a62.webp" },
    { componnentname: "ZOTAC Gaming GeForce RTX 5060 Ti 8GB Twin Edge OC GDDR7 GPU", category: "GPU", brand: "Corsair", price: 119.99 , image:"https://www.zotac.com/download/files/styles/w1024/public/product_gallery/graphics_cards/zt-b50610h-10m-image01.jpg?itok=7O1nvtCa"},
    { componnentname: "Manli GeForce RTX Nebula 5060 8GB GDDR7 V2 GPU", category: "GPU", brand: "G.Skill", price: 112.99 , image:"https://i.ebayimg.com/images/g/hesAAeSwe41qca9G/s-l1600.webp" },

    { componnentname: "XANDER XP II - 650W - 80 Plus White - 120mm Fan - PSU", category: "powerSupply", brand: "Kingston", price: 44.99 , image:"https://gaminguae.ae/wp-content/uploads/2024/05/XP-650W.webp" },
    { componnentname: "Aigo AP550 550W 80+ Power Supply Non-Modular Black", category: "powerSupply", brand: "Samsung", price: 169.99 , image:"https://api.cazasouq.com/storage/v1/render/image/public/media-library/opencart/f723d23ae5c1c3d5d88c01ac4eabd216fb84a4fb160688189bd7b87535b429d8.png?width=640&quality=70&resize=contain"},
    { componnentname: "Aigo AT550 550W 80+ Bronze Power Supply Black", category: "powerSupply", brand: "Crucial", price: 68.99 , image:"https://api.cazasouq.com/storage/v1/render/image/public/media-library/opencart/b08c9ec7c3f1075e29eb17ef5fcb814342b0bbacb599e09aa0d85138205755fe.png?width=640&quality=70&resize=contain" },
    { componnentname: "DeepCool PF600X 600W 80+ Bronze PSU", category: "powerSupply", brand: "Western Digital", price: 154.99 , image:"https://khabirtech.com/wp-content/uploads/2026/08/PSU-DEEPCOOL-PF600X-BLACK-1.webp"},
    { componnentname: "DeepCool PF500D 500W 80 PLUS 230V EU White Non-Modular PSU", category: "powerSupply", brand: "MSI", price: 199.99 , image:"https://www.dateks.lv/images/pic/2400/2400/043/1127.jpg"},

    { componnentname: "Adata Legend 710 Gen 3 M.2 - 256gb", category: "Storage", brand: "ASUS", price: 349.99 ,image:"https://i.ebayimg.com/images/g/aDEAAOSwlwVndqiH/s-l1600.webp" },
    { componnentname: "Hiksemi Wave NVMe M.2 - 512GB", category: "Storage", brand: "Gigabyte", price: 179.99 , image:"https://api.nxtdz.com/uploads/1762944495294_image_0.webp" },
    { componnentname: "ADDLINK S70L M.2 NVMe - 512gb", category: "Storage", brand: "NZXT", price: 129.99 , image:"https://gadgetsoman.com/storage/wp-legacy/2025/01/ad512GBS70M2P.webp" },
    { componnentname: "XPG Gammix S70 Blade Gen 4 M.2 - 512gb", category: "Storage", brand: "Corsair", price: 89.99 , image:"https://api.cazasouq.com/storage/v1/render/image/public/media-library/opencart/7a30557d0adbeb909e2e9ada5ee314a81c9bfbcc7d11f31c83690a1a363c9228.png?width=640&quality=70&resize=contain"},
    { componnentname: "XPG GAMMIX S60 Gen 4 NVME M.2 - Black - 512gb", category: "Storage", brand: "Lian Li", price: 149.99 , image:"https://chqgmmjhrrcjwtnbhcpr.supabase.co/storage/v1/object/public/media-library/opencart/4749b3e48bdec0f276ca27efdb3541207e6b505d09e792fb92ad3f6e5e010fcd.png" },

    { componnentname: "Gamdias Aura GC9M Elite ARGB Mini Tower Case - White", category: "case", brand: "Corsair", price: 129.99 , image:"https://www.gamdias.com/img/aura/case/AURA_GC9M_ELITE_WH_ARGB/AURA_GC9M_ELITE_WH_ARGB_Slogan.webp" },
    { componnentname: "Gamdias Aura GC7 ARGB Mid Tower Case", category: "case", brand: "EVGA", price: 99.99 , image:"https://www.gamdias.com/img/aura/case/AURA_GC7/AURA_GC7_Exh4.jpg" },
    { componnentname: "Gamdias Aura GC9M Elite ARGB Mini Tower Case - Black", category: "case", brand: "Seasonic", price: 169.99 , image:"https://chqgmmjhrrcjwtnbhcpr.supabase.co/storage/v1/object/public/media-library/opencart/9b2637e226d8035091dbea727c3b4e8491aa9990fdc9c6c6fcd60d2f680a5965.png" } ,
    { componnentname: "Gamdias Aura GC5 Elite ARGB Mid Tower Case", category: "case", brand: "Seasonic", price: 169.99 , image:"https://cdn.sanity.io/images/yqd1zell/production/a07f1ac34331c3edcef6ed46c1eab12becbc1a77-500x500.png" } ,
    { componnentname: "Gamdias Aura GC5 Elite ARGB Mid Tower Case - White", category: "case", brand: "Seasonic", price: 169.99 , image:"https://www.gamdias.com/img/aura/case/AURA_GC5_ELITE_WH_ARGB/AURA_GC5_ELITE_WH_ARGB_Slogan.webp"} ,

    { componnentname: "Asus Prime H610M-K DDR5 gaming motherboard", category: "MOTHERBOARD", brand: "Corsair", price: 129.99 , image:"https://dlcdnwebimgs.asus.com/gain/eb6af592-21fd-4592-81f3-d342cf769939/" },
    { componnentname: "Asus Prime H610M-K DDR5 ARGB gaming motherboard", category: "MOTHERBOARD", brand: "EVGA", price: 99.99 , image:"https://dlcdnwebimgs.asus.com/files/media/0101a1b3-64f3-4ad7-bccd-36fd62a13458/img/core/fan/fan-1.png" },
    { componnentname: "Colorful H610M-E M.2 V20 Motherboard", category: "MOTHERBOARD", brand: "Seasonic", price: 169.99 , image:"https://it.networkhub.vn/wp-content/uploads/2022/05/202203011337127185.jpg" } ,
    { componnentname: "Colorful Battle-AX B760M-K D5 V20 Motherboard", category: "MOTHERBOARD", brand: "Seasonic", price: 169.99 , image:"https://cdn.gccgamers.com/media/products/1fb5c1e6-7c50-45ec-869d-91828c0fb67e.webp" } ,
    { componnentname: "Gigabyte H810M H Motherboard", category: "MOTHERBOARD", brand: "Seasonic", price: 169.99 , image:"https://cdn.gccgamers.com/media/products/ccb8a280-5972-4c18-bb09-cf0a3488dfbb.webp" } ,
    
    { componnentname: "XPG Spectrix D35G DDR4 8gb - 3200Mhz (1x8gb) - Black", category: "RAM", brand: "Corsair", price: 129.99 , image:"https://cdn.gccgamers.com/media/products/d8cf957f-186b-4e02-b6e9-78df257b559a.webp"},
    { componnentname: "ADATA Premier DDR5 8GB 5600MHz U-DIMM - Single Stick", category: "RAM", brand: "EVGA", price: 99.99 , image:"https://i.ebayimg.com/images/g/beIAAOSwwiNnOZ71/s-l1600.webp"},
    { componnentname: "XPG GAMMIX D35 DDR4 16gb - 3600Mhz (2x8gb) - White", category: "RAM", brand: "Seasonic", price: 169.99 , image:"https://cdn.gccgamers.com/media/ex-products/fb22cda8-d413-4a83-aa1b-9cd86810a30d.webp" } ,
    { componnentname: "XPG Spectrix D60G DDR4 16GB - 3600Mhz (2x8Gb) - RGB", category: "RAM", brand: "Seasonic", price: 169.99 , image:"https://api.cazasouq.com/storage/v1/render/image/public/media-library/opencart/23930fcfdb39e30f15e4d5c3f71e6bc5bf576f9b59404a1e458e3c9adf65dd5f.png?width=1024&quality=70&resize=contain" } ,
    { componnentname: "XPG Armax DDR5 RGB 32GB - 6000MHz (2x16GB) - Black", category: "RAM", brand: "Seasonic", price: 169.99 , image:"https://cdn.gccgamers.com/media/ex-products/b30868bd-9c67-47a1-82ea-87ccf9ffc764.webp"} ,

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