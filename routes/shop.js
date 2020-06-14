const express = require('express');


const routes = express.Router();

const path = require('path');



const shopRoutes = require('../controller/shop');



routes.post("/index",shopRoutes.postindex);

routes.get("/index",shopRoutes.getindex);

routes.post("/videos",shopRoutes.postvideos);

routes.get("/videos",shopRoutes.getvideos)

routes.use("/caloriesfinder",shopRoutes.getcalories);

routes.use("/chest",shopRoutes.getchest);

routes.use("/arm",shopRoutes.getarm);

routes.use("/abs",shopRoutes.getabs);

routes.use("/leg",shopRoutes.getleg);
//routes.use("/about",shopRoutes.getabout);

module.exports = routes;