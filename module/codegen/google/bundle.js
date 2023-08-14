import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as _95 from "./api/annotations";
import * as _96 from "./api/http";
import * as _97 from "./protobuf/any";
import * as _98 from "./protobuf/descriptor";
import * as _99 from "./protobuf/duration";
import * as _100 from "./protobuf/empty";
import * as _101 from "./protobuf/timestamp";
import * as _102 from "./protobuf/wrappers";
export let google;
(function (_google) {
  const api = _google.api = _objectSpread(_objectSpread({}, _95), _96);
  const protobuf = _google.protobuf = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _97), _98), _99), _100), _101), _102);
})(google || (google = {}));