var router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index')
})

router.get('/foo', async (ctx, next) => {
  ctx.state = {
    title: 'koa2 foot'
  }

  await ctx.render('index')
});

module.exports = router
