const { sequelize, Plant } = require('../models');

const getPlants = async (req, res) => {
    try {
        const plants = await Plant.findAll();

        return res.json(plants);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: err });
    }
};

const getPlant = async (req, res) => {
    try {
        const plant = await Plant.findByPk(req.params.plantId);

        return res.json(plant);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: err });
    }
};

const createPlant = async (req, res) => {
    try {
        const newPlant = await Plant.create(req.body);

        return res.json(newPlant);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: err });
    }
};

const deletePlant = async (req, res) => {
    try {
        const plantToDelete = await Plant.findByPk(req.params.plantId);

        await plantToDelete.destroy();

        return res.json(plantToDelete);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: err });
    }
};

module.exports = {
    getPlants,
    getPlant,
    createPlant,
    deletePlant
}