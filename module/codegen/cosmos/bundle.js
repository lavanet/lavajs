import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/kv/v1beta1/kv";
import * as _20 from "./base/query/v1beta1/pagination";
import * as _21 from "./base/reflection/v1beta1/reflection";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/snapshots/v1beta1/snapshot";
import * as _24 from "./base/store/v1beta1/commit_info";
import * as _25 from "./base/store/v1beta1/listening";
import * as _26 from "./base/tendermint/v1beta1/query";
import * as _27 from "./base/v1beta1/coin";
import * as _28 from "./capability/v1beta1/capability";
import * as _29 from "./capability/v1beta1/genesis";
import * as _30 from "./crisis/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/tx";
import * as _32 from "./crypto/ed25519/keys";
import * as _33 from "./crypto/hd/v1/hd";
import * as _34 from "./crypto/keyring/v1/record";
import * as _35 from "./crypto/multisig/keys";
import * as _36 from "./crypto/secp256k1/keys";
import * as _37 from "./crypto/secp256r1/keys";
import * as _38 from "./distribution/v1beta1/distribution";
import * as _39 from "./distribution/v1beta1/genesis";
import * as _40 from "./distribution/v1beta1/query";
import * as _41 from "./distribution/v1beta1/tx";
import * as _42 from "./evidence/v1beta1/evidence";
import * as _43 from "./evidence/v1beta1/genesis";
import * as _44 from "./evidence/v1beta1/query";
import * as _45 from "./evidence/v1beta1/tx";
import * as _46 from "./feegrant/v1beta1/feegrant";
import * as _47 from "./feegrant/v1beta1/genesis";
import * as _48 from "./feegrant/v1beta1/query";
import * as _49 from "./feegrant/v1beta1/tx";
import * as _50 from "./genutil/v1beta1/genesis";
import * as _51 from "./gov/v1/genesis";
import * as _52 from "./gov/v1/gov";
import * as _53 from "./gov/v1/query";
import * as _54 from "./gov/v1/tx";
import * as _55 from "./gov/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/gov";
import * as _57 from "./gov/v1beta1/query";
import * as _58 from "./gov/v1beta1/tx";
import * as _59 from "./group/v1/events";
import * as _60 from "./group/v1/genesis";
import * as _61 from "./group/v1/query";
import * as _62 from "./group/v1/tx";
import * as _63 from "./group/v1/types";
import * as _64 from "./mint/v1beta1/genesis";
import * as _65 from "./mint/v1beta1/mint";
import * as _66 from "./mint/v1beta1/query";
import * as _67 from "./msg/v1/msg";
import * as _68 from "./nft/v1beta1/event";
import * as _69 from "./nft/v1beta1/genesis";
import * as _70 from "./nft/v1beta1/nft";
import * as _71 from "./nft/v1beta1/query";
import * as _72 from "./nft/v1beta1/tx";
import * as _73 from "./orm/v1/orm";
import * as _74 from "./orm/v1alpha1/schema";
import * as _75 from "./params/v1beta1/params";
import * as _76 from "./params/v1beta1/query";
import * as _77 from "./slashing/v1beta1/genesis";
import * as _78 from "./slashing/v1beta1/query";
import * as _79 from "./slashing/v1beta1/slashing";
import * as _80 from "./slashing/v1beta1/tx";
import * as _81 from "./staking/v1beta1/authz";
import * as _82 from "./staking/v1beta1/genesis";
import * as _83 from "./staking/v1beta1/query";
import * as _84 from "./staking/v1beta1/staking";
import * as _85 from "./staking/v1beta1/tx";
import * as _86 from "./tx/signing/v1beta1/signing";
import * as _87 from "./tx/v1beta1/service";
import * as _88 from "./tx/v1beta1/tx";
import * as _89 from "./upgrade/v1beta1/query";
import * as _90 from "./upgrade/v1beta1/tx";
import * as _91 from "./upgrade/v1beta1/upgrade";
import * as _92 from "./vesting/v1beta1/tx";
import * as _93 from "./vesting/v1beta1/vesting";
import * as _171 from "./authz/v1beta1/tx.amino";
import * as _172 from "./bank/v1beta1/tx.amino";
import * as _173 from "./crisis/v1beta1/tx.amino";
import * as _174 from "./distribution/v1beta1/tx.amino";
import * as _175 from "./evidence/v1beta1/tx.amino";
import * as _176 from "./feegrant/v1beta1/tx.amino";
import * as _177 from "./gov/v1/tx.amino";
import * as _178 from "./gov/v1beta1/tx.amino";
import * as _179 from "./group/v1/tx.amino";
import * as _180 from "./nft/v1beta1/tx.amino";
import * as _181 from "./slashing/v1beta1/tx.amino";
import * as _182 from "./staking/v1beta1/tx.amino";
import * as _183 from "./upgrade/v1beta1/tx.amino";
import * as _184 from "./vesting/v1beta1/tx.amino";
import * as _185 from "./authz/v1beta1/tx.registry";
import * as _186 from "./bank/v1beta1/tx.registry";
import * as _187 from "./crisis/v1beta1/tx.registry";
import * as _188 from "./distribution/v1beta1/tx.registry";
import * as _189 from "./evidence/v1beta1/tx.registry";
import * as _190 from "./feegrant/v1beta1/tx.registry";
import * as _191 from "./gov/v1/tx.registry";
import * as _192 from "./gov/v1beta1/tx.registry";
import * as _193 from "./group/v1/tx.registry";
import * as _194 from "./nft/v1beta1/tx.registry";
import * as _195 from "./slashing/v1beta1/tx.registry";
import * as _196 from "./staking/v1beta1/tx.registry";
import * as _197 from "./upgrade/v1beta1/tx.registry";
import * as _198 from "./vesting/v1beta1/tx.registry";
import * as _199 from "./auth/v1beta1/query.lcd";
import * as _200 from "./authz/v1beta1/query.lcd";
import * as _201 from "./bank/v1beta1/query.lcd";
import * as _202 from "./base/tendermint/v1beta1/query.lcd";
import * as _203 from "./distribution/v1beta1/query.lcd";
import * as _204 from "./evidence/v1beta1/query.lcd";
import * as _205 from "./feegrant/v1beta1/query.lcd";
import * as _206 from "./gov/v1/query.lcd";
import * as _207 from "./gov/v1beta1/query.lcd";
import * as _208 from "./group/v1/query.lcd";
import * as _209 from "./mint/v1beta1/query.lcd";
import * as _210 from "./nft/v1beta1/query.lcd";
import * as _211 from "./params/v1beta1/query.lcd";
import * as _212 from "./slashing/v1beta1/query.lcd";
import * as _213 from "./staking/v1beta1/query.lcd";
import * as _214 from "./tx/v1beta1/service.lcd";
import * as _215 from "./upgrade/v1beta1/query.lcd";
import * as _216 from "./app/v1alpha1/query.rpc.Query";
import * as _217 from "./auth/v1beta1/query.rpc.Query";
import * as _218 from "./authz/v1beta1/query.rpc.Query";
import * as _219 from "./bank/v1beta1/query.rpc.Query";
import * as _220 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _221 from "./distribution/v1beta1/query.rpc.Query";
import * as _222 from "./evidence/v1beta1/query.rpc.Query";
import * as _223 from "./feegrant/v1beta1/query.rpc.Query";
import * as _224 from "./gov/v1/query.rpc.Query";
import * as _225 from "./gov/v1beta1/query.rpc.Query";
import * as _226 from "./group/v1/query.rpc.Query";
import * as _227 from "./mint/v1beta1/query.rpc.Query";
import * as _228 from "./nft/v1beta1/query.rpc.Query";
import * as _229 from "./params/v1beta1/query.rpc.Query";
import * as _230 from "./slashing/v1beta1/query.rpc.Query";
import * as _231 from "./staking/v1beta1/query.rpc.Query";
import * as _232 from "./tx/v1beta1/service.rpc.Service";
import * as _233 from "./upgrade/v1beta1/query.rpc.Query";
import * as _234 from "./authz/v1beta1/tx.rpc.msg";
import * as _235 from "./bank/v1beta1/tx.rpc.msg";
import * as _236 from "./crisis/v1beta1/tx.rpc.msg";
import * as _237 from "./distribution/v1beta1/tx.rpc.msg";
import * as _238 from "./evidence/v1beta1/tx.rpc.msg";
import * as _239 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _240 from "./gov/v1/tx.rpc.msg";
import * as _241 from "./gov/v1beta1/tx.rpc.msg";
import * as _242 from "./group/v1/tx.rpc.msg";
import * as _243 from "./nft/v1beta1/tx.rpc.msg";
import * as _244 from "./slashing/v1beta1/tx.rpc.msg";
import * as _245 from "./staking/v1beta1/tx.rpc.msg";
import * as _246 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _247 from "./vesting/v1beta1/tx.rpc.msg";
import * as _278 from "./lcd";
import * as _279 from "./rpc.query";
import * as _280 from "./rpc.tx";
export let cosmos;
(function (_cosmos) {
  let app;
  (function (_app) {
    const v1alpha1 = _app.v1alpha1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _2), _3), _4), _216);
  })(app || (app = _cosmos.app || (_cosmos.app = {})));
  let auth;
  (function (_auth) {
    const v1beta1 = _auth.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _5), _6), _7), _199), _217);
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));
  let authz;
  (function (_authz) {
    const v1beta1 = _authz.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _8), _9), _10), _11), _12), _171), _185), _200), _218), _234);
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));
  let bank;
  (function (_bank) {
    const v1beta1 = _bank.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _13), _14), _15), _16), _17), _172), _186), _201), _219), _235);
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
  let base;
  (function (_base) {
    let abci;
    (function (_abci) {
      const v1beta1 = _abci.v1beta1 = _objectSpread({}, _18);
    })(abci || (abci = _base.abci || (_base.abci = {})));
    let kv;
    (function (_kv) {
      const v1beta1 = _kv.v1beta1 = _objectSpread({}, _19);
    })(kv || (kv = _base.kv || (_base.kv = {})));
    let query;
    (function (_query) {
      const v1beta1 = _query.v1beta1 = _objectSpread({}, _20);
    })(query || (query = _base.query || (_base.query = {})));
    let reflection;
    (function (_reflection) {
      const v1beta1 = _reflection.v1beta1 = _objectSpread({}, _21);
      const v2alpha1 = _reflection.v2alpha1 = _objectSpread({}, _22);
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
    let snapshots;
    (function (_snapshots) {
      const v1beta1 = _snapshots.v1beta1 = _objectSpread({}, _23);
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
    let store;
    (function (_store) {
      const v1beta1 = _store.v1beta1 = _objectSpread(_objectSpread({}, _24), _25);
    })(store || (store = _base.store || (_base.store = {})));
    let tendermint;
    (function (_tendermint) {
      const v1beta1 = _tendermint.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _26), _202), _220);
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));
    const v1beta1 = _base.v1beta1 = _objectSpread({}, _27);
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
  let capability;
  (function (_capability) {
    const v1beta1 = _capability.v1beta1 = _objectSpread(_objectSpread({}, _28), _29);
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
  let crisis;
  (function (_crisis) {
    const v1beta1 = _crisis.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _30), _31), _173), _187), _236);
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));
  let crypto;
  (function (_crypto) {
    const ed25519 = _crypto.ed25519 = _objectSpread({}, _32);
    let hd;
    (function (_hd) {
      const v1 = _hd.v1 = _objectSpread({}, _33);
    })(hd || (hd = _crypto.hd || (_crypto.hd = {})));
    let keyring;
    (function (_keyring) {
      const v1 = _keyring.v1 = _objectSpread({}, _34);
    })(keyring || (keyring = _crypto.keyring || (_crypto.keyring = {})));
    const multisig = _crypto.multisig = _objectSpread({}, _35);
    const secp256k1 = _crypto.secp256k1 = _objectSpread({}, _36);
    const secp256r1 = _crypto.secp256r1 = _objectSpread({}, _37);
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));
  let distribution;
  (function (_distribution) {
    const v1beta1 = _distribution.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _38), _39), _40), _41), _174), _188), _203), _221), _237);
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
  let evidence;
  (function (_evidence) {
    const v1beta1 = _evidence.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _42), _43), _44), _45), _175), _189), _204), _222), _238);
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
  let feegrant;
  (function (_feegrant) {
    const v1beta1 = _feegrant.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _46), _47), _48), _49), _176), _190), _205), _223), _239);
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));
  let genutil;
  (function (_genutil) {
    const v1beta1 = _genutil.v1beta1 = _objectSpread({}, _50);
  })(genutil || (genutil = _cosmos.genutil || (_cosmos.genutil = {})));
  let gov;
  (function (_gov) {
    const v1 = _gov.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _51), _52), _53), _54), _177), _191), _206), _224), _240);
    const v1beta1 = _gov.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _55), _56), _57), _58), _178), _192), _207), _225), _241);
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
  let group;
  (function (_group) {
    const v1 = _group.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _59), _60), _61), _62), _63), _179), _193), _208), _226), _242);
  })(group || (group = _cosmos.group || (_cosmos.group = {})));
  let mint;
  (function (_mint) {
    const v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _64), _65), _66), _209), _227);
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));
  let msg;
  (function (_msg) {
    const v1 = _msg.v1 = _objectSpread({}, _67);
  })(msg || (msg = _cosmos.msg || (_cosmos.msg = {})));
  let nft;
  (function (_nft) {
    const v1beta1 = _nft.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _68), _69), _70), _71), _72), _180), _194), _210), _228), _243);
  })(nft || (nft = _cosmos.nft || (_cosmos.nft = {})));
  let orm;
  (function (_orm) {
    const v1 = _orm.v1 = _objectSpread({}, _73);
    const v1alpha1 = _orm.v1alpha1 = _objectSpread({}, _74);
  })(orm || (orm = _cosmos.orm || (_cosmos.orm = {})));
  let params;
  (function (_params) {
    const v1beta1 = _params.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _75), _76), _211), _229);
  })(params || (params = _cosmos.params || (_cosmos.params = {})));
  let slashing;
  (function (_slashing) {
    const v1beta1 = _slashing.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _77), _78), _79), _80), _181), _195), _212), _230), _244);
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
  let staking;
  (function (_staking) {
    const v1beta1 = _staking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _81), _82), _83), _84), _85), _182), _196), _213), _231), _245);
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
  let tx;
  (function (_tx) {
    let signing;
    (function (_signing) {
      const v1beta1 = _signing.v1beta1 = _objectSpread({}, _86);
    })(signing || (signing = _tx.signing || (_tx.signing = {})));
    const v1beta1 = _tx.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _87), _88), _214), _232);
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
  let upgrade;
  (function (_upgrade) {
    const v1beta1 = _upgrade.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _89), _90), _91), _183), _197), _215), _233), _246);
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
  let vesting;
  (function (_vesting) {
    const v1beta1 = _vesting.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _92), _93), _184), _198), _247);
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
  const ClientFactory = _cosmos.ClientFactory = _objectSpread(_objectSpread(_objectSpread({}, _278), _279), _280);
})(cosmos || (cosmos = {}));