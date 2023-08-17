"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = exports.Minter = void 0;
var _binary = require("../../../binary");
var _math = require("@cosmjs/math");
/** Minter represents the minting state. */

/** Minter represents the minting state. */

/** Params holds parameters for the mint module. */

/** Params holds parameters for the mint module. */

function createBaseMinter() {
  return {
    inflation: "",
    annualProvisions: ""
  };
}
var Minter = {
  typeUrl: "/cosmos.mint.v1beta1.Minter",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.inflation !== "") {
      writer.uint32(10).string(_math.Decimal.fromUserInput(message.inflation, 18).atomics);
    }
    if (message.annualProvisions !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.annualProvisions, 18).atomics);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMinter();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.annualProvisions = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$inflation, _object$annualProvisi;
    var message = createBaseMinter();
    message.inflation = (_object$inflation = object.inflation) !== null && _object$inflation !== void 0 ? _object$inflation : "";
    message.annualProvisions = (_object$annualProvisi = object.annualProvisions) !== null && _object$annualProvisi !== void 0 ? _object$annualProvisi : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      inflation: object.inflation,
      annualProvisions: object.annual_provisions
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.inflation = message.inflation;
    obj.annual_provisions = message.annualProvisions;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Minter.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Minter",
      value: Minter.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Minter.decode(message.value);
  },
  toProto: function toProto(message) {
    return Minter.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.mint.v1beta1.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
exports.Minter = Minter;
function createBaseParams() {
  return {
    mintDenom: "",
    inflationRateChange: "",
    inflationMax: "",
    inflationMin: "",
    goalBonded: "",
    blocksPerYear: BigInt(0)
  };
}
var Params = {
  typeUrl: "/cosmos.mint.v1beta1.Params",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflationRateChange !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.inflationRateChange, 18).atomics);
    }
    if (message.inflationMax !== "") {
      writer.uint32(26).string(_math.Decimal.fromUserInput(message.inflationMax, 18).atomics);
    }
    if (message.inflationMin !== "") {
      writer.uint32(34).string(_math.Decimal.fromUserInput(message.inflationMin, 18).atomics);
    }
    if (message.goalBonded !== "") {
      writer.uint32(42).string(_math.Decimal.fromUserInput(message.goalBonded, 18).atomics);
    }
    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(48).uint64(message.blocksPerYear);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.inflationRateChange = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.inflationMax = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.inflationMin = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.goalBonded = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.blocksPerYear = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$mintDenom, _object$inflationRate, _object$inflationMax, _object$inflationMin, _object$goalBonded;
    var message = createBaseParams();
    message.mintDenom = (_object$mintDenom = object.mintDenom) !== null && _object$mintDenom !== void 0 ? _object$mintDenom : "";
    message.inflationRateChange = (_object$inflationRate = object.inflationRateChange) !== null && _object$inflationRate !== void 0 ? _object$inflationRate : "";
    message.inflationMax = (_object$inflationMax = object.inflationMax) !== null && _object$inflationMax !== void 0 ? _object$inflationMax : "";
    message.inflationMin = (_object$inflationMin = object.inflationMin) !== null && _object$inflationMin !== void 0 ? _object$inflationMin : "";
    message.goalBonded = (_object$goalBonded = object.goalBonded) !== null && _object$goalBonded !== void 0 ? _object$goalBonded : "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      mintDenom: object.mint_denom,
      inflationRateChange: object.inflation_rate_change,
      inflationMax: object.inflation_max,
      inflationMin: object.inflation_min,
      goalBonded: object.goal_bonded,
      blocksPerYear: BigInt(object.blocks_per_year)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.mint_denom = message.mintDenom;
    obj.inflation_rate_change = message.inflationRateChange;
    obj.inflation_max = message.inflationMax;
    obj.inflation_min = message.inflationMin;
    obj.goal_bonded = message.goalBonded;
    obj.blocks_per_year = message.blocksPerYear ? message.blocksPerYear.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto: function toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.mint.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
exports.Params = Params;