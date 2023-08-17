"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxResponse = exports.TxMsgData = exports.StringEvent = exports.SimulationResponse = exports.SearchTxsResult = exports.Result = exports.MsgData = exports.GasInfo = exports.Attribute = exports.ABCIMessageLog = void 0;
var _any = require("../../../../google/protobuf/any");
var _types = require("../../../../tendermint/abci/types");
var _binary = require("../../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */

/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */

/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */

/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */

/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */

/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */

/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */

/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */

/** GasInfo defines tx execution gas context. */

/** GasInfo defines tx execution gas context. */

/** Result is the union of ResponseFormat and ResponseCheckTx. */

/** Result is the union of ResponseFormat and ResponseCheckTx. */

/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */

/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */

/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
/** @deprecated */
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
/** SearchTxsResult defines a structure for querying txs pageable */
/** SearchTxsResult defines a structure for querying txs pageable */
function createBaseTxResponse() {
  return {
    height: BigInt(0),
    txhash: "",
    codespace: "",
    code: 0,
    data: "",
    rawLog: "",
    logs: [],
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    tx: _any.Any.fromPartial({}),
    timestamp: "",
    events: []
  };
}
var TxResponse = {
  typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.txhash !== "") {
      writer.uint32(18).string(message.txhash);
    }
    if (message.codespace !== "") {
      writer.uint32(26).string(message.codespace);
    }
    if (message.code !== 0) {
      writer.uint32(32).uint32(message.code);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.rawLog !== "") {
      writer.uint32(50).string(message.rawLog);
    }
    var _iterator = _createForOfIteratorHelper(message.logs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.info !== "") {
      writer.uint32(66).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(72).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(80).int64(message.gasUsed);
    }
    if (message.tx !== undefined) {
      _any.Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }
    if (message.timestamp !== "") {
      writer.uint32(98).string(message.timestamp);
    }
    var _iterator2 = _createForOfIteratorHelper(message.events),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _types.Event.encode(_v, writer.uint32(106).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.txhash = reader.string();
          break;
        case 3:
          message.codespace = reader.string();
          break;
        case 4:
          message.code = reader.uint32();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.rawLog = reader.string();
          break;
        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          break;
        case 8:
          message.info = reader.string();
          break;
        case 9:
          message.gasWanted = reader.int64();
          break;
        case 10:
          message.gasUsed = reader.int64();
          break;
        case 11:
          message.tx = _any.Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.timestamp = reader.string();
          break;
        case 13:
          message.events.push(_types.Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$txhash, _object$codespace, _object$code, _object$data, _object$rawLog, _object$logs, _object$info, _object$timestamp, _object$events;
    var message = createBaseTxResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.txhash = (_object$txhash = object.txhash) !== null && _object$txhash !== void 0 ? _object$txhash : "";
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : "";
    message.rawLog = (_object$rawLog = object.rawLog) !== null && _object$rawLog !== void 0 ? _object$rawLog : "";
    message.logs = ((_object$logs = object.logs) === null || _object$logs === void 0 ? void 0 : _object$logs.map(function (e) {
      return ABCIMessageLog.fromPartial(e);
    })) || [];
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.tx = object.tx !== undefined && object.tx !== null ? _any.Any.fromPartial(object.tx) : undefined;
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : "";
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(function (e) {
      return _types.Event.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      height: BigInt(object.height),
      txhash: object.txhash,
      codespace: object.codespace,
      code: object.code,
      data: object.data,
      rawLog: object.raw_log,
      logs: Array.isArray(object === null || object === void 0 ? void 0 : object.logs) ? object.logs.map(function (e) {
        return ABCIMessageLog.fromAmino(e);
      }) : [],
      info: object.info,
      gasWanted: BigInt(object.gas_wanted),
      gasUsed: BigInt(object.gas_used),
      tx: object !== null && object !== void 0 && object.tx ? _any.Any.fromAmino(object.tx) : undefined,
      timestamp: object.timestamp,
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return _types.Event.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.txhash = message.txhash;
    obj.codespace = message.codespace;
    obj.code = message.code;
    obj.data = message.data;
    obj.raw_log = message.rawLog;
    if (message.logs) {
      obj.logs = message.logs.map(function (e) {
        return e ? ABCIMessageLog.toAmino(e) : undefined;
      });
    } else {
      obj.logs = [];
    }
    obj.info = message.info;
    obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    obj.tx = message.tx ? _any.Any.toAmino(message.tx) : undefined;
    obj.timestamp = message.timestamp;
    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? _types.Event.toAmino(e) : undefined;
      });
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return TxResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxResponse",
      value: TxResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return TxResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return TxResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
      value: TxResponse.encode(message).finish()
    };
  }
};
exports.TxResponse = TxResponse;
function createBaseABCIMessageLog() {
  return {
    msgIndex: 0,
    log: "",
    events: []
  };
}
var ABCIMessageLog = {
  typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.msgIndex !== 0) {
      writer.uint32(8).uint32(message.msgIndex);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    var _iterator3 = _createForOfIteratorHelper(message.events),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseABCIMessageLog();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgIndex = reader.uint32();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(StringEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$msgIndex, _object$log, _object$events2;
    var message = createBaseABCIMessageLog();
    message.msgIndex = (_object$msgIndex = object.msgIndex) !== null && _object$msgIndex !== void 0 ? _object$msgIndex : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.events = ((_object$events2 = object.events) === null || _object$events2 === void 0 ? void 0 : _object$events2.map(function (e) {
      return StringEvent.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      msgIndex: object.msg_index,
      log: object.log,
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return StringEvent.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.msg_index = message.msgIndex;
    obj.log = message.log;
    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? StringEvent.toAmino(e) : undefined;
      });
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ABCIMessageLog.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ABCIMessageLog",
      value: ABCIMessageLog.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ABCIMessageLog.decode(message.value);
  },
  toProto: function toProto(message) {
    return ABCIMessageLog.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
      value: ABCIMessageLog.encode(message).finish()
    };
  }
};
exports.ABCIMessageLog = ABCIMessageLog;
function createBaseStringEvent() {
  return {
    type: "",
    attributes: []
  };
}
var StringEvent = {
  typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    var _iterator4 = _createForOfIteratorHelper(message.attributes),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        Attribute.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStringEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$type, _object$attributes;
    var message = createBaseStringEvent();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.attributes = ((_object$attributes = object.attributes) === null || _object$attributes === void 0 ? void 0 : _object$attributes.map(function (e) {
      return Attribute.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      type: object.type,
      attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes) ? object.attributes.map(function (e) {
        return Attribute.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.type = message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map(function (e) {
        return e ? Attribute.toAmino(e) : undefined;
      });
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return StringEvent.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/StringEvent",
      value: StringEvent.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return StringEvent.decode(message.value);
  },
  toProto: function toProto(message) {
    return StringEvent.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
      value: StringEvent.encode(message).finish()
    };
  }
};
exports.StringEvent = StringEvent;
function createBaseAttribute() {
  return {
    key: "",
    value: ""
  };
}
var Attribute = {
  typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAttribute();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$key, _object$value;
    var message = createBaseAttribute();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Attribute.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Attribute",
      value: Attribute.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Attribute.decode(message.value);
  },
  toProto: function toProto(message) {
    return Attribute.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
      value: Attribute.encode(message).finish()
    };
  }
};
exports.Attribute = Attribute;
function createBaseGasInfo() {
  return {
    gasWanted: BigInt(0),
    gasUsed: BigInt(0)
  };
}
var GasInfo = {
  typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(8).uint64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(16).uint64(message.gasUsed);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGasInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasWanted = reader.uint64();
          break;
        case 2:
          message.gasUsed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGasInfo();
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      gasWanted: BigInt(object.gas_wanted),
      gasUsed: BigInt(object.gas_used)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GasInfo.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GasInfo",
      value: GasInfo.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GasInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return GasInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
      value: GasInfo.encode(message).finish()
    };
  }
};
exports.GasInfo = GasInfo;
function createBaseResult() {
  return {
    data: new Uint8Array(),
    log: "",
    events: [],
    msgResponses: []
  };
}
var Result = {
  typeUrl: "/cosmos.base.abci.v1beta1.Result",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    var _iterator5 = _createForOfIteratorHelper(message.events),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _types.Event.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var _iterator6 = _createForOfIteratorHelper(message.msgResponses),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v2 = _step6.value;
        _any.Any.encode(_v2, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResult();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(_types.Event.decode(reader, reader.uint32()));
          break;
        case 4:
          message.msgResponses.push(_any.Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$data2, _object$log2, _object$events3, _object$msgResponses;
    var message = createBaseResult();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    message.log = (_object$log2 = object.log) !== null && _object$log2 !== void 0 ? _object$log2 : "";
    message.events = ((_object$events3 = object.events) === null || _object$events3 === void 0 ? void 0 : _object$events3.map(function (e) {
      return _types.Event.fromPartial(e);
    })) || [];
    message.msgResponses = ((_object$msgResponses = object.msgResponses) === null || _object$msgResponses === void 0 ? void 0 : _object$msgResponses.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      data: object.data,
      log: object.log,
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return _types.Event.fromAmino(e);
      }) : [],
      msgResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.msg_responses) ? object.msg_responses.map(function (e) {
        return _any.Any.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.data = message.data;
    obj.log = message.log;
    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? _types.Event.toAmino(e) : undefined;
      });
    } else {
      obj.events = [];
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map(function (e) {
        return e ? _any.Any.toAmino(e) : undefined;
      });
    } else {
      obj.msg_responses = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Result.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Result",
      value: Result.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Result.decode(message.value);
  },
  toProto: function toProto(message) {
    return Result.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.Result",
      value: Result.encode(message).finish()
    };
  }
};
exports.Result = Result;
function createBaseSimulationResponse() {
  return {
    gasInfo: GasInfo.fromPartial({}),
    result: Result.fromPartial({})
  };
}
var SimulationResponse = {
  typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSimulationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSimulationResponse();
    message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      gasInfo: object !== null && object !== void 0 && object.gas_info ? GasInfo.fromAmino(object.gas_info) : undefined,
      result: object !== null && object !== void 0 && object.result ? Result.fromAmino(object.result) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.gas_info = message.gasInfo ? GasInfo.toAmino(message.gasInfo) : undefined;
    obj.result = message.result ? Result.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return SimulationResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SimulationResponse",
      value: SimulationResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return SimulationResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return SimulationResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
      value: SimulationResponse.encode(message).finish()
    };
  }
};
exports.SimulationResponse = SimulationResponse;
function createBaseMsgData() {
  return {
    msgType: "",
    data: new Uint8Array()
  };
}
var MsgData = {
  typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$msgType, _object$data3;
    var message = createBaseMsgData();
    message.msgType = (_object$msgType = object.msgType) !== null && _object$msgType !== void 0 ? _object$msgType : "";
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      msgType: object.msg_type,
      data: object.data
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.msg_type = message.msgType;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgData.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgData",
      value: MsgData.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgData.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgData.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
      value: MsgData.encode(message).finish()
    };
  }
};
exports.MsgData = MsgData;
function createBaseTxMsgData() {
  return {
    data: [],
    msgResponses: []
  };
}
var TxMsgData = {
  typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator7 = _createForOfIteratorHelper(message.data),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        MsgData.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    var _iterator8 = _createForOfIteratorHelper(message.msgResponses),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _v3 = _step8.value;
        _any.Any.encode(_v3, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxMsgData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.msgResponses.push(_any.Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$data4, _object$msgResponses2;
    var message = createBaseTxMsgData();
    message.data = ((_object$data4 = object.data) === null || _object$data4 === void 0 ? void 0 : _object$data4.map(function (e) {
      return MsgData.fromPartial(e);
    })) || [];
    message.msgResponses = ((_object$msgResponses2 = object.msgResponses) === null || _object$msgResponses2 === void 0 ? void 0 : _object$msgResponses2.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map(function (e) {
        return MsgData.fromAmino(e);
      }) : [],
      msgResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.msg_responses) ? object.msg_responses.map(function (e) {
        return _any.Any.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.data) {
      obj.data = message.data.map(function (e) {
        return e ? MsgData.toAmino(e) : undefined;
      });
    } else {
      obj.data = [];
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map(function (e) {
        return e ? _any.Any.toAmino(e) : undefined;
      });
    } else {
      obj.msg_responses = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return TxMsgData.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxMsgData",
      value: TxMsgData.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return TxMsgData.decode(message.value);
  },
  toProto: function toProto(message) {
    return TxMsgData.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
      value: TxMsgData.encode(message).finish()
    };
  }
};
exports.TxMsgData = TxMsgData;
function createBaseSearchTxsResult() {
  return {
    totalCount: BigInt(0),
    count: BigInt(0),
    pageNumber: BigInt(0),
    pageTotal: BigInt(0),
    limit: BigInt(0),
    txs: []
  };
}
var SearchTxsResult = {
  typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalCount);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    if (message.pageNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.pageNumber);
    }
    if (message.pageTotal !== BigInt(0)) {
      writer.uint32(32).uint64(message.pageTotal);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(40).uint64(message.limit);
    }
    var _iterator9 = _createForOfIteratorHelper(message.txs),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSearchTxsResult();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.uint64();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        case 3:
          message.pageNumber = reader.uint64();
          break;
        case 4:
          message.pageTotal = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
          break;
        case 6:
          message.txs.push(TxResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$txs;
    var message = createBaseSearchTxsResult();
    message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    message.pageNumber = object.pageNumber !== undefined && object.pageNumber !== null ? BigInt(object.pageNumber.toString()) : BigInt(0);
    message.pageTotal = object.pageTotal !== undefined && object.pageTotal !== null ? BigInt(object.pageTotal.toString()) : BigInt(0);
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(function (e) {
      return TxResponse.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      totalCount: BigInt(object.total_count),
      count: BigInt(object.count),
      pageNumber: BigInt(object.page_number),
      pageTotal: BigInt(object.page_total),
      limit: BigInt(object.limit),
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function (e) {
        return TxResponse.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.total_count = message.totalCount ? message.totalCount.toString() : undefined;
    obj.count = message.count ? message.count.toString() : undefined;
    obj.page_number = message.pageNumber ? message.pageNumber.toString() : undefined;
    obj.page_total = message.pageTotal ? message.pageTotal.toString() : undefined;
    obj.limit = message.limit ? message.limit.toString() : undefined;
    if (message.txs) {
      obj.txs = message.txs.map(function (e) {
        return e ? TxResponse.toAmino(e) : undefined;
      });
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return SearchTxsResult.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SearchTxsResult",
      value: SearchTxsResult.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return SearchTxsResult.decode(message.value);
  },
  toProto: function toProto(message) {
    return SearchTxsResult.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
      value: SearchTxsResult.encode(message).finish()
    };
  }
};
exports.SearchTxsResult = SearchTxsResult;