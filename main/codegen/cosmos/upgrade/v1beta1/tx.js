"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgSoftwareUpgradeResponse = exports.MsgSoftwareUpgrade = exports.MsgCancelUpgradeResponse = exports.MsgCancelUpgrade = void 0;
var _upgrade = require("./upgrade");
var _binary = require("../../../binary");
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

function createBaseMsgSoftwareUpgrade() {
  return {
    authority: "",
    plan: _upgrade.Plan.fromPartial({})
  };
}
var MsgSoftwareUpgrade = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      _upgrade.Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSoftwareUpgrade();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = _upgrade.Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$authority;
    var message = createBaseMsgSoftwareUpgrade();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.plan = object.plan !== undefined && object.plan !== null ? _upgrade.Plan.fromPartial(object.plan) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      authority: object.authority,
      plan: object !== null && object !== void 0 && object.plan ? _upgrade.Plan.fromAmino(object.plan) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.authority = message.authority;
    obj.plan = message.plan ? _upgrade.Plan.toAmino(message.plan) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgSoftwareUpgrade.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSoftwareUpgrade.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSoftwareUpgrade.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.encode(message).finish()
    };
  }
};
exports.MsgSoftwareUpgrade = MsgSoftwareUpgrade;
function createBaseMsgSoftwareUpgradeResponse() {
  return {};
}
var MsgSoftwareUpgradeResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSoftwareUpgradeResponse();
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
    var message = createBaseMsgSoftwareUpgradeResponse();
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
    return MsgSoftwareUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSoftwareUpgradeResponse",
      value: MsgSoftwareUpgradeResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSoftwareUpgradeResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSoftwareUpgradeResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
      value: MsgSoftwareUpgradeResponse.encode(message).finish()
    };
  }
};
exports.MsgSoftwareUpgradeResponse = MsgSoftwareUpgradeResponse;
function createBaseMsgCancelUpgrade() {
  return {
    authority: ""
  };
}
var MsgCancelUpgrade = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCancelUpgrade();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$authority2;
    var message = createBaseMsgCancelUpgrade();
    message.authority = (_object$authority2 = object.authority) !== null && _object$authority2 !== void 0 ? _object$authority2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      authority: object.authority
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgCancelUpgrade.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCancelUpgrade",
      value: MsgCancelUpgrade.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgCancelUpgrade.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgCancelUpgrade.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
      value: MsgCancelUpgrade.encode(message).finish()
    };
  }
};
exports.MsgCancelUpgrade = MsgCancelUpgrade;
function createBaseMsgCancelUpgradeResponse() {
  return {};
}
var MsgCancelUpgradeResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCancelUpgradeResponse();
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
    var message = createBaseMsgCancelUpgradeResponse();
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
    return MsgCancelUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCancelUpgradeResponse",
      value: MsgCancelUpgradeResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgCancelUpgradeResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgCancelUpgradeResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
      value: MsgCancelUpgradeResponse.encode(message).finish()
    };
  }
};
exports.MsgCancelUpgradeResponse = MsgCancelUpgradeResponse;