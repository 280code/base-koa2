const router = require('koa-router')()
const demoController = require('../controllers/demo')

const routers = router
  .post('/demo', demoController.demo)

module.exports = routers