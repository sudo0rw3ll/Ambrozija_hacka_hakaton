const express = require('express');
const medicines = require('../medicines.json');

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

module.exports = route;