"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRPCQueryClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _tendermintRpc = require("@cosmjs/tendermint-rpc");
var _stargate = require("@cosmjs/stargate");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var createRPCQueryClient = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var rpcEndpoint, tmClient, client;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rpcEndpoint = _ref.rpcEndpoint;
          _context.next = 3;
          return _tendermintRpc.Tendermint34Client.connect(rpcEndpoint);
        case 3:
          tmClient = _context.sent;
          client = new _stargate.QueryClient(tmClient);
          _context.next = 7;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./app/v1alpha1/query.rpc.Query"));
          });
        case 7:
          _context.t0 = _context.sent.createRpcQueryExtension(client);
          _context.t1 = {
            v1alpha1: _context.t0
          };
          _context.next = 11;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./auth/v1beta1/query.rpc.Query"));
          });
        case 11:
          _context.t2 = _context.sent.createRpcQueryExtension(client);
          _context.t3 = {
            v1beta1: _context.t2
          };
          _context.next = 15;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./authz/v1beta1/query.rpc.Query"));
          });
        case 15:
          _context.t4 = _context.sent.createRpcQueryExtension(client);
          _context.t5 = {
            v1beta1: _context.t4
          };
          _context.next = 19;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./bank/v1beta1/query.rpc.Query"));
          });
        case 19:
          _context.t6 = _context.sent.createRpcQueryExtension(client);
          _context.t7 = {
            v1beta1: _context.t6
          };
          _context.next = 23;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./base/tendermint/v1beta1/query.rpc.Service"));
          });
        case 23:
          _context.t8 = _context.sent.createRpcQueryExtension(client);
          _context.t9 = {
            v1beta1: _context.t8
          };
          _context.t10 = {
            tendermint: _context.t9
          };
          _context.next = 28;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./distribution/v1beta1/query.rpc.Query"));
          });
        case 28:
          _context.t11 = _context.sent.createRpcQueryExtension(client);
          _context.t12 = {
            v1beta1: _context.t11
          };
          _context.next = 32;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./evidence/v1beta1/query.rpc.Query"));
          });
        case 32:
          _context.t13 = _context.sent.createRpcQueryExtension(client);
          _context.t14 = {
            v1beta1: _context.t13
          };
          _context.next = 36;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./feegrant/v1beta1/query.rpc.Query"));
          });
        case 36:
          _context.t15 = _context.sent.createRpcQueryExtension(client);
          _context.t16 = {
            v1beta1: _context.t15
          };
          _context.next = 40;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./gov/v1/query.rpc.Query"));
          });
        case 40:
          _context.t17 = _context.sent.createRpcQueryExtension(client);
          _context.next = 43;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./gov/v1beta1/query.rpc.Query"));
          });
        case 43:
          _context.t18 = _context.sent.createRpcQueryExtension(client);
          _context.t19 = {
            v1: _context.t17,
            v1beta1: _context.t18
          };
          _context.next = 47;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./group/v1/query.rpc.Query"));
          });
        case 47:
          _context.t20 = _context.sent.createRpcQueryExtension(client);
          _context.t21 = {
            v1: _context.t20
          };
          _context.next = 51;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./mint/v1beta1/query.rpc.Query"));
          });
        case 51:
          _context.t22 = _context.sent.createRpcQueryExtension(client);
          _context.t23 = {
            v1beta1: _context.t22
          };
          _context.next = 55;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./nft/v1beta1/query.rpc.Query"));
          });
        case 55:
          _context.t24 = _context.sent.createRpcQueryExtension(client);
          _context.t25 = {
            v1beta1: _context.t24
          };
          _context.next = 59;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./params/v1beta1/query.rpc.Query"));
          });
        case 59:
          _context.t26 = _context.sent.createRpcQueryExtension(client);
          _context.t27 = {
            v1beta1: _context.t26
          };
          _context.next = 63;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./slashing/v1beta1/query.rpc.Query"));
          });
        case 63:
          _context.t28 = _context.sent.createRpcQueryExtension(client);
          _context.t29 = {
            v1beta1: _context.t28
          };
          _context.next = 67;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./staking/v1beta1/query.rpc.Query"));
          });
        case 67:
          _context.t30 = _context.sent.createRpcQueryExtension(client);
          _context.t31 = {
            v1beta1: _context.t30
          };
          _context.next = 71;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./tx/v1beta1/service.rpc.Service"));
          });
        case 71:
          _context.t32 = _context.sent.createRpcQueryExtension(client);
          _context.t33 = {
            v1beta1: _context.t32
          };
          _context.next = 75;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./upgrade/v1beta1/query.rpc.Query"));
          });
        case 75:
          _context.t34 = _context.sent.createRpcQueryExtension(client);
          _context.t35 = {
            v1beta1: _context.t34
          };
          _context.t36 = {
            app: _context.t1,
            auth: _context.t3,
            authz: _context.t5,
            bank: _context.t7,
            base: _context.t10,
            distribution: _context.t12,
            evidence: _context.t14,
            feegrant: _context.t16,
            gov: _context.t19,
            group: _context.t21,
            mint: _context.t23,
            nft: _context.t25,
            params: _context.t27,
            slashing: _context.t29,
            staking: _context.t31,
            tx: _context.t33,
            upgrade: _context.t35
          };
          return _context.abrupt("return", {
            cosmos: _context.t36
          });
        case 79:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createRPCQueryClient(_x) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createRPCQueryClient = createRPCQueryClient;