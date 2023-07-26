import { Coin } from "../cosmos/base/v1beta1/coin";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** the enum below determines the pairing algorithm's behaviour with the selected providers feature */
export let SELECTED_PROVIDERS_MODE = /*#__PURE__*/function (SELECTED_PROVIDERS_MODE) {
  SELECTED_PROVIDERS_MODE[SELECTED_PROVIDERS_MODE["ALLOWED"] = 0] = "ALLOWED";
  SELECTED_PROVIDERS_MODE[SELECTED_PROVIDERS_MODE["MIXED"] = 1] = "MIXED";
  SELECTED_PROVIDERS_MODE[SELECTED_PROVIDERS_MODE["EXCLUSIVE"] = 2] = "EXCLUSIVE";
  SELECTED_PROVIDERS_MODE[SELECTED_PROVIDERS_MODE["DISABLED"] = 3] = "DISABLED";
  SELECTED_PROVIDERS_MODE[SELECTED_PROVIDERS_MODE["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return SELECTED_PROVIDERS_MODE;
}({});
export const SELECTED_PROVIDERS_MODESDKType = SELECTED_PROVIDERS_MODE;
export function sELECTED_PROVIDERS_MODEFromJSON(object) {
  switch (object) {
    case 0:
    case "ALLOWED":
      return SELECTED_PROVIDERS_MODE.ALLOWED;
    case 1:
    case "MIXED":
      return SELECTED_PROVIDERS_MODE.MIXED;
    case 2:
    case "EXCLUSIVE":
      return SELECTED_PROVIDERS_MODE.EXCLUSIVE;
    case 3:
    case "DISABLED":
      return SELECTED_PROVIDERS_MODE.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SELECTED_PROVIDERS_MODE.UNRECOGNIZED;
  }
}
export function sELECTED_PROVIDERS_MODEToJSON(object) {
  switch (object) {
    case SELECTED_PROVIDERS_MODE.ALLOWED:
      return "ALLOWED";
    case SELECTED_PROVIDERS_MODE.MIXED:
      return "MIXED";
    case SELECTED_PROVIDERS_MODE.EXCLUSIVE:
      return "EXCLUSIVE";
    case SELECTED_PROVIDERS_MODE.DISABLED:
      return "DISABLED";
    case SELECTED_PROVIDERS_MODE.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * The geolocation values are encoded as bits in a bitmask, with two special values:
 * GLS is set to 0 so it will be restrictive with the AND operator.
 * GL is set to -1 so it will be permissive with the AND operator.
 */
export let Geolocation = /*#__PURE__*/function (Geolocation) {
  Geolocation[Geolocation["GLS"] = 0] = "GLS";
  Geolocation[Geolocation["USC"] = 1] = "USC";
  Geolocation[Geolocation["EU"] = 2] = "EU";
  Geolocation[Geolocation["USE"] = 4] = "USE";
  Geolocation[Geolocation["USW"] = 8] = "USW";
  Geolocation[Geolocation["AF"] = 16] = "AF";
  Geolocation[Geolocation["AS"] = 32] = "AS";
  Geolocation[Geolocation["AU"] = 64] = "AU";
  Geolocation[Geolocation["GL"] = 65535] = "GL";
  Geolocation[Geolocation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Geolocation;
}({});
export const GeolocationSDKType = Geolocation;
export function geolocationFromJSON(object) {
  switch (object) {
    case 0:
    case "GLS":
      return Geolocation.GLS;
    case 1:
    case "USC":
      return Geolocation.USC;
    case 2:
    case "EU":
      return Geolocation.EU;
    case 4:
    case "USE":
      return Geolocation.USE;
    case 8:
    case "USW":
      return Geolocation.USW;
    case 16:
    case "AF":
      return Geolocation.AF;
    case 32:
    case "AS":
      return Geolocation.AS;
    case 64:
    case "AU":
      return Geolocation.AU;
    case 65535:
    case "GL":
      return Geolocation.GL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Geolocation.UNRECOGNIZED;
  }
}
export function geolocationToJSON(object) {
  switch (object) {
    case Geolocation.GLS:
      return "GLS";
    case Geolocation.USC:
      return "USC";
    case Geolocation.EU:
      return "EU";
    case Geolocation.USE:
      return "USE";
    case Geolocation.USW:
      return "USW";
    case Geolocation.AF:
      return "AF";
    case Geolocation.AS:
      return "AS";
    case Geolocation.AU:
      return "AU";
    case Geolocation.GL:
      return "GL";
    case Geolocation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** protobuf expected in YAML format: used "moretags" to simplify parsing */

/** protobuf expected in YAML format: used "moretags" to simplify parsing */

function createBasePlan() {
  return {
    index: "",
    block: Long.UZERO,
    price: undefined,
    allowOveruse: false,
    overuseRate: Long.UZERO,
    description: "",
    type: "",
    annualDiscountPercentage: Long.UZERO,
    planPolicy: undefined
  };
}
export const Plan = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (!message.block.isZero()) {
      writer.uint32(24).uint64(message.block);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.allowOveruse === true) {
      writer.uint32(64).bool(message.allowOveruse);
    }
    if (!message.overuseRate.isZero()) {
      writer.uint32(72).uint64(message.overuseRate);
    }
    if (message.description !== "") {
      writer.uint32(90).string(message.description);
    }
    if (message.type !== "") {
      writer.uint32(98).string(message.type);
    }
    if (!message.annualDiscountPercentage.isZero()) {
      writer.uint32(104).uint64(message.annualDiscountPercentage);
    }
    if (message.planPolicy !== undefined) {
      Policy.encode(message.planPolicy, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 3:
          message.block = reader.uint64();
          break;
        case 4:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.allowOveruse = reader.bool();
          break;
        case 9:
          message.overuseRate = reader.uint64();
          break;
        case 11:
          message.description = reader.string();
          break;
        case 12:
          message.type = reader.string();
          break;
        case 13:
          message.annualDiscountPercentage = reader.uint64();
          break;
        case 14:
          message.planPolicy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index, _object$allowOveruse, _object$description, _object$type;
    const message = createBasePlan();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.allowOveruse = (_object$allowOveruse = object.allowOveruse) !== null && _object$allowOveruse !== void 0 ? _object$allowOveruse : false;
    message.overuseRate = object.overuseRate !== undefined && object.overuseRate !== null ? Long.fromValue(object.overuseRate) : Long.UZERO;
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.annualDiscountPercentage = object.annualDiscountPercentage !== undefined && object.annualDiscountPercentage !== null ? Long.fromValue(object.annualDiscountPercentage) : Long.UZERO;
    message.planPolicy = object.planPolicy !== undefined && object.planPolicy !== null ? Policy.fromPartial(object.planPolicy) : undefined;
    return message;
  }
};
function createBasePolicy() {
  return {
    chainPolicies: [],
    geolocationProfile: Long.UZERO,
    totalCuLimit: Long.UZERO,
    epochCuLimit: Long.UZERO,
    maxProvidersToPair: Long.UZERO,
    selectedProvidersMode: 0,
    selectedProviders: []
  };
}
export const Policy = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.chainPolicies) {
      ChainPolicy.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (!message.geolocationProfile.isZero()) {
      writer.uint32(16).uint64(message.geolocationProfile);
    }
    if (!message.totalCuLimit.isZero()) {
      writer.uint32(24).uint64(message.totalCuLimit);
    }
    if (!message.epochCuLimit.isZero()) {
      writer.uint32(32).uint64(message.epochCuLimit);
    }
    if (!message.maxProvidersToPair.isZero()) {
      writer.uint32(40).uint64(message.maxProvidersToPair);
    }
    if (message.selectedProvidersMode !== 0) {
      writer.uint32(48).int32(message.selectedProvidersMode);
    }
    for (const v of message.selectedProviders) {
      writer.uint32(58).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainPolicies.push(ChainPolicy.decode(reader, reader.uint32()));
          break;
        case 2:
          message.geolocationProfile = reader.uint64();
          break;
        case 3:
          message.totalCuLimit = reader.uint64();
          break;
        case 4:
          message.epochCuLimit = reader.uint64();
          break;
        case 5:
          message.maxProvidersToPair = reader.uint64();
          break;
        case 6:
          message.selectedProvidersMode = reader.int32();
          break;
        case 7:
          message.selectedProviders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$chainPolicies, _object$selectedProvi, _object$selectedProvi2;
    const message = createBasePolicy();
    message.chainPolicies = ((_object$chainPolicies = object.chainPolicies) === null || _object$chainPolicies === void 0 ? void 0 : _object$chainPolicies.map(e => ChainPolicy.fromPartial(e))) || [];
    message.geolocationProfile = object.geolocationProfile !== undefined && object.geolocationProfile !== null ? Long.fromValue(object.geolocationProfile) : Long.UZERO;
    message.totalCuLimit = object.totalCuLimit !== undefined && object.totalCuLimit !== null ? Long.fromValue(object.totalCuLimit) : Long.UZERO;
    message.epochCuLimit = object.epochCuLimit !== undefined && object.epochCuLimit !== null ? Long.fromValue(object.epochCuLimit) : Long.UZERO;
    message.maxProvidersToPair = object.maxProvidersToPair !== undefined && object.maxProvidersToPair !== null ? Long.fromValue(object.maxProvidersToPair) : Long.UZERO;
    message.selectedProvidersMode = (_object$selectedProvi = object.selectedProvidersMode) !== null && _object$selectedProvi !== void 0 ? _object$selectedProvi : 0;
    message.selectedProviders = ((_object$selectedProvi2 = object.selectedProviders) === null || _object$selectedProvi2 === void 0 ? void 0 : _object$selectedProvi2.map(e => e)) || [];
    return message;
  }
};
function createBaseChainPolicy() {
  return {
    chainId: "",
    apis: []
  };
}
export const ChainPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    for (const v of message.apis) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.apis.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$chainId, _object$apis;
    const message = createBaseChainPolicy();
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.apis = ((_object$apis = object.apis) === null || _object$apis === void 0 ? void 0 : _object$apis.map(e => e)) || [];
    return message;
  }
};