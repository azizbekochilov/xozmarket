'use strict';

/**
 * order-master service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-master.order-master');
