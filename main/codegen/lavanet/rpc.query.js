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
            return _interopRequireWildcard(require("../proto/conflict/query.rpc.Query"));
          });
        case 7:
          _context.t0 = _context.sent.createRpcQueryExtension(client);
          _context.next = 10;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../proto/epochstorage/query.rpc.Query"));
          });
        case 10:
          _context.t1 = _context.sent.createRpcQueryExtension(client);
          _context.next = 13;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../proto/pairing/query.rpc.Query"));
          });
        case 13:
          _context.t2 = _context.sent.createRpcQueryExtension(client);
          _context.next = 16;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../proto/plans/query.rpc.Query"));
          });
        case 16:
          _context.t3 = _context.sent.createRpcQueryExtension(client);
          _context.next = 19;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../proto/projects/query.rpc.Query"));
          });
        case 19:
          _context.t4 = _context.sent.createRpcQueryExtension(client);
          _context.next = 22;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../spec/query.rpc.Query"));
          });
        case 22:
          _context.t5 = _context.sent.createRpcQueryExtension(client);
          _context.next = 25;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../subscription/query.rpc.Query"));
          });
        case 25:
          _context.t6 = _context.sent.createRpcQueryExtension(client);
          _context.t7 = {
            conflict: _context.t0,
            epochstorage: _context.t1,
            pairing: _context.t2,
            plans: _context.t3,
            projects: _context.t4,
            spec: _context.t5,
            subscription: _context.t6
          };
          _context.t8 = {
            lava: _context.t7
          };
          _context.next = 30;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/app/v1alpha1/query.rpc.Query"));
          });
        case 30:
          _context.t9 = _context.sent.createRpcQueryExtension(client);
          _context.t10 = {
            v1alpha1: _context.t9
          };
          _context.next = 34;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/auth/v1beta1/query.rpc.Query"));
          });
        case 34:
          _context.t11 = _context.sent.createRpcQueryExtension(client);
          _context.t12 = {
            v1beta1: _context.t11
          };
          _context.next = 38;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/authz/v1beta1/query.rpc.Query"));
          });
        case 38:
          _context.t13 = _context.sent.createRpcQueryExtension(client);
          _context.t14 = {
            v1beta1: _context.t13
          };
          _context.next = 42;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/bank/v1beta1/query.rpc.Query"));
          });
        case 42:
          _context.t15 = _context.sent.createRpcQueryExtension(client);
          _context.t16 = {
            v1beta1: _context.t15
          };
          _context.next = 46;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/base/tendermint/v1beta1/query.rpc.Service"));
          });
        case 46:
          _context.t17 = _context.sent.createRpcQueryExtension(client);
          _context.t18 = {
            v1beta1: _context.t17
          };
          _context.t19 = {
            tendermint: _context.t18
          };
          _context.next = 51;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/distribution/v1beta1/query.rpc.Query"));
          });
        case 51:
          _context.t20 = _context.sent.createRpcQueryExtension(client);
          _context.t21 = {
            v1beta1: _context.t20
          };
          _context.next = 55;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/evidence/v1beta1/query.rpc.Query"));
          });
        case 55:
          _context.t22 = _context.sent.createRpcQueryExtension(client);
          _context.t23 = {
            v1beta1: _context.t22
          };
          _context.next = 59;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/feegrant/v1beta1/query.rpc.Query"));
          });
        case 59:
          _context.t24 = _context.sent.createRpcQueryExtension(client);
          _context.t25 = {
            v1beta1: _context.t24
          };
          _context.next = 63;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1/query.rpc.Query"));
          });
        case 63:
          _context.t26 = _context.sent.createRpcQueryExtension(client);
          _context.next = 66;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1beta1/query.rpc.Query"));
          });
        case 66:
          _context.t27 = _context.sent.createRpcQueryExtension(client);
          _context.t28 = {
            v1: _context.t26,
            v1beta1: _context.t27
          };
          _context.next = 70;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/group/v1/query.rpc.Query"));
          });
        case 70:
          _context.t29 = _context.sent.createRpcQueryExtension(client);
          _context.t30 = {
            v1: _context.t29
          };
          _context.next = 74;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/mint/v1beta1/query.rpc.Query"));
          });
        case 74:
          _context.t31 = _context.sent.createRpcQueryExtension(client);
          _context.t32 = {
            v1beta1: _context.t31
          };
          _context.next = 78;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/nft/v1beta1/query.rpc.Query"));
          });
        case 78:
          _context.t33 = _context.sent.createRpcQueryExtension(client);
          _context.t34 = {
            v1beta1: _context.t33
          };
          _context.next = 82;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/params/v1beta1/query.rpc.Query"));
          });
        case 82:
          _context.t35 = _context.sent.createRpcQueryExtension(client);
          _context.t36 = {
            v1beta1: _context.t35
          };
          _context.next = 86;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/slashing/v1beta1/query.rpc.Query"));
          });
        case 86:
          _context.t37 = _context.sent.createRpcQueryExtension(client);
          _context.t38 = {
            v1beta1: _context.t37
          };
          _context.next = 90;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/staking/v1beta1/query.rpc.Query"));
          });
        case 90:
          _context.t39 = _context.sent.createRpcQueryExtension(client);
          _context.t40 = {
            v1beta1: _context.t39
          };
          _context.next = 94;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/tx/v1beta1/service.rpc.Service"));
          });
        case 94:
          _context.t41 = _context.sent.createRpcQueryExtension(client);
          _context.t42 = {
            v1beta1: _context.t41
          };
          _context.next = 98;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/upgrade/v1beta1/query.rpc.Query"));
          });
        case 98:
          _context.t43 = _context.sent.createRpcQueryExtension(client);
          _context.t44 = {
            v1beta1: _context.t43
          };
          _context.t45 = {
            app: _context.t10,
            auth: _context.t12,
            authz: _context.t14,
            bank: _context.t16,
            base: _context.t19,
            distribution: _context.t21,
            evidence: _context.t23,
            feegrant: _context.t25,
            gov: _context.t28,
            group: _context.t30,
            mint: _context.t32,
            nft: _context.t34,
            params: _context.t36,
            slashing: _context.t38,
            staking: _context.t40,
            tx: _context.t42,
            upgrade: _context.t44
          };
          return _context.abrupt("return", {
            lavanet: _context.t8,
            cosmos: _context.t45
          });
        case 102:
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