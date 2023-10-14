const express = require('express');
const stats_route_handler = require('../controller/stats_controller.js');
const route = express.Router();


route.use(express.json());
route.use(express.urlencoded({ extended: true }));

module.exports = route;

route.get("/:sort/city/:location", stats_route_handler.getAllStats);
route.post("/:date/:location", stats_route_handler.getStatsFromModel);