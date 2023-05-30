import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as _194 from "./api/annotations";
import * as _195 from "./api/http";
import * as _196 from "./protobuf/any";
import * as _197 from "./protobuf/descriptor";
import * as _198 from "./protobuf/duration";
import * as _199 from "./protobuf/empty";
import * as _200 from "./protobuf/timestamp";
import * as _201 from "./protobuf/wrappers";
export let google;
(function (_google) {
  const api = _google.api = _objectSpread(_objectSpread({}, _194), _195);
  const protobuf = _google.protobuf = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _196), _197), _198), _199), _200), _201);
})(google || (google = {}));