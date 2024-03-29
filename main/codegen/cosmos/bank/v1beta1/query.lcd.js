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
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
  }
  /* Balance queries the balance of a single coin for a single account. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "balance",
    value: function () {
      var _balance = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              endpoint = "cosmos/bank/v1beta1/balances/".concat(params.address, "/by_denom");
              _context.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context.abrupt("return", _context.sent);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function balance(_x) {
        return _balance.apply(this, arguments);
      }
      return balance;
    }() /* AllBalances queries the balance of all coins for a single account. */
  }, {
    key: "allBalances",
    value: function () {
      var _allBalances = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/bank/v1beta1/balances/".concat(params.address);
              _context2.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context2.abrupt("return", _context2.sent);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function allBalances(_x2) {
        return _allBalances.apply(this, arguments);
      }
      return allBalances;
    }()
    /* SpendableBalances queries the spenable balance of all coins for a single
     account. */
  }, {
    key: "spendableBalances",
    value: function () {
      var _spendableBalances = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/bank/v1beta1/spendable_balances/".concat(params.address);
              _context3.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context3.abrupt("return", _context3.sent);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function spendableBalances(_x3) {
        return _spendableBalances.apply(this, arguments);
      }
      return spendableBalances;
    }() /* TotalSupply queries the total supply of all coins. */
  }, {
    key: "totalSupply",
    value: function () {
      var _totalSupply = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var params,
          options,
          endpoint,
          _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              params = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/bank/v1beta1/supply";
              _context4.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context4.abrupt("return", _context4.sent);
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function totalSupply() {
        return _totalSupply.apply(this, arguments);
      }
      return totalSupply;
    }() /* SupplyOf queries the supply of a single coin. */
  }, {
    key: "supplyOf",
    value: function () {
      var _supplyOf = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
                options.params.denom = params.denom;
              }
              endpoint = "cosmos/bank/v1beta1/supply/by_denom";
              _context5.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context5.abrupt("return", _context5.sent);
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function supplyOf(_x4) {
        return _supplyOf.apply(this, arguments);
      }
      return supplyOf;
    }() /* Params queries the parameters of x/bank module. */
  }, {
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var _params,
          endpoint,
          _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _params = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
              endpoint = "cosmos/bank/v1beta1/params";
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
      function params() {
        return _params2.apply(this, arguments);
      }
      return params;
    }() /* DenomsMetadata queries the client metadata of a given coin denomination. */
  }, {
    key: "denomMetadata",
    value: function () {
      var _denomMetadata = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              endpoint = "cosmos/bank/v1beta1/denoms_metadata/".concat(params.denom);
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
      function denomMetadata(_x5) {
        return _denomMetadata.apply(this, arguments);
      }
      return denomMetadata;
    }()
    /* DenomsMetadata queries the client metadata for all registered coin
     denominations. */
  }, {
    key: "denomsMetadata",
    value: function () {
      var _denomsMetadata = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        var params,
          options,
          endpoint,
          _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              params = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/bank/v1beta1/denoms_metadata";
              _context8.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context8.abrupt("return", _context8.sent);
            case 7:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function denomsMetadata() {
        return _denomsMetadata.apply(this, arguments);
      }
      return denomsMetadata;
    }()
    /* DenomOwners queries for all account addresses that own a particular token
     denomination. */
  }, {
    key: "denomOwners",
    value: function () {
      var _denomOwners = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/bank/v1beta1/denom_owners/".concat(params.denom);
              _context9.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context9.abrupt("return", _context9.sent);
            case 6:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function denomOwners(_x6) {
        return _denomOwners.apply(this, arguments);
      }
      return denomOwners;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;