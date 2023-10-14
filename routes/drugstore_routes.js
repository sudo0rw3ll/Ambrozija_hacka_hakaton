const express = require("express");
const drugstore_route_handler = require("../controller/drugstore_controller");

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

module.exports = route;

route.get("/", drugstore_route_handler.getAllDrugstores);
route.get("/:location", drugstore_route_handler.getDrugstoreByCity);