(function(){
  var React = require('react')
  var ReactDOM = require('react-dom')
  var Test1 = require('../src/components/Test1').default

  var clickDom = document.getElementById('click')

  clickDom.onclick = function(){
    ReactDOM.render(<Test1 type={true} />,click)
  }
})()
