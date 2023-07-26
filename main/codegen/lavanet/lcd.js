"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLCDClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _lcd = require("@osmonauts/lcd");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var createLCDClient = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var restEndpoint, requestClient;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          restEndpoint = _ref.restEndpoint;
          requestClient = new _lcd.LCDClient({
            restEndpoint: restEndpoint
          });
          _context.next = 4;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../conflict/query.lcd"));
          });
        case 4:
          _context.t0 = _context.sent.LCDQueryClient;
          _context.t1 = {
            requestClient: requestClient
          };
          _context.t2 = new _context.t0(_context.t1);
          _context.next = 9;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../epochstorage/query.lcd"));
          });
        case 9:
          _context.t3 = _context.sent.LCDQueryClient;
          _context.t4 = {
            requestClient: requestClient
          };
          _context.t5 = new _context.t3(_context.t4);
          _context.next = 14;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../pairing/query.lcd"));
          });
        case 14:
          _context.t6 = _context.sent.LCDQueryClient;
          _context.t7 = {
            requestClient: requestClient
          };
          _context.t8 = new _context.t6(_context.t7);
          _context.next = 19;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../plans/query.lcd"));
          });
        case 19:
          _context.t9 = _context.sent.LCDQueryClient;
          _context.t10 = {
            requestClient: requestClient
          };
          _context.t11 = new _context.t9(_context.t10);
          _context.next = 24;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../projects/query.lcd"));
          });
        case 24:
          _context.t12 = _context.sent.LCDQueryClient;
          _context.t13 = {
            requestClient: requestClient
          };
          _context.t14 = new _context.t12(_context.t13);
          _context.next = 29;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../protocol/query.lcd"));
          });
        case 29:
          _context.t15 = _context.sent.LCDQueryClient;
          _context.t16 = {
            requestClient: requestClient
          };
          _context.t17 = new _context.t15(_context.t16);
          _context.next = 34;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../spec/query.lcd"));
          });
        case 34:
          _context.t18 = _context.sent.LCDQueryClient;
          _context.t19 = {
            requestClient: requestClient
          };
          _context.t20 = new _context.t18(_context.t19);
          _context.next = 39;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../subscription/query.lcd"));
          });
        case 39:
          _context.t21 = _context.sent.LCDQueryClient;
          _context.t22 = {
            requestClient: requestClient
          };
          _context.t23 = new _context.t21(_context.t22);
          _context.t24 = {
            conflict: _context.t2,
            epochstorage: _context.t5,
            pairing: _context.t8,
            plans: _context.t11,
            projects: _context.t14,
            protocol: _context.t17,
            spec: _context.t20,
            subscription: _context.t23
          };
          _context.t25 = {
            lava: _context.t24
          };
          _context.next = 46;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/auth/v1beta1/query.lcd"));
          });
        case 46:
          _context.t26 = _context.sent.LCDQueryClient;
          _context.t27 = {
            requestClient: requestClient
          };
          _context.t28 = new _context.t26(_context.t27);
          _context.t29 = {
            v1beta1: _context.t28
          };
          _context.next = 52;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/authz/v1beta1/query.lcd"));
          });
        case 52:
          _context.t30 = _context.sent.LCDQueryClient;
          _context.t31 = {
            requestClient: requestClient
          };
          _context.t32 = new _context.t30(_context.t31);
          _context.t33 = {
            v1beta1: _context.t32
          };
          _context.next = 58;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/bank/v1beta1/query.lcd"));
          });
        case 58:
          _context.t34 = _context.sent.LCDQueryClient;
          _context.t35 = {
            requestClient: requestClient
          };
          _context.t36 = new _context.t34(_context.t35);
          _context.t37 = {
            v1beta1: _context.t36
          };
          _context.next = 64;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/base/tendermint/v1beta1/query.lcd"));
          });
        case 64:
          _context.t38 = _context.sent.LCDQueryClient;
          _context.t39 = {
            requestClient: requestClient
          };
          _context.t40 = new _context.t38(_context.t39);
          _context.t41 = {
            v1beta1: _context.t40
          };
          _context.t42 = {
            tendermint: _context.t41
          };
          _context.next = 71;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/distribution/v1beta1/query.lcd"));
          });
        case 71:
          _context.t43 = _context.sent.LCDQueryClient;
          _context.t44 = {
            requestClient: requestClient
          };
          _context.t45 = new _context.t43(_context.t44);
          _context.t46 = {
            v1beta1: _context.t45
          };
          _context.next = 77;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/evidence/v1beta1/query.lcd"));
          });
        case 77:
          _context.t47 = _context.sent.LCDQueryClient;
          _context.t48 = {
            requestClient: requestClient
          };
          _context.t49 = new _context.t47(_context.t48);
          _context.t50 = {
            v1beta1: _context.t49
          };
          _context.next = 83;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/feegrant/v1beta1/query.lcd"));
          });
        case 83:
          _context.t51 = _context.sent.LCDQueryClient;
          _context.t52 = {
            requestClient: requestClient
          };
          _context.t53 = new _context.t51(_context.t52);
          _context.t54 = {
            v1beta1: _context.t53
          };
          _context.next = 89;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1/query.lcd"));
          });
        case 89:
          _context.t55 = _context.sent.LCDQueryClient;
          _context.t56 = {
            requestClient: requestClient
          };
          _context.t57 = new _context.t55(_context.t56);
          _context.next = 94;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1beta1/query.lcd"));
          });
        case 94:
          _context.t58 = _context.sent.LCDQueryClient;
          _context.t59 = {
            requestClient: requestClient
          };
          _context.t60 = new _context.t58(_context.t59);
          _context.t61 = {
            v1: _context.t57,
            v1beta1: _context.t60
          };
          _context.next = 100;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/group/v1/query.lcd"));
          });
        case 100:
          _context.t62 = _context.sent.LCDQueryClient;
          _context.t63 = {
            requestClient: requestClient
          };
          _context.t64 = new _context.t62(_context.t63);
          _context.t65 = {
            v1: _context.t64
          };
          _context.next = 106;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/mint/v1beta1/query.lcd"));
          });
        case 106:
          _context.t66 = _context.sent.LCDQueryClient;
          _context.t67 = {
            requestClient: requestClient
          };
          _context.t68 = new _context.t66(_context.t67);
          _context.t69 = {
            v1beta1: _context.t68
          };
          _context.next = 112;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/nft/v1beta1/query.lcd"));
          });
        case 112:
          _context.t70 = _context.sent.LCDQueryClient;
          _context.t71 = {
            requestClient: requestClient
          };
          _context.t72 = new _context.t70(_context.t71);
          _context.t73 = {
            v1beta1: _context.t72
          };
          _context.next = 118;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/params/v1beta1/query.lcd"));
          });
        case 118:
          _context.t74 = _context.sent.LCDQueryClient;
          _context.t75 = {
            requestClient: requestClient
          };
          _context.t76 = new _context.t74(_context.t75);
          _context.t77 = {
            v1beta1: _context.t76
          };
          _context.next = 124;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/slashing/v1beta1/query.lcd"));
          });
        case 124:
          _context.t78 = _context.sent.LCDQueryClient;
          _context.t79 = {
            requestClient: requestClient
          };
          _context.t80 = new _context.t78(_context.t79);
          _context.t81 = {
            v1beta1: _context.t80
          };
          _context.next = 130;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/staking/v1beta1/query.lcd"));
          });
        case 130:
          _context.t82 = _context.sent.LCDQueryClient;
          _context.t83 = {
            requestClient: requestClient
          };
          _context.t84 = new _context.t82(_context.t83);
          _context.t85 = {
            v1beta1: _context.t84
          };
          _context.next = 136;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/tx/v1beta1/service.lcd"));
          });
        case 136:
          _context.t86 = _context.sent.LCDQueryClient;
          _context.t87 = {
            requestClient: requestClient
          };
          _context.t88 = new _context.t86(_context.t87);
          _context.t89 = {
            v1beta1: _context.t88
          };
          _context.next = 142;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/upgrade/v1beta1/query.lcd"));
          });
        case 142:
          _context.t90 = _context.sent.LCDQueryClient;
          _context.t91 = {
            requestClient: requestClient
          };
          _context.t92 = new _context.t90(_context.t91);
          _context.t93 = {
            v1beta1: _context.t92
          };
          _context.t94 = {
            auth: _context.t29,
            authz: _context.t33,
            bank: _context.t37,
            base: _context.t42,
            distribution: _context.t46,
            evidence: _context.t50,
            feegrant: _context.t54,
            gov: _context.t61,
            group: _context.t65,
            mint: _context.t69,
            nft: _context.t73,
            params: _context.t77,
            slashing: _context.t81,
            staking: _context.t85,
            tx: _context.t89,
            upgrade: _context.t93
          };
          return _context.abrupt("return", {
            lavanet: _context.t25,
            cosmos: _context.t94
          });
        case 148:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createLCDClient(_x) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createLCDClient = createLCDClient;