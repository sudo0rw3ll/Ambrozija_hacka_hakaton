const express = require('express');
const { sequelize, Medicine } = require('./models');

const medicines = require("./medicines.json");
const drugstores = require("./drug_stores.json");

const app = express();

async function insertMedicines() {
    try {
        for (let i = 0; i < medicines.length; i++) {

            const medicineObj = {
                search: medicines[i]["name"],
            }

            await Medicine.create();
        }
    } catch (err) {
        console.log(err);
    }
}

function parseMedicine(medicine) {
    const searchMed = medicine["name"];
    const medName = medicine["name"].split(",")[0];
    let nameParts = medName.split(" ");

    let finalName = nameParts[0].replace(nameParts[0][nameParts[0].length - 1], '');

    for (let i = 1; i < nameParts.length; i++) {
        finalName = finalName + " " + nameParts[i];
    }

    const dosageExtracted = extractDosage(searchMed);

    const obj = {
        name: finalName,
        search: searchMed,
        amount: dosageExtracted
    };

    return obj;
}

function extractDosage(inputString) {
    const dosageRegex = /(?:[^,]*,){1}([^,]+[+,]\s*[^,]+|[^,]+)/;
    const match = inputString.match(dosageRegex);
    return match ? match[1].trim() : null;
}

async function insertMedicines() {
    try {
        for (let i = 0; i < 100; i++) {
            await Medicine.create(parseMedicine(medicines[i]));
        }
    } catch (err) {
        console.log(err);
    }

    console.log("Finished insert!");
}

async function insertDrugStores() {
    try {

    } catch (err) {
        console.log(err);
    }

    console.log("finished insert of drugstores!");
}

const med_routes = require("./routes/medicine_routes.js");
app.use("/medicines", med_routes);

const drugstore_routes = require("./routes/drugstore_routes.js");
app.use("/drugstores", drugstore_routes);

const user_agent_routes = require("./routes/user_agent_routes.js");
app.use("/useragents", user_agent_routes);

const stat_routes = require("./routes/stat_routes.js");
app.use("/stats", stat_routes);

const plant_routes = require("./routes/plant_routes.js");
app.use("/plants", plant_routes);

const user_routes = require("./routes/user_routes.js");
app.use("/users", user_routes);

app.listen({ port: 2023 }, async () => {
    // await insertMedicines();
    console.log("Server started at port 2023");
});

module.exports = app;