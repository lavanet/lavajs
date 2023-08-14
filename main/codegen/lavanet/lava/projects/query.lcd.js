"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LCDQueryClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.info = this.info.bind(this);
    this.developer = this.developer.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _params,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              endpoint = "lavanet/lava/projects/params";
              _context.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context.abrupt("return", _context.sent);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function params() {
        return _params2.apply(this, arguments);
      }
      return params;
    }() /* Queries a list of ShowProject items. */
  }, {
    key: "info",
    value: function () {
      var _info = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "lavanet/lava/projects/info/".concat(params.project);
              _context2.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function info(_x) {
        return _info.apply(this, arguments);
      }
      return info;
    }() /* Queries a list of ShowDevelopersProject items. */
  }, {
    key: "developer",
    value: function () {
      var _developer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              endpoint = "lavanet/lava/projects/developer/".concat(params.developer);
              _context3.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context3.abrupt("return", _context3.sent);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function developer(_x2) {
        return _developer.apply(this, arguments);
      }
      return developer;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;