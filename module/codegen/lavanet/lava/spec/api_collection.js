import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export let Header_HeaderType = /*#__PURE__*/function (Header_HeaderType) {
  Header_HeaderType[Header_HeaderType["pass_send"] = 0] = "pass_send";
  Header_HeaderType[Header_HeaderType["pass_reply"] = 1] = "pass_reply";
  Header_HeaderType[Header_HeaderType["pass_both"] = 2] = "pass_both";
  Header_HeaderType[Header_HeaderType["pass_ignore"] = 3] = "pass_ignore";
  Header_HeaderType[Header_HeaderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Header_HeaderType;
}({});
export const Header_HeaderTypeSDKType = Header_HeaderType;
export function header_HeaderTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "pass_send":
      return Header_HeaderType.pass_send;
    case 1:
    case "pass_reply":
      return Header_HeaderType.pass_reply;
    case 2:
    case "pass_both":
      return Header_HeaderType.pass_both;
    case 3:
    case "pass_ignore":
      return Header_HeaderType.pass_ignore;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Header_HeaderType.UNRECOGNIZED;
  }
}
export function header_HeaderTypeToJSON(object) {
  switch (object) {
    case Header_HeaderType.pass_send:
      return "pass_send";
    case Header_HeaderType.pass_reply:
      return "pass_reply";
    case Header_HeaderType.pass_both:
      return "pass_both";
    case Header_HeaderType.pass_ignore:
      return "pass_ignore";
    case Header_HeaderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export let EXTENSION = /*#__PURE__*/function (EXTENSION) {
  EXTENSION[EXTENSION["NONE"] = 0] = "NONE";
  EXTENSION[EXTENSION["ARCHIVE"] = 1] = "ARCHIVE";
  EXTENSION[EXTENSION["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return EXTENSION;
}({});
export const EXTENSIONSDKType = EXTENSION;
export function eXTENSIONFromJSON(object) {
  switch (object) {
    case 0:
    case "NONE":
      return EXTENSION.NONE;
    case 1:
    case "ARCHIVE":
      return EXTENSION.ARCHIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EXTENSION.UNRECOGNIZED;
  }
}
export function eXTENSIONToJSON(object) {
  switch (object) {
    case EXTENSION.NONE:
      return "NONE";
    case EXTENSION.ARCHIVE:
      return "ARCHIVE";
    case EXTENSION.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export let FUNCTION_TAG = /*#__PURE__*/function (FUNCTION_TAG) {
  FUNCTION_TAG[FUNCTION_TAG["DISABLED"] = 0] = "DISABLED";
  FUNCTION_TAG[FUNCTION_TAG["GET_BLOCKNUM"] = 1] = "GET_BLOCKNUM";
  FUNCTION_TAG[FUNCTION_TAG["GET_BLOCK_BY_NUM"] = 2] = "GET_BLOCK_BY_NUM";
  FUNCTION_TAG[FUNCTION_TAG["SET_LATEST_IN_METADATA"] = 3] = "SET_LATEST_IN_METADATA";
  FUNCTION_TAG[FUNCTION_TAG["SET_LATEST_IN_BODY"] = 4] = "SET_LATEST_IN_BODY";
  FUNCTION_TAG[FUNCTION_TAG["VERIFICATION"] = 5] = "VERIFICATION";
  FUNCTION_TAG[FUNCTION_TAG["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FUNCTION_TAG;
}({});
export const FUNCTION_TAGSDKType = FUNCTION_TAG;
export function fUNCTION_TAGFromJSON(object) {
  switch (object) {
    case 0:
    case "DISABLED":
      return FUNCTION_TAG.DISABLED;
    case 1:
    case "GET_BLOCKNUM":
      return FUNCTION_TAG.GET_BLOCKNUM;
    case 2:
    case "GET_BLOCK_BY_NUM":
      return FUNCTION_TAG.GET_BLOCK_BY_NUM;
    case 3:
    case "SET_LATEST_IN_METADATA":
      return FUNCTION_TAG.SET_LATEST_IN_METADATA;
    case 4:
    case "SET_LATEST_IN_BODY":
      return FUNCTION_TAG.SET_LATEST_IN_BODY;
    case 5:
    case "VERIFICATION":
      return FUNCTION_TAG.VERIFICATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FUNCTION_TAG.UNRECOGNIZED;
  }
}
export function fUNCTION_TAGToJSON(object) {
  switch (object) {
    case FUNCTION_TAG.DISABLED:
      return "DISABLED";
    case FUNCTION_TAG.GET_BLOCKNUM:
      return "GET_BLOCKNUM";
    case FUNCTION_TAG.GET_BLOCK_BY_NUM:
      return "GET_BLOCK_BY_NUM";
    case FUNCTION_TAG.SET_LATEST_IN_METADATA:
      return "SET_LATEST_IN_METADATA";
    case FUNCTION_TAG.SET_LATEST_IN_BODY:
      return "SET_LATEST_IN_BODY";
    case FUNCTION_TAG.VERIFICATION:
      return "VERIFICATION";
    case FUNCTION_TAG.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseApiCollection() {
  return {
    enabled: false,
    collectionData: undefined,
    apis: [],
    headers: [],
    inheritanceApis: [],
    parseDirectives: [],
    extensions: [],
    verifications: []
  };
}
export const ApiCollection = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.collectionData !== undefined) {
      CollectionData.encode(message.collectionData, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.apis) {
      Api.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.headers) {
      Header.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.inheritanceApis) {
      CollectionData.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.parseDirectives) {
      ParseDirective.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extensions) {
      Extension.encode(v, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.verifications) {
      Verification.encode(v, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.collectionData = CollectionData.decode(reader, reader.uint32());
          break;
        case 3:
          message.apis.push(Api.decode(reader, reader.uint32()));
          break;
        case 4:
          message.headers.push(Header.decode(reader, reader.uint32()));
          break;
        case 5:
          message.inheritanceApis.push(CollectionData.decode(reader, reader.uint32()));
          break;
        case 6:
          message.parseDirectives.push(ParseDirective.decode(reader, reader.uint32()));
          break;
        case 7:
          message.extensions.push(Extension.decode(reader, reader.uint32()));
          break;
        case 8:
          message.verifications.push(Verification.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$enabled, _object$apis, _object$headers, _object$inheritanceAp, _object$parseDirectiv, _object$extensions, _object$verifications;
    const message = createBaseApiCollection();
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    message.collectionData = object.collectionData !== undefined && object.collectionData !== null ? CollectionData.fromPartial(object.collectionData) : undefined;
    message.apis = ((_object$apis = object.apis) === null || _object$apis === void 0 ? void 0 : _object$apis.map(e => Api.fromPartial(e))) || [];
    message.headers = ((_object$headers = object.headers) === null || _object$headers === void 0 ? void 0 : _object$headers.map(e => Header.fromPartial(e))) || [];
    message.inheritanceApis = ((_object$inheritanceAp = object.inheritanceApis) === null || _object$inheritanceAp === void 0 ? void 0 : _object$inheritanceAp.map(e => CollectionData.fromPartial(e))) || [];
    message.parseDirectives = ((_object$parseDirectiv = object.parseDirectives) === null || _object$parseDirectiv === void 0 ? void 0 : _object$parseDirectiv.map(e => ParseDirective.fromPartial(e))) || [];
    message.extensions = ((_object$extensions = object.extensions) === null || _object$extensions === void 0 ? void 0 : _object$extensions.map(e => Extension.fromPartial(e))) || [];
    message.verifications = ((_object$verifications = object.verifications) === null || _object$verifications === void 0 ? void 0 : _object$verifications.map(e => Verification.fromPartial(e))) || [];
    return message;
  }
};
function createBaseExtension() {
  return {
    name: "",
    cuMultiplier: 0,
    rule: undefined
  };
}
export const Extension = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.cuMultiplier !== 0) {
      writer.uint32(21).float(message.cuMultiplier);
    }
    if (message.rule !== undefined) {
      Rule.encode(message.rule, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.cuMultiplier = reader.float();
          break;
        case 3:
          message.rule = Rule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$name, _object$cuMultiplier;
    const message = createBaseExtension();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.cuMultiplier = (_object$cuMultiplier = object.cuMultiplier) !== null && _object$cuMultiplier !== void 0 ? _object$cuMultiplier : 0;
    message.rule = object.rule !== undefined && object.rule !== null ? Rule.fromPartial(object.rule) : undefined;
    return message;
  }
};
function createBaseRule() {
  return {
    block: Long.UZERO
  };
}
export const Rule = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRule();
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    return message;
  }
};
function createBaseVerification() {
  return {
    name: "",
    parseDirective: undefined,
    values: []
  };
}
export const Verification = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.parseDirective !== undefined) {
      ParseDirective.encode(message.parseDirective, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.values) {
      ParseValue.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.parseDirective = ParseDirective.decode(reader, reader.uint32());
          break;
        case 3:
          message.values.push(ParseValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$name2, _object$values;
    const message = createBaseVerification();
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.parseDirective = object.parseDirective !== undefined && object.parseDirective !== null ? ParseDirective.fromPartial(object.parseDirective) : undefined;
    message.values = ((_object$values = object.values) === null || _object$values === void 0 ? void 0 : _object$values.map(e => ParseValue.fromPartial(e))) || [];
    return message;
  }
};
function createBaseParseValue() {
  return {
    extension: "",
    expectedValue: "",
    latestDistance: Long.UZERO
  };
}
export const ParseValue = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.extension !== "") {
      writer.uint32(10).string(message.extension);
    }
    if (message.expectedValue !== "") {
      writer.uint32(18).string(message.expectedValue);
    }
    if (!message.latestDistance.isZero()) {
      writer.uint32(24).uint64(message.latestDistance);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extension = reader.string();
          break;
        case 2:
          message.expectedValue = reader.string();
          break;
        case 3:
          message.latestDistance = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$extension, _object$expectedValue;
    const message = createBaseParseValue();
    message.extension = (_object$extension = object.extension) !== null && _object$extension !== void 0 ? _object$extension : "";
    message.expectedValue = (_object$expectedValue = object.expectedValue) !== null && _object$expectedValue !== void 0 ? _object$expectedValue : "";
    message.latestDistance = object.latestDistance !== undefined && object.latestDistance !== null ? Long.fromValue(object.latestDistance) : Long.UZERO;
    return message;
  }
};
function createBaseCollectionData() {
  return {
    apiInterface: "",
    internalPath: "",
    type: "",
    addOn: ""
  };
}
export const CollectionData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.apiInterface !== "") {
      writer.uint32(10).string(message.apiInterface);
    }
    if (message.internalPath !== "") {
      writer.uint32(18).string(message.internalPath);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.addOn !== "") {
      writer.uint32(34).string(message.addOn);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiInterface = reader.string();
          break;
        case 2:
          message.internalPath = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.addOn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$apiInterface, _object$internalPath, _object$type, _object$addOn;
    const message = createBaseCollectionData();
    message.apiInterface = (_object$apiInterface = object.apiInterface) !== null && _object$apiInterface !== void 0 ? _object$apiInterface : "";
    message.internalPath = (_object$internalPath = object.internalPath) !== null && _object$internalPath !== void 0 ? _object$internalPath : "";
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.addOn = (_object$addOn = object.addOn) !== null && _object$addOn !== void 0 ? _object$addOn : "";
    return message;
  }
};
function createBaseHeader() {
  return {
    name: "",
    kind: 0,
    functionTag: 0
  };
}
export const Header = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.kind !== 0) {
      writer.uint32(16).int32(message.kind);
    }
    if (message.functionTag !== 0) {
      writer.uint32(24).int32(message.functionTag);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.kind = reader.int32();
          break;
        case 3:
          message.functionTag = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$name3, _object$kind, _object$functionTag;
    const message = createBaseHeader();
    message.name = (_object$name3 = object.name) !== null && _object$name3 !== void 0 ? _object$name3 : "";
    message.kind = (_object$kind = object.kind) !== null && _object$kind !== void 0 ? _object$kind : 0;
    message.functionTag = (_object$functionTag = object.functionTag) !== null && _object$functionTag !== void 0 ? _object$functionTag : 0;
    return message;
  }
};
function createBaseApi() {
  return {
    enabled: false,
    name: "",
    computeUnits: Long.UZERO,
    extraComputeUnits: Long.UZERO,
    category: undefined,
    blockParsing: undefined
  };
}
export const Api = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (!message.computeUnits.isZero()) {
      writer.uint32(24).uint64(message.computeUnits);
    }
    if (!message.extraComputeUnits.isZero()) {
      writer.uint32(32).uint64(message.extraComputeUnits);
    }
    if (message.category !== undefined) {
      SpecCategory.encode(message.category, writer.uint32(50).fork()).ldelim();
    }
    if (message.blockParsing !== undefined) {
      BlockParser.encode(message.blockParsing, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.computeUnits = reader.uint64();
          break;
        case 4:
          message.extraComputeUnits = reader.uint64();
          break;
        case 6:
          message.category = SpecCategory.decode(reader, reader.uint32());
          break;
        case 7:
          message.blockParsing = BlockParser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$enabled2, _object$name4;
    const message = createBaseApi();
    message.enabled = (_object$enabled2 = object.enabled) !== null && _object$enabled2 !== void 0 ? _object$enabled2 : false;
    message.name = (_object$name4 = object.name) !== null && _object$name4 !== void 0 ? _object$name4 : "";
    message.computeUnits = object.computeUnits !== undefined && object.computeUnits !== null ? Long.fromValue(object.computeUnits) : Long.UZERO;
    message.extraComputeUnits = object.extraComputeUnits !== undefined && object.extraComputeUnits !== null ? Long.fromValue(object.extraComputeUnits) : Long.UZERO;
    message.category = object.category !== undefined && object.category !== null ? SpecCategory.fromPartial(object.category) : undefined;
    message.blockParsing = object.blockParsing !== undefined && object.blockParsing !== null ? BlockParser.fromPartial(object.blockParsing) : undefined;
    return message;
  }
};
function createBaseParseDirective() {
  return {
    functionTag: 0,
    functionTemplate: "",
    resultParsing: undefined,
    apiName: ""
  };
}
export const ParseDirective = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.functionTag !== 0) {
      writer.uint32(8).int32(message.functionTag);
    }
    if (message.functionTemplate !== "") {
      writer.uint32(18).string(message.functionTemplate);
    }
    if (message.resultParsing !== undefined) {
      BlockParser.encode(message.resultParsing, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiName !== "") {
      writer.uint32(34).string(message.apiName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseDirective();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionTag = reader.int32();
          break;
        case 2:
          message.functionTemplate = reader.string();
          break;
        case 3:
          message.resultParsing = BlockParser.decode(reader, reader.uint32());
          break;
        case 4:
          message.apiName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$functionTag2, _object$functionTempl, _object$apiName;
    const message = createBaseParseDirective();
    message.functionTag = (_object$functionTag2 = object.functionTag) !== null && _object$functionTag2 !== void 0 ? _object$functionTag2 : 0;
    message.functionTemplate = (_object$functionTempl = object.functionTemplate) !== null && _object$functionTempl !== void 0 ? _object$functionTempl : "";
    message.resultParsing = object.resultParsing !== undefined && object.resultParsing !== null ? BlockParser.fromPartial(object.resultParsing) : undefined;
    message.apiName = (_object$apiName = object.apiName) !== null && _object$apiName !== void 0 ? _object$apiName : "";
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