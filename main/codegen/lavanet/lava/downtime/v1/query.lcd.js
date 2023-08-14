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
    this.queryParams = this.queryParams.bind(this);
    this.queryDowntime = this.queryDowntime.bind(this);
  }
  /* QueryParams */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "queryParams",
    value: function () {
      var _queryParams = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _params,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              endpoint = "lavanet/lava/downtime/v1/params";
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
      function queryParams() {
        return _queryParams.apply(this, arguments);
      }
      return queryParams;
    }() /* QueryDowntime */
  }, {
    key: "queryDowntime",
    value: function () {
      var _queryDowntime = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.startBlock) !== "undefined") {
                options.params.start_block = params.startBlock;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.endBlock) !== "undefined") {
                options.params.end_block = params.endBlock;
              }
              endpoint = "lavanet/lava/downtime/v1/query_downtime";
              _context2.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context2.abrupt("return", _context2.sent);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function queryDowntime(_x) {
        return _queryDowntime.apply(this, arguments);
      }
      return queryDowntime;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;