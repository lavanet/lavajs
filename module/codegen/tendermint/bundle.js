import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as _204 from "./abci/types";
import * as _205 from "./crypto/keys";
import * as _206 from "./crypto/proof";
import * as _207 from "./libs/bits/types";
import * as _208 from "./p2p/types";
import * as _209 from "./types/block";
import * as _210 from "./types/evidence";
import * as _211 from "./types/params";
import * as _212 from "./types/types";
import * as _213 from "./types/validator";
import * as _214 from "./version/types";
export let tendermint;
(function (_tendermint) {
  const abci = _tendermint.abci = _objectSpread({}, _204);
  const crypto = _tendermint.crypto = _objectSpread(_objectSpread({}, _205), _206);
  let libs;
  (function (_libs) {
    const bits = _libs.bits = _objectSpread({}, _207);
  })(libs || (libs = _tendermint.libs || (_tendermint.libs = {})));
  const p2p = _tendermint.p2p = _objectSpread({}, _208);
  const types = _tendermint.types = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _209), _210), _211), _212), _213);
  const version = _tendermint.version = _objectSpread({}, _214);
})(tendermint || (tendermint = {}));