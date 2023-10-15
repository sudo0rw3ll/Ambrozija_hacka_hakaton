const express = require("express");
const history_route_controller = require("../controller/history_controller.js");

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

module.exports = route;

route.get("/", history_route_controller.getHistory);
route.get("/:userID", history_route_controller.getHistoryForUser);
route.delete("/:userId", history_route_controller.deleteHistoryForUser);
route.post("/", history_route_controller.createHistory);