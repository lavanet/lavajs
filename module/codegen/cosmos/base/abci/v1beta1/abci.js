import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    height: Long.ZERO,
    txhash: "",
    codespace: "",
    code: 0,
    data: "",
    rawLog: "",
    logs: [],
    info: "",
    gasWanted: Long.ZERO,
    gasUsed: Long.ZERO,
    tx: undefined,
    timestamp: "",
    events: []
  };
}
export const TxResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
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
    for (const v of message.logs) {
      ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.info !== "") {
      writer.uint32(66).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(72).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(80).int64(message.gasUsed);
    }
    if (message.tx !== undefined) {
      Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }
    if (message.timestamp !== "") {
      writer.uint32(98).string(message.timestamp);
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.tx = Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.timestamp = reader.string();
          break;
        case 13:
          message.events.push(Event.decode(reader, reader.uint32()));
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      txhash: isSet(object.txhash) ? String(object.txhash) : "",
      codespace: isSet(object.codespace) ? String(object.codespace) : "",
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? String(object.data) : "",
      rawLog: isSet(object.rawLog) ? String(object.rawLog) : "",
      logs: Array.isArray(object === null || object === void 0 ? void 0 : object.logs) ? object.logs.map(e => ABCIMessageLog.fromJSON(e)) : [],
      info: isSet(object.info) ? String(object.info) : "",
      gasWanted: isSet(object.gasWanted) ? Long.fromValue(object.gasWanted) : Long.ZERO,
      gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.ZERO,
      tx: isSet(object.tx) ? Any.fromJSON(object.tx) : undefined,
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(e => Event.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.txhash !== undefined && (obj.txhash = message.txhash);
    message.codespace !== undefined && (obj.codespace = message.codespace);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined && (obj.data = message.data);
    message.rawLog !== undefined && (obj.rawLog = message.rawLog);
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? ABCIMessageLog.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || Long.ZERO).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.ZERO).toString());
    message.tx !== undefined && (obj.tx = message.tx ? Any.toJSON(message.tx) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$txhash, _object$codespace, _object$code, _object$data, _object$rawLog, _object$logs, _object$info, _object$timestamp, _object$events;
    const message = createBaseTxResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.txhash = (_object$txhash = object.txhash) !== null && _object$txhash !== void 0 ? _object$txhash : "";
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : "";
    message.rawLog = (_object$rawLog = object.rawLog) !== null && _object$rawLog !== void 0 ? _object$rawLog : "";
    message.logs = ((_object$logs = object.logs) === null || _object$logs === void 0 ? void 0 : _object$logs.map(e => ABCIMessageLog.fromPartial(e))) || [];
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? Long.fromValue(object.gasWanted) : Long.ZERO;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.ZERO;
    message.tx = object.tx !== undefined && object.tx !== null ? Any.fromPartial(object.tx) : undefined;
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : "";
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(e => Event.fromPartial(e))) || [];
    return message;
  }
};
function createBaseABCIMessageLog() {
  return {
    msgIndex: 0,
    log: "",
    events: []
  };
}
export const ABCIMessageLog = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.msgIndex !== 0) {
      writer.uint32(8).uint32(message.msgIndex);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIMessageLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      msgIndex: isSet(object.msgIndex) ? Number(object.msgIndex) : 0,
      log: isSet(object.log) ? String(object.log) : "",
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(e => StringEvent.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.msgIndex !== undefined && (obj.msgIndex = Math.round(message.msgIndex));
    message.log !== undefined && (obj.log = message.log);
    if (message.events) {
      obj.events = message.events.map(e => e ? StringEvent.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$msgIndex, _object$log, _object$events2;
    const message = createBaseABCIMessageLog();
    message.msgIndex = (_object$msgIndex = object.msgIndex) !== null && _object$msgIndex !== void 0 ? _object$msgIndex : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.events = ((_object$events2 = object.events) === null || _object$events2 === void 0 ? void 0 : _object$events2.map(e => StringEvent.fromPartial(e))) || [];
    return message;
  }
};
function createBaseStringEvent() {
  return {
    type: "",
    attributes: []
  };
}
export const StringEvent = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      Attribute.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes) ? object.attributes.map(e => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$type, _object$attributes;
    const message = createBaseStringEvent();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.attributes = ((_object$attributes = object.attributes) === null || _object$attributes === void 0 ? void 0 : _object$attributes.map(e => Attribute.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAttribute() {
  return {
    key: "",
    value: ""
  };
}
export const Attribute = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object) {
    var _object$key, _object$value;
    const message = createBaseAttribute();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : "";
    return message;
  }
};
function createBaseGasInfo() {
  return {
    gasWanted: Long.UZERO,
    gasUsed: Long.UZERO
  };
}
export const GasInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.gasWanted.isZero()) {
      writer.uint32(8).uint64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(16).uint64(message.gasUsed);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      gasWanted: isSet(object.gasWanted) ? Long.fromValue(object.gasWanted) : Long.UZERO,
      gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || Long.UZERO).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGasInfo();
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? Long.fromValue(object.gasWanted) : Long.UZERO;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.UZERO;
    return message;
  }
};
function createBaseResult() {
  return {
    data: new Uint8Array(),
    log: "",
    events: [],
    msgResponses: []
  };
}
export const Result = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 4:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(e => Event.fromJSON(e)) : [],
      msgResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.msgResponses) ? object.msgResponses.map(e => Any.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgResponses = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$data2, _object$log2, _object$events3, _object$msgResponses;
    const message = createBaseResult();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    message.log = (_object$log2 = object.log) !== null && _object$log2 !== void 0 ? _object$log2 : "";
    message.events = ((_object$events3 = object.events) === null || _object$events3 === void 0 ? void 0 : _object$events3.map(e => Event.fromPartial(e))) || [];
    message.msgResponses = ((_object$msgResponses = object.msgResponses) === null || _object$msgResponses === void 0 ? void 0 : _object$msgResponses.map(e => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSimulationResponse() {
  return {
    gasInfo: undefined,
    result: undefined
  };
}
export const SimulationResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      gasInfo: isSet(object.gasInfo) ? GasInfo.fromJSON(object.gasInfo) : undefined,
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseSimulationResponse();
    message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  }
};
function createBaseMsgData() {
  return {
    msgType: "",
    data: new Uint8Array()
  };
}
export const MsgData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      msgType: isSet(object.msgType) ? String(object.msgType) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$msgType, _object$data3;
    const message = createBaseMsgData();
    message.msgType = (_object$msgType = object.msgType) !== null && _object$msgType !== void 0 ? _object$msgType : "";
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    return message;
  }
};
function createBaseTxMsgData() {
  return {
    data: [],
    msgResponses: []
  };
}
export const TxMsgData = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.data) {
      MsgData.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
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
      data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map(e => MsgData.fromJSON(e)) : [],
      msgResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.msgResponses) ? object.msgResponses.map(e => Any.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? MsgData.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgResponses = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$data4, _object$msgResponses2;
    const message = createBaseTxMsgData();
    message.data = ((_object$data4 = object.data) === null || _object$data4 === void 0 ? void 0 : _object$data4.map(e => MsgData.fromPartial(e))) || [];
    message.msgResponses = ((_object$msgResponses2 = object.msgResponses) === null || _object$msgResponses2 === void 0 ? void 0 : _object$msgResponses2.map(e => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSearchTxsResult() {
  return {
    totalCount: Long.UZERO,
    count: Long.UZERO,
    pageNumber: Long.UZERO,
    pageTotal: Long.UZERO,
    limit: Long.UZERO,
    txs: []
  };
}
export const SearchTxsResult = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.totalCount.isZero()) {
      writer.uint32(8).uint64(message.totalCount);
    }
    if (!message.count.isZero()) {
      writer.uint32(16).uint64(message.count);
    }
    if (!message.pageNumber.isZero()) {
      writer.uint32(24).uint64(message.pageNumber);
    }
    if (!message.pageTotal.isZero()) {
      writer.uint32(32).uint64(message.pageTotal);
    }
    if (!message.limit.isZero()) {
      writer.uint32(40).uint64(message.limit);
    }
    for (const v of message.txs) {
      TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchTxsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      totalCount: isSet(object.totalCount) ? Long.fromValue(object.totalCount) : Long.UZERO,
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO,
      pageNumber: isSet(object.pageNumber) ? Long.fromValue(object.pageNumber) : Long.UZERO,
      pageTotal: isSet(object.pageTotal) ? Long.fromValue(object.pageTotal) : Long.UZERO,
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(e => TxResponse.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.totalCount !== undefined && (obj.totalCount = (message.totalCount || Long.UZERO).toString());
    message.count !== undefined && (obj.count = (message.count || Long.UZERO).toString());
    message.pageNumber !== undefined && (obj.pageNumber = (message.pageNumber || Long.UZERO).toString());
    message.pageTotal !== undefined && (obj.pageTotal = (message.pageTotal || Long.UZERO).toString());
    message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? TxResponse.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$txs;
    const message = createBaseSearchTxsResult();
    message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? Long.fromValue(object.totalCount) : Long.UZERO;
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.UZERO;
    message.pageNumber = object.pageNumber !== undefined && object.pageNumber !== null ? Long.fromValue(object.pageNumber) : Long.UZERO;
    message.pageTotal = object.pageTotal !== undefined && object.pageTotal !== null ? Long.fromValue(object.pageTotal) : Long.UZERO;
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(e => TxResponse.fromPartial(e))) || [];
    return message;
  }
};