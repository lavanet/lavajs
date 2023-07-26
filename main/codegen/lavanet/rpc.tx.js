"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRPCMsgClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var createRPCMsgClient = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var rpc;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rpc = _ref.rpc;
          _context.next = 3;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../conflict/tx.rpc.msg"));
          });
        case 3:
          _context.t0 = _context.sent.MsgClientImpl;
          _context.t1 = rpc;
          _context.t2 = new _context.t0(_context.t1);
          _context.next = 8;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../pairing/tx.rpc.msg"));
          });
        case 8:
          _context.t3 = _context.sent.MsgClientImpl;
          _context.t4 = rpc;
          _context.t5 = new _context.t3(_context.t4);
          _context.next = 13;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../projects/tx.rpc.msg"));
          });
        case 13:
          _context.t6 = _context.sent.MsgClientImpl;
          _context.t7 = rpc;
          _context.t8 = new _context.t6(_context.t7);
          _context.next = 18;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../subscription/tx.rpc.msg"));
          });
        case 18:
          _context.t9 = _context.sent.MsgClientImpl;
          _context.t10 = rpc;
          _context.t11 = new _context.t9(_context.t10);
          _context.t12 = {
            conflict: _context.t2,
            pairing: _context.t5,
            projects: _context.t8,
            subscription: _context.t11
          };
          _context.t13 = {
            lava: _context.t12
          };
          _context.next = 25;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/authz/v1beta1/tx.rpc.msg"));
          });
        case 25:
          _context.t14 = _context.sent.MsgClientImpl;
          _context.t15 = rpc;
          _context.t16 = new _context.t14(_context.t15);
          _context.t17 = {
            v1beta1: _context.t16
          };
          _context.next = 31;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/bank/v1beta1/tx.rpc.msg"));
          });
        case 31:
          _context.t18 = _context.sent.MsgClientImpl;
          _context.t19 = rpc;
          _context.t20 = new _context.t18(_context.t19);
          _context.t21 = {
            v1beta1: _context.t20
          };
          _context.next = 37;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/crisis/v1beta1/tx.rpc.msg"));
          });
        case 37:
          _context.t22 = _context.sent.MsgClientImpl;
          _context.t23 = rpc;
          _context.t24 = new _context.t22(_context.t23);
          _context.t25 = {
            v1beta1: _context.t24
          };
          _context.next = 43;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/distribution/v1beta1/tx.rpc.msg"));
          });
        case 43:
          _context.t26 = _context.sent.MsgClientImpl;
          _context.t27 = rpc;
          _context.t28 = new _context.t26(_context.t27);
          _context.t29 = {
            v1beta1: _context.t28
          };
          _context.next = 49;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/evidence/v1beta1/tx.rpc.msg"));
          });
        case 49:
          _context.t30 = _context.sent.MsgClientImpl;
          _context.t31 = rpc;
          _context.t32 = new _context.t30(_context.t31);
          _context.t33 = {
            v1beta1: _context.t32
          };
          _context.next = 55;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/feegrant/v1beta1/tx.rpc.msg"));
          });
        case 55:
          _context.t34 = _context.sent.MsgClientImpl;
          _context.t35 = rpc;
          _context.t36 = new _context.t34(_context.t35);
          _context.t37 = {
            v1beta1: _context.t36
          };
          _context.next = 61;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1/tx.rpc.msg"));
          });
        case 61:
          _context.t38 = _context.sent.MsgClientImpl;
          _context.t39 = rpc;
          _context.t40 = new _context.t38(_context.t39);
          _context.next = 66;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1beta1/tx.rpc.msg"));
          });
        case 66:
          _context.t41 = _context.sent.MsgClientImpl;
          _context.t42 = rpc;
          _context.t43 = new _context.t41(_context.t42);
          _context.t44 = {
            v1: _context.t40,
            v1beta1: _context.t43
          };
          _context.next = 72;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/group/v1/tx.rpc.msg"));
          });
        case 72:
          _context.t45 = _context.sent.MsgClientImpl;
          _context.t46 = rpc;
          _context.t47 = new _context.t45(_context.t46);
          _context.t48 = {
            v1: _context.t47
          };
          _context.next = 78;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/nft/v1beta1/tx.rpc.msg"));
          });
        case 78:
          _context.t49 = _context.sent.MsgClientImpl;
          _context.t50 = rpc;
          _context.t51 = new _context.t49(_context.t50);
          _context.t52 = {
            v1beta1: _context.t51
          };
          _context.next = 84;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/slashing/v1beta1/tx.rpc.msg"));
          });
        case 84:
          _context.t53 = _context.sent.MsgClientImpl;
          _context.t54 = rpc;
          _context.t55 = new _context.t53(_context.t54);
          _context.t56 = {
            v1beta1: _context.t55
          };
          _context.next = 90;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/staking/v1beta1/tx.rpc.msg"));
          });
        case 90:
          _context.t57 = _context.sent.MsgClientImpl;
          _context.t58 = rpc;
          _context.t59 = new _context.t57(_context.t58);
          _context.t60 = {
            v1beta1: _context.t59
          };
          _context.next = 96;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/upgrade/v1beta1/tx.rpc.msg"));
          });
        case 96:
          _context.t61 = _context.sent.MsgClientImpl;
          _context.t62 = rpc;
          _context.t63 = new _context.t61(_context.t62);
          _context.t64 = {
            v1beta1: _context.t63
          };
          _context.next = 102;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/vesting/v1beta1/tx.rpc.msg"));
          });
        case 102:
          _context.t65 = _context.sent.MsgClientImpl;
          _context.t66 = rpc;
          _context.t67 = new _context.t65(_context.t66);
          _context.t68 = {
            v1beta1: _context.t67
          };
          _context.t69 = {
            authz: _context.t17,
            bank: _context.t21,
            crisis: _context.t25,
            distribution: _context.t29,
            evidence: _context.t33,
            feegrant: _context.t37,
            gov: _context.t44,
            group: _context.t48,
            nft: _context.t52,
            slashing: _context.t56,
            staking: _context.t60,
            upgrade: _context.t64,
            vesting: _context.t68
          };
          return _context.abrupt("return", {
            lavanet: _context.t13,
            cosmos: _context.t69
          });
        case 108:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createRPCMsgClient(_x) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createRPCMsgClient = createRPCMsgClient;