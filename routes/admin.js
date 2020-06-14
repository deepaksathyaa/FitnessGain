const express = require('express');

const adminRoutes = require('../controller/admin');

const routes = express.Router();

routes.get("/add",adminRoutes.getaddProduct);

routes.post("/add",adminRoutes.postaddProduct);

module.exports = routes;