"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _55 = _interopRequireWildcard(require("./app/v1alpha1/config"));
var _56 = _interopRequireWildcard(require("./app/v1alpha1/module"));
var _57 = _interopRequireWildcard(require("./app/v1alpha1/query"));
var _58 = _interopRequireWildcard(require("./auth/v1beta1/auth"));
var _59 = _interopRequireWildcard(require("./auth/v1beta1/genesis"));
var _60 = _interopRequireWildcard(require("./auth/v1beta1/query"));
var _61 = _interopRequireWildcard(require("./authz/v1beta1/authz"));
var _62 = _interopRequireWildcard(require("./authz/v1beta1/event"));
var _63 = _interopRequireWildcard(require("./authz/v1beta1/genesis"));
var _64 = _interopRequireWildcard(require("./authz/v1beta1/query"));
var _65 = _interopRequireWildcard(require("./authz/v1beta1/tx"));
var _66 = _interopRequireWildcard(require("./bank/v1beta1/authz"));
var _67 = _interopRequireWildcard(require("./bank/v1beta1/bank"));
var _68 = _interopRequireWildcard(require("./bank/v1beta1/genesis"));
var _69 = _interopRequireWildcard(require("./bank/v1beta1/query"));
var _70 = _interopRequireWildcard(require("./bank/v1beta1/tx"));
var _71 = _interopRequireWildcard(require("./base/abci/v1beta1/abci"));
var _72 = _interopRequireWildcard(require("./base/kv/v1beta1/kv"));
var _73 = _interopRequireWildcard(require("./base/query/v1beta1/pagination"));
var _74 = _interopRequireWildcard(require("./base/reflection/v1beta1/reflection"));
var _75 = _interopRequireWildcard(require("./base/reflection/v2alpha1/reflection"));
var _76 = _interopRequireWildcard(require("./base/snapshots/v1beta1/snapshot"));
var _77 = _interopRequireWildcard(require("./base/store/v1beta1/commit_info"));
var _78 = _interopRequireWildcard(require("./base/store/v1beta1/listening"));
var _79 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query"));
var _80 = _interopRequireWildcard(require("./base/v1beta1/coin"));
var _81 = _interopRequireWildcard(require("./capability/v1beta1/capability"));
var _82 = _interopRequireWildcard(require("./capability/v1beta1/genesis"));
var _83 = _interopRequireWildcard(require("./crisis/v1beta1/genesis"));
var _84 = _interopRequireWildcard(require("./crisis/v1beta1/tx"));
var _85 = _interopRequireWildcard(require("./crypto/ed25519/keys"));
var _86 = _interopRequireWildcard(require("./crypto/hd/v1/hd"));
var _87 = _interopRequireWildcard(require("./crypto/keyring/v1/record"));
var _88 = _interopRequireWildcard(require("./crypto/multisig/keys"));
var _89 = _interopRequireWildcard(require("./crypto/secp256k1/keys"));
var _90 = _interopRequireWildcard(require("./crypto/secp256r1/keys"));
var _91 = _interopRequireWildcard(require("./distribution/v1beta1/distribution"));
var _92 = _interopRequireWildcard(require("./distribution/v1beta1/genesis"));
var _93 = _interopRequireWildcard(require("./distribution/v1beta1/query"));
var _94 = _interopRequireWildcard(require("./distribution/v1beta1/tx"));
var _95 = _interopRequireWildcard(require("./evidence/v1beta1/evidence"));
var _96 = _interopRequireWildcard(require("./evidence/v1beta1/genesis"));
var _97 = _interopRequireWildcard(require("./evidence/v1beta1/query"));
var _98 = _interopRequireWildcard(require("./evidence/v1beta1/tx"));
var _99 = _interopRequireWildcard(require("./feegrant/v1beta1/feegrant"));
var _100 = _interopRequireWildcard(require("./feegrant/v1beta1/genesis"));
var _101 = _interopRequireWildcard(require("./feegrant/v1beta1/query"));
var _102 = _interopRequireWildcard(require("./feegrant/v1beta1/tx"));
var _103 = _interopRequireWildcard(require("./genutil/v1beta1/genesis"));
var _104 = _interopRequireWildcard(require("./gov/v1/genesis"));
var _105 = _interopRequireWildcard(require("./gov/v1/gov"));
var _106 = _interopRequireWildcard(require("./gov/v1/query"));
var _107 = _interopRequireWildcard(require("./gov/v1/tx"));
var _108 = _interopRequireWildcard(require("./gov/v1beta1/genesis"));
var _109 = _interopRequireWildcard(require("./gov/v1beta1/gov"));
var _110 = _interopRequireWildcard(require("./gov/v1beta1/query"));
var _111 = _interopRequireWildcard(require("./gov/v1beta1/tx"));
var _112 = _interopRequireWildcard(require("./group/v1/events"));
var _113 = _interopRequireWildcard(require("./group/v1/genesis"));
var _114 = _interopRequireWildcard(require("./group/v1/query"));
var _115 = _interopRequireWildcard(require("./group/v1/tx"));
var _116 = _interopRequireWildcard(require("./group/v1/types"));
var _117 = _interopRequireWildcard(require("./mint/v1beta1/genesis"));
var _118 = _interopRequireWildcard(require("./mint/v1beta1/mint"));
var _119 = _interopRequireWildcard(require("./mint/v1beta1/query"));
var _120 = _interopRequireWildcard(require("./msg/v1/msg"));
var _121 = _interopRequireWildcard(require("./nft/v1beta1/event"));
var _122 = _interopRequireWildcard(require("./nft/v1beta1/genesis"));
var _123 = _interopRequireWildcard(require("./nft/v1beta1/nft"));
var _124 = _interopRequireWildcard(require("./nft/v1beta1/query"));
var _125 = _interopRequireWildcard(require("./nft/v1beta1/tx"));
var _126 = _interopRequireWildcard(require("./orm/v1/orm"));
var _127 = _interopRequireWildcard(require("./orm/v1alpha1/schema"));
var _128 = _interopRequireWildcard(require("./params/v1beta1/params"));
var _129 = _interopRequireWildcard(require("./params/v1beta1/query"));
var _130 = _interopRequireWildcard(require("./slashing/v1beta1/genesis"));
var _131 = _interopRequireWildcard(require("./slashing/v1beta1/query"));
var _132 = _interopRequireWildcard(require("./slashing/v1beta1/slashing"));
var _133 = _interopRequireWildcard(require("./slashing/v1beta1/tx"));
var _134 = _interopRequireWildcard(require("./staking/v1beta1/authz"));
var _135 = _interopRequireWildcard(require("./staking/v1beta1/genesis"));
var _136 = _interopRequireWildcard(require("./staking/v1beta1/query"));
var _137 = _interopRequireWildcard(require("./staking/v1beta1/staking"));
var _138 = _interopRequireWildcard(require("./staking/v1beta1/tx"));
var _139 = _interopRequireWildcard(require("./tx/signing/v1beta1/signing"));
var _140 = _interopRequireWildcard(require("./tx/v1beta1/service"));
var _141 = _interopRequireWildcard(require("./tx/v1beta1/tx"));
var _142 = _interopRequireWildcard(require("./upgrade/v1beta1/query"));
var _143 = _interopRequireWildcard(require("./upgrade/v1beta1/tx"));
var _144 = _interopRequireWildcard(require("./upgrade/v1beta1/upgrade"));
var _145 = _interopRequireWildcard(require("./vesting/v1beta1/tx"));
var _146 = _interopRequireWildcard(require("./vesting/v1beta1/vesting"));
var _195 = _interopRequireWildcard(require("./authz/v1beta1/tx.amino"));
var _196 = _interopRequireWildcard(require("./bank/v1beta1/tx.amino"));
var _197 = _interopRequireWildcard(require("./crisis/v1beta1/tx.amino"));
var _198 = _interopRequireWildcard(require("./distribution/v1beta1/tx.amino"));
var _199 = _interopRequireWildcard(require("./evidence/v1beta1/tx.amino"));
var _200 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.amino"));
var _201 = _interopRequireWildcard(require("./gov/v1/tx.amino"));
var _202 = _interopRequireWildcard(require("./gov/v1beta1/tx.amino"));
var _203 = _interopRequireWildcard(require("./group/v1/tx.amino"));
var _204 = _interopRequireWildcard(require("./nft/v1beta1/tx.amino"));
var _205 = _interopRequireWildcard(require("./slashing/v1beta1/tx.amino"));
var _206 = _interopRequireWildcard(require("./staking/v1beta1/tx.amino"));
var _207 = _interopRequireWildcard(require("./upgrade/v1beta1/tx.amino"));
var _208 = _interopRequireWildcard(require("./vesting/v1beta1/tx.amino"));
var _209 = _interopRequireWildcard(require("./authz/v1beta1/tx.registry"));
var _210 = _interopRequireWildcard(require("./bank/v1beta1/tx.registry"));
var _211 = _interopRequireWildcard(require("./crisis/v1beta1/tx.registry"));
var _212 = _interopRequireWildcard(require("./distribution/v1beta1/tx.registry"));
var _213 = _interopRequireWildcard(require("./evidence/v1beta1/tx.registry"));
var _214 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.registry"));
var _215 = _interopRequireWildcard(require("./gov/v1/tx.registry"));
var _216 = _interopRequireWildcard(require("./gov/v1beta1/tx.registry"));
var _217 = _interopRequireWildcard(require("./group/v1/tx.registry"));
var _218 = _interopRequireWildcard(require("./nft/v1beta1/tx.registry"));
var _219 = _interopRequireWildcard(require("./slashing/v1beta1/tx.registry"));
var _220 = _interopRequireWildcard(require("./staking/v1beta1/tx.registry"));
var _221 = _interopRequireWildcard(require("./upgrade/v1beta1/tx.registry"));
var _222 = _interopRequireWildcard(require("./vesting/v1beta1/tx.registry"));
var _223 = _interopRequireWildcard(require("./auth/v1beta1/query.lcd"));
var _224 = _interopRequireWildcard(require("./authz/v1beta1/query.lcd"));
var _225 = _interopRequireWildcard(require("./bank/v1beta1/query.lcd"));
var _226 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query.lcd"));
var _227 = _interopRequireWildcard(require("./distribution/v1beta1/query.lcd"));
var _228 = _interopRequireWildcard(require("./evidence/v1beta1/query.lcd"));
var _229 = _interopRequireWildcard(require("./feegrant/v1beta1/query.lcd"));
var _230 = _interopRequireWildcard(require("./gov/v1/query.lcd"));
var _231 = _interopRequireWildcard(require("./gov/v1beta1/query.lcd"));
var _232 = _interopRequireWildcard(require("./group/v1/query.lcd"));
var _233 = _interopRequireWildcard(require("./mint/v1beta1/query.lcd"));
var _234 = _interopRequireWildcard(require("./nft/v1beta1/query.lcd"));
var _235 = _interopRequireWildcard(require("./params/v1beta1/query.lcd"));
var _236 = _interopRequireWildcard(require("./slashing/v1beta1/query.lcd"));
var _237 = _interopRequireWildcard(require("./staking/v1beta1/query.lcd"));
var _238 = _interopRequireWildcard(require("./tx/v1beta1/service.lcd"));
var _239 = _interopRequireWildcard(require("./upgrade/v1beta1/query.lcd"));
var _240 = _interopRequireWildcard(require("./app/v1alpha1/query.rpc.Query"));
var _241 = _interopRequireWildcard(require("./auth/v1beta1/query.rpc.Query"));
var _242 = _interopRequireWildcard(require("./authz/v1beta1/query.rpc.Query"));
var _243 = _interopRequireWildcard(require("./bank/v1beta1/query.rpc.Query"));
var _244 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query.rpc.Service"));
var _245 = _interopRequireWildcard(require("./distribution/v1beta1/query.rpc.Query"));
var _246 = _interopRequireWildcard(require("./evidence/v1beta1/query.rpc.Query"));
var _247 = _interopRequireWildcard(require("./feegrant/v1beta1/query.rpc.Query"));
var _248 = _interopRequireWildcard(require("./gov/v1/query.rpc.Query"));
var _249 = _interopRequireWildcard(require("./gov/v1beta1/query.rpc.Query"));
var _250 = _interopRequireWildcard(require("./group/v1/query.rpc.Query"));
var _251 = _interopRequireWildcard(require("./mint/v1beta1/query.rpc.Query"));
var _252 = _interopRequireWildcard(require("./nft/v1beta1/query.rpc.Query"));
var _253 = _interopRequireWildcard(require("./params/v1beta1/query.rpc.Query"));
var _254 = _interopRequireWildcard(require("./slashing/v1beta1/query.rpc.Query"));
var _255 = _interopRequireWildcard(require("./staking/v1beta1/query.rpc.Query"));
var _256 = _interopRequireWildcard(require("./tx/v1beta1/service.rpc.Service"));
var _257 = _interopRequireWildcard(require("./upgrade/v1beta1/query.rpc.Query"));
var _258 = _interopRequireWildcard(require("./authz/v1beta1/tx.rpc.msg"));
var _259 = _interopRequireWildcard(require("./bank/v1beta1/tx.rpc.msg"));
var _260 = _interopRequireWildcard(require("./crisis/v1beta1/tx.rpc.msg"));
var _261 = _interopRequireWildcard(require("./distribution/v1beta1/tx.rpc.msg"));
var _262 = _interopRequireWildcard(require("./evidence/v1beta1/tx.rpc.msg"));
var _263 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.rpc.msg"));
var _264 = _interopRequireWildcard(require("./gov/v1/tx.rpc.msg"));
var _265 = _interopRequireWildcard(require("./gov/v1beta1/tx.rpc.msg"));
var _266 = _interopRequireWildcard(require("./group/v1/tx.rpc.msg"));
var _267 = _interopRequireWildcard(require("./nft/v1beta1/tx.rpc.msg"));
var _268 = _interopRequireWildcard(require("./slashing/v1beta1/tx.rpc.msg"));
var _269 = _interopRequireWildcard(require("./staking/v1beta1/tx.rpc.msg"));
var _270 = _interopRequireWildcard(require("./upgrade/v1beta1/tx.rpc.msg"));
var _271 = _interopRequireWildcard(require("./vesting/v1beta1/tx.rpc.msg"));
var _275 = _interopRequireWildcard(require("./lcd"));
var _276 = _interopRequireWildcard(require("./rpc.query"));
var _277 = _interopRequireWildcard(require("./rpc.tx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var cosmos;
exports.cosmos = cosmos;
(function (_cosmos) {
  var app;
  (function (_app) {
    var v1alpha1 = _app.v1alpha1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _55), _56), _57), _240);
  })(app || (app = _cosmos.app || (_cosmos.app = {})));
  var auth;
  (function (_auth) {
    var v1beta1 = _auth.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _58), _59), _60), _223), _241);
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));
  var authz;
  (function (_authz) {
    var v1beta1 = _authz.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _61), _62), _63), _64), _65), _195), _209), _224), _242), _258);
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
  var bank;
  (function (_bank) {
    var v1beta1 = _bank.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _66), _67), _68), _69), _70), _196), _210), _225), _243), _259);
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
  var base;
  (function (_base) {
    var abci;
    (function (_abci) {
      var v1beta1 = _abci.v1beta1 = _objectSpread({}, _71);
    })(abci || (abci = _base.abci || (_base.abci = {})));
    var kv;
    (function (_kv) {
      var v1beta1 = _kv.v1beta1 = _objectSpread({}, _72);
    })(kv || (kv = _base.kv || (_base.kv = {})));
    var query;
    (function (_query) {
      var v1beta1 = _query.v1beta1 = _objectSpread({}, _73);
    })(query || (query = _base.query || (_base.query = {})));
    var reflection;
    (function (_reflection) {
      var v1beta1 = _reflection.v1beta1 = _objectSpread({}, _74);
      var v2alpha1 = _reflection.v2alpha1 = _objectSpread({}, _75);
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
    var snapshots;
    (function (_snapshots) {
      var v1beta1 = _snapshots.v1beta1 = _objectSpread({}, _76);
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
    var store;
    (function (_store) {
      var v1beta1 = _store.v1beta1 = _objectSpread(_objectSpread({}, _77), _78);
    })(store || (store = _base.store || (_base.store = {})));
    var tendermint;
    (function (_tendermint) {
      var v1beta1 = _tendermint.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _79), _226), _244);
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));
    var v1beta1 = _base.v1beta1 = _objectSpread({}, _80);
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
  var capability;
  (function (_capability) {
    var v1beta1 = _capability.v1beta1 = _objectSpread(_objectSpread({}, _81), _82);
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
  var crisis;
  (function (_crisis) {
    var v1beta1 = _crisis.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _83), _84), _197), _211), _260);
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));
  var crypto;
  (function (_crypto) {
    var ed25519 = _crypto.ed25519 = _objectSpread({}, _85);
    var hd;
    (function (_hd) {
      var v1 = _hd.v1 = _objectSpread({}, _86);
    })(hd || (hd = _crypto.hd || (_crypto.hd = {})));
    var keyring;
    (function (_keyring) {
      var v1 = _keyring.v1 = _objectSpread({}, _87);
    })(keyring || (keyring = _crypto.keyring || (_crypto.keyring = {})));
    var multisig = _crypto.multisig = _objectSpread({}, _88);
    var secp256k1 = _crypto.secp256k1 = _objectSpread({}, _89);
    var secp256r1 = _crypto.secp256r1 = _objectSpread({}, _90);
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));
  var distribution;
  (function (_distribution) {
    var v1beta1 = _distribution.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _91), _92), _93), _94), _198), _212), _227), _245), _261);
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
  var evidence;
  (function (_evidence) {
    var v1beta1 = _evidence.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _95), _96), _97), _98), _199), _213), _228), _246), _262);
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
  var feegrant;
  (function (_feegrant) {
    var v1beta1 = _feegrant.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _99), _100), _101), _102), _200), _214), _229), _247), _263);
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));
  var genutil;
  (function (_genutil) {
    var v1beta1 = _genutil.v1beta1 = _objectSpread({}, _103);
  })(genutil || (genutil = _cosmos.genutil || (_cosmos.genutil = {})));
  var gov;
  (function (_gov) {
    var v1 = _gov.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _104), _105), _106), _107), _201), _215), _230), _248), _264);
    var v1beta1 = _gov.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _108), _109), _110), _111), _202), _216), _231), _249), _265);
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
  var group;
  (function (_group) {
    var v1 = _group.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _112), _113), _114), _115), _116), _203), _217), _232), _250), _266);
  })(group || (group = _cosmos.group || (_cosmos.group = {})));
  var mint;
  (function (_mint) {
    var v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _117), _118), _119), _233), _251);
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));
  var msg;
  (function (_msg) {
    var v1 = _msg.v1 = _objectSpread({}, _120);
  })(msg || (msg = _cosmos.msg || (_cosmos.msg = {})));
  var nft;
  (function (_nft) {
    var v1beta1 = _nft.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _121), _122), _123), _124), _125), _204), _218), _234), _252), _267);
  })(nft || (nft = _cosmos.nft || (_cosmos.nft = {})));
  var orm;
  (function (_orm) {
    var v1 = _orm.v1 = _objectSpread({}, _126);
    var v1alpha1 = _orm.v1alpha1 = _objectSpread({}, _127);
  })(orm || (orm = _cosmos.orm || (_cosmos.orm = {})));
  var params;
  (function (_params) {
    var v1beta1 = _params.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _128), _129), _235), _253);
  })(params || (params = _cosmos.params || (_cosmos.params = {})));
  var slashing;
  (function (_slashing) {
    var v1beta1 = _slashing.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _130), _131), _132), _133), _205), _219), _236), _254), _268);
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
  var staking;
  (function (_staking) {
    var v1beta1 = _staking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _134), _135), _136), _137), _138), _206), _220), _237), _255), _269);
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
  var tx;
  (function (_tx) {
    var signing;
    (function (_signing) {
      var v1beta1 = _signing.v1beta1 = _objectSpread({}, _139);
    })(signing || (signing = _tx.signing || (_tx.signing = {})));
    var v1beta1 = _tx.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _140), _141), _238), _256);
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
  var upgrade;
  (function (_upgrade) {
    var v1beta1 = _upgrade.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _142), _143), _144), _207), _221), _239), _257), _270);
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
  var vesting;
  (function (_vesting) {
    var v1beta1 = _vesting.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _145), _146), _208), _222), _271);
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
  var ClientFactory = _cosmos.ClientFactory = _objectSpread(_objectSpread(_objectSpread({}, _275), _276), _277);
})(cosmos || (exports.cosmos = cosmos = {}));