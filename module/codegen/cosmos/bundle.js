import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as _101 from "./app/v1alpha1/config";
import * as _102 from "./app/v1alpha1/module";
import * as _103 from "./app/v1alpha1/query";
import * as _104 from "./auth/v1beta1/auth";
import * as _105 from "./auth/v1beta1/genesis";
import * as _106 from "./auth/v1beta1/query";
import * as _107 from "./authz/v1beta1/authz";
import * as _108 from "./authz/v1beta1/event";
import * as _109 from "./authz/v1beta1/genesis";
import * as _110 from "./authz/v1beta1/query";
import * as _111 from "./authz/v1beta1/tx";
import * as _112 from "./bank/v1beta1/authz";
import * as _113 from "./bank/v1beta1/bank";
import * as _114 from "./bank/v1beta1/genesis";
import * as _115 from "./bank/v1beta1/query";
import * as _116 from "./bank/v1beta1/tx";
import * as _117 from "./base/abci/v1beta1/abci";
import * as _118 from "./base/kv/v1beta1/kv";
import * as _119 from "./base/query/v1beta1/pagination";
import * as _120 from "./base/reflection/v1beta1/reflection";
import * as _121 from "./base/reflection/v2alpha1/reflection";
import * as _122 from "./base/snapshots/v1beta1/snapshot";
import * as _123 from "./base/store/v1beta1/commit_info";
import * as _124 from "./base/store/v1beta1/listening";
import * as _125 from "./base/tendermint/v1beta1/query";
import * as _126 from "./base/v1beta1/coin";
import * as _127 from "./capability/v1beta1/capability";
import * as _128 from "./capability/v1beta1/genesis";
import * as _129 from "./crisis/v1beta1/genesis";
import * as _130 from "./crisis/v1beta1/tx";
import * as _131 from "./crypto/ed25519/keys";
import * as _132 from "./crypto/hd/v1/hd";
import * as _133 from "./crypto/keyring/v1/record";
import * as _134 from "./crypto/multisig/keys";
import * as _135 from "./crypto/secp256k1/keys";
import * as _136 from "./crypto/secp256r1/keys";
import * as _137 from "./distribution/v1beta1/distribution";
import * as _138 from "./distribution/v1beta1/genesis";
import * as _139 from "./distribution/v1beta1/query";
import * as _140 from "./distribution/v1beta1/tx";
import * as _141 from "./evidence/v1beta1/evidence";
import * as _142 from "./evidence/v1beta1/genesis";
import * as _143 from "./evidence/v1beta1/query";
import * as _144 from "./evidence/v1beta1/tx";
import * as _145 from "./feegrant/v1beta1/feegrant";
import * as _146 from "./feegrant/v1beta1/genesis";
import * as _147 from "./feegrant/v1beta1/query";
import * as _148 from "./feegrant/v1beta1/tx";
import * as _149 from "./genutil/v1beta1/genesis";
import * as _150 from "./gov/v1/genesis";
import * as _151 from "./gov/v1/gov";
import * as _152 from "./gov/v1/query";
import * as _153 from "./gov/v1/tx";
import * as _154 from "./gov/v1beta1/genesis";
import * as _155 from "./gov/v1beta1/gov";
import * as _156 from "./gov/v1beta1/query";
import * as _157 from "./gov/v1beta1/tx";
import * as _158 from "./group/v1/events";
import * as _159 from "./group/v1/genesis";
import * as _160 from "./group/v1/query";
import * as _161 from "./group/v1/tx";
import * as _162 from "./group/v1/types";
import * as _163 from "./mint/v1beta1/genesis";
import * as _164 from "./mint/v1beta1/mint";
import * as _165 from "./mint/v1beta1/query";
import * as _166 from "./msg/v1/msg";
import * as _167 from "./nft/v1beta1/event";
import * as _168 from "./nft/v1beta1/genesis";
import * as _169 from "./nft/v1beta1/nft";
import * as _170 from "./nft/v1beta1/query";
import * as _171 from "./nft/v1beta1/tx";
import * as _172 from "./orm/v1/orm";
import * as _173 from "./orm/v1alpha1/schema";
import * as _174 from "./params/v1beta1/params";
import * as _175 from "./params/v1beta1/query";
import * as _176 from "./slashing/v1beta1/genesis";
import * as _177 from "./slashing/v1beta1/query";
import * as _178 from "./slashing/v1beta1/slashing";
import * as _179 from "./slashing/v1beta1/tx";
import * as _180 from "./staking/v1beta1/authz";
import * as _181 from "./staking/v1beta1/genesis";
import * as _182 from "./staking/v1beta1/query";
import * as _183 from "./staking/v1beta1/staking";
import * as _184 from "./staking/v1beta1/tx";
import * as _185 from "./tx/signing/v1beta1/signing";
import * as _186 from "./tx/v1beta1/service";
import * as _187 from "./tx/v1beta1/tx";
import * as _188 from "./upgrade/v1beta1/query";
import * as _189 from "./upgrade/v1beta1/tx";
import * as _190 from "./upgrade/v1beta1/upgrade";
import * as _191 from "./vesting/v1beta1/tx";
import * as _192 from "./vesting/v1beta1/vesting";
import * as _251 from "./authz/v1beta1/tx.amino";
import * as _252 from "./bank/v1beta1/tx.amino";
import * as _253 from "./crisis/v1beta1/tx.amino";
import * as _254 from "./distribution/v1beta1/tx.amino";
import * as _255 from "./evidence/v1beta1/tx.amino";
import * as _256 from "./feegrant/v1beta1/tx.amino";
import * as _257 from "./gov/v1/tx.amino";
import * as _258 from "./gov/v1beta1/tx.amino";
import * as _259 from "./group/v1/tx.amino";
import * as _260 from "./nft/v1beta1/tx.amino";
import * as _261 from "./slashing/v1beta1/tx.amino";
import * as _262 from "./staking/v1beta1/tx.amino";
import * as _263 from "./upgrade/v1beta1/tx.amino";
import * as _264 from "./vesting/v1beta1/tx.amino";
import * as _265 from "./authz/v1beta1/tx.registry";
import * as _266 from "./bank/v1beta1/tx.registry";
import * as _267 from "./crisis/v1beta1/tx.registry";
import * as _268 from "./distribution/v1beta1/tx.registry";
import * as _269 from "./evidence/v1beta1/tx.registry";
import * as _270 from "./feegrant/v1beta1/tx.registry";
import * as _271 from "./gov/v1/tx.registry";
import * as _272 from "./gov/v1beta1/tx.registry";
import * as _273 from "./group/v1/tx.registry";
import * as _274 from "./nft/v1beta1/tx.registry";
import * as _275 from "./slashing/v1beta1/tx.registry";
import * as _276 from "./staking/v1beta1/tx.registry";
import * as _277 from "./upgrade/v1beta1/tx.registry";
import * as _278 from "./vesting/v1beta1/tx.registry";
import * as _279 from "./app/v1alpha1/query.rpc.Query";
import * as _280 from "./auth/v1beta1/query.rpc.Query";
import * as _281 from "./authz/v1beta1/query.rpc.Query";
import * as _282 from "./bank/v1beta1/query.rpc.Query";
import * as _283 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _284 from "./distribution/v1beta1/query.rpc.Query";
import * as _285 from "./evidence/v1beta1/query.rpc.Query";
import * as _286 from "./feegrant/v1beta1/query.rpc.Query";
import * as _287 from "./gov/v1/query.rpc.Query";
import * as _288 from "./gov/v1beta1/query.rpc.Query";
import * as _289 from "./group/v1/query.rpc.Query";
import * as _290 from "./mint/v1beta1/query.rpc.Query";
import * as _291 from "./nft/v1beta1/query.rpc.Query";
import * as _292 from "./params/v1beta1/query.rpc.Query";
import * as _293 from "./slashing/v1beta1/query.rpc.Query";
import * as _294 from "./staking/v1beta1/query.rpc.Query";
import * as _295 from "./tx/v1beta1/service.rpc.Service";
import * as _296 from "./upgrade/v1beta1/query.rpc.Query";
import * as _297 from "./authz/v1beta1/tx.rpc.msg";
import * as _298 from "./bank/v1beta1/tx.rpc.msg";
import * as _299 from "./crisis/v1beta1/tx.rpc.msg";
import * as _300 from "./distribution/v1beta1/tx.rpc.msg";
import * as _301 from "./evidence/v1beta1/tx.rpc.msg";
import * as _302 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _303 from "./gov/v1/tx.rpc.msg";
import * as _304 from "./gov/v1beta1/tx.rpc.msg";
import * as _305 from "./group/v1/tx.rpc.msg";
import * as _306 from "./nft/v1beta1/tx.rpc.msg";
import * as _307 from "./slashing/v1beta1/tx.rpc.msg";
import * as _308 from "./staking/v1beta1/tx.rpc.msg";
import * as _309 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _310 from "./vesting/v1beta1/tx.rpc.msg";
import * as _313 from "./rpc.query";
import * as _314 from "./rpc.tx";
export let cosmos;
(function (_cosmos) {
  let app;
  (function (_app) {
    const v1alpha1 = _app.v1alpha1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _101), _102), _103), _279);
  })(app || (app = _cosmos.app || (_cosmos.app = {})));
  let auth;
  (function (_auth) {
    const v1beta1 = _auth.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _104), _105), _106), _280);
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));
  let authz;
  (function (_authz) {
    const v1beta1 = _authz.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _107), _108), _109), _110), _111), _251), _265), _281), _297);
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
  let bank;
  (function (_bank) {
    const v1beta1 = _bank.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _112), _113), _114), _115), _116), _252), _266), _282), _298);
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
  let base;
  (function (_base) {
    let abci;
    (function (_abci) {
      const v1beta1 = _abci.v1beta1 = _objectSpread({}, _117);
    })(abci || (abci = _base.abci || (_base.abci = {})));
    let kv;
    (function (_kv) {
      const v1beta1 = _kv.v1beta1 = _objectSpread({}, _118);
    })(kv || (kv = _base.kv || (_base.kv = {})));
    let query;
    (function (_query) {
      const v1beta1 = _query.v1beta1 = _objectSpread({}, _119);
    })(query || (query = _base.query || (_base.query = {})));
    let reflection;
    (function (_reflection) {
      const v1beta1 = _reflection.v1beta1 = _objectSpread({}, _120);
      const v2alpha1 = _reflection.v2alpha1 = _objectSpread({}, _121);
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
    let snapshots;
    (function (_snapshots) {
      const v1beta1 = _snapshots.v1beta1 = _objectSpread({}, _122);
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
    let store;
    (function (_store) {
      const v1beta1 = _store.v1beta1 = _objectSpread(_objectSpread({}, _123), _124);
    })(store || (store = _base.store || (_base.store = {})));
    let tendermint;
    (function (_tendermint) {
      const v1beta1 = _tendermint.v1beta1 = _objectSpread(_objectSpread({}, _125), _283);
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));
    const v1beta1 = _base.v1beta1 = _objectSpread({}, _126);
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
  let capability;
  (function (_capability) {
    const v1beta1 = _capability.v1beta1 = _objectSpread(_objectSpread({}, _127), _128);
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
  let crisis;
  (function (_crisis) {
    const v1beta1 = _crisis.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _129), _130), _253), _267), _299);
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));
  let crypto;
  (function (_crypto) {
    const ed25519 = _crypto.ed25519 = _objectSpread({}, _131);
    let hd;
    (function (_hd) {
      const v1 = _hd.v1 = _objectSpread({}, _132);
    })(hd || (hd = _crypto.hd || (_crypto.hd = {})));
    let keyring;
    (function (_keyring) {
      const v1 = _keyring.v1 = _objectSpread({}, _133);
    })(keyring || (keyring = _crypto.keyring || (_crypto.keyring = {})));
    const multisig = _crypto.multisig = _objectSpread({}, _134);
    const secp256k1 = _crypto.secp256k1 = _objectSpread({}, _135);
    const secp256r1 = _crypto.secp256r1 = _objectSpread({}, _136);
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));
  let distribution;
  (function (_distribution) {
    const v1beta1 = _distribution.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _137), _138), _139), _140), _254), _268), _284), _300);
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
  let evidence;
  (function (_evidence) {
    const v1beta1 = _evidence.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _141), _142), _143), _144), _255), _269), _285), _301);
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
  let feegrant;
  (function (_feegrant) {
    const v1beta1 = _feegrant.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _145), _146), _147), _148), _256), _270), _286), _302);
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));
  let genutil;
  (function (_genutil) {
    const v1beta1 = _genutil.v1beta1 = _objectSpread({}, _149);
  })(genutil || (genutil = _cosmos.genutil || (_cosmos.genutil = {})));
  let gov;
  (function (_gov) {
    const v1 = _gov.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _150), _151), _152), _153), _257), _271), _287), _303);
    const v1beta1 = _gov.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _154), _155), _156), _157), _258), _272), _288), _304);
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
  let group;
  (function (_group) {
    const v1 = _group.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _158), _159), _160), _161), _162), _259), _273), _289), _305);
  })(group || (group = _cosmos.group || (_cosmos.group = {})));
  let mint;
  (function (_mint) {
    const v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _163), _164), _165), _290);
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));
  let msg;
  (function (_msg) {
    const v1 = _msg.v1 = _objectSpread({}, _166);
  })(msg || (msg = _cosmos.msg || (_cosmos.msg = {})));
  let nft;
  (function (_nft) {
    const v1beta1 = _nft.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _167), _168), _169), _170), _171), _260), _274), _291), _306);
  })(nft || (nft = _cosmos.nft || (_cosmos.nft = {})));
  let orm;
  (function (_orm) {
    const v1 = _orm.v1 = _objectSpread({}, _172);
    const v1alpha1 = _orm.v1alpha1 = _objectSpread({}, _173);
  })(orm || (orm = _cosmos.orm || (_cosmos.orm = {})));
  let params;
  (function (_params) {
    const v1beta1 = _params.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _174), _175), _292);
  })(params || (params = _cosmos.params || (_cosmos.params = {})));
  let slashing;
  (function (_slashing) {
    const v1beta1 = _slashing.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _176), _177), _178), _179), _261), _275), _293), _307);
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
  let staking;
  (function (_staking) {
    const v1beta1 = _staking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _180), _181), _182), _183), _184), _262), _276), _294), _308);
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
  let tx;
  (function (_tx) {
    let signing;
    (function (_signing) {
      const v1beta1 = _signing.v1beta1 = _objectSpread({}, _185);
    })(signing || (signing = _tx.signing || (_tx.signing = {})));
    const v1beta1 = _tx.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _186), _187), _295);
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
  let upgrade;
  (function (_upgrade) {
    const v1beta1 = _upgrade.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _188), _189), _190), _263), _277), _296), _309);
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
  let vesting;
  (function (_vesting) {
    const v1beta1 = _vesting.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _191), _192), _264), _278), _310);
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
  const ClientFactory = _cosmos.ClientFactory = _objectSpread(_objectSpread({}, _313), _314);
})(cosmos || (cosmos = {}));