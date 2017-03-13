// index router
const Router = require('koa-router')
const controller = require('../controller')
const router = new Router()

router
    .get('/', controller.getHandle)
    .post('/', controller.postHandle)

module.exports = router