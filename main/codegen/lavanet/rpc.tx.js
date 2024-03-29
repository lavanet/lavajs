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
            return _interopRequireWildcard(require("../cosmos/authz/v1beta1/tx.rpc.msg"));
          });
        case 3:
          _context.t0 = _context.sent.MsgClientImpl;
          _context.t1 = rpc;
          _context.t2 = new _context.t0(_context.t1);
          _context.t3 = {
            v1beta1: _context.t2
          };
          _context.next = 9;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/bank/v1beta1/tx.rpc.msg"));
          });
        case 9:
          _context.t4 = _context.sent.MsgClientImpl;
          _context.t5 = rpc;
          _context.t6 = new _context.t4(_context.t5);
          _context.t7 = {
            v1beta1: _context.t6
          };
          _context.next = 15;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/crisis/v1beta1/tx.rpc.msg"));
          });
        case 15:
          _context.t8 = _context.sent.MsgClientImpl;
          _context.t9 = rpc;
          _context.t10 = new _context.t8(_context.t9);
          _context.t11 = {
            v1beta1: _context.t10
          };
          _context.next = 21;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/distribution/v1beta1/tx.rpc.msg"));
          });
        case 21:
          _context.t12 = _context.sent.MsgClientImpl;
          _context.t13 = rpc;
          _context.t14 = new _context.t12(_context.t13);
          _context.t15 = {
            v1beta1: _context.t14
          };
          _context.next = 27;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/evidence/v1beta1/tx.rpc.msg"));
          });
        case 27:
          _context.t16 = _context.sent.MsgClientImpl;
          _context.t17 = rpc;
          _context.t18 = new _context.t16(_context.t17);
          _context.t19 = {
            v1beta1: _context.t18
          };
          _context.next = 33;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/feegrant/v1beta1/tx.rpc.msg"));
          });
        case 33:
          _context.t20 = _context.sent.MsgClientImpl;
          _context.t21 = rpc;
          _context.t22 = new _context.t20(_context.t21);
          _context.t23 = {
            v1beta1: _context.t22
          };
          _context.next = 39;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1/tx.rpc.msg"));
          });
        case 39:
          _context.t24 = _context.sent.MsgClientImpl;
          _context.t25 = rpc;
          _context.t26 = new _context.t24(_context.t25);
          _context.next = 44;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1beta1/tx.rpc.msg"));
          });
        case 44:
          _context.t27 = _context.sent.MsgClientImpl;
          _context.t28 = rpc;
          _context.t29 = new _context.t27(_context.t28);
          _context.t30 = {
            v1: _context.t26,
            v1beta1: _context.t29
          };
          _context.next = 50;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/group/v1/tx.rpc.msg"));
          });
        case 50:
          _context.t31 = _context.sent.MsgClientImpl;
          _context.t32 = rpc;
          _context.t33 = new _context.t31(_context.t32);
          _context.t34 = {
            v1: _context.t33
          };
          _context.next = 56;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/nft/v1beta1/tx.rpc.msg"));
          });
        case 56:
          _context.t35 = _context.sent.MsgClientImpl;
          _context.t36 = rpc;
          _context.t37 = new _context.t35(_context.t36);
          _context.t38 = {
            v1beta1: _context.t37
          };
          _context.next = 62;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/slashing/v1beta1/tx.rpc.msg"));
          });
        case 62:
          _context.t39 = _context.sent.MsgClientImpl;
          _context.t40 = rpc;
          _context.t41 = new _context.t39(_context.t40);
          _context.t42 = {
            v1beta1: _context.t41
          };
          _context.next = 68;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/staking/v1beta1/tx.rpc.msg"));
          });
        case 68:
          _context.t43 = _context.sent.MsgClientImpl;
          _context.t44 = rpc;
          _context.t45 = new _context.t43(_context.t44);
          _context.t46 = {
            v1beta1: _context.t45
          };
          _context.next = 74;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/upgrade/v1beta1/tx.rpc.msg"));
          });
        case 74:
          _context.t47 = _context.sent.MsgClientImpl;
          _context.t48 = rpc;
          _context.t49 = new _context.t47(_context.t48);
          _context.t50 = {
            v1beta1: _context.t49
          };
          _context.next = 80;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/vesting/v1beta1/tx.rpc.msg"));
          });
        case 80:
          _context.t51 = _context.sent.MsgClientImpl;
          _context.t52 = rpc;
          _context.t53 = new _context.t51(_context.t52);
          _context.t54 = {
            v1beta1: _context.t53
          };
          _context.t55 = {
            authz: _context.t3,
            bank: _context.t7,
            crisis: _context.t11,
            distribution: _context.t15,
            evidence: _context.t19,
            feegrant: _context.t23,
            gov: _context.t30,
            group: _context.t34,
            nft: _context.t38,
            slashing: _context.t42,
            staking: _context.t46,
            upgrade: _context.t50,
            vesting: _context.t54
          };
          _context.next = 87;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./lava/conflict/tx.rpc.msg"));
          });
        case 87:
          _context.t56 = _context.sent.MsgClientImpl;
          _context.t57 = rpc;
          _context.t58 = new _context.t56(_context.t57);
          _context.next = 92;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./lava/pairing/tx.rpc.msg"));
          });
        case 92:
          _context.t59 = _context.sent.MsgClientImpl;
          _context.t60 = rpc;
          _context.t61 = new _context.t59(_context.t60);
          _context.next = 97;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./lava/projects/tx.rpc.msg"));
          });
        case 97:
          _context.t62 = _context.sent.MsgClientImpl;
          _context.t63 = rpc;
          _context.t64 = new _context.t62(_context.t63);
          _context.next = 102;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./lava/subscription/tx.rpc.msg"));
          });
        case 102:
          _context.t65 = _context.sent.MsgClientImpl;
          _context.t66 = rpc;
          _context.t67 = new _context.t65(_context.t66);
          _context.t68 = {
            conflict: _context.t58,
            pairing: _context.t61,
            projects: _context.t64,
            subscription: _context.t67
          };
          _context.t69 = {
            lava: _context.t68
          };
          return _context.abrupt("return", {
            cosmos: _context.t55,
            lavanet: _context.t69
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