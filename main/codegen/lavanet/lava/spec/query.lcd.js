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
var _helpers = require("../../../helpers");
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.spec = this.spec.bind(this);
    this.specAll = this.specAll.bind(this);
    this.specRaw = this.specRaw.bind(this);
    this.specAllRaw = this.specAllRaw.bind(this);
    this.showAllChains = this.showAllChains.bind(this);
    this.showChainInfo = this.showChainInfo.bind(this);
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
              endpoint = "lavanet/lava/spec/params";
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
    }() /* Queries a Spec by id. */
  }, {
    key: "spec",
    value: function () {
      var _spec = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "lavanet/lava/spec/spec/".concat(params.ChainID);
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
      function spec(_x) {
        return _spec.apply(this, arguments);
      }
      return spec;
    }() /* Queries a list of Spec items. */
  }, {
    key: "specAll",
    value: function () {
      var _specAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var params,
          options,
          endpoint,
          _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "lavanet/lava/spec/spec";
              _context3.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context3.abrupt("return", _context3.sent);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function specAll() {
        return _specAll.apply(this, arguments);
      }
      return specAll;
    }() /* Queries a Spec by id (raw form). */
  }, {
    key: "specRaw",
    value: function () {
      var _specRaw = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              endpoint = "lavanet/lava/spec/spec_raw/".concat(params.ChainID);
              _context4.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context4.abrupt("return", _context4.sent);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function specRaw(_x2) {
        return _specRaw.apply(this, arguments);
      }
      return specRaw;
    }() /* Queries a list of Spec items (raw form). */
  }, {
    key: "specAllRaw",
    value: function () {
      var _specAllRaw = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var params,
          options,
          endpoint,
          _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              params = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "lavanet/lava/spec/spec_raw";
              _context5.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context5.abrupt("return", _context5.sent);
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function specAllRaw() {
        return _specAllRaw.apply(this, arguments);
      }
      return specAllRaw;
    }() /* Queries a list of ShowAllChains items. */
  }, {
    key: "showAllChains",
    value: function () {
      var _showAllChains = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var _params,
          endpoint,
          _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _params = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
              endpoint = "lavanet/lava/spec/show_all_chains";
              _context6.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context6.abrupt("return", _context6.sent);
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function showAllChains() {
        return _showAllChains.apply(this, arguments);
      }
      return showAllChains;
    }() /* Queries a list of ShowChainInfo items. */
  }, {
    key: "showChainInfo",
    value: function () {
      var _showChainInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              endpoint = "lavanet/lava/spec/show_chain_info/".concat(params.chainName);
              _context7.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context7.abrupt("return", _context7.sent);
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function showChainInfo(_x3) {
        return _showChainInfo.apply(this, arguments);
      }
      return showChainInfo;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;