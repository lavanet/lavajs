"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgSubmitEvidenceResponse = exports.MsgSubmitEvidence = void 0;
var _any = require("../../../google/protobuf/any");
var _binary = require("../../../binary");
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
    evidence: _any.Any.fromPartial({})
  };
}
var MsgSubmitEvidence = {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.evidence !== undefined) {
      _any.Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
  fromPartial: function fromPartial(object) {
    var _object$submitter;
    var message = createBaseMsgSubmitEvidence();
    message.submitter = (_object$submitter = object.submitter) !== null && _object$submitter !== void 0 ? _object$submitter : "";
    message.evidence = object.evidence !== undefined && object.evidence !== null ? _any.Any.fromPartial(object.evidence) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      submitter: object.submitter,
      evidence: object !== null && object !== void 0 && object.evidence ? _any.Any.fromAmino(object.evidence) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.submitter = message.submitter;
    obj.evidence = message.evidence ? _any.Any.toAmino(message.evidence) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgSubmitEvidence.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSubmitEvidence",
      value: MsgSubmitEvidence.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSubmitEvidence.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSubmitEvidence.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
      value: MsgSubmitEvidence.encode(message).finish()
    };
  }
};
exports.MsgSubmitEvidence = MsgSubmitEvidence;
function createBaseMsgSubmitEvidenceResponse() {
  return {
    hash: new Uint8Array()
  };
}
var MsgSubmitEvidenceResponse = {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
  fromPartial: function fromPartial(object) {
    var _object$hash;
    var message = createBaseMsgSubmitEvidenceResponse();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      hash: object.hash
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgSubmitEvidenceResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSubmitEvidenceResponse",
      value: MsgSubmitEvidenceResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSubmitEvidenceResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSubmitEvidenceResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
      value: MsgSubmitEvidenceResponse.encode(message).finish()
    };
  }
};
exports.MsgSubmitEvidenceResponse = MsgSubmitEvidenceResponse;