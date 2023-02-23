'use strict';

/**
 * master controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::master.master');
