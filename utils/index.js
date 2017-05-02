const React = require('react')
const { renderToString,renderToStaticMarkup } = require('react-dom/server')

exports.reactSeverRender = (component,data) => {
  return renderToStaticMarkup(
    React.createFactory(component)(data)
  )
}
