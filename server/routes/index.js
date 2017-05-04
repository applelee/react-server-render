var router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.state = {
    title: 'koa2 title',
    view: 'haha'
  }

  await ctx.render('index')
})

router.get('/foo', async (ctx, next) => {
  ctx.state = {
    title: 'koa2 foot',
    view: 'haha'
  }

  await ctx.render('index')
})

module.exports = router
