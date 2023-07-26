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
var _helpers = require("../helpers");
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.providers = this.providers.bind(this);
    this.getPairing = this.getPairing.bind(this);
    this.verifyPairing = this.verifyPairing.bind(this);
    this.uniquePaymentStorageClientProvider = this.uniquePaymentStorageClientProvider.bind(this);
    this.uniquePaymentStorageClientProviderAll = this.uniquePaymentStorageClientProviderAll.bind(this);
    this.providerPaymentStorage = this.providerPaymentStorage.bind(this);
    this.providerPaymentStorageAll = this.providerPaymentStorageAll.bind(this);
    this.epochPayments = this.epochPayments.bind(this);
    this.epochPaymentsAll = this.epochPaymentsAll.bind(this);
    this.userEntry = this.userEntry.bind(this);
    this.staticProvidersList = this.staticProvidersList.bind(this);
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
              endpoint = "lavanet/lava/pairing/params";
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
    }() /* Queries a list of Providers items. */
  }, {
    key: "providers",
    value: function () {
      var _providers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.showFrozen) !== "undefined") {
                options.params.showFrozen = params.showFrozen;
              }
              endpoint = "lavanet/lava/pairing/providers/".concat(params.chainID);
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
      function providers(_x) {
        return _providers.apply(this, arguments);
      }
      return providers;
    }() /* Queries a list of GetPairing items. */
  }, {
    key: "getPairing",
    value: function () {
      var _getPairing = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              endpoint = "lavanet/lava/pairing/get_pairing/".concat(params.chainID, "/").concat(params.client);
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
      function getPairing(_x2) {
        return _getPairing.apply(this, arguments);
      }
      return getPairing;
    }() /* Queries a list of VerifyPairing items. */
  }, {
    key: "verifyPairing",
    value: function () {
      var _verifyPairing = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              endpoint = "lavanet/lava/pairing/verify_pairing/".concat(params.chainID, "/").concat(params.client, "/").concat(params.provider, "/").concat(params.block);
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
      function verifyPairing(_x3) {
        return _verifyPairing.apply(this, arguments);
      }
      return verifyPairing;
    }() /* Queries a UniquePaymentStorageClientProvider by index. */
  }, {
    key: "uniquePaymentStorageClientProvider",
    value: function () {
      var _uniquePaymentStorageClientProvider = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              endpoint = "lavanet/lava/pairing/unique_payment_storage_client_provider/".concat(params.index);
              _context5.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context5.abrupt("return", _context5.sent);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function uniquePaymentStorageClientProvider(_x4) {
        return _uniquePaymentStorageClientProvider.apply(this, arguments);
      }
      return uniquePaymentStorageClientProvider;
    }() /* Queries a list of UniquePaymentStorageClientProvider items. */
  }, {
    key: "uniquePaymentStorageClientProviderAll",
    value: function () {
      var _uniquePaymentStorageClientProviderAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var params,
          options,
          endpoint,
          _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              params = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "lavanet/lava/pairing/unique_payment_storage_client_provider";
              _context6.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context6.abrupt("return", _context6.sent);
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function uniquePaymentStorageClientProviderAll() {
        return _uniquePaymentStorageClientProviderAll.apply(this, arguments);
      }
      return uniquePaymentStorageClientProviderAll;
    }() /* Queries a ProviderPaymentStorage by index. */
  }, {
    key: "providerPaymentStorage",
    value: function () {
      var _providerPaymentStorage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              endpoint = "lavanet/lava/pairing/provider_payment_storage/".concat(params.index);
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
      function providerPaymentStorage(_x5) {
        return _providerPaymentStorage.apply(this, arguments);
      }
      return providerPaymentStorage;
    }() /* Queries a list of ProviderPaymentStorage items. */
  }, {
    key: "providerPaymentStorageAll",
    value: function () {
      var _providerPaymentStorageAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
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
              endpoint = "lavanet/lava/pairing/provider_payment_storage";
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
      function providerPaymentStorageAll() {
        return _providerPaymentStorageAll.apply(this, arguments);
      }
      return providerPaymentStorageAll;
    }() /* Queries a EpochPayments by index. */
  }, {
    key: "epochPayments",
    value: function () {
      var _epochPayments = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              endpoint = "lavanet/lava/pairing/epoch_payments/".concat(params.index);
              _context9.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context9.abrupt("return", _context9.sent);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function epochPayments(_x6) {
        return _epochPayments.apply(this, arguments);
      }
      return epochPayments;
    }() /* Queries a list of EpochPayments items. */
  }, {
    key: "epochPaymentsAll",
    value: function () {
      var _epochPaymentsAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        var params,
          options,
          endpoint,
          _args10 = arguments;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              params = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "lavanet/lava/pairing/epoch_payments";
              _context10.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context10.abrupt("return", _context10.sent);
            case 7:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function epochPaymentsAll() {
        return _epochPaymentsAll.apply(this, arguments);
      }
      return epochPaymentsAll;
    }() /* Queries a UserEntry items. */
  }, {
    key: "userEntry",
    value: function () {
      var _userEntry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.block) !== "undefined") {
                options.params.block = params.block;
              }
              endpoint = "lavanet/lava/pairing/user_entry/".concat(params.address, "/").concat(params.chainID);
              _context11.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context11.abrupt("return", _context11.sent);
            case 6:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function userEntry(_x7) {
        return _userEntry.apply(this, arguments);
      }
      return userEntry;
    }() /* Queries a list of StaticProvidersList items. */
  }, {
    key: "staticProvidersList",
    value: function () {
      var _staticProvidersList = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              endpoint = "lavanet/lava/pairing/static_providers_list/".concat(params.chainID);
              _context12.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context12.abrupt("return", _context12.sent);
            case 4:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function staticProvidersList(_x8) {
        return _staticProvidersList.apply(this, arguments);
      }
      return staticProvidersList;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;