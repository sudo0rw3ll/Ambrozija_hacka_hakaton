const { sequelize, Agent, Medicine, User, Plant } = require("../models");

const createAgent = async (req, res) => {
    try {
        const newAgent = await Agent.create(req.body);

        return res.json(newAgent);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: err });
    }
};

const deleteAgent = async (req, res) => {
    try {
        const agentToDelete = await Agent.findByPk(req.params.agentId);

        await agentToDelete.destroy();

        return res.json(agentToDelete);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: err });
    }
};

module.exports = {
    createAgent,
    deleteAgent
}