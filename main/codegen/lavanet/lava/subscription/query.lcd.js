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
    this.current = this.current.bind(this);
    this.listProjects = this.listProjects.bind(this);
    this.list = this.list.bind(this);
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
              endpoint = "lavanet/lava/subscription/params";
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
    }() /* Queries a list of Current items. */
  }, {
    key: "current",
    value: function () {
      var _current = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "lavanet/lava/subscription/current/".concat(params.consumer);
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
      function current(_x) {
        return _current.apply(this, arguments);
      }
      return current;
    }() /* Queries a list of ListProjects items. */
  }, {
    key: "listProjects",
    value: function () {
      var _listProjects = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              endpoint = "lavanet/lava/subscription/list_projects/".concat(params.subscription);
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
      function listProjects(_x2) {
        return _listProjects.apply(this, arguments);
      }
      return listProjects;
    }() /* Queries a list of List items. */
  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _params,
          endpoint,
          _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _params = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
              endpoint = "lavanet/lava/subscription/list";
              _context4.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context4.abrupt("return", _context4.sent);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function list() {
        return _list.apply(this, arguments);
      }
      return list;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;