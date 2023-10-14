const express = require("express");
const plant_route_handler = require("../controller/plant_controller.js");

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));


module.exports = route;

route.get("/", plant_route_handler.getPlants);
route.get("/:plantId", plant_route_handler.getPlant);
route.post("/", plant_route_handler.createPlant);
route.delete("/:plantId", plant_route_handler.deletePlant);
