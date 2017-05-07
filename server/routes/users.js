const router = require('koa-router')()
const babel = require('babel-core')
const Path = require('path')
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

router.get('/bar', async (ctx,next) => {
  // const lala = babel.transformFileSync(Path.join(__dirname,'../../src/components/Test1.js')).code
  // console.log(Test1)
  // console.log(lala)

  ctx.state = {
    title:'xixi',
    view:reactSeverRender(Test1,{lala:'cao ni lala!'})
  }

  await ctx.render('index')
})

module.exports = router
