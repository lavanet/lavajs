"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidatorMissedBlocks = exports.SigningInfo = exports.MissedBlock = exports.GenesisState = void 0;
var _slashing = require("./slashing");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState defines the slashing module's genesis state. */

/** GenesisState defines the slashing module's genesis state. */

/** SigningInfo stores validator signing info of corresponding address. */

/** SigningInfo stores validator signing info of corresponding address. */

/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */

/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */

/** MissedBlock contains height and missed status as boolean. */

/** MissedBlock contains height and missed status as boolean. */

function createBaseGenesisState() {
  return {
    params: _slashing.Params.fromPartial({}),
    signingInfos: [],
    missedBlocks: []
  };
}
var GenesisState = {
  typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _slashing.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.signingInfos),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.missedBlocks),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        ValidatorMissedBlocks.encode(_v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _slashing.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.signingInfos.push(SigningInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.missedBlocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$signingInfos, _object$missedBlocks;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _slashing.Params.fromPartial(object.params) : undefined;
    message.signingInfos = ((_object$signingInfos = object.signingInfos) === null || _object$signingInfos === void 0 ? void 0 : _object$signingInfos.map(function (e) {
      return SigningInfo.fromPartial(e);
    })) || [];
    message.missedBlocks = ((_object$missedBlocks = object.missedBlocks) === null || _object$missedBlocks === void 0 ? void 0 : _object$missedBlocks.map(function (e) {
      return ValidatorMissedBlocks.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _slashing.Params.fromAmino(object.params) : undefined,
      signingInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.signing_infos) ? object.signing_infos.map(function (e) {
        return SigningInfo.fromAmino(e);
      }) : [],
      missedBlocks: Array.isArray(object === null || object === void 0 ? void 0 : object.missed_blocks) ? object.missed_blocks.map(function (e) {
        return ValidatorMissedBlocks.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _slashing.Params.toAmino(message.params) : undefined;
    if (message.signingInfos) {
      obj.signing_infos = message.signingInfos.map(function (e) {
        return e ? SigningInfo.toAmino(e) : undefined;
      });
    } else {
      obj.signing_infos = [];
    }
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(function (e) {
        return e ? ValidatorMissedBlocks.toAmino(e) : undefined;
      });
    } else {
      obj.missed_blocks = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto: function toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
exports.GenesisState = GenesisState;
function createBaseSigningInfo() {
  return {
    address: "",
    validatorSigningInfo: _slashing.ValidatorSigningInfo.fromPartial({})
  };
}
var SigningInfo = {
  typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.validatorSigningInfo !== undefined) {
      _slashing.ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSigningInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.validatorSigningInfo = _slashing.ValidatorSigningInfo.decode(reader, reader.uint32());
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
    var message = createBaseSigningInfo();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.validatorSigningInfo = object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null ? _slashing.ValidatorSigningInfo.fromPartial(object.validatorSigningInfo) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      address: object.address,
      validatorSigningInfo: object !== null && object !== void 0 && object.validator_signing_info ? _slashing.ValidatorSigningInfo.fromAmino(object.validator_signing_info) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address = message.address;
    obj.validator_signing_info = message.validatorSigningInfo ? _slashing.ValidatorSigningInfo.toAmino(message.validatorSigningInfo) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return SigningInfo.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SigningInfo",
      value: SigningInfo.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return SigningInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return SigningInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
      value: SigningInfo.encode(message).finish()
    };
  }
};
exports.SigningInfo = SigningInfo;
function createBaseValidatorMissedBlocks() {
  return {
    address: "",
    missedBlocks: []
  };
}
var ValidatorMissedBlocks = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    var _iterator3 = _createForOfIteratorHelper(message.missedBlocks),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseValidatorMissedBlocks();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.missedBlocks.push(MissedBlock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address2, _object$missedBlocks2;
    var message = createBaseValidatorMissedBlocks();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.missedBlocks = ((_object$missedBlocks2 = object.missedBlocks) === null || _object$missedBlocks2 === void 0 ? void 0 : _object$missedBlocks2.map(function (e) {
      return MissedBlock.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      address: object.address,
      missedBlocks: Array.isArray(object === null || object === void 0 ? void 0 : object.missed_blocks) ? object.missed_blocks.map(function (e) {
        return MissedBlock.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address = message.address;
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(function (e) {
        return e ? MissedBlock.toAmino(e) : undefined;
      });
    } else {
      obj.missed_blocks = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorMissedBlocks.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorMissedBlocks",
      value: ValidatorMissedBlocks.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorMissedBlocks.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorMissedBlocks.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
      value: ValidatorMissedBlocks.encode(message).finish()
    };
  }
};
exports.ValidatorMissedBlocks = ValidatorMissedBlocks;
function createBaseMissedBlock() {
  return {
    index: BigInt(0),
    missed: false
  };
}
var MissedBlock = {
  typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.index !== BigInt(0)) {
      writer.uint32(8).int64(message.index);
    }
    if (message.missed === true) {
      writer.uint32(16).bool(message.missed);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMissedBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.int64();
          break;
        case 2:
          message.missed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$missed;
    var message = createBaseMissedBlock();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.missed = (_object$missed = object.missed) !== null && _object$missed !== void 0 ? _object$missed : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      index: BigInt(object.index),
      missed: object.missed
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.index = message.index ? message.index.toString() : undefined;
    obj.missed = message.missed;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MissedBlock.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MissedBlock",
      value: MissedBlock.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MissedBlock.decode(message.value);
  },
  toProto: function toProto(message) {
    return MissedBlock.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
      value: MissedBlock.encode(message).finish()
    };
  }
};
exports.MissedBlock = MissedBlock;