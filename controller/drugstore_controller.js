const drugstores = require("../drug_stores.json");

const getAllDrugstores = async (req, res) => {
    try {
        return res.json(drugstores);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: err });
    }
};

const getDrugstoreByCity = async (req, res) => {
    try {
        let results = [];

        for (let i = 0; i < drugstores.length; i++) {
            if (drugstores[i]['location'] === req.params.location) {
                let obj = {
                    address: drugstores[i]['address'],
                    city: drugstores[i]['location'],
                    drugstoreName: drugstores[i]['name']
                }
                results.push(obj);
            } else {
                continue;
            }
        }

        return res.json(results);
    } catch (err) {
        return res.status(500).json({ err: err });
    }
};

module.exports = {
    getAllDrugstores,
    getDrugstoreByCity
}