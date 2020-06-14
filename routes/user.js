const express = require('express');

const routes = express.Router();

const userRoutes = require('../controller/user');


routes.use("/signup",userRoutes.register);



routes.get("/login",userRoutes.login);

routes.post("/index",userRoutes.postregister);




module.exports = routes;