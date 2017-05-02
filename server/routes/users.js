const router = require('koa-router')()
const { reactSeverRender } = require('../../utils')
const Test2 = require('../components/Test2')
const Test1 = require('../components/Test1').default

router.prefix('/users')

router.get('/', async (ctx, next) => {
  let haha = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('asdfasdfasdf')
    },3000)
  })

  ctx.body = await haha.then(res => res)
})

router.get('/bar', (ctx,next) => {
  ctx.body = reactSeverRender(Test1,{lala:'cao ni lala!'})
})

module.exports = router;