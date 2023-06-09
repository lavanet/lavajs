"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgSubmitEvidenceResponse = exports.MsgSubmitEvidence = void 0;
var _any = require("../../../google/protobuf/any");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */

/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */

/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */

/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */

function createBaseMsgSubmitEvidence() {
  return {
    submitter: "",
    evidence: undefined
  };
}
var MsgSubmitEvidence = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.evidence !== undefined) {
      _any.Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitEvidence();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.evidence = _any.Any.decode(reader, reader.uint32());
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
      submitter: (0, _helpers.isSet)(object.submitter) ? String(object.submitter) : "",
      evidence: (0, _helpers.isSet)(object.evidence) ? _any.Any.fromJSON(object.evidence) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.evidence !== undefined && (obj.evidence = message.evidence ? _any.Any.toJSON(message.evidence) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$submitter;
    var message = createBaseMsgSubmitEvidence();
    message.submitter = (_object$submitter = object.submitter) !== null && _object$submitter !== void 0 ? _object$submitter : "";
    message.evidence = object.evidence !== undefined && object.evidence !== null ? _any.Any.fromPartial(object.evidence) : undefined;
    return message;
  }
};
exports.MsgSubmitEvidence = MsgSubmitEvidence;
function createBaseMsgSubmitEvidenceResponse() {
  return {
    hash: new Uint8Array()
  };
}
var MsgSubmitEvidenceResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitEvidenceResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
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
      hash: (0, _helpers.isSet)(object.hash) ? (0, _helpers.bytesFromBase64)(object.hash) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.hash !== undefined && (obj.hash = (0, _helpers.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$hash;
    var message = createBaseMsgSubmitEvidenceResponse();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  }
};
exports.MsgSubmitEvidenceResponse = MsgSubmitEvidenceResponse;