import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as _156 from "./abci/types";
import * as _157 from "./crypto/keys";
import * as _158 from "./crypto/proof";
import * as _159 from "./libs/bits/types";
import * as _160 from "./p2p/types";
import * as _161 from "./types/block";
import * as _162 from "./types/evidence";
import * as _163 from "./types/params";
import * as _164 from "./types/types";
import * as _165 from "./types/validator";
import * as _166 from "./version/types";
export let tendermint;
(function (_tendermint) {
  const abci = _tendermint.abci = _objectSpread({}, _156);
  const crypto = _tendermint.crypto = _objectSpread(_objectSpread({}, _157), _158);
  let libs;
  (function (_libs) {
    const bits = _libs.bits = _objectSpread({}, _159);
  })(libs || (libs = _tendermint.libs || (_tendermint.libs = {})));
  const p2p = _tendermint.p2p = _objectSpread({}, _160);
  const types = _tendermint.types = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _161), _162), _163), _164), _165);
  const version = _tendermint.version = _objectSpread({}, _166);
})(tendermint || (tendermint = {}));