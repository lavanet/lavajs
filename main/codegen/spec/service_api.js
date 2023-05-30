"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecCategory = exports.ServiceApi = exports.Parsing = exports.PARSER_FUNCSDKType = exports.PARSER_FUNC = exports.BlockParser = exports.ApiInterface = void 0;
exports.pARSER_FUNCFromJSON = pARSER_FUNCFromJSON;
exports.pARSER_FUNCToJSON = pARSER_FUNCToJSON;
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var PARSER_FUNC = /*#__PURE__*/function (PARSER_FUNC) {
  PARSER_FUNC[PARSER_FUNC["EMPTY"] = 0] = "EMPTY";
  PARSER_FUNC[PARSER_FUNC["PARSE_BY_ARG"] = 1] = "PARSE_BY_ARG";
  PARSER_FUNC[PARSER_FUNC["PARSE_CANONICAL"] = 2] = "PARSE_CANONICAL";
  PARSER_FUNC[PARSER_FUNC["PARSE_DICTIONARY"] = 3] = "PARSE_DICTIONARY";
  PARSER_FUNC[PARSER_FUNC["PARSE_DICTIONARY_OR_ORDERED"] = 4] = "PARSE_DICTIONARY_OR_ORDERED";
  PARSER_FUNC[PARSER_FUNC["DEFAULT"] = 6] = "DEFAULT";
  PARSER_FUNC[PARSER_FUNC["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return PARSER_FUNC;
}({});
exports.PARSER_FUNC = PARSER_FUNC;
var PARSER_FUNCSDKType = PARSER_FUNC;
exports.PARSER_FUNCSDKType = PARSER_FUNCSDKType;
function pARSER_FUNCFromJSON(object) {
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
function pARSER_FUNCToJSON(object) {
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
    computeUnits: _helpers.Long.UZERO,
    enabled: false,
    apiInterfaces: [],
    reserved: undefined,
    parsing: undefined,
    internalPath: ""
  };
}
var ServiceApi = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var _iterator = _createForOfIteratorHelper(message.apiInterfaces),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ApiInterface.encode(v, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseServiceApi();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      blockParsing: (0, _helpers.isSet)(object.blockParsing) ? BlockParser.fromJSON(object.blockParsing) : undefined,
      computeUnits: (0, _helpers.isSet)(object.computeUnits) ? _helpers.Long.fromValue(object.computeUnits) : _helpers.Long.UZERO,
      enabled: (0, _helpers.isSet)(object.enabled) ? Boolean(object.enabled) : false,
      apiInterfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.apiInterfaces) ? object.apiInterfaces.map(function (e) {
        return ApiInterface.fromJSON(e);
      }) : [],
      reserved: (0, _helpers.isSet)(object.reserved) ? SpecCategory.fromJSON(object.reserved) : undefined,
      parsing: (0, _helpers.isSet)(object.parsing) ? Parsing.fromJSON(object.parsing) : undefined,
      internalPath: (0, _helpers.isSet)(object.internalPath) ? String(object.internalPath) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.blockParsing !== undefined && (obj.blockParsing = message.blockParsing ? BlockParser.toJSON(message.blockParsing) : undefined);
    message.computeUnits !== undefined && (obj.computeUnits = (message.computeUnits || _helpers.Long.UZERO).toString());
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.apiInterfaces) {
      obj.apiInterfaces = message.apiInterfaces.map(function (e) {
        return e ? ApiInterface.toJSON(e) : undefined;
      });
    } else {
      obj.apiInterfaces = [];
    }
    message.reserved !== undefined && (obj.reserved = message.reserved ? SpecCategory.toJSON(message.reserved) : undefined);
    message.parsing !== undefined && (obj.parsing = message.parsing ? Parsing.toJSON(message.parsing) : undefined);
    message.internalPath !== undefined && (obj.internalPath = message.internalPath);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$enabled, _object$apiInterfaces, _object$internalPath;
    var message = createBaseServiceApi();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.blockParsing = object.blockParsing !== undefined && object.blockParsing !== null ? BlockParser.fromPartial(object.blockParsing) : undefined;
    message.computeUnits = object.computeUnits !== undefined && object.computeUnits !== null ? _helpers.Long.fromValue(object.computeUnits) : _helpers.Long.UZERO;
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    message.apiInterfaces = ((_object$apiInterfaces = object.apiInterfaces) === null || _object$apiInterfaces === void 0 ? void 0 : _object$apiInterfaces.map(function (e) {
      return ApiInterface.fromPartial(e);
    })) || [];
    message.reserved = object.reserved !== undefined && object.reserved !== null ? SpecCategory.fromPartial(object.reserved) : undefined;
    message.parsing = object.parsing !== undefined && object.parsing !== null ? Parsing.fromPartial(object.parsing) : undefined;
    message.internalPath = (_object$internalPath = object.internalPath) !== null && _object$internalPath !== void 0 ? _object$internalPath : "";
    return message;
  }
};
exports.ServiceApi = ServiceApi;
function createBaseParsing() {
  return {
    functionTag: "",
    functionTemplate: "",
    resultParsing: undefined
  };
}
var Parsing = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParsing();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      functionTag: (0, _helpers.isSet)(object.functionTag) ? String(object.functionTag) : "",
      functionTemplate: (0, _helpers.isSet)(object.functionTemplate) ? String(object.functionTemplate) : "",
      resultParsing: (0, _helpers.isSet)(object.resultParsing) ? BlockParser.fromJSON(object.resultParsing) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.functionTag !== undefined && (obj.functionTag = message.functionTag);
    message.functionTemplate !== undefined && (obj.functionTemplate = message.functionTemplate);
    message.resultParsing !== undefined && (obj.resultParsing = message.resultParsing ? BlockParser.toJSON(message.resultParsing) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$functionTag, _object$functionTempl;
    var message = createBaseParsing();
    message.functionTag = (_object$functionTag = object.functionTag) !== null && _object$functionTag !== void 0 ? _object$functionTag : "";
    message.functionTemplate = (_object$functionTempl = object.functionTemplate) !== null && _object$functionTempl !== void 0 ? _object$functionTempl : "";
    message.resultParsing = object.resultParsing !== undefined && object.resultParsing !== null ? BlockParser.fromPartial(object.resultParsing) : undefined;
    return message;
  }
};
exports.Parsing = Parsing;
function createBaseApiInterface() {
  return {
    "interface": "",
    type: "",
    extraComputeUnits: _helpers.Long.UZERO,
    category: undefined,
    overwriteBlockParsing: undefined
  };
}
var ApiInterface = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message["interface"] !== "") {
      writer.uint32(10).string(message["interface"]);
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseApiInterface();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message["interface"] = reader.string();
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
  fromJSON: function fromJSON(object) {
    return {
      "interface": (0, _helpers.isSet)(object["interface"]) ? String(object["interface"]) : "",
      type: (0, _helpers.isSet)(object.type) ? String(object.type) : "",
      extraComputeUnits: (0, _helpers.isSet)(object.extraComputeUnits) ? _helpers.Long.fromValue(object.extraComputeUnits) : _helpers.Long.UZERO,
      category: (0, _helpers.isSet)(object.category) ? SpecCategory.fromJSON(object.category) : undefined,
      overwriteBlockParsing: (0, _helpers.isSet)(object.overwriteBlockParsing) ? BlockParser.fromJSON(object.overwriteBlockParsing) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message["interface"] !== undefined && (obj["interface"] = message["interface"]);
    message.type !== undefined && (obj.type = message.type);
    message.extraComputeUnits !== undefined && (obj.extraComputeUnits = (message.extraComputeUnits || _helpers.Long.UZERO).toString());
    message.category !== undefined && (obj.category = message.category ? SpecCategory.toJSON(message.category) : undefined);
    message.overwriteBlockParsing !== undefined && (obj.overwriteBlockParsing = message.overwriteBlockParsing ? BlockParser.toJSON(message.overwriteBlockParsing) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$interface, _object$type;
    var message = createBaseApiInterface();
    message["interface"] = (_object$interface = object["interface"]) !== null && _object$interface !== void 0 ? _object$interface : "";
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.extraComputeUnits = object.extraComputeUnits !== undefined && object.extraComputeUnits !== null ? _helpers.Long.fromValue(object.extraComputeUnits) : _helpers.Long.UZERO;
    message.category = object.category !== undefined && object.category !== null ? SpecCategory.fromPartial(object.category) : undefined;
    message.overwriteBlockParsing = object.overwriteBlockParsing !== undefined && object.overwriteBlockParsing !== null ? BlockParser.fromPartial(object.overwriteBlockParsing) : undefined;
    return message;
  }
};
exports.ApiInterface = ApiInterface;
function createBaseBlockParser() {
  return {
    parserArg: [],
    parserFunc: 0,
    defaultValue: "",
    encoding: ""
  };
}
var BlockParser = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.parserArg),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockParser();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      parserArg: Array.isArray(object === null || object === void 0 ? void 0 : object.parserArg) ? object.parserArg.map(function (e) {
        return String(e);
      }) : [],
      parserFunc: (0, _helpers.isSet)(object.parserFunc) ? pARSER_FUNCFromJSON(object.parserFunc) : 0,
      defaultValue: (0, _helpers.isSet)(object.defaultValue) ? String(object.defaultValue) : "",
      encoding: (0, _helpers.isSet)(object.encoding) ? String(object.encoding) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.parserArg) {
      obj.parserArg = message.parserArg.map(function (e) {
        return e;
      });
    } else {
      obj.parserArg = [];
    }
    message.parserFunc !== undefined && (obj.parserFunc = pARSER_FUNCToJSON(message.parserFunc));
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$parserArg, _object$parserFunc, _object$defaultValue, _object$encoding;
    var message = createBaseBlockParser();
    message.parserArg = ((_object$parserArg = object.parserArg) === null || _object$parserArg === void 0 ? void 0 : _object$parserArg.map(function (e) {
      return e;
    })) || [];
    message.parserFunc = (_object$parserFunc = object.parserFunc) !== null && _object$parserFunc !== void 0 ? _object$parserFunc : 0;
    message.defaultValue = (_object$defaultValue = object.defaultValue) !== null && _object$defaultValue !== void 0 ? _object$defaultValue : "";
    message.encoding = (_object$encoding = object.encoding) !== null && _object$encoding !== void 0 ? _object$encoding : "";
    return message;
  }
};
exports.BlockParser = BlockParser;
function createBaseSpecCategory() {
  return {
    deterministic: false,
    local: false,
    subscription: false,
    stateful: 0,
    hangingApi: false
  };
}
var SpecCategory = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSpecCategory();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      deterministic: (0, _helpers.isSet)(object.deterministic) ? Boolean(object.deterministic) : false,
      local: (0, _helpers.isSet)(object.local) ? Boolean(object.local) : false,
      subscription: (0, _helpers.isSet)(object.subscription) ? Boolean(object.subscription) : false,
      stateful: (0, _helpers.isSet)(object.stateful) ? Number(object.stateful) : 0,
      hangingApi: (0, _helpers.isSet)(object.hangingApi) ? Boolean(object.hangingApi) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.deterministic !== undefined && (obj.deterministic = message.deterministic);
    message.local !== undefined && (obj.local = message.local);
    message.subscription !== undefined && (obj.subscription = message.subscription);
    message.stateful !== undefined && (obj.stateful = Math.round(message.stateful));
    message.hangingApi !== undefined && (obj.hangingApi = message.hangingApi);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$deterministic, _object$local, _object$subscription, _object$stateful, _object$hangingApi;
    var message = createBaseSpecCategory();
    message.deterministic = (_object$deterministic = object.deterministic) !== null && _object$deterministic !== void 0 ? _object$deterministic : false;
    message.local = (_object$local = object.local) !== null && _object$local !== void 0 ? _object$local : false;
    message.subscription = (_object$subscription = object.subscription) !== null && _object$subscription !== void 0 ? _object$subscription : false;
    message.stateful = (_object$stateful = object.stateful) !== null && _object$stateful !== void 0 ? _object$stateful : 0;
    message.hangingApi = (_object$hangingApi = object.hangingApi) !== null && _object$hangingApi !== void 0 ? _object$hangingApi : false;
    return message;
  }
};
exports.SpecCategory = SpecCategory;