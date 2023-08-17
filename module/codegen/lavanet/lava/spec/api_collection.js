import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
    collectionData: CollectionData.fromPartial({}),
    apis: [],
    headers: [],
    inheritanceApis: [],
    parseDirectives: [],
    extensions: [],
    verifications: []
  };
}
export const ApiCollection = {
  typeUrl: "/lavanet.lava.spec.ApiCollection",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      enabled: object.enabled,
      collectionData: object !== null && object !== void 0 && object.collection_data ? CollectionData.fromAmino(object.collection_data) : undefined,
      apis: Array.isArray(object === null || object === void 0 ? void 0 : object.apis) ? object.apis.map(e => Api.fromAmino(e)) : [],
      headers: Array.isArray(object === null || object === void 0 ? void 0 : object.headers) ? object.headers.map(e => Header.fromAmino(e)) : [],
      inheritanceApis: Array.isArray(object === null || object === void 0 ? void 0 : object.inheritance_apis) ? object.inheritance_apis.map(e => CollectionData.fromAmino(e)) : [],
      parseDirectives: Array.isArray(object === null || object === void 0 ? void 0 : object.parse_directives) ? object.parse_directives.map(e => ParseDirective.fromAmino(e)) : [],
      extensions: Array.isArray(object === null || object === void 0 ? void 0 : object.extensions) ? object.extensions.map(e => Extension.fromAmino(e)) : [],
      verifications: Array.isArray(object === null || object === void 0 ? void 0 : object.verifications) ? object.verifications.map(e => Verification.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.enabled = message.enabled;
    obj.collection_data = message.collectionData ? CollectionData.toAmino(message.collectionData) : undefined;
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toAmino(e) : undefined);
    } else {
      obj.apis = [];
    }
    if (message.headers) {
      obj.headers = message.headers.map(e => e ? Header.toAmino(e) : undefined);
    } else {
      obj.headers = [];
    }
    if (message.inheritanceApis) {
      obj.inheritance_apis = message.inheritanceApis.map(e => e ? CollectionData.toAmino(e) : undefined);
    } else {
      obj.inheritance_apis = [];
    }
    if (message.parseDirectives) {
      obj.parse_directives = message.parseDirectives.map(e => e ? ParseDirective.toAmino(e) : undefined);
    } else {
      obj.parse_directives = [];
    }
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Extension.toAmino(e) : undefined);
    } else {
      obj.extensions = [];
    }
    if (message.verifications) {
      obj.verifications = message.verifications.map(e => e ? Verification.toAmino(e) : undefined);
    } else {
      obj.verifications = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ApiCollection.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ApiCollection.decode(message.value);
  },
  toProto(message) {
    return ApiCollection.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.ApiCollection",
      value: ApiCollection.encode(message).finish()
    };
  }
};
function createBaseExtension() {
  return {
    name: "",
    cuMultiplier: 0,
    rule: Rule.fromPartial({})
  };
}
export const Extension = {
  typeUrl: "/lavanet.lava.spec.Extension",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      name: object.name,
      cuMultiplier: object.cu_multiplier,
      rule: object !== null && object !== void 0 && object.rule ? Rule.fromAmino(object.rule) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.cu_multiplier = message.cuMultiplier;
    obj.rule = message.rule ? Rule.toAmino(message.rule) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Extension.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Extension.decode(message.value);
  },
  toProto(message) {
    return Extension.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.Extension",
      value: Extension.encode(message).finish()
    };
  }
};
function createBaseRule() {
  return {
    block: BigInt(0)
  };
}
export const Rule = {
  typeUrl: "/lavanet.lava.spec.Rule",
  encode(message, writer = BinaryWriter.create()) {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      block: BigInt(object.block)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.block = message.block ? message.block.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Rule.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Rule.decode(message.value);
  },
  toProto(message) {
    return Rule.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.Rule",
      value: Rule.encode(message).finish()
    };
  }
};
function createBaseVerification() {
  return {
    name: "",
    parseDirective: ParseDirective.fromPartial({}),
    values: []
  };
}
export const Verification = {
  typeUrl: "/lavanet.lava.spec.Verification",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      name: object.name,
      parseDirective: object !== null && object !== void 0 && object.parse_directive ? ParseDirective.fromAmino(object.parse_directive) : undefined,
      values: Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? object.values.map(e => ParseValue.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.parse_directive = message.parseDirective ? ParseDirective.toAmino(message.parseDirective) : undefined;
    if (message.values) {
      obj.values = message.values.map(e => e ? ParseValue.toAmino(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Verification.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Verification.decode(message.value);
  },
  toProto(message) {
    return Verification.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.Verification",
      value: Verification.encode(message).finish()
    };
  }
};
function createBaseParseValue() {
  return {
    extension: "",
    expectedValue: "",
    latestDistance: BigInt(0)
  };
}
export const ParseValue = {
  typeUrl: "/lavanet.lava.spec.ParseValue",
  encode(message, writer = BinaryWriter.create()) {
    if (message.extension !== "") {
      writer.uint32(10).string(message.extension);
    }
    if (message.expectedValue !== "") {
      writer.uint32(18).string(message.expectedValue);
    }
    if (message.latestDistance !== BigInt(0)) {
      writer.uint32(24).uint64(message.latestDistance);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.latestDistance = object.latestDistance !== undefined && object.latestDistance !== null ? BigInt(object.latestDistance.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      extension: object.extension,
      expectedValue: object.expected_value,
      latestDistance: BigInt(object.latest_distance)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.extension = message.extension;
    obj.expected_value = message.expectedValue;
    obj.latest_distance = message.latestDistance ? message.latestDistance.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return ParseValue.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ParseValue.decode(message.value);
  },
  toProto(message) {
    return ParseValue.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.ParseValue",
      value: ParseValue.encode(message).finish()
    };
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
  typeUrl: "/lavanet.lava.spec.CollectionData",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      apiInterface: object.api_interface,
      internalPath: object.internal_path,
      type: object.type,
      addOn: object.add_on
    };
  },
  toAmino(message) {
    const obj = {};
    obj.api_interface = message.apiInterface;
    obj.internal_path = message.internalPath;
    obj.type = message.type;
    obj.add_on = message.addOn;
    return obj;
  },
  fromAminoMsg(object) {
    return CollectionData.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return CollectionData.decode(message.value);
  },
  toProto(message) {
    return CollectionData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.CollectionData",
      value: CollectionData.encode(message).finish()
    };
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
  typeUrl: "/lavanet.lava.spec.Header",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      name: object.name,
      kind: isSet(object.kind) ? header_HeaderTypeFromJSON(object.kind) : -1,
      functionTag: isSet(object.function_tag) ? fUNCTION_TAGFromJSON(object.function_tag) : -1
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.kind = message.kind;
    obj.function_tag = message.functionTag;
    return obj;
  },
  fromAminoMsg(object) {
    return Header.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Header.decode(message.value);
  },
  toProto(message) {
    return Header.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.Header",
      value: Header.encode(message).finish()
    };
  }
};
function createBaseApi() {
  return {
    enabled: false,
    name: "",
    computeUnits: BigInt(0),
    extraComputeUnits: BigInt(0),
    category: SpecCategory.fromPartial({}),
    blockParsing: BlockParser.fromPartial({})
  };
}
export const Api = {
  typeUrl: "/lavanet.lava.spec.Api",
  encode(message, writer = BinaryWriter.create()) {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.computeUnits !== BigInt(0)) {
      writer.uint32(24).uint64(message.computeUnits);
    }
    if (message.extraComputeUnits !== BigInt(0)) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.computeUnits = object.computeUnits !== undefined && object.computeUnits !== null ? BigInt(object.computeUnits.toString()) : BigInt(0);
    message.extraComputeUnits = object.extraComputeUnits !== undefined && object.extraComputeUnits !== null ? BigInt(object.extraComputeUnits.toString()) : BigInt(0);
    message.category = object.category !== undefined && object.category !== null ? SpecCategory.fromPartial(object.category) : undefined;
    message.blockParsing = object.blockParsing !== undefined && object.blockParsing !== null ? BlockParser.fromPartial(object.blockParsing) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      enabled: object.enabled,
      name: object.name,
      computeUnits: BigInt(object.compute_units),
      extraComputeUnits: BigInt(object.extra_compute_units),
      category: object !== null && object !== void 0 && object.category ? SpecCategory.fromAmino(object.category) : undefined,
      blockParsing: object !== null && object !== void 0 && object.block_parsing ? BlockParser.fromAmino(object.block_parsing) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.enabled = message.enabled;
    obj.name = message.name;
    obj.compute_units = message.computeUnits ? message.computeUnits.toString() : undefined;
    obj.extra_compute_units = message.extraComputeUnits ? message.extraComputeUnits.toString() : undefined;
    obj.category = message.category ? SpecCategory.toAmino(message.category) : undefined;
    obj.block_parsing = message.blockParsing ? BlockParser.toAmino(message.blockParsing) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Api.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Api.decode(message.value);
  },
  toProto(message) {
    return Api.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.Api",
      value: Api.encode(message).finish()
    };
  }
};
function createBaseParseDirective() {
  return {
    functionTag: 0,
    functionTemplate: "",
    resultParsing: BlockParser.fromPartial({}),
    apiName: ""
  };
}
export const ParseDirective = {
  typeUrl: "/lavanet.lava.spec.ParseDirective",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      functionTag: isSet(object.function_tag) ? fUNCTION_TAGFromJSON(object.function_tag) : -1,
      functionTemplate: object.function_template,
      resultParsing: object !== null && object !== void 0 && object.result_parsing ? BlockParser.fromAmino(object.result_parsing) : undefined,
      apiName: object.api_name
    };
  },
  toAmino(message) {
    const obj = {};
    obj.function_tag = message.functionTag;
    obj.function_template = message.functionTemplate;
    obj.result_parsing = message.resultParsing ? BlockParser.toAmino(message.resultParsing) : undefined;
    obj.api_name = message.apiName;
    return obj;
  },
  fromAminoMsg(object) {
    return ParseDirective.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ParseDirective.decode(message.value);
  },
  toProto(message) {
    return ParseDirective.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.ParseDirective",
      value: ParseDirective.encode(message).finish()
    };
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
  typeUrl: "/lavanet.lava.spec.BlockParser",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      parserArg: Array.isArray(object === null || object === void 0 ? void 0 : object.parser_arg) ? object.parser_arg.map(e => e) : [],
      parserFunc: isSet(object.parser_func) ? pARSER_FUNCFromJSON(object.parser_func) : -1,
      defaultValue: object.default_value,
      encoding: object.encoding
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.parserArg) {
      obj.parser_arg = message.parserArg.map(e => e);
    } else {
      obj.parser_arg = [];
    }
    obj.parser_func = message.parserFunc;
    obj.default_value = message.defaultValue;
    obj.encoding = message.encoding;
    return obj;
  },
  fromAminoMsg(object) {
    return BlockParser.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return BlockParser.decode(message.value);
  },
  toProto(message) {
    return BlockParser.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.BlockParser",
      value: BlockParser.encode(message).finish()
    };
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
  typeUrl: "/lavanet.lava.spec.SpecCategory",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      deterministic: object.deterministic,
      local: object.local,
      subscription: object.subscription,
      stateful: object.stateful,
      hangingApi: object.hanging_api
    };
  },
  toAmino(message) {
    const obj = {};
    obj.deterministic = message.deterministic;
    obj.local = message.local;
    obj.subscription = message.subscription;
    obj.stateful = message.stateful;
    obj.hanging_api = message.hangingApi;
    return obj;
  },
  fromAminoMsg(object) {
    return SpecCategory.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return SpecCategory.decode(message.value);
  },
  toProto(message) {
    return SpecCategory.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.SpecCategory",
      value: SpecCategory.encode(message).finish()
    };
  }
};