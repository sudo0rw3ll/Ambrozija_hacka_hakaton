const { sequelize, UserAgent, History } = require("../models");

const getHistory = async (req, res) => {
    try {
        const history = await History.findAll();

        return res.json(history);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};

const getHistoryForUser = async (req, res) => {
    try {
        const userAgentsPerUser = await UserAgent.findAll({ where: { userId: req.params.userId } });
        const history = await History.findAll();

        let userHistory = [];

        for (let i = 0; i < history.length; i++) {
            for (let j = 0; j < userAgentsPerUser.length; j++) {
                if (history[i]['userAgentId'] == userAgentsPerUser[j]['id']) {
                    userHistory.push(history[i]);
                    break;
                } else {
                    continue;
                }
            }
        }

        return res.json(userHistory);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};

const createHistory = async (req, res) => {
    try {
        const newHistory = await History.create(req.body);

        return res.json(newHistory);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: err });
    }
};

const deleteHistoryForUser = async (req, res) => {
    try {
        const userAgentsForUser = await UserAgent.findAll({
            where: {
                userId: req.params.userId
            }
        });

        const history = await History.findAll();

        for (let i = 0; i < history.length; i++) {
            let historyObj = history[i];
            await historyObj.destroy();
        }

        return res.json({ msg: "Deleted history for user!" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err: err });
    }
};

module.exports = {
    getHistory,
    getHistoryForUser,
    deleteHistoryForUser
}