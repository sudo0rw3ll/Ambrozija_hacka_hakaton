const express = require('express');

const medicine_route_handler = require("../controller/medicine_controller");

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

module.exports = route;

route.get("/", medicine_route_handler.getAllMedicines);
route.get("/:id", medicine_route_handler.getMedicineById);
route.get("/name/:name", medicine_route_handler.getMedicineByName);