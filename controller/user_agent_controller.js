const { sequelize, UserAgent, Agent, User, Plant, Medicine } = require('../models');

const getByUser = async (req, res) => {
    try {
        const agents = await Agent.findAll();

        const userAgents = await UserAgent.findAll({ where: { userId: req.params.userId } });

        let agentIds = [];

        for (let i = 0; i < userAgents.length; i++) {
            agentIds.push(userAgents[i]['agentId']);
        }

        let results = [];

        for (let i = 0; i < agentIds.length; i++) {
            for (let j = 0; j < agents.length; j++) {
                if (agentIds[i] == agents[j]['id']) {
                    let plantt = await Plant.findByPk(agents[j]['plantId']);
                    let medicinee = await Medicine.findByPk(agents[j]['medicineId']);

                    let obj = {
                        agentId: agents[j]['id'],
                        plant: plantt.name,
                        medicine: medicinee.name,
                        amount: medicinee.amount
                    }

                    results.push(obj);
                }
            }
        }

        return res.json(results);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};

const createAgentsForUser = async (req, res) => {
    try {
        let agents = req.body.agents;

        for (let i = 0; i < agents.length; i++) {
            let obj = {
                agentId: agents[i],
                userId: req.body.userId
            }

            await UserAgent.create(obj);
        }

        return res.json({ msg: "Created all agents for user!" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: err });
    }
};

const deleteAgentForUser = async (req, res) => {
    try {
        const agentToDelete = await Agent.findByPk(req.params.agentId);

        await agentToDelete.destroy();

        return res.json(agentToDelete);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};

const deleteAgentsForUser = async (req, res) => {
    try {
        const agentsForUserToDelete = await UserAgent.findAll({
            where: {
                userId: req.body.userId
            }
        });

        for (let i = 0; i < agentsForUserToDelete.length; i++) {
            await agentsForUserToDelete[i].destroy();
        }

        return res.json({ msg: "Deleted all!" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: err });
    }
}

module.exports = {
    getByUser,
    createAgentsForUser,
    deleteAgentsForUser,
    deleteAgentForUser
}