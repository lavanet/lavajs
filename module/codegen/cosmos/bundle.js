import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as _103 from "./app/v1alpha1/config";
import * as _104 from "./app/v1alpha1/module";
import * as _105 from "./app/v1alpha1/query";
import * as _106 from "./auth/v1beta1/auth";
import * as _107 from "./auth/v1beta1/genesis";
import * as _108 from "./auth/v1beta1/query";
import * as _109 from "./authz/v1beta1/authz";
import * as _110 from "./authz/v1beta1/event";
import * as _111 from "./authz/v1beta1/genesis";
import * as _112 from "./authz/v1beta1/query";
import * as _113 from "./authz/v1beta1/tx";
import * as _114 from "./bank/v1beta1/authz";
import * as _115 from "./bank/v1beta1/bank";
import * as _116 from "./bank/v1beta1/genesis";
import * as _117 from "./bank/v1beta1/query";
import * as _118 from "./bank/v1beta1/tx";
import * as _119 from "./base/abci/v1beta1/abci";
import * as _120 from "./base/kv/v1beta1/kv";
import * as _121 from "./base/query/v1beta1/pagination";
import * as _122 from "./base/reflection/v1beta1/reflection";
import * as _123 from "./base/reflection/v2alpha1/reflection";
import * as _124 from "./base/snapshots/v1beta1/snapshot";
import * as _125 from "./base/store/v1beta1/commit_info";
import * as _126 from "./base/store/v1beta1/listening";
import * as _127 from "./base/tendermint/v1beta1/query";
import * as _128 from "./base/v1beta1/coin";
import * as _129 from "./capability/v1beta1/capability";
import * as _130 from "./capability/v1beta1/genesis";
import * as _131 from "./crisis/v1beta1/genesis";
import * as _132 from "./crisis/v1beta1/tx";
import * as _133 from "./crypto/ed25519/keys";
import * as _134 from "./crypto/hd/v1/hd";
import * as _135 from "./crypto/keyring/v1/record";
import * as _136 from "./crypto/multisig/keys";
import * as _137 from "./crypto/secp256k1/keys";
import * as _138 from "./crypto/secp256r1/keys";
import * as _139 from "./distribution/v1beta1/distribution";
import * as _140 from "./distribution/v1beta1/genesis";
import * as _141 from "./distribution/v1beta1/query";
import * as _142 from "./distribution/v1beta1/tx";
import * as _143 from "./evidence/v1beta1/evidence";
import * as _144 from "./evidence/v1beta1/genesis";
import * as _145 from "./evidence/v1beta1/query";
import * as _146 from "./evidence/v1beta1/tx";
import * as _147 from "./feegrant/v1beta1/feegrant";
import * as _148 from "./feegrant/v1beta1/genesis";
import * as _149 from "./feegrant/v1beta1/query";
import * as _150 from "./feegrant/v1beta1/tx";
import * as _151 from "./genutil/v1beta1/genesis";
import * as _152 from "./gov/v1/genesis";
import * as _153 from "./gov/v1/gov";
import * as _154 from "./gov/v1/query";
import * as _155 from "./gov/v1/tx";
import * as _156 from "./gov/v1beta1/genesis";
import * as _157 from "./gov/v1beta1/gov";
import * as _158 from "./gov/v1beta1/query";
import * as _159 from "./gov/v1beta1/tx";
import * as _160 from "./group/v1/events";
import * as _161 from "./group/v1/genesis";
import * as _162 from "./group/v1/query";
import * as _163 from "./group/v1/tx";
import * as _164 from "./group/v1/types";
import * as _165 from "./mint/v1beta1/genesis";
import * as _166 from "./mint/v1beta1/mint";
import * as _167 from "./mint/v1beta1/query";
import * as _168 from "./msg/v1/msg";
import * as _169 from "./nft/v1beta1/event";
import * as _170 from "./nft/v1beta1/genesis";
import * as _171 from "./nft/v1beta1/nft";
import * as _172 from "./nft/v1beta1/query";
import * as _173 from "./nft/v1beta1/tx";
import * as _174 from "./orm/v1/orm";
import * as _175 from "./orm/v1alpha1/schema";
import * as _176 from "./params/v1beta1/params";
import * as _177 from "./params/v1beta1/query";
import * as _178 from "./slashing/v1beta1/genesis";
import * as _179 from "./slashing/v1beta1/query";
import * as _180 from "./slashing/v1beta1/slashing";
import * as _181 from "./slashing/v1beta1/tx";
import * as _182 from "./staking/v1beta1/authz";
import * as _183 from "./staking/v1beta1/genesis";
import * as _184 from "./staking/v1beta1/query";
import * as _185 from "./staking/v1beta1/staking";
import * as _186 from "./staking/v1beta1/tx";
import * as _187 from "./tx/signing/v1beta1/signing";
import * as _188 from "./tx/v1beta1/service";
import * as _189 from "./tx/v1beta1/tx";
import * as _190 from "./upgrade/v1beta1/query";
import * as _191 from "./upgrade/v1beta1/tx";
import * as _192 from "./upgrade/v1beta1/upgrade";
import * as _193 from "./vesting/v1beta1/tx";
import * as _194 from "./vesting/v1beta1/vesting";
import * as _253 from "./authz/v1beta1/tx.amino";
import * as _254 from "./bank/v1beta1/tx.amino";
import * as _255 from "./crisis/v1beta1/tx.amino";
import * as _256 from "./distribution/v1beta1/tx.amino";
import * as _257 from "./evidence/v1beta1/tx.amino";
import * as _258 from "./feegrant/v1beta1/tx.amino";
import * as _259 from "./gov/v1/tx.amino";
import * as _260 from "./gov/v1beta1/tx.amino";
import * as _261 from "./group/v1/tx.amino";
import * as _262 from "./nft/v1beta1/tx.amino";
import * as _263 from "./slashing/v1beta1/tx.amino";
import * as _264 from "./staking/v1beta1/tx.amino";
import * as _265 from "./upgrade/v1beta1/tx.amino";
import * as _266 from "./vesting/v1beta1/tx.amino";
import * as _267 from "./authz/v1beta1/tx.registry";
import * as _268 from "./bank/v1beta1/tx.registry";
import * as _269 from "./crisis/v1beta1/tx.registry";
import * as _270 from "./distribution/v1beta1/tx.registry";
import * as _271 from "./evidence/v1beta1/tx.registry";
import * as _272 from "./feegrant/v1beta1/tx.registry";
import * as _273 from "./gov/v1/tx.registry";
import * as _274 from "./gov/v1beta1/tx.registry";
import * as _275 from "./group/v1/tx.registry";
import * as _276 from "./nft/v1beta1/tx.registry";
import * as _277 from "./slashing/v1beta1/tx.registry";
import * as _278 from "./staking/v1beta1/tx.registry";
import * as _279 from "./upgrade/v1beta1/tx.registry";
import * as _280 from "./vesting/v1beta1/tx.registry";
import * as _281 from "./app/v1alpha1/query.rpc.Query";
import * as _282 from "./auth/v1beta1/query.rpc.Query";
import * as _283 from "./authz/v1beta1/query.rpc.Query";
import * as _284 from "./bank/v1beta1/query.rpc.Query";
import * as _285 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _286 from "./distribution/v1beta1/query.rpc.Query";
import * as _287 from "./evidence/v1beta1/query.rpc.Query";
import * as _288 from "./feegrant/v1beta1/query.rpc.Query";
import * as _289 from "./gov/v1/query.rpc.Query";
import * as _290 from "./gov/v1beta1/query.rpc.Query";
import * as _291 from "./group/v1/query.rpc.Query";
import * as _292 from "./mint/v1beta1/query.rpc.Query";
import * as _293 from "./nft/v1beta1/query.rpc.Query";
import * as _294 from "./params/v1beta1/query.rpc.Query";
import * as _295 from "./slashing/v1beta1/query.rpc.Query";
import * as _296 from "./staking/v1beta1/query.rpc.Query";
import * as _297 from "./tx/v1beta1/service.rpc.Service";
import * as _298 from "./upgrade/v1beta1/query.rpc.Query";
import * as _299 from "./authz/v1beta1/tx.rpc.msg";
import * as _300 from "./bank/v1beta1/tx.rpc.msg";
import * as _301 from "./crisis/v1beta1/tx.rpc.msg";
import * as _302 from "./distribution/v1beta1/tx.rpc.msg";
import * as _303 from "./evidence/v1beta1/tx.rpc.msg";
import * as _304 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _305 from "./gov/v1/tx.rpc.msg";
import * as _306 from "./gov/v1beta1/tx.rpc.msg";
import * as _307 from "./group/v1/tx.rpc.msg";
import * as _308 from "./nft/v1beta1/tx.rpc.msg";
import * as _309 from "./slashing/v1beta1/tx.rpc.msg";
import * as _310 from "./staking/v1beta1/tx.rpc.msg";
import * as _311 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _312 from "./vesting/v1beta1/tx.rpc.msg";
import * as _315 from "./rpc.query";
import * as _316 from "./rpc.tx";
export let cosmos;
(function (_cosmos) {
  let app;
  (function (_app) {
    const v1alpha1 = _app.v1alpha1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _103), _104), _105), _281);
  })(app || (app = _cosmos.app || (_cosmos.app = {})));
  let auth;
  (function (_auth) {
    const v1beta1 = _auth.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _106), _107), _108), _282);
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));
  let authz;
  (function (_authz) {
    const v1beta1 = _authz.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _109), _110), _111), _112), _113), _253), _267), _283), _299);
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
  let bank;
  (function (_bank) {
    const v1beta1 = _bank.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _114), _115), _116), _117), _118), _254), _268), _284), _300);
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
  let base;
  (function (_base) {
    let abci;
    (function (_abci) {
      const v1beta1 = _abci.v1beta1 = _objectSpread({}, _119);
    })(abci || (abci = _base.abci || (_base.abci = {})));
    let kv;
    (function (_kv) {
      const v1beta1 = _kv.v1beta1 = _objectSpread({}, _120);
    })(kv || (kv = _base.kv || (_base.kv = {})));
    let query;
    (function (_query) {
      const v1beta1 = _query.v1beta1 = _objectSpread({}, _121);
    })(query || (query = _base.query || (_base.query = {})));
    let reflection;
    (function (_reflection) {
      const v1beta1 = _reflection.v1beta1 = _objectSpread({}, _122);
      const v2alpha1 = _reflection.v2alpha1 = _objectSpread({}, _123);
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
    let snapshots;
    (function (_snapshots) {
      const v1beta1 = _snapshots.v1beta1 = _objectSpread({}, _124);
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
    let store;
    (function (_store) {
      const v1beta1 = _store.v1beta1 = _objectSpread(_objectSpread({}, _125), _126);
    })(store || (store = _base.store || (_base.store = {})));
    let tendermint;
    (function (_tendermint) {
      const v1beta1 = _tendermint.v1beta1 = _objectSpread(_objectSpread({}, _127), _285);
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));
    const v1beta1 = _base.v1beta1 = _objectSpread({}, _128);
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
  let capability;
  (function (_capability) {
    const v1beta1 = _capability.v1beta1 = _objectSpread(_objectSpread({}, _129), _130);
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
  let crisis;
  (function (_crisis) {
    const v1beta1 = _crisis.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _131), _132), _255), _269), _301);
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));
  let crypto;
  (function (_crypto) {
    const ed25519 = _crypto.ed25519 = _objectSpread({}, _133);
    let hd;
    (function (_hd) {
      const v1 = _hd.v1 = _objectSpread({}, _134);
    })(hd || (hd = _crypto.hd || (_crypto.hd = {})));
    let keyring;
    (function (_keyring) {
      const v1 = _keyring.v1 = _objectSpread({}, _135);
    })(keyring || (keyring = _crypto.keyring || (_crypto.keyring = {})));
    const multisig = _crypto.multisig = _objectSpread({}, _136);
    const secp256k1 = _crypto.secp256k1 = _objectSpread({}, _137);
    const secp256r1 = _crypto.secp256r1 = _objectSpread({}, _138);
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));
  let distribution;
  (function (_distribution) {
    const v1beta1 = _distribution.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _139), _140), _141), _142), _256), _270), _286), _302);
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
  let evidence;
  (function (_evidence) {
    const v1beta1 = _evidence.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _143), _144), _145), _146), _257), _271), _287), _303);
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
  let feegrant;
  (function (_feegrant) {
    const v1beta1 = _feegrant.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _147), _148), _149), _150), _258), _272), _288), _304);
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));
  let genutil;
  (function (_genutil) {
    const v1beta1 = _genutil.v1beta1 = _objectSpread({}, _151);
  })(genutil || (genutil = _cosmos.genutil || (_cosmos.genutil = {})));
  let gov;
  (function (_gov) {
    const v1 = _gov.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _152), _153), _154), _155), _259), _273), _289), _305);
    const v1beta1 = _gov.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _156), _157), _158), _159), _260), _274), _290), _306);
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
  let group;
  (function (_group) {
    const v1 = _group.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _160), _161), _162), _163), _164), _261), _275), _291), _307);
  })(group || (group = _cosmos.group || (_cosmos.group = {})));
  let mint;
  (function (_mint) {
    const v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _165), _166), _167), _292);
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));
  let msg;
  (function (_msg) {
    const v1 = _msg.v1 = _objectSpread({}, _168);
  })(msg || (msg = _cosmos.msg || (_cosmos.msg = {})));
  let nft;
  (function (_nft) {
    const v1beta1 = _nft.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _169), _170), _171), _172), _173), _262), _276), _293), _308);
  })(nft || (nft = _cosmos.nft || (_cosmos.nft = {})));
  let orm;
  (function (_orm) {
    const v1 = _orm.v1 = _objectSpread({}, _174);
    const v1alpha1 = _orm.v1alpha1 = _objectSpread({}, _175);
  })(orm || (orm = _cosmos.orm || (_cosmos.orm = {})));
  let params;
  (function (_params) {
    const v1beta1 = _params.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _176), _177), _294);
  })(params || (params = _cosmos.params || (_cosmos.params = {})));
  let slashing;
  (function (_slashing) {
    const v1beta1 = _slashing.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _178), _179), _180), _181), _263), _277), _295), _309);
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
  let staking;
  (function (_staking) {
    const v1beta1 = _staking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _182), _183), _184), _185), _186), _264), _278), _296), _310);
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
  let tx;
  (function (_tx) {
    let signing;
    (function (_signing) {
      const v1beta1 = _signing.v1beta1 = _objectSpread({}, _187);
    })(signing || (signing = _tx.signing || (_tx.signing = {})));
    const v1beta1 = _tx.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _188), _189), _297);
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
  let upgrade;
  (function (_upgrade) {
    const v1beta1 = _upgrade.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _190), _191), _192), _265), _279), _298), _311);
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
  let vesting;
  (function (_vesting) {
    const v1beta1 = _vesting.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _193), _194), _266), _280), _312);
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
  const ClientFactory = _cosmos.ClientFactory = _objectSpread(_objectSpread({}, _315), _316);
})(cosmos || (cosmos = {}));