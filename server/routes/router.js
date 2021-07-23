const route = require('express').Router();
const services = require('../services/render');
const controller = require('../controller/controller')

/**
 * @desciption add user
 * @method GET/add-user
 */
route.get('/add-user',services.addRoute);

/**
 * @description update user
 * @method GET/update-user
 */
route.get('/update-user',services.updateRoute);

/**
 * @description home page
 * @method GET/ 
 */
route.get('/',services.homeRoute);

//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports = route;