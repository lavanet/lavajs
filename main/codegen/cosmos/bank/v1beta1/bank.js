"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Supply = exports.SendEnabled = exports.Params = exports.Output = exports.Metadata = exports.Input = exports.DenomUnit = void 0;
var _coin = require("../../base/v1beta1/coin");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** Params defines the parameters for the bank module. */

/** Params defines the parameters for the bank module. */

/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 */

/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 */

/** Input models transaction input. */

/** Input models transaction input. */

/** Output models transaction outputs. */

/** Output models transaction outputs. */

/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 */
/** @deprecated */
/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 */
/** @deprecated */
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
function createBaseParams() {
  return {
    sendEnabled: [],
    defaultSendEnabled: false
  };
}
var Params = {
  typeUrl: "/cosmos.bank.v1beta1.Params",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.sendEnabled),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.defaultSendEnabled === true) {
      writer.uint32(16).bool(message.defaultSendEnabled);
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
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 2:
          message.defaultSendEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sendEnabled, _object$defaultSendEn;
    var message = createBaseParams();
    message.sendEnabled = ((_object$sendEnabled = object.sendEnabled) === null || _object$sendEnabled === void 0 ? void 0 : _object$sendEnabled.map(function (e) {
      return SendEnabled.fromPartial(e);
    })) || [];
    message.defaultSendEnabled = (_object$defaultSendEn = object.defaultSendEnabled) !== null && _object$defaultSendEn !== void 0 ? _object$defaultSendEn : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      sendEnabled: Array.isArray(object === null || object === void 0 ? void 0 : object.send_enabled) ? object.send_enabled.map(function (e) {
        return SendEnabled.fromAmino(e);
      }) : [],
      defaultSendEnabled: object.default_send_enabled
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.sendEnabled) {
      obj.send_enabled = message.sendEnabled.map(function (e) {
        return e ? SendEnabled.toAmino(e) : undefined;
      });
    } else {
      obj.send_enabled = [];
    }
    obj.default_send_enabled = message.defaultSendEnabled;
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
      typeUrl: "/cosmos.bank.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
exports.Params = Params;
function createBaseSendEnabled() {
  return {
    denom: "",
    enabled: false
  };
}
var SendEnabled = {
  typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSendEnabled();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$denom, _object$enabled;
    var message = createBaseSendEnabled();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      denom: object.denom,
      enabled: object.enabled
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.denom = message.denom;
    obj.enabled = message.enabled;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return SendEnabled.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SendEnabled",
      value: SendEnabled.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return SendEnabled.decode(message.value);
  },
  toProto: function toProto(message) {
    return SendEnabled.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
      value: SendEnabled.encode(message).finish()
    };
  }
};
exports.SendEnabled = SendEnabled;
function createBaseInput() {
  return {
    address: "",
    coins: []
  };
}
var Input = {
  typeUrl: "/cosmos.bank.v1beta1.Input",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    var _iterator2 = _createForOfIteratorHelper(message.coins),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseInput();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$coins;
    var message = createBaseInput();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      address: object.address,
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address = message.address;
    if (message.coins) {
      obj.coins = message.coins.map(function (e) {
        return e ? _coin.Coin.toAmino(e) : undefined;
      });
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Input.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Input",
      value: Input.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Input.decode(message.value);
  },
  toProto: function toProto(message) {
    return Input.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Input",
      value: Input.encode(message).finish()
    };
  }
};
exports.Input = Input;
function createBaseOutput() {
  return {
    address: "",
    coins: []
  };
}
var Output = {
  typeUrl: "/cosmos.bank.v1beta1.Output",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    var _iterator3 = _createForOfIteratorHelper(message.coins),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseOutput();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coins.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address2, _object$coins2;
    var message = createBaseOutput();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.coins = ((_object$coins2 = object.coins) === null || _object$coins2 === void 0 ? void 0 : _object$coins2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      address: object.address,
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address = message.address;
    if (message.coins) {
      obj.coins = message.coins.map(function (e) {
        return e ? _coin.Coin.toAmino(e) : undefined;
      });
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Output.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Output",
      value: Output.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Output.decode(message.value);
  },
  toProto: function toProto(message) {
    return Output.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Output",
      value: Output.encode(message).finish()
    };
  }
};
exports.Output = Output;
function createBaseSupply() {
  return {
    total: []
  };
}
var Supply = {
  typeUrl: "/cosmos.bank.v1beta1.Supply",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator4 = _createForOfIteratorHelper(message.total),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseSupply();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$total;
    var message = createBaseSupply();
    message.total = ((_object$total = object.total) === null || _object$total === void 0 ? void 0 : _object$total.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      total: Array.isArray(object === null || object === void 0 ? void 0 : object.total) ? object.total.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.total) {
      obj.total = message.total.map(function (e) {
        return e ? _coin.Coin.toAmino(e) : undefined;
      });
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Supply.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Supply",
      value: Supply.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Supply.decode(message.value);
  },
  toProto: function toProto(message) {
    return Supply.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Supply",
      value: Supply.encode(message).finish()
    };
  }
};
exports.Supply = Supply;
function createBaseDenomUnit() {
  return {
    denom: "",
    exponent: 0,
    aliases: []
  };
}
var DenomUnit = {
  typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }
    var _iterator5 = _createForOfIteratorHelper(message.aliases),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        writer.uint32(26).string(v);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDenomUnit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exponent = reader.uint32();
          break;
        case 3:
          message.aliases.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$denom2, _object$exponent, _object$aliases;
    var message = createBaseDenomUnit();
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.exponent = (_object$exponent = object.exponent) !== null && _object$exponent !== void 0 ? _object$exponent : 0;
    message.aliases = ((_object$aliases = object.aliases) === null || _object$aliases === void 0 ? void 0 : _object$aliases.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      denom: object.denom,
      exponent: object.exponent,
      aliases: Array.isArray(object === null || object === void 0 ? void 0 : object.aliases) ? object.aliases.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.denom = message.denom;
    obj.exponent = message.exponent;
    if (message.aliases) {
      obj.aliases = message.aliases.map(function (e) {
        return e;
      });
    } else {
      obj.aliases = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DenomUnit.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DenomUnit",
      value: DenomUnit.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DenomUnit.decode(message.value);
  },
  toProto: function toProto(message) {
    return DenomUnit.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
      value: DenomUnit.encode(message).finish()
    };
  }
};
exports.DenomUnit = DenomUnit;
function createBaseMetadata() {
  return {
    description: "",
    denomUnits: [],
    base: "",
    display: "",
    name: "",
    symbol: "",
    uri: "",
    uriHash: ""
  };
}
var Metadata = {
  typeUrl: "/cosmos.bank.v1beta1.Metadata",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    var _iterator6 = _createForOfIteratorHelper(message.denomUnits),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        DenomUnit.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }
    if (message.display !== "") {
      writer.uint32(34).string(message.display);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }
    if (message.uri !== "") {
      writer.uint32(58).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(66).string(message.uriHash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.denomUnits.push(DenomUnit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.base = reader.string();
          break;
        case 4:
          message.display = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.symbol = reader.string();
          break;
        case 7:
          message.uri = reader.string();
          break;
        case 8:
          message.uriHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$description, _object$denomUnits, _object$base, _object$display, _object$name, _object$symbol, _object$uri, _object$uriHash;
    var message = createBaseMetadata();
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.denomUnits = ((_object$denomUnits = object.denomUnits) === null || _object$denomUnits === void 0 ? void 0 : _object$denomUnits.map(function (e) {
      return DenomUnit.fromPartial(e);
    })) || [];
    message.base = (_object$base = object.base) !== null && _object$base !== void 0 ? _object$base : "";
    message.display = (_object$display = object.display) !== null && _object$display !== void 0 ? _object$display : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.symbol = (_object$symbol = object.symbol) !== null && _object$symbol !== void 0 ? _object$symbol : "";
    message.uri = (_object$uri = object.uri) !== null && _object$uri !== void 0 ? _object$uri : "";
    message.uriHash = (_object$uriHash = object.uriHash) !== null && _object$uriHash !== void 0 ? _object$uriHash : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      description: object.description,
      denomUnits: Array.isArray(object === null || object === void 0 ? void 0 : object.denom_units) ? object.denom_units.map(function (e) {
        return DenomUnit.fromAmino(e);
      }) : [],
      base: object.base,
      display: object.display,
      name: object.name,
      symbol: object.symbol,
      uri: object.uri,
      uriHash: object.uri_hash
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.description = message.description;
    if (message.denomUnits) {
      obj.denom_units = message.denomUnits.map(function (e) {
        return e ? DenomUnit.toAmino(e) : undefined;
      });
    } else {
      obj.denom_units = [];
    }
    obj.base = message.base;
    obj.display = message.display;
    obj.name = message.name;
    obj.symbol = message.symbol;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Metadata.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Metadata",
      value: Metadata.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Metadata.decode(message.value);
  },
  toProto: function toProto(message) {
    return Metadata.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
exports.Metadata = Metadata;