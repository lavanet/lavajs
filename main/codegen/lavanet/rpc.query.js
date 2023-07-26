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
            return _interopRequireWildcard(require("../conflict/query.rpc.Query"));
          });
        case 7:
          _context.t0 = _context.sent.createRpcQueryExtension(client);
          _context.next = 10;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../epochstorage/query.rpc.Query"));
          });
        case 10:
          _context.t1 = _context.sent.createRpcQueryExtension(client);
          _context.next = 13;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../pairing/query.rpc.Query"));
          });
        case 13:
          _context.t2 = _context.sent.createRpcQueryExtension(client);
          _context.next = 16;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../plans/query.rpc.Query"));
          });
        case 16:
          _context.t3 = _context.sent.createRpcQueryExtension(client);
          _context.next = 19;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../projects/query.rpc.Query"));
          });
        case 19:
          _context.t4 = _context.sent.createRpcQueryExtension(client);
          _context.next = 22;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../protocol/query.rpc.Query"));
          });
        case 22:
          _context.t5 = _context.sent.createRpcQueryExtension(client);
          _context.next = 25;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../spec/query.rpc.Query"));
          });
        case 25:
          _context.t6 = _context.sent.createRpcQueryExtension(client);
          _context.next = 28;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../subscription/query.rpc.Query"));
          });
        case 28:
          _context.t7 = _context.sent.createRpcQueryExtension(client);
          _context.t8 = {
            conflict: _context.t0,
            epochstorage: _context.t1,
            pairing: _context.t2,
            plans: _context.t3,
            projects: _context.t4,
            protocol: _context.t5,
            spec: _context.t6,
            subscription: _context.t7
          };
          _context.t9 = {
            lava: _context.t8
          };
          _context.next = 33;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/app/v1alpha1/query.rpc.Query"));
          });
        case 33:
          _context.t10 = _context.sent.createRpcQueryExtension(client);
          _context.t11 = {
            v1alpha1: _context.t10
          };
          _context.next = 37;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/auth/v1beta1/query.rpc.Query"));
          });
        case 37:
          _context.t12 = _context.sent.createRpcQueryExtension(client);
          _context.t13 = {
            v1beta1: _context.t12
          };
          _context.next = 41;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/authz/v1beta1/query.rpc.Query"));
          });
        case 41:
          _context.t14 = _context.sent.createRpcQueryExtension(client);
          _context.t15 = {
            v1beta1: _context.t14
          };
          _context.next = 45;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/bank/v1beta1/query.rpc.Query"));
          });
        case 45:
          _context.t16 = _context.sent.createRpcQueryExtension(client);
          _context.t17 = {
            v1beta1: _context.t16
          };
          _context.next = 49;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/base/tendermint/v1beta1/query.rpc.Service"));
          });
        case 49:
          _context.t18 = _context.sent.createRpcQueryExtension(client);
          _context.t19 = {
            v1beta1: _context.t18
          };
          _context.t20 = {
            tendermint: _context.t19
          };
          _context.next = 54;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/distribution/v1beta1/query.rpc.Query"));
          });
        case 54:
          _context.t21 = _context.sent.createRpcQueryExtension(client);
          _context.t22 = {
            v1beta1: _context.t21
          };
          _context.next = 58;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/evidence/v1beta1/query.rpc.Query"));
          });
        case 58:
          _context.t23 = _context.sent.createRpcQueryExtension(client);
          _context.t24 = {
            v1beta1: _context.t23
          };
          _context.next = 62;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/feegrant/v1beta1/query.rpc.Query"));
          });
        case 62:
          _context.t25 = _context.sent.createRpcQueryExtension(client);
          _context.t26 = {
            v1beta1: _context.t25
          };
          _context.next = 66;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1/query.rpc.Query"));
          });
        case 66:
          _context.t27 = _context.sent.createRpcQueryExtension(client);
          _context.next = 69;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1beta1/query.rpc.Query"));
          });
        case 69:
          _context.t28 = _context.sent.createRpcQueryExtension(client);
          _context.t29 = {
            v1: _context.t27,
            v1beta1: _context.t28
          };
          _context.next = 73;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/group/v1/query.rpc.Query"));
          });
        case 73:
          _context.t30 = _context.sent.createRpcQueryExtension(client);
          _context.t31 = {
            v1: _context.t30
          };
          _context.next = 77;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/mint/v1beta1/query.rpc.Query"));
          });
        case 77:
          _context.t32 = _context.sent.createRpcQueryExtension(client);
          _context.t33 = {
            v1beta1: _context.t32
          };
          _context.next = 81;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/nft/v1beta1/query.rpc.Query"));
          });
        case 81:
          _context.t34 = _context.sent.createRpcQueryExtension(client);
          _context.t35 = {
            v1beta1: _context.t34
          };
          _context.next = 85;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/params/v1beta1/query.rpc.Query"));
          });
        case 85:
          _context.t36 = _context.sent.createRpcQueryExtension(client);
          _context.t37 = {
            v1beta1: _context.t36
          };
          _context.next = 89;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/slashing/v1beta1/query.rpc.Query"));
          });
        case 89:
          _context.t38 = _context.sent.createRpcQueryExtension(client);
          _context.t39 = {
            v1beta1: _context.t38
          };
          _context.next = 93;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/staking/v1beta1/query.rpc.Query"));
          });
        case 93:
          _context.t40 = _context.sent.createRpcQueryExtension(client);
          _context.t41 = {
            v1beta1: _context.t40
          };
          _context.next = 97;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/tx/v1beta1/service.rpc.Service"));
          });
        case 97:
          _context.t42 = _context.sent.createRpcQueryExtension(client);
          _context.t43 = {
            v1beta1: _context.t42
          };
          _context.next = 101;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/upgrade/v1beta1/query.rpc.Query"));
          });
        case 101:
          _context.t44 = _context.sent.createRpcQueryExtension(client);
          _context.t45 = {
            v1beta1: _context.t44
          };
          _context.t46 = {
            app: _context.t11,
            auth: _context.t13,
            authz: _context.t15,
            bank: _context.t17,
            base: _context.t20,
            distribution: _context.t22,
            evidence: _context.t24,
            feegrant: _context.t26,
            gov: _context.t29,
            group: _context.t31,
            mint: _context.t33,
            nft: _context.t35,
            params: _context.t37,
            slashing: _context.t39,
            staking: _context.t41,
            tx: _context.t43,
            upgrade: _context.t45
          };
          return _context.abrupt("return", {
            lavanet: _context.t9,
            cosmos: _context.t46
          });
        case 105:
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