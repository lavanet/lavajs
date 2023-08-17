"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.Snapshot = exports.ResponseSetOption = exports.ResponseQuery = exports.ResponseOfferSnapshot_ResultSDKType = exports.ResponseOfferSnapshot_Result = exports.ResponseOfferSnapshot = exports.ResponseLoadSnapshotChunk = exports.ResponseListSnapshots = exports.ResponseInitChain = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseException = exports.ResponseEndBlock = exports.ResponseEcho = exports.ResponseDeliverTx = exports.ResponseCommit = exports.ResponseCheckTx = exports.ResponseBeginBlock = exports.ResponseApplySnapshotChunk_ResultSDKType = exports.ResponseApplySnapshotChunk_Result = exports.ResponseApplySnapshotChunk = exports.Response = exports.RequestSetOption = exports.RequestQuery = exports.RequestOfferSnapshot = exports.RequestLoadSnapshotChunk = exports.RequestListSnapshots = exports.RequestInitChain = exports.RequestInfo = exports.RequestFlush = exports.RequestEndBlock = exports.RequestEcho = exports.RequestDeliverTx = exports.RequestCommit = exports.RequestCheckTx = exports.RequestBeginBlock = exports.RequestApplySnapshotChunk = exports.Request = exports.LastCommitInfo = exports.EvidenceTypeSDKType = exports.EvidenceType = exports.Evidence = exports.EventAttribute = exports.Event = exports.ConsensusParams = exports.CheckTxTypeSDKType = exports.CheckTxType = exports.BlockParams = void 0;
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
exports.checkTxTypeToJSON = checkTxTypeToJSON;
exports.evidenceTypeFromJSON = evidenceTypeFromJSON;
exports.evidenceTypeToJSON = evidenceTypeToJSON;
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;
var _timestamp = require("../../google/protobuf/timestamp");
var _types = require("../types/types");
var _proof = require("../crypto/proof");
var _params = require("../types/params");
var _keys = require("../crypto/keys");
var _binary = require("../../binary");
var _helpers = require("../../helpers");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var CheckTxType = /*#__PURE__*/function (CheckTxType) {
  CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
  CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
  CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return CheckTxType;
}({});
exports.CheckTxType = CheckTxType;
var CheckTxTypeSDKType = CheckTxType;
exports.CheckTxTypeSDKType = CheckTxTypeSDKType;
function checkTxTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;
    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}
function checkTxTypeToJSON(object) {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";
    case CheckTxType.RECHECK:
      return "RECHECK";
    case CheckTxType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var ResponseOfferSnapshot_Result = /*#__PURE__*/function (ResponseOfferSnapshot_Result) {
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseOfferSnapshot_Result;
}({});
exports.ResponseOfferSnapshot_Result = ResponseOfferSnapshot_Result;
var ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
exports.ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_ResultSDKType;
function responseOfferSnapshot_ResultFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;
    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;
    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;
    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}
function responseOfferSnapshot_ResultToJSON(object) {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";
    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";
    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";
    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";
    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";
    case ResponseOfferSnapshot_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var ResponseApplySnapshotChunk_Result = /*#__PURE__*/function (ResponseApplySnapshotChunk_Result) {
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseApplySnapshotChunk_Result;
}({});
exports.ResponseApplySnapshotChunk_Result = ResponseApplySnapshotChunk_Result;
var ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
exports.ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_ResultSDKType;
function responseApplySnapshotChunk_ResultFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;
    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;
    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}
function responseApplySnapshotChunk_ResultToJSON(object) {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";
    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";
    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";
    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var EvidenceType = /*#__PURE__*/function (EvidenceType) {
  EvidenceType[EvidenceType["UNKNOWN"] = 0] = "UNKNOWN";
  EvidenceType[EvidenceType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
  EvidenceType[EvidenceType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
  EvidenceType[EvidenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return EvidenceType;
}({});
exports.EvidenceType = EvidenceType;
var EvidenceTypeSDKType = EvidenceType;
exports.EvidenceTypeSDKType = EvidenceTypeSDKType;
function evidenceTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return EvidenceType.UNKNOWN;
    case 1:
    case "DUPLICATE_VOTE":
      return EvidenceType.DUPLICATE_VOTE;
    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return EvidenceType.LIGHT_CLIENT_ATTACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EvidenceType.UNRECOGNIZED;
  }
}
function evidenceTypeToJSON(object) {
  switch (object) {
    case EvidenceType.UNKNOWN:
      return "UNKNOWN";
    case EvidenceType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";
    case EvidenceType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";
    case EvidenceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** nondeterministic */

/** nondeterministic */

/** lists available snapshots */

/** lists available snapshots */

/** offers a snapshot to the application */

/** offers a snapshot to the application */

/** loads a snapshot chunk */

/** loads a snapshot chunk */

/** Applies a snapshot chunk */

/** Applies a snapshot chunk */

/** nondeterministic */

/** nondeterministic */

/** nondeterministic */

/** nondeterministic */

/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */

/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */

/** BlockParams contains limits on the block size. */

/** BlockParams contains limits on the block size. */

/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */

/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */

/** EventAttribute is a single key-value pair, associated with an event. */

/** EventAttribute is a single key-value pair, associated with an event. */

/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */

/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */

/** Validator */

/** Validator */

/** ValidatorUpdate */

/** ValidatorUpdate */

/** VoteInfo */

/** VoteInfo */

function createBaseRequest() {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined
  };
}
var Request = {
  typeUrl: "/tendermint.abci.Request",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.setOption !== undefined) {
      RequestSetOption.encode(message.setOption, writer.uint32(34).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.setOption = RequestSetOption.decode(reader, reader.uint32());
          break;
        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32());
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 7:
          message.beginBlock = RequestBeginBlock.decode(reader, reader.uint32());
          break;
        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32());
          break;
        case 9:
          message.deliverTx = RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.endBlock = RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;
        case 12:
          message.listSnapshots = RequestListSnapshots.decode(reader, reader.uint32());
          break;
        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseRequest();
    message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
    message.setOption = object.setOption !== undefined && object.setOption !== null ? RequestSetOption.fromPartial(object.setOption) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? RequestInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? RequestBeginBlock.fromPartial(object.beginBlock) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? RequestCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? RequestDeliverTx.fromPartial(object.deliverTx) : undefined;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? RequestEndBlock.fromPartial(object.endBlock) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? RequestListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? RequestOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      echo: object !== null && object !== void 0 && object.echo ? RequestEcho.fromAmino(object.echo) : undefined,
      flush: object !== null && object !== void 0 && object.flush ? RequestFlush.fromAmino(object.flush) : undefined,
      info: object !== null && object !== void 0 && object.info ? RequestInfo.fromAmino(object.info) : undefined,
      setOption: object !== null && object !== void 0 && object.set_option ? RequestSetOption.fromAmino(object.set_option) : undefined,
      initChain: object !== null && object !== void 0 && object.init_chain ? RequestInitChain.fromAmino(object.init_chain) : undefined,
      query: object !== null && object !== void 0 && object.query ? RequestQuery.fromAmino(object.query) : undefined,
      beginBlock: object !== null && object !== void 0 && object.begin_block ? RequestBeginBlock.fromAmino(object.begin_block) : undefined,
      checkTx: object !== null && object !== void 0 && object.check_tx ? RequestCheckTx.fromAmino(object.check_tx) : undefined,
      deliverTx: object !== null && object !== void 0 && object.deliver_tx ? RequestDeliverTx.fromAmino(object.deliver_tx) : undefined,
      endBlock: object !== null && object !== void 0 && object.end_block ? RequestEndBlock.fromAmino(object.end_block) : undefined,
      commit: object !== null && object !== void 0 && object.commit ? RequestCommit.fromAmino(object.commit) : undefined,
      listSnapshots: object !== null && object !== void 0 && object.list_snapshots ? RequestListSnapshots.fromAmino(object.list_snapshots) : undefined,
      offerSnapshot: object !== null && object !== void 0 && object.offer_snapshot ? RequestOfferSnapshot.fromAmino(object.offer_snapshot) : undefined,
      loadSnapshotChunk: object !== null && object !== void 0 && object.load_snapshot_chunk ? RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk) : undefined,
      applySnapshotChunk: object !== null && object !== void 0 && object.apply_snapshot_chunk ? RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.echo = message.echo ? RequestEcho.toAmino(message.echo) : undefined;
    obj.flush = message.flush ? RequestFlush.toAmino(message.flush) : undefined;
    obj.info = message.info ? RequestInfo.toAmino(message.info) : undefined;
    obj.set_option = message.setOption ? RequestSetOption.toAmino(message.setOption) : undefined;
    obj.init_chain = message.initChain ? RequestInitChain.toAmino(message.initChain) : undefined;
    obj.query = message.query ? RequestQuery.toAmino(message.query) : undefined;
    obj.begin_block = message.beginBlock ? RequestBeginBlock.toAmino(message.beginBlock) : undefined;
    obj.check_tx = message.checkTx ? RequestCheckTx.toAmino(message.checkTx) : undefined;
    obj.deliver_tx = message.deliverTx ? RequestDeliverTx.toAmino(message.deliverTx) : undefined;
    obj.end_block = message.endBlock ? RequestEndBlock.toAmino(message.endBlock) : undefined;
    obj.commit = message.commit ? RequestCommit.toAmino(message.commit) : undefined;
    obj.list_snapshots = message.listSnapshots ? RequestListSnapshots.toAmino(message.listSnapshots) : undefined;
    obj.offer_snapshot = message.offerSnapshot ? RequestOfferSnapshot.toAmino(message.offerSnapshot) : undefined;
    obj.load_snapshot_chunk = message.loadSnapshotChunk ? RequestLoadSnapshotChunk.toAmino(message.loadSnapshotChunk) : undefined;
    obj.apply_snapshot_chunk = message.applySnapshotChunk ? RequestApplySnapshotChunk.toAmino(message.applySnapshotChunk) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Request.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Request.decode(message.value);
  },
  toProto: function toProto(message) {
    return Request.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.Request",
      value: Request.encode(message).finish()
    };
  }
};
exports.Request = Request;
function createBaseRequestEcho() {
  return {
    message: ""
  };
}
var RequestEcho = {
  typeUrl: "/tendermint.abci.RequestEcho",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestEcho();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$message;
    var message = createBaseRequestEcho();
    message.message = (_object$message = object.message) !== null && _object$message !== void 0 ? _object$message : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      message: object.message
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.message = message.message;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestEcho.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestEcho.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestEcho.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestEcho",
      value: RequestEcho.encode(message).finish()
    };
  }
};
exports.RequestEcho = RequestEcho;
function createBaseRequestFlush() {
  return {};
}
var RequestFlush = {
  typeUrl: "/tendermint.abci.RequestFlush",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestFlush();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseRequestFlush();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestFlush.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestFlush.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestFlush.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestFlush",
      value: RequestFlush.encode(message).finish()
    };
  }
};
exports.RequestFlush = RequestFlush;
function createBaseRequestInfo() {
  return {
    version: "",
    blockVersion: BigInt(0),
    p2pVersion: BigInt(0)
  };
}
var RequestInfo = {
  typeUrl: "/tendermint.abci.RequestInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.blockVersion !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockVersion);
    }
    if (message.p2pVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.p2pVersion);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.blockVersion = reader.uint64();
          break;
        case 3:
          message.p2pVersion = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$version;
    var message = createBaseRequestInfo();
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.blockVersion = object.blockVersion !== undefined && object.blockVersion !== null ? BigInt(object.blockVersion.toString()) : BigInt(0);
    message.p2pVersion = object.p2pVersion !== undefined && object.p2pVersion !== null ? BigInt(object.p2pVersion.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      version: object.version,
      blockVersion: BigInt(object.block_version),
      p2pVersion: BigInt(object.p2p_version)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.version = message.version;
    obj.block_version = message.blockVersion ? message.blockVersion.toString() : undefined;
    obj.p2p_version = message.p2pVersion ? message.p2pVersion.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestInfo.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestInfo",
      value: RequestInfo.encode(message).finish()
    };
  }
};
exports.RequestInfo = RequestInfo;
function createBaseRequestSetOption() {
  return {
    key: "",
    value: ""
  };
}
var RequestSetOption = {
  typeUrl: "/tendermint.abci.RequestSetOption",
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
    var message = createBaseRequestSetOption();
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
    var message = createBaseRequestSetOption();
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
    return RequestSetOption.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestSetOption.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestSetOption.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestSetOption",
      value: RequestSetOption.encode(message).finish()
    };
  }
};
exports.RequestSetOption = RequestSetOption;
function createBaseRequestInitChain() {
  return {
    time: new Date(),
    chainId: "",
    consensusParams: ConsensusParams.fromPartial({}),
    validators: [],
    appStateBytes: new Uint8Array(),
    initialHeight: BigInt(0)
  };
}
var RequestInitChain = {
  typeUrl: "/tendermint.abci.RequestInitChain",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.time !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.validators),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }
    if (message.initialHeight !== BigInt(0)) {
      writer.uint32(48).int64(message.initialHeight);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestInitChain();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 5:
          message.appStateBytes = reader.bytes();
          break;
        case 6:
          message.initialHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$time, _object$chainId, _object$validators, _object$appStateBytes;
    var message = createBaseRequestInitChain();
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : undefined;
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(function (e) {
      return ValidatorUpdate.fromPartial(e);
    })) || [];
    message.appStateBytes = (_object$appStateBytes = object.appStateBytes) !== null && _object$appStateBytes !== void 0 ? _object$appStateBytes : new Uint8Array();
    message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? BigInt(object.initialHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      time: object.time,
      chainId: object.chain_id,
      consensusParams: object !== null && object !== void 0 && object.consensus_params ? ConsensusParams.fromAmino(object.consensus_params) : undefined,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return ValidatorUpdate.fromAmino(e);
      }) : [],
      appStateBytes: object.app_state_bytes,
      initialHeight: BigInt(object.initial_height)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.time = message.time;
    obj.chain_id = message.chainId;
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams) : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? ValidatorUpdate.toAmino(e) : undefined;
      });
    } else {
      obj.validators = [];
    }
    obj.app_state_bytes = message.appStateBytes;
    obj.initial_height = message.initialHeight ? message.initialHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestInitChain.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestInitChain.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestInitChain.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestInitChain",
      value: RequestInitChain.encode(message).finish()
    };
  }
};
exports.RequestInitChain = RequestInitChain;
function createBaseRequestQuery() {
  return {
    data: new Uint8Array(),
    path: "",
    height: BigInt(0),
    prove: false
  };
}
var RequestQuery = {
  typeUrl: "/tendermint.abci.RequestQuery",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestQuery();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$data, _object$path, _object$prove;
    var message = createBaseRequestQuery();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.prove = (_object$prove = object.prove) !== null && _object$prove !== void 0 ? _object$prove : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      data: object.data,
      path: object.path,
      height: BigInt(object.height),
      prove: object.prove
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.data = message.data;
    obj.path = message.path;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.prove = message.prove;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestQuery.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestQuery.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestQuery.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestQuery",
      value: RequestQuery.encode(message).finish()
    };
  }
};
exports.RequestQuery = RequestQuery;
function createBaseRequestBeginBlock() {
  return {
    hash: new Uint8Array(),
    header: _types.Header.fromPartial({}),
    lastCommitInfo: LastCommitInfo.fromPartial({}),
    byzantineValidators: []
  };
}
var RequestBeginBlock = {
  typeUrl: "/tendermint.abci.RequestBeginBlock",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.header !== undefined) {
      _types.Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastCommitInfo !== undefined) {
      LastCommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.byzantineValidators),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        Evidence.encode(v, writer.uint32(34).fork()).ldelim();
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
    var message = createBaseRequestBeginBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.header = _types.Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastCommitInfo = LastCommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.byzantineValidators.push(Evidence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$hash, _object$byzantineVali;
    var message = createBaseRequestBeginBlock();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    message.header = object.header !== undefined && object.header !== null ? _types.Header.fromPartial(object.header) : undefined;
    message.lastCommitInfo = object.lastCommitInfo !== undefined && object.lastCommitInfo !== null ? LastCommitInfo.fromPartial(object.lastCommitInfo) : undefined;
    message.byzantineValidators = ((_object$byzantineVali = object.byzantineValidators) === null || _object$byzantineVali === void 0 ? void 0 : _object$byzantineVali.map(function (e) {
      return Evidence.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      hash: object.hash,
      header: object !== null && object !== void 0 && object.header ? _types.Header.fromAmino(object.header) : undefined,
      lastCommitInfo: object !== null && object !== void 0 && object.last_commit_info ? LastCommitInfo.fromAmino(object.last_commit_info) : undefined,
      byzantineValidators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantine_validators) ? object.byzantine_validators.map(function (e) {
        return Evidence.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.hash = message.hash;
    obj.header = message.header ? _types.Header.toAmino(message.header) : undefined;
    obj.last_commit_info = message.lastCommitInfo ? LastCommitInfo.toAmino(message.lastCommitInfo) : undefined;
    if (message.byzantineValidators) {
      obj.byzantine_validators = message.byzantineValidators.map(function (e) {
        return e ? Evidence.toAmino(e) : undefined;
      });
    } else {
      obj.byzantine_validators = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestBeginBlock.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestBeginBlock.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestBeginBlock.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestBeginBlock",
      value: RequestBeginBlock.encode(message).finish()
    };
  }
};
exports.RequestBeginBlock = RequestBeginBlock;
function createBaseRequestCheckTx() {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}
var RequestCheckTx = {
  typeUrl: "/tendermint.abci.RequestCheckTx",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestCheckTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$tx, _object$type;
    var message = createBaseRequestCheckTx();
    message.tx = (_object$tx = object.tx) !== null && _object$tx !== void 0 ? _object$tx : new Uint8Array();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      tx: object.tx,
      type: (0, _helpers.isSet)(object.type) ? checkTxTypeFromJSON(object.type) : -1
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.tx = message.tx;
    obj.type = message.type;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestCheckTx.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestCheckTx.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestCheckTx.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestCheckTx",
      value: RequestCheckTx.encode(message).finish()
    };
  }
};
exports.RequestCheckTx = RequestCheckTx;
function createBaseRequestDeliverTx() {
  return {
    tx: new Uint8Array()
  };
}
var RequestDeliverTx = {
  typeUrl: "/tendermint.abci.RequestDeliverTx",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestDeliverTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$tx2;
    var message = createBaseRequestDeliverTx();
    message.tx = (_object$tx2 = object.tx) !== null && _object$tx2 !== void 0 ? _object$tx2 : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      tx: object.tx
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.tx = message.tx;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestDeliverTx.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestDeliverTx.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestDeliverTx.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestDeliverTx",
      value: RequestDeliverTx.encode(message).finish()
    };
  }
};
exports.RequestDeliverTx = RequestDeliverTx;
function createBaseRequestEndBlock() {
  return {
    height: BigInt(0)
  };
}
var RequestEndBlock = {
  typeUrl: "/tendermint.abci.RequestEndBlock",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestEndBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseRequestEndBlock();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      height: BigInt(object.height)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestEndBlock.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestEndBlock.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestEndBlock.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestEndBlock",
      value: RequestEndBlock.encode(message).finish()
    };
  }
};
exports.RequestEndBlock = RequestEndBlock;
function createBaseRequestCommit() {
  return {};
}
var RequestCommit = {
  typeUrl: "/tendermint.abci.RequestCommit",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestCommit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseRequestCommit();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestCommit.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestCommit.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestCommit.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestCommit",
      value: RequestCommit.encode(message).finish()
    };
  }
};
exports.RequestCommit = RequestCommit;
function createBaseRequestListSnapshots() {
  return {};
}
var RequestListSnapshots = {
  typeUrl: "/tendermint.abci.RequestListSnapshots",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestListSnapshots();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseRequestListSnapshots();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestListSnapshots.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestListSnapshots.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestListSnapshots.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestListSnapshots",
      value: RequestListSnapshots.encode(message).finish()
    };
  }
};
exports.RequestListSnapshots = RequestListSnapshots;
function createBaseRequestOfferSnapshot() {
  return {
    snapshot: Snapshot.fromPartial({}),
    appHash: new Uint8Array()
  };
}
var RequestOfferSnapshot = {
  typeUrl: "/tendermint.abci.RequestOfferSnapshot",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestOfferSnapshot();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 2:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$appHash;
    var message = createBaseRequestOfferSnapshot();
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.appHash = (_object$appHash = object.appHash) !== null && _object$appHash !== void 0 ? _object$appHash : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      snapshot: object !== null && object !== void 0 && object.snapshot ? Snapshot.fromAmino(object.snapshot) : undefined,
      appHash: object.app_hash
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.snapshot = message.snapshot ? Snapshot.toAmino(message.snapshot) : undefined;
    obj.app_hash = message.appHash;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestOfferSnapshot.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestOfferSnapshot.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestOfferSnapshot.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestOfferSnapshot",
      value: RequestOfferSnapshot.encode(message).finish()
    };
  }
};
exports.RequestOfferSnapshot = RequestOfferSnapshot;
function createBaseRequestLoadSnapshotChunk() {
  return {
    height: BigInt(0),
    format: 0,
    chunk: 0
  };
}
var RequestLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestLoadSnapshotChunk();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunk = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$format, _object$chunk;
    var message = createBaseRequestLoadSnapshotChunk();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = (_object$format = object.format) !== null && _object$format !== void 0 ? _object$format : 0;
    message.chunk = (_object$chunk = object.chunk) !== null && _object$chunk !== void 0 ? _object$chunk : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      height: BigInt(object.height),
      format: object.format,
      chunk: object.chunk
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.format = message.format;
    obj.chunk = message.chunk;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestLoadSnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestLoadSnapshotChunk.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
      value: RequestLoadSnapshotChunk.encode(message).finish()
    };
  }
};
exports.RequestLoadSnapshotChunk = RequestLoadSnapshotChunk;
function createBaseRequestApplySnapshotChunk() {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}
var RequestApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestApplySnapshotChunk();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.chunk = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$chunk2, _object$sender;
    var message = createBaseRequestApplySnapshotChunk();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    message.chunk = (_object$chunk2 = object.chunk) !== null && _object$chunk2 !== void 0 ? _object$chunk2 : new Uint8Array();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      index: object.index,
      chunk: object.chunk,
      sender: object.sender
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.index = message.index;
    obj.chunk = message.chunk;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RequestApplySnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RequestApplySnapshotChunk.decode(message.value);
  },
  toProto: function toProto(message) {
    return RequestApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
      value: RequestApplySnapshotChunk.encode(message).finish()
    };
  }
};
exports.RequestApplySnapshotChunk = RequestApplySnapshotChunk;
function createBaseResponse() {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined
  };
}
var Response = {
  typeUrl: "/tendermint.abci.Response",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.exception !== undefined) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.setOption !== undefined) {
      ResponseSetOption.encode(message.setOption, writer.uint32(42).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.setOption = ResponseSetOption.decode(reader, reader.uint32());
          break;
        case 6:
          message.initChain = ResponseInitChain.decode(reader, reader.uint32());
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 8:
          message.beginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        case 9:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.deliverTx = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        case 11:
          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 13:
          message.listSnapshots = ResponseListSnapshots.decode(reader, reader.uint32());
          break;
        case 14:
          message.offerSnapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 15:
          message.loadSnapshotChunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.applySnapshotChunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseResponse();
    message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
    message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
    message.setOption = object.setOption !== undefined && object.setOption !== null ? ResponseSetOption.fromPartial(object.setOption) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? ResponseInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? ResponseBeginBlock.fromPartial(object.beginBlock) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? ResponseCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? ResponseDeliverTx.fromPartial(object.deliverTx) : undefined;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? ResponseEndBlock.fromPartial(object.endBlock) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? ResponseListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      exception: object !== null && object !== void 0 && object.exception ? ResponseException.fromAmino(object.exception) : undefined,
      echo: object !== null && object !== void 0 && object.echo ? ResponseEcho.fromAmino(object.echo) : undefined,
      flush: object !== null && object !== void 0 && object.flush ? ResponseFlush.fromAmino(object.flush) : undefined,
      info: object !== null && object !== void 0 && object.info ? ResponseInfo.fromAmino(object.info) : undefined,
      setOption: object !== null && object !== void 0 && object.set_option ? ResponseSetOption.fromAmino(object.set_option) : undefined,
      initChain: object !== null && object !== void 0 && object.init_chain ? ResponseInitChain.fromAmino(object.init_chain) : undefined,
      query: object !== null && object !== void 0 && object.query ? ResponseQuery.fromAmino(object.query) : undefined,
      beginBlock: object !== null && object !== void 0 && object.begin_block ? ResponseBeginBlock.fromAmino(object.begin_block) : undefined,
      checkTx: object !== null && object !== void 0 && object.check_tx ? ResponseCheckTx.fromAmino(object.check_tx) : undefined,
      deliverTx: object !== null && object !== void 0 && object.deliver_tx ? ResponseDeliverTx.fromAmino(object.deliver_tx) : undefined,
      endBlock: object !== null && object !== void 0 && object.end_block ? ResponseEndBlock.fromAmino(object.end_block) : undefined,
      commit: object !== null && object !== void 0 && object.commit ? ResponseCommit.fromAmino(object.commit) : undefined,
      listSnapshots: object !== null && object !== void 0 && object.list_snapshots ? ResponseListSnapshots.fromAmino(object.list_snapshots) : undefined,
      offerSnapshot: object !== null && object !== void 0 && object.offer_snapshot ? ResponseOfferSnapshot.fromAmino(object.offer_snapshot) : undefined,
      loadSnapshotChunk: object !== null && object !== void 0 && object.load_snapshot_chunk ? ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk) : undefined,
      applySnapshotChunk: object !== null && object !== void 0 && object.apply_snapshot_chunk ? ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.exception = message.exception ? ResponseException.toAmino(message.exception) : undefined;
    obj.echo = message.echo ? ResponseEcho.toAmino(message.echo) : undefined;
    obj.flush = message.flush ? ResponseFlush.toAmino(message.flush) : undefined;
    obj.info = message.info ? ResponseInfo.toAmino(message.info) : undefined;
    obj.set_option = message.setOption ? ResponseSetOption.toAmino(message.setOption) : undefined;
    obj.init_chain = message.initChain ? ResponseInitChain.toAmino(message.initChain) : undefined;
    obj.query = message.query ? ResponseQuery.toAmino(message.query) : undefined;
    obj.begin_block = message.beginBlock ? ResponseBeginBlock.toAmino(message.beginBlock) : undefined;
    obj.check_tx = message.checkTx ? ResponseCheckTx.toAmino(message.checkTx) : undefined;
    obj.deliver_tx = message.deliverTx ? ResponseDeliverTx.toAmino(message.deliverTx) : undefined;
    obj.end_block = message.endBlock ? ResponseEndBlock.toAmino(message.endBlock) : undefined;
    obj.commit = message.commit ? ResponseCommit.toAmino(message.commit) : undefined;
    obj.list_snapshots = message.listSnapshots ? ResponseListSnapshots.toAmino(message.listSnapshots) : undefined;
    obj.offer_snapshot = message.offerSnapshot ? ResponseOfferSnapshot.toAmino(message.offerSnapshot) : undefined;
    obj.load_snapshot_chunk = message.loadSnapshotChunk ? ResponseLoadSnapshotChunk.toAmino(message.loadSnapshotChunk) : undefined;
    obj.apply_snapshot_chunk = message.applySnapshotChunk ? ResponseApplySnapshotChunk.toAmino(message.applySnapshotChunk) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Response.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Response.decode(message.value);
  },
  toProto: function toProto(message) {
    return Response.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.Response",
      value: Response.encode(message).finish()
    };
  }
};
exports.Response = Response;
function createBaseResponseException() {
  return {
    error: ""
  };
}
var ResponseException = {
  typeUrl: "/tendermint.abci.ResponseException",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseException();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$error;
    var message = createBaseResponseException();
    message.error = (_object$error = object.error) !== null && _object$error !== void 0 ? _object$error : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      error: object.error
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseException.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseException.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseException.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseException",
      value: ResponseException.encode(message).finish()
    };
  }
};
exports.ResponseException = ResponseException;
function createBaseResponseEcho() {
  return {
    message: ""
  };
}
var ResponseEcho = {
  typeUrl: "/tendermint.abci.ResponseEcho",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseEcho();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$message2;
    var message = createBaseResponseEcho();
    message.message = (_object$message2 = object.message) !== null && _object$message2 !== void 0 ? _object$message2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      message: object.message
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.message = message.message;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseEcho.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseEcho.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseEcho.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseEcho",
      value: ResponseEcho.encode(message).finish()
    };
  }
};
exports.ResponseEcho = ResponseEcho;
function createBaseResponseFlush() {
  return {};
}
var ResponseFlush = {
  typeUrl: "/tendermint.abci.ResponseFlush",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseFlush();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseResponseFlush();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseFlush.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseFlush.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseFlush.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseFlush",
      value: ResponseFlush.encode(message).finish()
    };
  }
};
exports.ResponseFlush = ResponseFlush;
function createBaseResponseInfo() {
  return {
    data: "",
    version: "",
    appVersion: BigInt(0),
    lastBlockHeight: BigInt(0),
    lastBlockAppHash: new Uint8Array()
  };
}
var ResponseInfo = {
  typeUrl: "/tendermint.abci.ResponseInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.appVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.appVersion);
    }
    if (message.lastBlockHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }
    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.appVersion = reader.uint64();
          break;
        case 4:
          message.lastBlockHeight = reader.int64();
          break;
        case 5:
          message.lastBlockAppHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$data2, _object$version2, _object$lastBlockAppH;
    var message = createBaseResponseInfo();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : "";
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? BigInt(object.lastBlockHeight.toString()) : BigInt(0);
    message.lastBlockAppHash = (_object$lastBlockAppH = object.lastBlockAppHash) !== null && _object$lastBlockAppH !== void 0 ? _object$lastBlockAppH : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      data: object.data,
      version: object.version,
      appVersion: BigInt(object.app_version),
      lastBlockHeight: BigInt(object.last_block_height),
      lastBlockAppHash: object.last_block_app_hash
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.data = message.data;
    obj.version = message.version;
    obj.app_version = message.appVersion ? message.appVersion.toString() : undefined;
    obj.last_block_height = message.lastBlockHeight ? message.lastBlockHeight.toString() : undefined;
    obj.last_block_app_hash = message.lastBlockAppHash;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseInfo.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseInfo",
      value: ResponseInfo.encode(message).finish()
    };
  }
};
exports.ResponseInfo = ResponseInfo;
function createBaseResponseSetOption() {
  return {
    code: 0,
    log: "",
    info: ""
  };
}
var ResponseSetOption = {
  typeUrl: "/tendermint.abci.ResponseSetOption",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseSetOption();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$code, _object$log, _object$info;
    var message = createBaseResponseSetOption();
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      code: object.code,
      log: object.log,
      info: object.info
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.code = message.code;
    obj.log = message.log;
    obj.info = message.info;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseSetOption.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseSetOption.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseSetOption.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseSetOption",
      value: ResponseSetOption.encode(message).finish()
    };
  }
};
exports.ResponseSetOption = ResponseSetOption;
function createBaseResponseInitChain() {
  return {
    consensusParams: ConsensusParams.fromPartial({}),
    validators: [],
    appHash: new Uint8Array()
  };
}
var ResponseInitChain = {
  typeUrl: "/tendermint.abci.ResponseInitChain",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    var _iterator3 = _createForOfIteratorHelper(message.validators),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseInitChain();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 3:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validators2, _object$appHash2;
    var message = createBaseResponseInitChain();
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map(function (e) {
      return ValidatorUpdate.fromPartial(e);
    })) || [];
    message.appHash = (_object$appHash2 = object.appHash) !== null && _object$appHash2 !== void 0 ? _object$appHash2 : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      consensusParams: object !== null && object !== void 0 && object.consensus_params ? ConsensusParams.fromAmino(object.consensus_params) : undefined,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return ValidatorUpdate.fromAmino(e);
      }) : [],
      appHash: object.app_hash
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams) : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? ValidatorUpdate.toAmino(e) : undefined;
      });
    } else {
      obj.validators = [];
    }
    obj.app_hash = message.appHash;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseInitChain.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseInitChain.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseInitChain.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseInitChain",
      value: ResponseInitChain.encode(message).finish()
    };
  }
};
exports.ResponseInitChain = ResponseInitChain;
function createBaseResponseQuery() {
  return {
    code: 0,
    log: "",
    info: "",
    index: BigInt(0),
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: _proof.ProofOps.fromPartial({}),
    height: BigInt(0),
    codespace: ""
  };
}
var ResponseQuery = {
  typeUrl: "/tendermint.abci.ResponseQuery",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      _proof.ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseQuery();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = _proof.ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$code2, _object$log2, _object$info2, _object$key2, _object$value2, _object$codespace;
    var message = createBaseResponseQuery();
    message.code = (_object$code2 = object.code) !== null && _object$code2 !== void 0 ? _object$code2 : 0;
    message.log = (_object$log2 = object.log) !== null && _object$log2 !== void 0 ? _object$log2 : "";
    message.info = (_object$info2 = object.info) !== null && _object$info2 !== void 0 ? _object$info2 : "";
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? _proof.ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      code: object.code,
      log: object.log,
      info: object.info,
      index: BigInt(object.index),
      key: object.key,
      value: object.value,
      proofOps: object !== null && object !== void 0 && object.proof_ops ? _proof.ProofOps.fromAmino(object.proof_ops) : undefined,
      height: BigInt(object.height),
      codespace: object.codespace
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.code = message.code;
    obj.log = message.log;
    obj.info = message.info;
    obj.index = message.index ? message.index.toString() : undefined;
    obj.key = message.key;
    obj.value = message.value;
    obj.proof_ops = message.proofOps ? _proof.ProofOps.toAmino(message.proofOps) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.codespace = message.codespace;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseQuery.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseQuery.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseQuery.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseQuery",
      value: ResponseQuery.encode(message).finish()
    };
  }
};
exports.ResponseQuery = ResponseQuery;
function createBaseResponseBeginBlock() {
  return {
    events: []
  };
}
var ResponseBeginBlock = {
  typeUrl: "/tendermint.abci.ResponseBeginBlock",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator4 = _createForOfIteratorHelper(message.events),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        Event.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseResponseBeginBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$events;
    var message = createBaseResponseBeginBlock();
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(function (e) {
      return Event.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return Event.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? Event.toAmino(e) : undefined;
      });
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseBeginBlock.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseBeginBlock.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseBeginBlock.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseBeginBlock",
      value: ResponseBeginBlock.encode(message).finish()
    };
  }
};
exports.ResponseBeginBlock = ResponseBeginBlock;
function createBaseResponseCheckTx() {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: ""
  };
}
var ResponseCheckTx = {
  typeUrl: "/tendermint.abci.ResponseCheckTx",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    var _iterator5 = _createForOfIteratorHelper(message.events),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        Event.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$code3, _object$data3, _object$log3, _object$info3, _object$events2, _object$codespace2;
    var message = createBaseResponseCheckTx();
    message.code = (_object$code3 = object.code) !== null && _object$code3 !== void 0 ? _object$code3 : 0;
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    message.log = (_object$log3 = object.log) !== null && _object$log3 !== void 0 ? _object$log3 : "";
    message.info = (_object$info3 = object.info) !== null && _object$info3 !== void 0 ? _object$info3 : "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.events = ((_object$events2 = object.events) === null || _object$events2 === void 0 ? void 0 : _object$events2.map(function (e) {
      return Event.fromPartial(e);
    })) || [];
    message.codespace = (_object$codespace2 = object.codespace) !== null && _object$codespace2 !== void 0 ? _object$codespace2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      code: object.code,
      data: object.data,
      log: object.log,
      info: object.info,
      gasWanted: BigInt(object.gas_wanted),
      gasUsed: BigInt(object.gas_used),
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return Event.fromAmino(e);
      }) : [],
      codespace: object.codespace
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.code = message.code;
    obj.data = message.data;
    obj.log = message.log;
    obj.info = message.info;
    obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? Event.toAmino(e) : undefined;
      });
    } else {
      obj.events = [];
    }
    obj.codespace = message.codespace;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseCheckTx.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseCheckTx.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseCheckTx.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseCheckTx",
      value: ResponseCheckTx.encode(message).finish()
    };
  }
};
exports.ResponseCheckTx = ResponseCheckTx;
function createBaseResponseDeliverTx() {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: ""
  };
}
var ResponseDeliverTx = {
  typeUrl: "/tendermint.abci.ResponseDeliverTx",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    var _iterator6 = _createForOfIteratorHelper(message.events),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        Event.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseDeliverTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$code4, _object$data4, _object$log4, _object$info4, _object$events3, _object$codespace3;
    var message = createBaseResponseDeliverTx();
    message.code = (_object$code4 = object.code) !== null && _object$code4 !== void 0 ? _object$code4 : 0;
    message.data = (_object$data4 = object.data) !== null && _object$data4 !== void 0 ? _object$data4 : new Uint8Array();
    message.log = (_object$log4 = object.log) !== null && _object$log4 !== void 0 ? _object$log4 : "";
    message.info = (_object$info4 = object.info) !== null && _object$info4 !== void 0 ? _object$info4 : "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.events = ((_object$events3 = object.events) === null || _object$events3 === void 0 ? void 0 : _object$events3.map(function (e) {
      return Event.fromPartial(e);
    })) || [];
    message.codespace = (_object$codespace3 = object.codespace) !== null && _object$codespace3 !== void 0 ? _object$codespace3 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      code: object.code,
      data: object.data,
      log: object.log,
      info: object.info,
      gasWanted: BigInt(object.gas_wanted),
      gasUsed: BigInt(object.gas_used),
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return Event.fromAmino(e);
      }) : [],
      codespace: object.codespace
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.code = message.code;
    obj.data = message.data;
    obj.log = message.log;
    obj.info = message.info;
    obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
    obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? Event.toAmino(e) : undefined;
      });
    } else {
      obj.events = [];
    }
    obj.codespace = message.codespace;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseDeliverTx.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseDeliverTx.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseDeliverTx.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseDeliverTx",
      value: ResponseDeliverTx.encode(message).finish()
    };
  }
};
exports.ResponseDeliverTx = ResponseDeliverTx;
function createBaseResponseEndBlock() {
  return {
    validatorUpdates: [],
    consensusParamUpdates: ConsensusParams.fromPartial({}),
    events: []
  };
}
var ResponseEndBlock = {
  typeUrl: "/tendermint.abci.ResponseEndBlock",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator7 = _createForOfIteratorHelper(message.validatorUpdates),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (message.consensusParamUpdates !== undefined) {
      ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
    }
    var _iterator8 = _createForOfIteratorHelper(message.events),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _v = _step8.value;
        Event.encode(_v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseResponseEndBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.consensusParamUpdates = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorUpda, _object$events4;
    var message = createBaseResponseEndBlock();
    message.validatorUpdates = ((_object$validatorUpda = object.validatorUpdates) === null || _object$validatorUpda === void 0 ? void 0 : _object$validatorUpda.map(function (e) {
      return ValidatorUpdate.fromPartial(e);
    })) || [];
    message.consensusParamUpdates = object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null ? ConsensusParams.fromPartial(object.consensusParamUpdates) : undefined;
    message.events = ((_object$events4 = object.events) === null || _object$events4 === void 0 ? void 0 : _object$events4.map(function (e) {
      return Event.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_updates) ? object.validator_updates.map(function (e) {
        return ValidatorUpdate.fromAmino(e);
      }) : [],
      consensusParamUpdates: object !== null && object !== void 0 && object.consensus_param_updates ? ConsensusParams.fromAmino(object.consensus_param_updates) : undefined,
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return Event.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.validatorUpdates) {
      obj.validator_updates = message.validatorUpdates.map(function (e) {
        return e ? ValidatorUpdate.toAmino(e) : undefined;
      });
    } else {
      obj.validator_updates = [];
    }
    obj.consensus_param_updates = message.consensusParamUpdates ? ConsensusParams.toAmino(message.consensusParamUpdates) : undefined;
    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? Event.toAmino(e) : undefined;
      });
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseEndBlock.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseEndBlock.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseEndBlock.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseEndBlock",
      value: ResponseEndBlock.encode(message).finish()
    };
  }
};
exports.ResponseEndBlock = ResponseEndBlock;
function createBaseResponseCommit() {
  return {
    data: new Uint8Array(),
    retainHeight: BigInt(0)
  };
}
var ResponseCommit = {
  typeUrl: "/tendermint.abci.ResponseCommit",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.retainHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.retainHeight);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseCommit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.retainHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$data5;
    var message = createBaseResponseCommit();
    message.data = (_object$data5 = object.data) !== null && _object$data5 !== void 0 ? _object$data5 : new Uint8Array();
    message.retainHeight = object.retainHeight !== undefined && object.retainHeight !== null ? BigInt(object.retainHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      data: object.data,
      retainHeight: BigInt(object.retain_height)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.data = message.data;
    obj.retain_height = message.retainHeight ? message.retainHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseCommit.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseCommit.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseCommit.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseCommit",
      value: ResponseCommit.encode(message).finish()
    };
  }
};
exports.ResponseCommit = ResponseCommit;
function createBaseResponseListSnapshots() {
  return {
    snapshots: []
  };
}
var ResponseListSnapshots = {
  typeUrl: "/tendermint.abci.ResponseListSnapshots",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator9 = _createForOfIteratorHelper(message.snapshots),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseResponseListSnapshots();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$snapshots;
    var message = createBaseResponseListSnapshots();
    message.snapshots = ((_object$snapshots = object.snapshots) === null || _object$snapshots === void 0 ? void 0 : _object$snapshots.map(function (e) {
      return Snapshot.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      snapshots: Array.isArray(object === null || object === void 0 ? void 0 : object.snapshots) ? object.snapshots.map(function (e) {
        return Snapshot.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map(function (e) {
        return e ? Snapshot.toAmino(e) : undefined;
      });
    } else {
      obj.snapshots = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseListSnapshots.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseListSnapshots.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseListSnapshots.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseListSnapshots",
      value: ResponseListSnapshots.encode(message).finish()
    };
  }
};
exports.ResponseListSnapshots = ResponseListSnapshots;
function createBaseResponseOfferSnapshot() {
  return {
    result: 0
  };
}
var ResponseOfferSnapshot = {
  typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseOfferSnapshot();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$result;
    var message = createBaseResponseOfferSnapshot();
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      result: (0, _helpers.isSet)(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.result = message.result;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseOfferSnapshot.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseOfferSnapshot.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseOfferSnapshot.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
      value: ResponseOfferSnapshot.encode(message).finish()
    };
  }
};
exports.ResponseOfferSnapshot = ResponseOfferSnapshot;
function createBaseResponseLoadSnapshotChunk() {
  return {
    chunk: new Uint8Array()
  };
}
var ResponseLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseLoadSnapshotChunk();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$chunk3;
    var message = createBaseResponseLoadSnapshotChunk();
    message.chunk = (_object$chunk3 = object.chunk) !== null && _object$chunk3 !== void 0 ? _object$chunk3 : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      chunk: object.chunk
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.chunk = message.chunk;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseLoadSnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseLoadSnapshotChunk.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
      value: ResponseLoadSnapshotChunk.encode(message).finish()
    };
  }
};
exports.ResponseLoadSnapshotChunk = ResponseLoadSnapshotChunk;
function createBaseResponseApplySnapshotChunk() {
  return {
    result: 0,
    refetchChunks: [],
    rejectSenders: []
  };
}
var ResponseApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    var _iterator10 = _createForOfIteratorHelper(message.refetchChunks),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var v = _step10.value;
        writer.uint32(v);
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    writer.ldelim();
    var _iterator11 = _createForOfIteratorHelper(message.rejectSenders),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _v2 = _step11.value;
        writer.uint32(26).string(_v2);
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseApplySnapshotChunk();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.refetchChunks.push(reader.uint32());
            }
          } else {
            message.refetchChunks.push(reader.uint32());
          }
          break;
        case 3:
          message.rejectSenders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$result2, _object$refetchChunks, _object$rejectSenders;
    var message = createBaseResponseApplySnapshotChunk();
    message.result = (_object$result2 = object.result) !== null && _object$result2 !== void 0 ? _object$result2 : 0;
    message.refetchChunks = ((_object$refetchChunks = object.refetchChunks) === null || _object$refetchChunks === void 0 ? void 0 : _object$refetchChunks.map(function (e) {
      return e;
    })) || [];
    message.rejectSenders = ((_object$rejectSenders = object.rejectSenders) === null || _object$rejectSenders === void 0 ? void 0 : _object$rejectSenders.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      result: (0, _helpers.isSet)(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
      refetchChunks: Array.isArray(object === null || object === void 0 ? void 0 : object.refetch_chunks) ? object.refetch_chunks.map(function (e) {
        return e;
      }) : [],
      rejectSenders: Array.isArray(object === null || object === void 0 ? void 0 : object.reject_senders) ? object.reject_senders.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.result = message.result;
    if (message.refetchChunks) {
      obj.refetch_chunks = message.refetchChunks.map(function (e) {
        return e;
      });
    } else {
      obj.refetch_chunks = [];
    }
    if (message.rejectSenders) {
      obj.reject_senders = message.rejectSenders.map(function (e) {
        return e;
      });
    } else {
      obj.reject_senders = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseApplySnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseApplySnapshotChunk.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
      value: ResponseApplySnapshotChunk.encode(message).finish()
    };
  }
};
exports.ResponseApplySnapshotChunk = ResponseApplySnapshotChunk;
function createBaseConsensusParams() {
  return {
    block: BlockParams.fromPartial({}),
    evidence: _params.EvidenceParams.fromPartial({}),
    validator: _params.ValidatorParams.fromPartial({}),
    version: _params.VersionParams.fromPartial({})
  };
}
var ConsensusParams = {
  typeUrl: "/tendermint.abci.ConsensusParams",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      _params.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      _params.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      _params.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConsensusParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = _params.EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = _params.ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = _params.VersionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? _params.EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? _params.ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? _params.VersionParams.fromPartial(object.version) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      block: object !== null && object !== void 0 && object.block ? BlockParams.fromAmino(object.block) : undefined,
      evidence: object !== null && object !== void 0 && object.evidence ? _params.EvidenceParams.fromAmino(object.evidence) : undefined,
      validator: object !== null && object !== void 0 && object.validator ? _params.ValidatorParams.fromAmino(object.validator) : undefined,
      version: object !== null && object !== void 0 && object.version ? _params.VersionParams.fromAmino(object.version) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.block = message.block ? BlockParams.toAmino(message.block) : undefined;
    obj.evidence = message.evidence ? _params.EvidenceParams.toAmino(message.evidence) : undefined;
    obj.validator = message.validator ? _params.ValidatorParams.toAmino(message.validator) : undefined;
    obj.version = message.version ? _params.VersionParams.toAmino(message.version) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ConsensusParams.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ConsensusParams.decode(message.value);
  },
  toProto: function toProto(message) {
    return ConsensusParams.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ConsensusParams",
      value: ConsensusParams.encode(message).finish()
    };
  }
};
exports.ConsensusParams = ConsensusParams;
function createBaseBlockParams() {
  return {
    maxBytes: BigInt(0),
    maxGas: BigInt(0)
  };
}
var BlockParams = {
  typeUrl: "/tendermint.abci.BlockParams",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.maxBytes !== BigInt(0)) {
      writer.uint32(8).int64(message.maxBytes);
    }
    if (message.maxGas !== BigInt(0)) {
      writer.uint32(16).int64(message.maxGas);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBytes = reader.int64();
          break;
        case 2:
          message.maxGas = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockParams();
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
    message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      maxBytes: BigInt(object.max_bytes),
      maxGas: BigInt(object.max_gas)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
    obj.max_gas = message.maxGas ? message.maxGas.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return BlockParams.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return BlockParams.decode(message.value);
  },
  toProto: function toProto(message) {
    return BlockParams.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.BlockParams",
      value: BlockParams.encode(message).finish()
    };
  }
};
exports.BlockParams = BlockParams;
function createBaseLastCommitInfo() {
  return {
    round: 0,
    votes: []
  };
}
var LastCommitInfo = {
  typeUrl: "/tendermint.abci.LastCommitInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    var _iterator12 = _createForOfIteratorHelper(message.votes),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var v = _step12.value;
        VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLastCommitInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$round, _object$votes;
    var message = createBaseLastCommitInfo();
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(function (e) {
      return VoteInfo.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      round: object.round,
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) {
        return VoteInfo.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.round = message.round;
    if (message.votes) {
      obj.votes = message.votes.map(function (e) {
        return e ? VoteInfo.toAmino(e) : undefined;
      });
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return LastCommitInfo.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return LastCommitInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return LastCommitInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.LastCommitInfo",
      value: LastCommitInfo.encode(message).finish()
    };
  }
};
exports.LastCommitInfo = LastCommitInfo;
function createBaseEvent() {
  return {
    type: "",
    attributes: []
  };
}
var Event = {
  typeUrl: "/tendermint.abci.Event",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    var _iterator13 = _createForOfIteratorHelper(message.attributes),
      _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var v = _step13.value;
        EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$type2, _object$attributes;
    var message = createBaseEvent();
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : "";
    message.attributes = ((_object$attributes = object.attributes) === null || _object$attributes === void 0 ? void 0 : _object$attributes.map(function (e) {
      return EventAttribute.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      type: object.type,
      attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes) ? object.attributes.map(function (e) {
        return EventAttribute.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.type = message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map(function (e) {
        return e ? EventAttribute.toAmino(e) : undefined;
      });
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Event.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Event.decode(message.value);
  },
  toProto: function toProto(message) {
    return Event.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.Event",
      value: Event.encode(message).finish()
    };
  }
};
exports.Event = Event;
function createBaseEventAttribute() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    index: false
  };
}
var EventAttribute = {
  typeUrl: "/tendermint.abci.EventAttribute",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventAttribute();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.index = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$key3, _object$value3, _object$index2;
    var message = createBaseEventAttribute();
    message.key = (_object$key3 = object.key) !== null && _object$key3 !== void 0 ? _object$key3 : new Uint8Array();
    message.value = (_object$value3 = object.value) !== null && _object$value3 !== void 0 ? _object$value3 : new Uint8Array();
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      key: object.key,
      value: object.value,
      index: object.index
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.key = message.key;
    obj.value = message.value;
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EventAttribute.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EventAttribute.decode(message.value);
  },
  toProto: function toProto(message) {
    return EventAttribute.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.EventAttribute",
      value: EventAttribute.encode(message).finish()
    };
  }
};
exports.EventAttribute = EventAttribute;
function createBaseTxResult() {
  return {
    height: BigInt(0),
    index: 0,
    tx: new Uint8Array(),
    result: ResponseDeliverTx.fromPartial({})
  };
}
var TxResult = {
  typeUrl: "/tendermint.abci.TxResult",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== undefined) {
      ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxResult();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.tx = reader.bytes();
          break;
        case 4:
          message.result = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index3, _object$tx3;
    var message = createBaseTxResult();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.index = (_object$index3 = object.index) !== null && _object$index3 !== void 0 ? _object$index3 : 0;
    message.tx = (_object$tx3 = object.tx) !== null && _object$tx3 !== void 0 ? _object$tx3 : new Uint8Array();
    message.result = object.result !== undefined && object.result !== null ? ResponseDeliverTx.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      height: BigInt(object.height),
      index: object.index,
      tx: object.tx,
      result: object !== null && object !== void 0 && object.result ? ResponseDeliverTx.fromAmino(object.result) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.index = message.index;
    obj.tx = message.tx;
    obj.result = message.result ? ResponseDeliverTx.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return TxResult.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return TxResult.decode(message.value);
  },
  toProto: function toProto(message) {
    return TxResult.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.TxResult",
      value: TxResult.encode(message).finish()
    };
  }
};
exports.TxResult = TxResult;
function createBaseValidator() {
  return {
    address: new Uint8Array(),
    power: BigInt(0)
  };
}
var Validator = {
  typeUrl: "/tendermint.abci.Validator",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : new Uint8Array();
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      address: object.address,
      power: BigInt(object.power)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address = message.address;
    obj.power = message.power ? message.power.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Validator.decode(message.value);
  },
  toProto: function toProto(message) {
    return Validator.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
exports.Validator = Validator;
function createBaseValidatorUpdate() {
  return {
    pubKey: _keys.PublicKey.fromPartial({}),
    power: BigInt(0)
  };
}
var ValidatorUpdate = {
  typeUrl: "/tendermint.abci.ValidatorUpdate",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.pubKey !== undefined) {
      _keys.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = _keys.PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseValidatorUpdate();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? _keys.PublicKey.fromPartial(object.pubKey) : undefined;
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      pubKey: object !== null && object !== void 0 && object.pub_key ? _keys.PublicKey.fromAmino(object.pub_key) : undefined,
      power: BigInt(object.power)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.pub_key = message.pubKey ? _keys.PublicKey.toAmino(message.pubKey) : undefined;
    obj.power = message.power ? message.power.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorUpdate.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorUpdate.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorUpdate.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.ValidatorUpdate",
      value: ValidatorUpdate.encode(message).finish()
    };
  }
};
exports.ValidatorUpdate = ValidatorUpdate;
function createBaseVoteInfo() {
  return {
    validator: Validator.fromPartial({}),
    signedLastBlock: false
  };
}
var VoteInfo = {
  typeUrl: "/tendermint.abci.VoteInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVoteInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.signedLastBlock = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$signedLastBlo;
    var message = createBaseVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.signedLastBlock = (_object$signedLastBlo = object.signedLastBlock) !== null && _object$signedLastBlo !== void 0 ? _object$signedLastBlo : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validator: object !== null && object !== void 0 && object.validator ? Validator.fromAmino(object.validator) : undefined,
      signedLastBlock: object.signed_last_block
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.signed_last_block = message.signedLastBlock;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return VoteInfo.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return VoteInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return VoteInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.VoteInfo",
      value: VoteInfo.encode(message).finish()
    };
  }
};
exports.VoteInfo = VoteInfo;
function createBaseEvidence() {
  return {
    type: 0,
    validator: Validator.fromPartial({}),
    height: BigInt(0),
    time: new Date(),
    totalVotingPower: BigInt(0)
  };
}
var Evidence = {
  typeUrl: "/tendermint.abci.Evidence",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(40).int64(message.totalVotingPower);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEvidence();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalVotingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$type3, _object$time2;
    var message = createBaseEvidence();
    message.type = (_object$type3 = object.type) !== null && _object$type3 !== void 0 ? _object$type3 : 0;
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = (_object$time2 = object.time) !== null && _object$time2 !== void 0 ? _object$time2 : undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      type: (0, _helpers.isSet)(object.type) ? evidenceTypeFromJSON(object.type) : -1,
      validator: object !== null && object !== void 0 && object.validator ? Validator.fromAmino(object.validator) : undefined,
      height: BigInt(object.height),
      time: object.time,
      totalVotingPower: BigInt(object.total_voting_power)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.type = message.type;
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.time = message.time;
    obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Evidence.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Evidence.decode(message.value);
  },
  toProto: function toProto(message) {
    return Evidence.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.Evidence",
      value: Evidence.encode(message).finish()
    };
  }
};
exports.Evidence = Evidence;
function createBaseSnapshot() {
  return {
    height: BigInt(0),
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
var Snapshot = {
  typeUrl: "/tendermint.abci.Snapshot",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSnapshot();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$format2, _object$chunks, _object$hash2, _object$metadata;
    var message = createBaseSnapshot();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = (_object$format2 = object.format) !== null && _object$format2 !== void 0 ? _object$format2 : 0;
    message.chunks = (_object$chunks = object.chunks) !== null && _object$chunks !== void 0 ? _object$chunks : 0;
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      height: BigInt(object.height),
      format: object.format,
      chunks: object.chunks,
      hash: object.hash,
      metadata: object.metadata
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.format = message.format;
    obj.chunks = message.chunks;
    obj.hash = message.hash;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Snapshot.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Snapshot.decode(message.value);
  },
  toProto: function toProto(message) {
    return Snapshot.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.abci.Snapshot",
      value: Snapshot.encode(message).finish()
    };
  }
};
exports.Snapshot = Snapshot;