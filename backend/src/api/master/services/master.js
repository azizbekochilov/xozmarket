'use strict';

/**
 * master service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::master.master');
