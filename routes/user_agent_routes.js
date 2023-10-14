const express = require("express");
const user_agent_routes_handler = require("../controller/user_agent_controller.js");

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

module.exports = route;

route.get('/user/:userId', user_agent_routes_handler.getByUser);
route.post('/', user_agent_routes_handler.createAgentsForUser);
route.delete('/user/:userId', user_agent_routes_handler.deleteAgentsForUser);