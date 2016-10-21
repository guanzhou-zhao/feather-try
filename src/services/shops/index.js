'use strict';

const service = require('feathers-sequelize');
const shops = require('./shops-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: shops(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/shops', service(options));

  // Get our initialize service to that we can bind hooks
  const shopsService = app.service('/shops');

  // Set up our before hooks
  shopsService.before(hooks.before);

  // Set up our after hooks
  shopsService.after(hooks.after);
};
