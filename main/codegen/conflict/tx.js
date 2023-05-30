"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgDetectionResponse = exports.MsgDetection = exports.MsgConflictVoteRevealResponse = exports.MsgConflictVoteReveal = exports.MsgConflictVoteCommitResponse = exports.MsgConflictVoteCommit = void 0;
var _conflict_data = require("./conflict_data");
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** TODO:: change coin type to another proto (define proto in another file int this directory) */

/** TODO:: change coin type to another proto (define proto in another file int this directory) */

function createBaseMsgDetection() {
  return {
    creator: "",
    finalizationConflict: undefined,
    responseConflict: undefined,
    sameProviderConflict: undefined
  };
}
var MsgDetection = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.finalizationConflict !== undefined) {
      _conflict_data.FinalizationConflict.encode(message.finalizationConflict, writer.uint32(18).fork()).ldelim();
    }
    if (message.responseConflict !== undefined) {
      _conflict_data.ResponseConflict.encode(message.responseConflict, writer.uint32(26).fork()).ldelim();
    }
    if (message.sameProviderConflict !== undefined) {
      _conflict_data.FinalizationConflict.encode(message.sameProviderConflict, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDetection();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.finalizationConflict = _conflict_data.FinalizationConflict.decode(reader, reader.uint32());
          break;
        case 3:
          message.responseConflict = _conflict_data.ResponseConflict.decode(reader, reader.uint32());
          break;
        case 4:
          message.sameProviderConflict = _conflict_data.FinalizationConflict.decode(reader, reader.uint32());
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
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      finalizationConflict: (0, _helpers.isSet)(object.finalizationConflict) ? _conflict_data.FinalizationConflict.fromJSON(object.finalizationConflict) : undefined,
      responseConflict: (0, _helpers.isSet)(object.responseConflict) ? _conflict_data.ResponseConflict.fromJSON(object.responseConflict) : undefined,
      sameProviderConflict: (0, _helpers.isSet)(object.sameProviderConflict) ? _conflict_data.FinalizationConflict.fromJSON(object.sameProviderConflict) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.finalizationConflict !== undefined && (obj.finalizationConflict = message.finalizationConflict ? _conflict_data.FinalizationConflict.toJSON(message.finalizationConflict) : undefined);
    message.responseConflict !== undefined && (obj.responseConflict = message.responseConflict ? _conflict_data.ResponseConflict.toJSON(message.responseConflict) : undefined);
    message.sameProviderConflict !== undefined && (obj.sameProviderConflict = message.sameProviderConflict ? _conflict_data.FinalizationConflict.toJSON(message.sameProviderConflict) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator;
    var message = createBaseMsgDetection();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.finalizationConflict = object.finalizationConflict !== undefined && object.finalizationConflict !== null ? _conflict_data.FinalizationConflict.fromPartial(object.finalizationConflict) : undefined;
    message.responseConflict = object.responseConflict !== undefined && object.responseConflict !== null ? _conflict_data.ResponseConflict.fromPartial(object.responseConflict) : undefined;
    message.sameProviderConflict = object.sameProviderConflict !== undefined && object.sameProviderConflict !== null ? _conflict_data.FinalizationConflict.fromPartial(object.sameProviderConflict) : undefined;
    return message;
  }
};
exports.MsgDetection = MsgDetection;
function createBaseMsgDetectionResponse() {
  return {};
}
var MsgDetectionResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDetectionResponse();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgDetectionResponse();
    return message;
  }
};
exports.MsgDetectionResponse = MsgDetectionResponse;
function createBaseMsgConflictVoteCommit() {
  return {
    creator: "",
    voteID: "",
    hash: new Uint8Array()
  };
}
var MsgConflictVoteCommit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.voteID !== "") {
      writer.uint32(18).string(message.voteID);
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConflictVoteCommit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.voteID = reader.string();
          break;
        case 3:
          message.hash = reader.bytes();
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
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      voteID: (0, _helpers.isSet)(object.voteID) ? String(object.voteID) : "",
      hash: (0, _helpers.isSet)(object.hash) ? (0, _helpers.bytesFromBase64)(object.hash) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.voteID !== undefined && (obj.voteID = message.voteID);
    message.hash !== undefined && (obj.hash = (0, _helpers.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2, _object$voteID, _object$hash;
    var message = createBaseMsgConflictVoteCommit();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.voteID = (_object$voteID = object.voteID) !== null && _object$voteID !== void 0 ? _object$voteID : "";
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  }
};
exports.MsgConflictVoteCommit = MsgConflictVoteCommit;
function createBaseMsgConflictVoteCommitResponse() {
  return {};
}
var MsgConflictVoteCommitResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConflictVoteCommitResponse();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgConflictVoteCommitResponse();
    return message;
  }
};
exports.MsgConflictVoteCommitResponse = MsgConflictVoteCommitResponse;
function createBaseMsgConflictVoteReveal() {
  return {
    creator: "",
    voteID: "",
    nonce: _helpers.Long.ZERO,
    hash: new Uint8Array()
  };
}
var MsgConflictVoteReveal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.voteID !== "") {
      writer.uint32(18).string(message.voteID);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).int64(message.nonce);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConflictVoteReveal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.voteID = reader.string();
          break;
        case 3:
          message.nonce = reader.int64();
          break;
        case 4:
          message.hash = reader.bytes();
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
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      voteID: (0, _helpers.isSet)(object.voteID) ? String(object.voteID) : "",
      nonce: (0, _helpers.isSet)(object.nonce) ? _helpers.Long.fromValue(object.nonce) : _helpers.Long.ZERO,
      hash: (0, _helpers.isSet)(object.hash) ? (0, _helpers.bytesFromBase64)(object.hash) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.voteID !== undefined && (obj.voteID = message.voteID);
    message.nonce !== undefined && (obj.nonce = (message.nonce || _helpers.Long.ZERO).toString());
    message.hash !== undefined && (obj.hash = (0, _helpers.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator3, _object$voteID2, _object$hash2;
    var message = createBaseMsgConflictVoteReveal();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.voteID = (_object$voteID2 = object.voteID) !== null && _object$voteID2 !== void 0 ? _object$voteID2 : "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? _helpers.Long.fromValue(object.nonce) : _helpers.Long.ZERO;
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    return message;
  }
};
exports.MsgConflictVoteReveal = MsgConflictVoteReveal;
function createBaseMsgConflictVoteRevealResponse() {
  return {};
}
var MsgConflictVoteRevealResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConflictVoteRevealResponse();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgConflictVoteRevealResponse();
    return message;
  }
};
exports.MsgConflictVoteRevealResponse = MsgConflictVoteRevealResponse;