'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// export default () => {
//   return (
//     <div>react server render Test1生阿萨德发生地方</div>
//   )
// }

var Test1 = function (_Component) {
  _inherits(Test1, _Component);

  function Test1(props) {
    _classCallCheck(this, Test1);

    var _this = _possibleConstructorReturn(this, (Test1.__proto__ || Object.getPrototypeOf(Test1)).call(this));

    _this.state = {
      type: props.type
    };
    return _this;
  }

  _createClass(Test1, [{
    key: 'compnentDidMount',
    value: function compnentDidMount() {
      setTimeout(function () {
        // 异步处理
      }, 2000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.type === false && _react2.default.createElement(
          'div',
          null,
          'react server render Test1\u554A\u5F53\u65F6\u53D1\u963F\u53D1\u9001\u77ED\u53D1\u65B9'
        ) || _react2.default.createElement(
          'div',
          null,
          'react server render Test1\u751Fasdfasdf\u5730'
        )
      );
    }
  }]);

  return Test1;
}(_react.Component);

Test1.defaultProps = {
  type: false
};
exports.default = Test1;