const { sequelize, Stats } = require("../models");

const getAllStats = async (req, res) => {
    try {
        const stats = await Stats.findAll({ where: { location: req.params.location } });
        const sortOpt = req.params.sort;

        if (sortOpt == "ASC") {
            stats.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else {
            stats.sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        return res.json(stats);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: err });
    }
};

const getStatsFromModel = async (req, res) => {
    try {
        // fetch the model with the current date
        // receive the data
        // insert data into the table
        // data will be used for display
    } catch (err) {
        return res.status(500).json({ err: err });
    }
};

module.exports = {
    getAllStats,
    getStatsFromModel
}