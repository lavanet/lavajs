"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntProto = exports.DecProto = exports.DecCoin = exports.Coin = void 0;
var _binary = require("../../../binary");
/**
 * Coin defines a token with a denomination and an amount.
 * 
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */

/**
 * Coin defines a token with a denomination and an amount.
 * 
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */

/**
 * DecCoin defines a token with a denomination and a decimal amount.
 * 
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */

/**
 * DecCoin defines a token with a denomination and a decimal amount.
 * 
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */

/** IntProto defines a Protobuf wrapper around an Int object. */

/** IntProto defines a Protobuf wrapper around an Int object. */

/** DecProto defines a Protobuf wrapper around a Dec object. */

/** DecProto defines a Protobuf wrapper around a Dec object. */

function createBaseCoin() {
  return {
    denom: "",
    amount: ""
  };
}
var Coin = {
  typeUrl: "/cosmos.base.v1beta1.Coin",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCoin();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$denom, _object$amount;
    var message = createBaseCoin();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.amount = (_object$amount = object.amount) !== null && _object$amount !== void 0 ? _object$amount : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      denom: object.denom,
      amount: object.amount
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Coin.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Coin",
      value: Coin.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Coin.decode(message.value);
  },
  toProto: function toProto(message) {
    return Coin.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.v1beta1.Coin",
      value: Coin.encode(message).finish()
    };
  }
};
exports.Coin = Coin;
function createBaseDecCoin() {
  return {
    denom: "",
    amount: ""
  };
}
var DecCoin = {
  typeUrl: "/cosmos.base.v1beta1.DecCoin",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDecCoin();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$denom2, _object$amount2;
    var message = createBaseDecCoin();
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.amount = (_object$amount2 = object.amount) !== null && _object$amount2 !== void 0 ? _object$amount2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      denom: object.denom,
      amount: object.amount
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DecCoin.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DecCoin",
      value: DecCoin.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DecCoin.decode(message.value);
  },
  toProto: function toProto(message) {
    return DecCoin.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.v1beta1.DecCoin",
      value: DecCoin.encode(message).finish()
    };
  }
};
exports.DecCoin = DecCoin;
function createBaseIntProto() {
  return {
    "int": ""
  };
}
var IntProto = {
  typeUrl: "/cosmos.base.v1beta1.IntProto",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message["int"] !== "") {
      writer.uint32(10).string(message["int"]);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseIntProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message["int"] = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$int;
    var message = createBaseIntProto();
    message["int"] = (_object$int = object["int"]) !== null && _object$int !== void 0 ? _object$int : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      "int": object["int"]
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj["int"] = message["int"];
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return IntProto.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/IntProto",
      value: IntProto.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return IntProto.decode(message.value);
  },
  toProto: function toProto(message) {
    return IntProto.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.v1beta1.IntProto",
      value: IntProto.encode(message).finish()
    };
  }
};
exports.IntProto = IntProto;
function createBaseDecProto() {
  return {
    dec: ""
  };
}
var DecProto = {
  typeUrl: "/cosmos.base.v1beta1.DecProto",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.dec !== "") {
      writer.uint32(10).string(message.dec);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDecProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dec = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$dec;
    var message = createBaseDecProto();
    message.dec = (_object$dec = object.dec) !== null && _object$dec !== void 0 ? _object$dec : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      dec: object.dec
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.dec = message.dec;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DecProto.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DecProto",
      value: DecProto.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DecProto.decode(message.value);
  },
  toProto: function toProto(message) {
    return DecProto.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.v1beta1.DecProto",
      value: DecProto.encode(message).finish()
    };
  }
};
exports.DecProto = DecProto;