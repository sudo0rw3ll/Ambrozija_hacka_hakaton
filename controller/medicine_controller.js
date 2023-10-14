const { sequelize, Medicine } = require("../models");
const drugstores = require('../drug_stores.json');

const getAllMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.findAll();

        return res.json(medicines);
    } catch (err) {
        return res.status(500).json({ err: err });
    }
};

const getMedicineById = async (req, res) => {
    try {
        const medicine = await Medicine.findByPk(req.params.id);

        return res.json(medicine);
    } catch (err) {
        return res.status(500).json({ err: err });
    }
}

const getMedicineByName = async (req, res) => {
    try {
        const medicineByName = await Medicine.findOne({
            where: {
                name: req.params.name
            }
        });

        return res.json(medicineByName);
    } catch (err) {
        return res.status(500).json({ err: err });
    }
}

module.exports = {
    getAllMedicines,
    getMedicineById,
    getMedicineByName
}
