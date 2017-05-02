'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  render: function render() {
    var self = this;

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        'JSX Hello World!'
      ),
      React.createElement(
        'div',
        { className: 'haha' },
        self.props.lala
      )
    );
  }
});