import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as _148 from "./api/annotations";
import * as _149 from "./api/http";
import * as _150 from "./protobuf/any";
import * as _151 from "./protobuf/descriptor";
import * as _152 from "./protobuf/duration";
import * as _153 from "./protobuf/empty";
import * as _154 from "./protobuf/timestamp";
import * as _155 from "./protobuf/wrappers";
export let google;
(function (_google) {
  const api = _google.api = _objectSpread(_objectSpread({}, _148), _149);
  const protobuf = _google.protobuf = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _150), _151), _152), _153), _154), _155);
})(google || (google = {}));