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
            return _interopRequireWildcard(require("../proto/conflict/query.lcd"));
          });
        case 4:
          _context.t0 = _context.sent.LCDQueryClient;
          _context.t1 = {
            requestClient: requestClient
          };
          _context.t2 = new _context.t0(_context.t1);
          _context.next = 9;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../proto/epochstorage/query.lcd"));
          });
        case 9:
          _context.t3 = _context.sent.LCDQueryClient;
          _context.t4 = {
            requestClient: requestClient
          };
          _context.t5 = new _context.t3(_context.t4);
          _context.next = 14;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../proto/pairing/query.lcd"));
          });
        case 14:
          _context.t6 = _context.sent.LCDQueryClient;
          _context.t7 = {
            requestClient: requestClient
          };
          _context.t8 = new _context.t6(_context.t7);
          _context.next = 19;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../proto/plans/query.lcd"));
          });
        case 19:
          _context.t9 = _context.sent.LCDQueryClient;
          _context.t10 = {
            requestClient: requestClient
          };
          _context.t11 = new _context.t9(_context.t10);
          _context.next = 24;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../proto/projects/query.lcd"));
          });
        case 24:
          _context.t12 = _context.sent.LCDQueryClient;
          _context.t13 = {
            requestClient: requestClient
          };
          _context.t14 = new _context.t12(_context.t13);
          _context.next = 29;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../spec/query.lcd"));
          });
        case 29:
          _context.t15 = _context.sent.LCDQueryClient;
          _context.t16 = {
            requestClient: requestClient
          };
          _context.t17 = new _context.t15(_context.t16);
          _context.next = 34;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../subscription/query.lcd"));
          });
        case 34:
          _context.t18 = _context.sent.LCDQueryClient;
          _context.t19 = {
            requestClient: requestClient
          };
          _context.t20 = new _context.t18(_context.t19);
          _context.t21 = {
            conflict: _context.t2,
            epochstorage: _context.t5,
            pairing: _context.t8,
            plans: _context.t11,
            projects: _context.t14,
            spec: _context.t17,
            subscription: _context.t20
          };
          _context.t22 = {
            lava: _context.t21
          };
          _context.next = 41;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/auth/v1beta1/query.lcd"));
          });
        case 41:
          _context.t23 = _context.sent.LCDQueryClient;
          _context.t24 = {
            requestClient: requestClient
          };
          _context.t25 = new _context.t23(_context.t24);
          _context.t26 = {
            v1beta1: _context.t25
          };
          _context.next = 47;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/authz/v1beta1/query.lcd"));
          });
        case 47:
          _context.t27 = _context.sent.LCDQueryClient;
          _context.t28 = {
            requestClient: requestClient
          };
          _context.t29 = new _context.t27(_context.t28);
          _context.t30 = {
            v1beta1: _context.t29
          };
          _context.next = 53;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/bank/v1beta1/query.lcd"));
          });
        case 53:
          _context.t31 = _context.sent.LCDQueryClient;
          _context.t32 = {
            requestClient: requestClient
          };
          _context.t33 = new _context.t31(_context.t32);
          _context.t34 = {
            v1beta1: _context.t33
          };
          _context.next = 59;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/base/tendermint/v1beta1/query.lcd"));
          });
        case 59:
          _context.t35 = _context.sent.LCDQueryClient;
          _context.t36 = {
            requestClient: requestClient
          };
          _context.t37 = new _context.t35(_context.t36);
          _context.t38 = {
            v1beta1: _context.t37
          };
          _context.t39 = {
            tendermint: _context.t38
          };
          _context.next = 66;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/distribution/v1beta1/query.lcd"));
          });
        case 66:
          _context.t40 = _context.sent.LCDQueryClient;
          _context.t41 = {
            requestClient: requestClient
          };
          _context.t42 = new _context.t40(_context.t41);
          _context.t43 = {
            v1beta1: _context.t42
          };
          _context.next = 72;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/evidence/v1beta1/query.lcd"));
          });
        case 72:
          _context.t44 = _context.sent.LCDQueryClient;
          _context.t45 = {
            requestClient: requestClient
          };
          _context.t46 = new _context.t44(_context.t45);
          _context.t47 = {
            v1beta1: _context.t46
          };
          _context.next = 78;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/feegrant/v1beta1/query.lcd"));
          });
        case 78:
          _context.t48 = _context.sent.LCDQueryClient;
          _context.t49 = {
            requestClient: requestClient
          };
          _context.t50 = new _context.t48(_context.t49);
          _context.t51 = {
            v1beta1: _context.t50
          };
          _context.next = 84;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1/query.lcd"));
          });
        case 84:
          _context.t52 = _context.sent.LCDQueryClient;
          _context.t53 = {
            requestClient: requestClient
          };
          _context.t54 = new _context.t52(_context.t53);
          _context.next = 89;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1beta1/query.lcd"));
          });
        case 89:
          _context.t55 = _context.sent.LCDQueryClient;
          _context.t56 = {
            requestClient: requestClient
          };
          _context.t57 = new _context.t55(_context.t56);
          _context.t58 = {
            v1: _context.t54,
            v1beta1: _context.t57
          };
          _context.next = 95;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/group/v1/query.lcd"));
          });
        case 95:
          _context.t59 = _context.sent.LCDQueryClient;
          _context.t60 = {
            requestClient: requestClient
          };
          _context.t61 = new _context.t59(_context.t60);
          _context.t62 = {
            v1: _context.t61
          };
          _context.next = 101;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/mint/v1beta1/query.lcd"));
          });
        case 101:
          _context.t63 = _context.sent.LCDQueryClient;
          _context.t64 = {
            requestClient: requestClient
          };
          _context.t65 = new _context.t63(_context.t64);
          _context.t66 = {
            v1beta1: _context.t65
          };
          _context.next = 107;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/nft/v1beta1/query.lcd"));
          });
        case 107:
          _context.t67 = _context.sent.LCDQueryClient;
          _context.t68 = {
            requestClient: requestClient
          };
          _context.t69 = new _context.t67(_context.t68);
          _context.t70 = {
            v1beta1: _context.t69
          };
          _context.next = 113;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/params/v1beta1/query.lcd"));
          });
        case 113:
          _context.t71 = _context.sent.LCDQueryClient;
          _context.t72 = {
            requestClient: requestClient
          };
          _context.t73 = new _context.t71(_context.t72);
          _context.t74 = {
            v1beta1: _context.t73
          };
          _context.next = 119;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/slashing/v1beta1/query.lcd"));
          });
        case 119:
          _context.t75 = _context.sent.LCDQueryClient;
          _context.t76 = {
            requestClient: requestClient
          };
          _context.t77 = new _context.t75(_context.t76);
          _context.t78 = {
            v1beta1: _context.t77
          };
          _context.next = 125;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/staking/v1beta1/query.lcd"));
          });
        case 125:
          _context.t79 = _context.sent.LCDQueryClient;
          _context.t80 = {
            requestClient: requestClient
          };
          _context.t81 = new _context.t79(_context.t80);
          _context.t82 = {
            v1beta1: _context.t81
          };
          _context.next = 131;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/tx/v1beta1/service.lcd"));
          });
        case 131:
          _context.t83 = _context.sent.LCDQueryClient;
          _context.t84 = {
            requestClient: requestClient
          };
          _context.t85 = new _context.t83(_context.t84);
          _context.t86 = {
            v1beta1: _context.t85
          };
          _context.next = 137;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/upgrade/v1beta1/query.lcd"));
          });
        case 137:
          _context.t87 = _context.sent.LCDQueryClient;
          _context.t88 = {
            requestClient: requestClient
          };
          _context.t89 = new _context.t87(_context.t88);
          _context.t90 = {
            v1beta1: _context.t89
          };
          _context.t91 = {
            auth: _context.t26,
            authz: _context.t30,
            bank: _context.t34,
            base: _context.t39,
            distribution: _context.t43,
            evidence: _context.t47,
            feegrant: _context.t51,
            gov: _context.t58,
            group: _context.t62,
            mint: _context.t66,
            nft: _context.t70,
            params: _context.t74,
            slashing: _context.t78,
            staking: _context.t82,
            tx: _context.t86,
            upgrade: _context.t90
          };
          return _context.abrupt("return", {
            lavanet: _context.t22,
            cosmos: _context.t91
          });
        case 143:
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