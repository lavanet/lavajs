"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _103 = _interopRequireWildcard(require("./app/v1alpha1/config"));
var _104 = _interopRequireWildcard(require("./app/v1alpha1/module"));
var _105 = _interopRequireWildcard(require("./app/v1alpha1/query"));
var _106 = _interopRequireWildcard(require("./auth/v1beta1/auth"));
var _107 = _interopRequireWildcard(require("./auth/v1beta1/genesis"));
var _108 = _interopRequireWildcard(require("./auth/v1beta1/query"));
var _109 = _interopRequireWildcard(require("./authz/v1beta1/authz"));
var _110 = _interopRequireWildcard(require("./authz/v1beta1/event"));
var _111 = _interopRequireWildcard(require("./authz/v1beta1/genesis"));
var _112 = _interopRequireWildcard(require("./authz/v1beta1/query"));
var _113 = _interopRequireWildcard(require("./authz/v1beta1/tx"));
var _114 = _interopRequireWildcard(require("./bank/v1beta1/authz"));
var _115 = _interopRequireWildcard(require("./bank/v1beta1/bank"));
var _116 = _interopRequireWildcard(require("./bank/v1beta1/genesis"));
var _117 = _interopRequireWildcard(require("./bank/v1beta1/query"));
var _118 = _interopRequireWildcard(require("./bank/v1beta1/tx"));
var _119 = _interopRequireWildcard(require("./base/abci/v1beta1/abci"));
var _120 = _interopRequireWildcard(require("./base/kv/v1beta1/kv"));
var _121 = _interopRequireWildcard(require("./base/query/v1beta1/pagination"));
var _122 = _interopRequireWildcard(require("./base/reflection/v1beta1/reflection"));
var _123 = _interopRequireWildcard(require("./base/reflection/v2alpha1/reflection"));
var _124 = _interopRequireWildcard(require("./base/snapshots/v1beta1/snapshot"));
var _125 = _interopRequireWildcard(require("./base/store/v1beta1/commit_info"));
var _126 = _interopRequireWildcard(require("./base/store/v1beta1/listening"));
var _127 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query"));
var _128 = _interopRequireWildcard(require("./base/v1beta1/coin"));
var _129 = _interopRequireWildcard(require("./capability/v1beta1/capability"));
var _130 = _interopRequireWildcard(require("./capability/v1beta1/genesis"));
var _131 = _interopRequireWildcard(require("./crisis/v1beta1/genesis"));
var _132 = _interopRequireWildcard(require("./crisis/v1beta1/tx"));
var _133 = _interopRequireWildcard(require("./crypto/ed25519/keys"));
var _134 = _interopRequireWildcard(require("./crypto/hd/v1/hd"));
var _135 = _interopRequireWildcard(require("./crypto/keyring/v1/record"));
var _136 = _interopRequireWildcard(require("./crypto/multisig/keys"));
var _137 = _interopRequireWildcard(require("./crypto/secp256k1/keys"));
var _138 = _interopRequireWildcard(require("./crypto/secp256r1/keys"));
var _139 = _interopRequireWildcard(require("./distribution/v1beta1/distribution"));
var _140 = _interopRequireWildcard(require("./distribution/v1beta1/genesis"));
var _141 = _interopRequireWildcard(require("./distribution/v1beta1/query"));
var _142 = _interopRequireWildcard(require("./distribution/v1beta1/tx"));
var _143 = _interopRequireWildcard(require("./evidence/v1beta1/evidence"));
var _144 = _interopRequireWildcard(require("./evidence/v1beta1/genesis"));
var _145 = _interopRequireWildcard(require("./evidence/v1beta1/query"));
var _146 = _interopRequireWildcard(require("./evidence/v1beta1/tx"));
var _147 = _interopRequireWildcard(require("./feegrant/v1beta1/feegrant"));
var _148 = _interopRequireWildcard(require("./feegrant/v1beta1/genesis"));
var _149 = _interopRequireWildcard(require("./feegrant/v1beta1/query"));
var _150 = _interopRequireWildcard(require("./feegrant/v1beta1/tx"));
var _151 = _interopRequireWildcard(require("./genutil/v1beta1/genesis"));
var _152 = _interopRequireWildcard(require("./gov/v1/genesis"));
var _153 = _interopRequireWildcard(require("./gov/v1/gov"));
var _154 = _interopRequireWildcard(require("./gov/v1/query"));
var _155 = _interopRequireWildcard(require("./gov/v1/tx"));
var _156 = _interopRequireWildcard(require("./gov/v1beta1/genesis"));
var _157 = _interopRequireWildcard(require("./gov/v1beta1/gov"));
var _158 = _interopRequireWildcard(require("./gov/v1beta1/query"));
var _159 = _interopRequireWildcard(require("./gov/v1beta1/tx"));
var _160 = _interopRequireWildcard(require("./group/v1/events"));
var _161 = _interopRequireWildcard(require("./group/v1/genesis"));
var _162 = _interopRequireWildcard(require("./group/v1/query"));
var _163 = _interopRequireWildcard(require("./group/v1/tx"));
var _164 = _interopRequireWildcard(require("./group/v1/types"));
var _165 = _interopRequireWildcard(require("./mint/v1beta1/genesis"));
var _166 = _interopRequireWildcard(require("./mint/v1beta1/mint"));
var _167 = _interopRequireWildcard(require("./mint/v1beta1/query"));
var _168 = _interopRequireWildcard(require("./msg/v1/msg"));
var _169 = _interopRequireWildcard(require("./nft/v1beta1/event"));
var _170 = _interopRequireWildcard(require("./nft/v1beta1/genesis"));
var _171 = _interopRequireWildcard(require("./nft/v1beta1/nft"));
var _172 = _interopRequireWildcard(require("./nft/v1beta1/query"));
var _173 = _interopRequireWildcard(require("./nft/v1beta1/tx"));
var _174 = _interopRequireWildcard(require("./orm/v1/orm"));
var _175 = _interopRequireWildcard(require("./orm/v1alpha1/schema"));
var _176 = _interopRequireWildcard(require("./params/v1beta1/params"));
var _177 = _interopRequireWildcard(require("./params/v1beta1/query"));
var _178 = _interopRequireWildcard(require("./slashing/v1beta1/genesis"));
var _179 = _interopRequireWildcard(require("./slashing/v1beta1/query"));
var _180 = _interopRequireWildcard(require("./slashing/v1beta1/slashing"));
var _181 = _interopRequireWildcard(require("./slashing/v1beta1/tx"));
var _182 = _interopRequireWildcard(require("./staking/v1beta1/authz"));
var _183 = _interopRequireWildcard(require("./staking/v1beta1/genesis"));
var _184 = _interopRequireWildcard(require("./staking/v1beta1/query"));
var _185 = _interopRequireWildcard(require("./staking/v1beta1/staking"));
var _186 = _interopRequireWildcard(require("./staking/v1beta1/tx"));
var _187 = _interopRequireWildcard(require("./tx/signing/v1beta1/signing"));
var _188 = _interopRequireWildcard(require("./tx/v1beta1/service"));
var _189 = _interopRequireWildcard(require("./tx/v1beta1/tx"));
var _190 = _interopRequireWildcard(require("./upgrade/v1beta1/query"));
var _191 = _interopRequireWildcard(require("./upgrade/v1beta1/tx"));
var _192 = _interopRequireWildcard(require("./upgrade/v1beta1/upgrade"));
var _193 = _interopRequireWildcard(require("./vesting/v1beta1/tx"));
var _194 = _interopRequireWildcard(require("./vesting/v1beta1/vesting"));
var _253 = _interopRequireWildcard(require("./authz/v1beta1/tx.amino"));
var _254 = _interopRequireWildcard(require("./bank/v1beta1/tx.amino"));
var _255 = _interopRequireWildcard(require("./crisis/v1beta1/tx.amino"));
var _256 = _interopRequireWildcard(require("./distribution/v1beta1/tx.amino"));
var _257 = _interopRequireWildcard(require("./evidence/v1beta1/tx.amino"));
var _258 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.amino"));
var _259 = _interopRequireWildcard(require("./gov/v1/tx.amino"));
var _260 = _interopRequireWildcard(require("./gov/v1beta1/tx.amino"));
var _261 = _interopRequireWildcard(require("./group/v1/tx.amino"));
var _262 = _interopRequireWildcard(require("./nft/v1beta1/tx.amino"));
var _263 = _interopRequireWildcard(require("./slashing/v1beta1/tx.amino"));
var _264 = _interopRequireWildcard(require("./staking/v1beta1/tx.amino"));
var _265 = _interopRequireWildcard(require("./upgrade/v1beta1/tx.amino"));
var _266 = _interopRequireWildcard(require("./vesting/v1beta1/tx.amino"));
var _267 = _interopRequireWildcard(require("./authz/v1beta1/tx.registry"));
var _268 = _interopRequireWildcard(require("./bank/v1beta1/tx.registry"));
var _269 = _interopRequireWildcard(require("./crisis/v1beta1/tx.registry"));
var _270 = _interopRequireWildcard(require("./distribution/v1beta1/tx.registry"));
var _271 = _interopRequireWildcard(require("./evidence/v1beta1/tx.registry"));
var _272 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.registry"));
var _273 = _interopRequireWildcard(require("./gov/v1/tx.registry"));
var _274 = _interopRequireWildcard(require("./gov/v1beta1/tx.registry"));
var _275 = _interopRequireWildcard(require("./group/v1/tx.registry"));
var _276 = _interopRequireWildcard(require("./nft/v1beta1/tx.registry"));
var _277 = _interopRequireWildcard(require("./slashing/v1beta1/tx.registry"));
var _278 = _interopRequireWildcard(require("./staking/v1beta1/tx.registry"));
var _279 = _interopRequireWildcard(require("./upgrade/v1beta1/tx.registry"));
var _280 = _interopRequireWildcard(require("./vesting/v1beta1/tx.registry"));
var _281 = _interopRequireWildcard(require("./app/v1alpha1/query.rpc.Query"));
var _282 = _interopRequireWildcard(require("./auth/v1beta1/query.rpc.Query"));
var _283 = _interopRequireWildcard(require("./authz/v1beta1/query.rpc.Query"));
var _284 = _interopRequireWildcard(require("./bank/v1beta1/query.rpc.Query"));
var _285 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query.rpc.Service"));
var _286 = _interopRequireWildcard(require("./distribution/v1beta1/query.rpc.Query"));
var _287 = _interopRequireWildcard(require("./evidence/v1beta1/query.rpc.Query"));
var _288 = _interopRequireWildcard(require("./feegrant/v1beta1/query.rpc.Query"));
var _289 = _interopRequireWildcard(require("./gov/v1/query.rpc.Query"));
var _290 = _interopRequireWildcard(require("./gov/v1beta1/query.rpc.Query"));
var _291 = _interopRequireWildcard(require("./group/v1/query.rpc.Query"));
var _292 = _interopRequireWildcard(require("./mint/v1beta1/query.rpc.Query"));
var _293 = _interopRequireWildcard(require("./nft/v1beta1/query.rpc.Query"));
var _294 = _interopRequireWildcard(require("./params/v1beta1/query.rpc.Query"));
var _295 = _interopRequireWildcard(require("./slashing/v1beta1/query.rpc.Query"));
var _296 = _interopRequireWildcard(require("./staking/v1beta1/query.rpc.Query"));
var _297 = _interopRequireWildcard(require("./tx/v1beta1/service.rpc.Service"));
var _298 = _interopRequireWildcard(require("./upgrade/v1beta1/query.rpc.Query"));
var _299 = _interopRequireWildcard(require("./authz/v1beta1/tx.rpc.msg"));
var _300 = _interopRequireWildcard(require("./bank/v1beta1/tx.rpc.msg"));
var _301 = _interopRequireWildcard(require("./crisis/v1beta1/tx.rpc.msg"));
var _302 = _interopRequireWildcard(require("./distribution/v1beta1/tx.rpc.msg"));
var _303 = _interopRequireWildcard(require("./evidence/v1beta1/tx.rpc.msg"));
var _304 = _interopRequireWildcard(require("./feegrant/v1beta1/tx.rpc.msg"));
var _305 = _interopRequireWildcard(require("./gov/v1/tx.rpc.msg"));
var _306 = _interopRequireWildcard(require("./gov/v1beta1/tx.rpc.msg"));
var _307 = _interopRequireWildcard(require("./group/v1/tx.rpc.msg"));
var _308 = _interopRequireWildcard(require("./nft/v1beta1/tx.rpc.msg"));
var _309 = _interopRequireWildcard(require("./slashing/v1beta1/tx.rpc.msg"));
var _310 = _interopRequireWildcard(require("./staking/v1beta1/tx.rpc.msg"));
var _311 = _interopRequireWildcard(require("./upgrade/v1beta1/tx.rpc.msg"));
var _312 = _interopRequireWildcard(require("./vesting/v1beta1/tx.rpc.msg"));
var _315 = _interopRequireWildcard(require("./rpc.query"));
var _316 = _interopRequireWildcard(require("./rpc.tx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var cosmos;
exports.cosmos = cosmos;
(function (_cosmos) {
  var app;
  (function (_app) {
    var v1alpha1 = _app.v1alpha1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _103), _104), _105), _281);
  })(app || (app = _cosmos.app || (_cosmos.app = {})));
  var auth;
  (function (_auth) {
    var v1beta1 = _auth.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _106), _107), _108), _282);
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));
  var authz;
  (function (_authz) {
    var v1beta1 = _authz.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _109), _110), _111), _112), _113), _253), _267), _283), _299);
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
  var bank;
  (function (_bank) {
    var v1beta1 = _bank.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _114), _115), _116), _117), _118), _254), _268), _284), _300);
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
  var base;
  (function (_base) {
    var abci;
    (function (_abci) {
      var v1beta1 = _abci.v1beta1 = _objectSpread({}, _119);
    })(abci || (abci = _base.abci || (_base.abci = {})));
    var kv;
    (function (_kv) {
      var v1beta1 = _kv.v1beta1 = _objectSpread({}, _120);
    })(kv || (kv = _base.kv || (_base.kv = {})));
    var query;
    (function (_query) {
      var v1beta1 = _query.v1beta1 = _objectSpread({}, _121);
    })(query || (query = _base.query || (_base.query = {})));
    var reflection;
    (function (_reflection) {
      var v1beta1 = _reflection.v1beta1 = _objectSpread({}, _122);
      var v2alpha1 = _reflection.v2alpha1 = _objectSpread({}, _123);
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
    var snapshots;
    (function (_snapshots) {
      var v1beta1 = _snapshots.v1beta1 = _objectSpread({}, _124);
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
    var store;
    (function (_store) {
      var v1beta1 = _store.v1beta1 = _objectSpread(_objectSpread({}, _125), _126);
    })(store || (store = _base.store || (_base.store = {})));
    var tendermint;
    (function (_tendermint) {
      var v1beta1 = _tendermint.v1beta1 = _objectSpread(_objectSpread({}, _127), _285);
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));
    var v1beta1 = _base.v1beta1 = _objectSpread({}, _128);
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
  var capability;
  (function (_capability) {
    var v1beta1 = _capability.v1beta1 = _objectSpread(_objectSpread({}, _129), _130);
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
  var crisis;
  (function (_crisis) {
    var v1beta1 = _crisis.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _131), _132), _255), _269), _301);
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));
  var crypto;
  (function (_crypto) {
    var ed25519 = _crypto.ed25519 = _objectSpread({}, _133);
    var hd;
    (function (_hd) {
      var v1 = _hd.v1 = _objectSpread({}, _134);
    })(hd || (hd = _crypto.hd || (_crypto.hd = {})));
    var keyring;
    (function (_keyring) {
      var v1 = _keyring.v1 = _objectSpread({}, _135);
    })(keyring || (keyring = _crypto.keyring || (_crypto.keyring = {})));
    var multisig = _crypto.multisig = _objectSpread({}, _136);
    var secp256k1 = _crypto.secp256k1 = _objectSpread({}, _137);
    var secp256r1 = _crypto.secp256r1 = _objectSpread({}, _138);
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));
  var distribution;
  (function (_distribution) {
    var v1beta1 = _distribution.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _139), _140), _141), _142), _256), _270), _286), _302);
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
  var evidence;
  (function (_evidence) {
    var v1beta1 = _evidence.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _143), _144), _145), _146), _257), _271), _287), _303);
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
  var feegrant;
  (function (_feegrant) {
    var v1beta1 = _feegrant.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _147), _148), _149), _150), _258), _272), _288), _304);
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));
  var genutil;
  (function (_genutil) {
    var v1beta1 = _genutil.v1beta1 = _objectSpread({}, _151);
  })(genutil || (genutil = _cosmos.genutil || (_cosmos.genutil = {})));
  var gov;
  (function (_gov) {
    var v1 = _gov.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _152), _153), _154), _155), _259), _273), _289), _305);
    var v1beta1 = _gov.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _156), _157), _158), _159), _260), _274), _290), _306);
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
  var group;
  (function (_group) {
    var v1 = _group.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _160), _161), _162), _163), _164), _261), _275), _291), _307);
  })(group || (group = _cosmos.group || (_cosmos.group = {})));
  var mint;
  (function (_mint) {
    var v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _165), _166), _167), _292);
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));
  var msg;
  (function (_msg) {
    var v1 = _msg.v1 = _objectSpread({}, _168);
  })(msg || (msg = _cosmos.msg || (_cosmos.msg = {})));
  var nft;
  (function (_nft) {
    var v1beta1 = _nft.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _169), _170), _171), _172), _173), _262), _276), _293), _308);
  })(nft || (nft = _cosmos.nft || (_cosmos.nft = {})));
  var orm;
  (function (_orm) {
    var v1 = _orm.v1 = _objectSpread({}, _174);
    var v1alpha1 = _orm.v1alpha1 = _objectSpread({}, _175);
  })(orm || (orm = _cosmos.orm || (_cosmos.orm = {})));
  var params;
  (function (_params) {
    var v1beta1 = _params.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _176), _177), _294);
  })(params || (params = _cosmos.params || (_cosmos.params = {})));
  var slashing;
  (function (_slashing) {
    var v1beta1 = _slashing.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _178), _179), _180), _181), _263), _277), _295), _309);
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
  var staking;
  (function (_staking) {
    var v1beta1 = _staking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _182), _183), _184), _185), _186), _264), _278), _296), _310);
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
  var tx;
  (function (_tx) {
    var signing;
    (function (_signing) {
      var v1beta1 = _signing.v1beta1 = _objectSpread({}, _187);
    })(signing || (signing = _tx.signing || (_tx.signing = {})));
    var v1beta1 = _tx.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _188), _189), _297);
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
  var upgrade;
  (function (_upgrade) {
    var v1beta1 = _upgrade.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _190), _191), _192), _265), _279), _298), _311);
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
  var vesting;
  (function (_vesting) {
    var v1beta1 = _vesting.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _193), _194), _266), _280), _312);
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
  var ClientFactory = _cosmos.ClientFactory = _objectSpread(_objectSpread({}, _315), _316);
})(cosmos || (exports.cosmos = cosmos = {}));