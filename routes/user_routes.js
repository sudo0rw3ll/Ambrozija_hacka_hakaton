const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { sequelize, User } = require("../models");

require('dotenv').config();

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

module.exports = route;

route.post('/register', (req, res) => {
    const obj = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        date_of_birth: req.body.date_of_birth,
        email: req.body.email
    };

    User.create(obj).then(rows => {
        const user = {
            userId: rows.id,
            user: rows.username
        };

        const token = jwt.sign(user, process.env.SECRET);

        console.log(token);

        res.json({ token: token });
    }).catch(err => res.status(500).json(err));
});

route.post('/login', (req, res) => {
    User.findOne({ where: { username: req.body.username } })
        .then(user => {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const obj = {
                    userId: user.id,
                    user: user.username
                };

                const token = jwt.sign(obj, process.env.SECRET);

                res.json({ token: token });
            } else {
                res.status(400).json({ msg: "Invalid credentials" });
            }
        }).catch(err => res.status(500).json(err));
});

route.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)

        return res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

route.put('/:id', async (req, res) => {
    try {
        const userToEdit = await User.findByPk(req.params.id);

        userToEdit.username = req.body.username;
        userToEdit.email = req.body.email;
        userToEdit.date_of_birth = req.body.date_of_birth;
        userToEdit.password = bcrypt.hashSync(req.body.password, 10);

        await userToEdit.save();

        return res.json(userToEdit);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});