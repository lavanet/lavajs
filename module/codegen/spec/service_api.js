import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export let PARSER_FUNC = /*#__PURE__*/function (PARSER_FUNC) {
  PARSER_FUNC[PARSER_FUNC["EMPTY"] = 0] = "EMPTY";
  PARSER_FUNC[PARSER_FUNC["PARSE_BY_ARG"] = 1] = "PARSE_BY_ARG";
  PARSER_FUNC[PARSER_FUNC["PARSE_CANONICAL"] = 2] = "PARSE_CANONICAL";
  PARSER_FUNC[PARSER_FUNC["PARSE_DICTIONARY"] = 3] = "PARSE_DICTIONARY";
  PARSER_FUNC[PARSER_FUNC["PARSE_DICTIONARY_OR_ORDERED"] = 4] = "PARSE_DICTIONARY_OR_ORDERED";
  PARSER_FUNC[PARSER_FUNC["DEFAULT"] = 6] = "DEFAULT";
  PARSER_FUNC[PARSER_FUNC["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return PARSER_FUNC;
}({});
export const PARSER_FUNCSDKType = PARSER_FUNC;
export function pARSER_FUNCFromJSON(object) {
  switch (object) {
    case 0:
    case "EMPTY":
      return PARSER_FUNC.EMPTY;
    case 1:
    case "PARSE_BY_ARG":
      return PARSER_FUNC.PARSE_BY_ARG;
    case 2:
    case "PARSE_CANONICAL":
      return PARSER_FUNC.PARSE_CANONICAL;
    case 3:
    case "PARSE_DICTIONARY":
      return PARSER_FUNC.PARSE_DICTIONARY;
    case 4:
    case "PARSE_DICTIONARY_OR_ORDERED":
      return PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED;
    case 6:
    case "DEFAULT":
      return PARSER_FUNC.DEFAULT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PARSER_FUNC.UNRECOGNIZED;
  }
}
export function pARSER_FUNCToJSON(object) {
  switch (object) {
    case PARSER_FUNC.EMPTY:
      return "EMPTY";
    case PARSER_FUNC.PARSE_BY_ARG:
      return "PARSE_BY_ARG";
    case PARSER_FUNC.PARSE_CANONICAL:
      return "PARSE_CANONICAL";
    case PARSER_FUNC.PARSE_DICTIONARY:
      return "PARSE_DICTIONARY";
    case PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED:
      return "PARSE_DICTIONARY_OR_ORDERED";
    case PARSER_FUNC.DEFAULT:
      return "DEFAULT";
    case PARSER_FUNC.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseServiceApi() {
  return {
    name: "",
    blockParsing: undefined,
    computeUnits: Long.UZERO,
    enabled: false,
    apiInterfaces: [],
    reserved: undefined,
    parsing: undefined,
    internalPath: ""
  };
}
export const ServiceApi = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.blockParsing !== undefined) {
      BlockParser.encode(message.blockParsing, writer.uint32(18).fork()).ldelim();
    }
    if (!message.computeUnits.isZero()) {
      writer.uint32(24).uint64(message.computeUnits);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    for (const v of message.apiInterfaces) {
      ApiInterface.encode(v, writer.uint32(42).fork()).ldelim();
    }
    if (message.reserved !== undefined) {
      SpecCategory.encode(message.reserved, writer.uint32(50).fork()).ldelim();
    }
    if (message.parsing !== undefined) {
      Parsing.encode(message.parsing, writer.uint32(58).fork()).ldelim();
    }
    if (message.internalPath !== "") {
      writer.uint32(66).string(message.internalPath);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceApi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.blockParsing = BlockParser.decode(reader, reader.uint32());
          break;
        case 3:
          message.computeUnits = reader.uint64();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.apiInterfaces.push(ApiInterface.decode(reader, reader.uint32()));
          break;
        case 6:
          message.reserved = SpecCategory.decode(reader, reader.uint32());
          break;
        case 7:
          message.parsing = Parsing.decode(reader, reader.uint32());
          break;
        case 8:
          message.internalPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      blockParsing: isSet(object.blockParsing) ? BlockParser.fromJSON(object.blockParsing) : undefined,
      computeUnits: isSet(object.computeUnits) ? Long.fromValue(object.computeUnits) : Long.UZERO,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      apiInterfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.apiInterfaces) ? object.apiInterfaces.map(e => ApiInterface.fromJSON(e)) : [],
      reserved: isSet(object.reserved) ? SpecCategory.fromJSON(object.reserved) : undefined,
      parsing: isSet(object.parsing) ? Parsing.fromJSON(object.parsing) : undefined,
      internalPath: isSet(object.internalPath) ? String(object.internalPath) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.blockParsing !== undefined && (obj.blockParsing = message.blockParsing ? BlockParser.toJSON(message.blockParsing) : undefined);
    message.computeUnits !== undefined && (obj.computeUnits = (message.computeUnits || Long.UZERO).toString());
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.apiInterfaces) {
      obj.apiInterfaces = message.apiInterfaces.map(e => e ? ApiInterface.toJSON(e) : undefined);
    } else {
      obj.apiInterfaces = [];
    }
    message.reserved !== undefined && (obj.reserved = message.reserved ? SpecCategory.toJSON(message.reserved) : undefined);
    message.parsing !== undefined && (obj.parsing = message.parsing ? Parsing.toJSON(message.parsing) : undefined);
    message.internalPath !== undefined && (obj.internalPath = message.internalPath);
    return obj;
  },
  fromPartial(object) {
    var _object$name, _object$enabled, _object$apiInterfaces, _object$internalPath;
    const message = createBaseServiceApi();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.blockParsing = object.blockParsing !== undefined && object.blockParsing !== null ? BlockParser.fromPartial(object.blockParsing) : undefined;
    message.computeUnits = object.computeUnits !== undefined && object.computeUnits !== null ? Long.fromValue(object.computeUnits) : Long.UZERO;
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    message.apiInterfaces = ((_object$apiInterfaces = object.apiInterfaces) === null || _object$apiInterfaces === void 0 ? void 0 : _object$apiInterfaces.map(e => ApiInterface.fromPartial(e))) || [];
    message.reserved = object.reserved !== undefined && object.reserved !== null ? SpecCategory.fromPartial(object.reserved) : undefined;
    message.parsing = object.parsing !== undefined && object.parsing !== null ? Parsing.fromPartial(object.parsing) : undefined;
    message.internalPath = (_object$internalPath = object.internalPath) !== null && _object$internalPath !== void 0 ? _object$internalPath : "";
    return message;
  }
};
function createBaseParsing() {
  return {
    functionTag: "",
    functionTemplate: "",
    resultParsing: undefined
  };
}
export const Parsing = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.functionTag !== "") {
      writer.uint32(10).string(message.functionTag);
    }
    if (message.functionTemplate !== "") {
      writer.uint32(18).string(message.functionTemplate);
    }
    if (message.resultParsing !== undefined) {
      BlockParser.encode(message.resultParsing, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParsing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionTag = reader.string();
          break;
        case 2:
          message.functionTemplate = reader.string();
          break;
        case 3:
          message.resultParsing = BlockParser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      functionTag: isSet(object.functionTag) ? String(object.functionTag) : "",
      functionTemplate: isSet(object.functionTemplate) ? String(object.functionTemplate) : "",
      resultParsing: isSet(object.resultParsing) ? BlockParser.fromJSON(object.resultParsing) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.functionTag !== undefined && (obj.functionTag = message.functionTag);
    message.functionTemplate !== undefined && (obj.functionTemplate = message.functionTemplate);
    message.resultParsing !== undefined && (obj.resultParsing = message.resultParsing ? BlockParser.toJSON(message.resultParsing) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$functionTag, _object$functionTempl;
    const message = createBaseParsing();
    message.functionTag = (_object$functionTag = object.functionTag) !== null && _object$functionTag !== void 0 ? _object$functionTag : "";
    message.functionTemplate = (_object$functionTempl = object.functionTemplate) !== null && _object$functionTempl !== void 0 ? _object$functionTempl : "";
    message.resultParsing = object.resultParsing !== undefined && object.resultParsing !== null ? BlockParser.fromPartial(object.resultParsing) : undefined;
    return message;
  }
};
function createBaseApiInterface() {
  return {
    interface: "",
    type: "",
    extraComputeUnits: Long.UZERO,
    category: undefined,
    overwriteBlockParsing: undefined
  };
}
export const ApiInterface = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.interface !== "") {
      writer.uint32(10).string(message.interface);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (!message.extraComputeUnits.isZero()) {
      writer.uint32(24).uint64(message.extraComputeUnits);
    }
    if (message.category !== undefined) {
      SpecCategory.encode(message.category, writer.uint32(34).fork()).ldelim();
    }
    if (message.overwriteBlockParsing !== undefined) {
      BlockParser.encode(message.overwriteBlockParsing, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiInterface();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interface = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.extraComputeUnits = reader.uint64();
          break;
        case 4:
          message.category = SpecCategory.decode(reader, reader.uint32());
          break;
        case 5:
          message.overwriteBlockParsing = BlockParser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      interface: isSet(object.interface) ? String(object.interface) : "",
      type: isSet(object.type) ? String(object.type) : "",
      extraComputeUnits: isSet(object.extraComputeUnits) ? Long.fromValue(object.extraComputeUnits) : Long.UZERO,
      category: isSet(object.category) ? SpecCategory.fromJSON(object.category) : undefined,
      overwriteBlockParsing: isSet(object.overwriteBlockParsing) ? BlockParser.fromJSON(object.overwriteBlockParsing) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.interface !== undefined && (obj.interface = message.interface);
    message.type !== undefined && (obj.type = message.type);
    message.extraComputeUnits !== undefined && (obj.extraComputeUnits = (message.extraComputeUnits || Long.UZERO).toString());
    message.category !== undefined && (obj.category = message.category ? SpecCategory.toJSON(message.category) : undefined);
    message.overwriteBlockParsing !== undefined && (obj.overwriteBlockParsing = message.overwriteBlockParsing ? BlockParser.toJSON(message.overwriteBlockParsing) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$interface, _object$type;
    const message = createBaseApiInterface();
    message.interface = (_object$interface = object.interface) !== null && _object$interface !== void 0 ? _object$interface : "";
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.extraComputeUnits = object.extraComputeUnits !== undefined && object.extraComputeUnits !== null ? Long.fromValue(object.extraComputeUnits) : Long.UZERO;
    message.category = object.category !== undefined && object.category !== null ? SpecCategory.fromPartial(object.category) : undefined;
    message.overwriteBlockParsing = object.overwriteBlockParsing !== undefined && object.overwriteBlockParsing !== null ? BlockParser.fromPartial(object.overwriteBlockParsing) : undefined;
    return message;
  }
};
function createBaseBlockParser() {
  return {
    parserArg: [],
    parserFunc: 0,
    defaultValue: "",
    encoding: ""
  };
}
export const BlockParser = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.parserArg) {
      writer.uint32(10).string(v);
    }
    if (message.parserFunc !== 0) {
      writer.uint32(16).int32(message.parserFunc);
    }
    if (message.defaultValue !== "") {
      writer.uint32(26).string(message.defaultValue);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parserArg.push(reader.string());
          break;
        case 2:
          message.parserFunc = reader.int32();
          break;
        case 3:
          message.defaultValue = reader.string();
          break;
        case 4:
          message.encoding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      parserArg: Array.isArray(object === null || object === void 0 ? void 0 : object.parserArg) ? object.parserArg.map(e => String(e)) : [],
      parserFunc: isSet(object.parserFunc) ? pARSER_FUNCFromJSON(object.parserFunc) : 0,
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
      encoding: isSet(object.encoding) ? String(object.encoding) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.parserArg) {
      obj.parserArg = message.parserArg.map(e => e);
    } else {
      obj.parserArg = [];
    }
    message.parserFunc !== undefined && (obj.parserFunc = pARSER_FUNCToJSON(message.parserFunc));
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    return obj;
  },
  fromPartial(object) {
    var _object$parserArg, _object$parserFunc, _object$defaultValue, _object$encoding;
    const message = createBaseBlockParser();
    message.parserArg = ((_object$parserArg = object.parserArg) === null || _object$parserArg === void 0 ? void 0 : _object$parserArg.map(e => e)) || [];
    message.parserFunc = (_object$parserFunc = object.parserFunc) !== null && _object$parserFunc !== void 0 ? _object$parserFunc : 0;
    message.defaultValue = (_object$defaultValue = object.defaultValue) !== null && _object$defaultValue !== void 0 ? _object$defaultValue : "";
    message.encoding = (_object$encoding = object.encoding) !== null && _object$encoding !== void 0 ? _object$encoding : "";
    return message;
  }
};
function createBaseSpecCategory() {
  return {
    deterministic: false,
    local: false,
    subscription: false,
    stateful: 0,
    hangingApi: false
  };
}
export const SpecCategory = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.deterministic === true) {
      writer.uint32(8).bool(message.deterministic);
    }
    if (message.local === true) {
      writer.uint32(16).bool(message.local);
    }
    if (message.subscription === true) {
      writer.uint32(24).bool(message.subscription);
    }
    if (message.stateful !== 0) {
      writer.uint32(32).uint32(message.stateful);
    }
    if (message.hangingApi === true) {
      writer.uint32(40).bool(message.hangingApi);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpecCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deterministic = reader.bool();
          break;
        case 2:
          message.local = reader.bool();
          break;
        case 3:
          message.subscription = reader.bool();
          break;
        case 4:
          message.stateful = reader.uint32();
          break;
        case 5:
          message.hangingApi = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      deterministic: isSet(object.deterministic) ? Boolean(object.deterministic) : false,
      local: isSet(object.local) ? Boolean(object.local) : false,
      subscription: isSet(object.subscription) ? Boolean(object.subscription) : false,
      stateful: isSet(object.stateful) ? Number(object.stateful) : 0,
      hangingApi: isSet(object.hangingApi) ? Boolean(object.hangingApi) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.deterministic !== undefined && (obj.deterministic = message.deterministic);
    message.local !== undefined && (obj.local = message.local);
    message.subscription !== undefined && (obj.subscription = message.subscription);
    message.stateful !== undefined && (obj.stateful = Math.round(message.stateful));
    message.hangingApi !== undefined && (obj.hangingApi = message.hangingApi);
    return obj;
  },
  fromPartial(object) {
    var _object$deterministic, _object$local, _object$subscription, _object$stateful, _object$hangingApi;
    const message = createBaseSpecCategory();
    message.deterministic = (_object$deterministic = object.deterministic) !== null && _object$deterministic !== void 0 ? _object$deterministic : false;
    message.local = (_object$local = object.local) !== null && _object$local !== void 0 ? _object$local : false;
    message.subscription = (_object$subscription = object.subscription) !== null && _object$subscription !== void 0 ? _object$subscription : false;
    message.stateful = (_object$stateful = object.stateful) !== null && _object$stateful !== void 0 ? _object$stateful : 0;
    message.hangingApi = (_object$hangingApi = object.hangingApi) !== null && _object$hangingApi !== void 0 ? _object$hangingApi : false;
    return message;
  }
};