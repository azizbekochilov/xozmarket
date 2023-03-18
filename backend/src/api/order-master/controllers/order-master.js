'use strict';

/**
 * order-master controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order-master.order-master');
