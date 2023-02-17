const router = require('koa-router')()
const demoController = require('../controllers/demo')

const routers = router
  .post('/demo', demoController.demo)
  .get('/get', demoController.get)
  .post('/post', demoController.post)

module.exports = routers