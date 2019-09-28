// Use this when you don't need to do any verification or authentication on the request. Just using Prisma's query as is.

const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db'),
};

module.exports = Query;
