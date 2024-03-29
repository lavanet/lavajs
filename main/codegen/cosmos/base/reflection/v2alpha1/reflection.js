"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxDescriptor = exports.SigningModeDescriptor = exports.QueryServicesDescriptor = exports.QueryServiceDescriptor = exports.QueryMethodDescriptor = exports.MsgDescriptor = exports.InterfaceImplementerDescriptor = exports.InterfaceDescriptor = exports.InterfaceAcceptingMessageDescriptor = exports.GetTxDescriptorResponse = exports.GetTxDescriptorRequest = exports.GetQueryServicesDescriptorResponse = exports.GetQueryServicesDescriptorRequest = exports.GetConfigurationDescriptorResponse = exports.GetConfigurationDescriptorRequest = exports.GetCodecDescriptorResponse = exports.GetCodecDescriptorRequest = exports.GetChainDescriptorResponse = exports.GetChainDescriptorRequest = exports.GetAuthnDescriptorResponse = exports.GetAuthnDescriptorRequest = exports.ConfigurationDescriptor = exports.CodecDescriptor = exports.ChainDescriptor = exports.AuthnDescriptor = exports.AppDescriptor = void 0;
var _binary = require("../../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** AppDescriptor describes a cosmos-sdk based application */

/** AppDescriptor describes a cosmos-sdk based application */

/** TxDescriptor describes the accepted transaction type */

/** TxDescriptor describes the accepted transaction type */

/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */

/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */

/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */

/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */

/** ChainDescriptor describes chain information of the application */

/** ChainDescriptor describes chain information of the application */

/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */

/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */

/** InterfaceDescriptor describes the implementation of an interface */

/** InterfaceDescriptor describes the implementation of an interface */

/** InterfaceImplementerDescriptor describes an interface implementer */

/** InterfaceImplementerDescriptor describes an interface implementer */

/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */

/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */

/** ConfigurationDescriptor contains metadata information on the sdk.Config */

/** ConfigurationDescriptor contains metadata information on the sdk.Config */

/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */

/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */

/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */

/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */

/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */

/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */

/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */

/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */

/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */

/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */

/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */

/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */

/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */

/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */

/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */

/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */

/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */

/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */

/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */

/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */

/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */

/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */

/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */

/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */

/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */

/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */

/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */

/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */

/** QueryServiceDescriptor describes a cosmos-sdk queryable service */

/** QueryServiceDescriptor describes a cosmos-sdk queryable service */

/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */

/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */

function createBaseAppDescriptor() {
  return {
    authn: AuthnDescriptor.fromPartial({}),
    chain: ChainDescriptor.fromPartial({}),
    codec: CodecDescriptor.fromPartial({}),
    configuration: ConfigurationDescriptor.fromPartial({}),
    queryServices: QueryServicesDescriptor.fromPartial({}),
    tx: TxDescriptor.fromPartial({})
  };
}
var AppDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
    }
    if (message.configuration !== undefined) {
      ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.queryServices !== undefined) {
      QueryServicesDescriptor.encode(message.queryServices, writer.uint32(42).fork()).ldelim();
    }
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAppDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        case 3:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        case 4:
          message.configuration = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;
        case 5:
          message.queryServices = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;
        case 6:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseAppDescriptor();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
    message.queryServices = object.queryServices !== undefined && object.queryServices !== null ? QueryServicesDescriptor.fromPartial(object.queryServices) : undefined;
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      authn: object !== null && object !== void 0 && object.authn ? AuthnDescriptor.fromAmino(object.authn) : undefined,
      chain: object !== null && object !== void 0 && object.chain ? ChainDescriptor.fromAmino(object.chain) : undefined,
      codec: object !== null && object !== void 0 && object.codec ? CodecDescriptor.fromAmino(object.codec) : undefined,
      configuration: object !== null && object !== void 0 && object.configuration ? ConfigurationDescriptor.fromAmino(object.configuration) : undefined,
      queryServices: object !== null && object !== void 0 && object.query_services ? QueryServicesDescriptor.fromAmino(object.query_services) : undefined,
      tx: object !== null && object !== void 0 && object.tx ? TxDescriptor.fromAmino(object.tx) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.authn = message.authn ? AuthnDescriptor.toAmino(message.authn) : undefined;
    obj.chain = message.chain ? ChainDescriptor.toAmino(message.chain) : undefined;
    obj.codec = message.codec ? CodecDescriptor.toAmino(message.codec) : undefined;
    obj.configuration = message.configuration ? ConfigurationDescriptor.toAmino(message.configuration) : undefined;
    obj.query_services = message.queryServices ? QueryServicesDescriptor.toAmino(message.queryServices) : undefined;
    obj.tx = message.tx ? TxDescriptor.toAmino(message.tx) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return AppDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AppDescriptor",
      value: AppDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return AppDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return AppDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
      value: AppDescriptor.encode(message).finish()
    };
  }
};
exports.AppDescriptor = AppDescriptor;
function createBaseTxDescriptor() {
  return {
    fullname: "",
    msgs: []
  };
}
var TxDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    var _iterator = _createForOfIteratorHelper(message.msgs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname, _object$msgs;
    var message = createBaseTxDescriptor();
    message.fullname = (_object$fullname = object.fullname) !== null && _object$fullname !== void 0 ? _object$fullname : "";
    message.msgs = ((_object$msgs = object.msgs) === null || _object$msgs === void 0 ? void 0 : _object$msgs.map(function (e) {
      return MsgDescriptor.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      fullname: object.fullname,
      msgs: Array.isArray(object === null || object === void 0 ? void 0 : object.msgs) ? object.msgs.map(function (e) {
        return MsgDescriptor.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.fullname = message.fullname;
    if (message.msgs) {
      obj.msgs = message.msgs.map(function (e) {
        return e ? MsgDescriptor.toAmino(e) : undefined;
      });
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return TxDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxDescriptor",
      value: TxDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return TxDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return TxDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
      value: TxDescriptor.encode(message).finish()
    };
  }
};
exports.TxDescriptor = TxDescriptor;
function createBaseAuthnDescriptor() {
  return {
    signModes: []
  };
}
var AuthnDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.signModes),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseAuthnDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signModes.push(SigningModeDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$signModes;
    var message = createBaseAuthnDescriptor();
    message.signModes = ((_object$signModes = object.signModes) === null || _object$signModes === void 0 ? void 0 : _object$signModes.map(function (e) {
      return SigningModeDescriptor.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      signModes: Array.isArray(object === null || object === void 0 ? void 0 : object.sign_modes) ? object.sign_modes.map(function (e) {
        return SigningModeDescriptor.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.signModes) {
      obj.sign_modes = message.signModes.map(function (e) {
        return e ? SigningModeDescriptor.toAmino(e) : undefined;
      });
    } else {
      obj.sign_modes = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return AuthnDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AuthnDescriptor",
      value: AuthnDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return AuthnDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return AuthnDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
      value: AuthnDescriptor.encode(message).finish()
    };
  }
};
exports.AuthnDescriptor = AuthnDescriptor;
function createBaseSigningModeDescriptor() {
  return {
    name: "",
    number: 0,
    authnInfoProviderMethodFullname: ""
  };
}
var SigningModeDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.authnInfoProviderMethodFullname !== "") {
      writer.uint32(26).string(message.authnInfoProviderMethodFullname);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSigningModeDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.authnInfoProviderMethodFullname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$number, _object$authnInfoProv;
    var message = createBaseSigningModeDescriptor();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.number = (_object$number = object.number) !== null && _object$number !== void 0 ? _object$number : 0;
    message.authnInfoProviderMethodFullname = (_object$authnInfoProv = object.authnInfoProviderMethodFullname) !== null && _object$authnInfoProv !== void 0 ? _object$authnInfoProv : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      number: object.number,
      authnInfoProviderMethodFullname: object.authn_info_provider_method_fullname
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    obj.number = message.number;
    obj.authn_info_provider_method_fullname = message.authnInfoProviderMethodFullname;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return SigningModeDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SigningModeDescriptor",
      value: SigningModeDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return SigningModeDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return SigningModeDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
      value: SigningModeDescriptor.encode(message).finish()
    };
  }
};
exports.SigningModeDescriptor = SigningModeDescriptor;
function createBaseChainDescriptor() {
  return {
    id: ""
  };
}
var ChainDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseChainDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$id;
    var message = createBaseChainDescriptor();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      id: object.id
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ChainDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ChainDescriptor",
      value: ChainDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ChainDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return ChainDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
      value: ChainDescriptor.encode(message).finish()
    };
  }
};
exports.ChainDescriptor = ChainDescriptor;
function createBaseCodecDescriptor() {
  return {
    interfaces: []
  };
}
var CodecDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator3 = _createForOfIteratorHelper(message.interfaces),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseCodecDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaces.push(InterfaceDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$interfaces;
    var message = createBaseCodecDescriptor();
    message.interfaces = ((_object$interfaces = object.interfaces) === null || _object$interfaces === void 0 ? void 0 : _object$interfaces.map(function (e) {
      return InterfaceDescriptor.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      interfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaces) ? object.interfaces.map(function (e) {
        return InterfaceDescriptor.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(function (e) {
        return e ? InterfaceDescriptor.toAmino(e) : undefined;
      });
    } else {
      obj.interfaces = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return CodecDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CodecDescriptor",
      value: CodecDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return CodecDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return CodecDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
      value: CodecDescriptor.encode(message).finish()
    };
  }
};
exports.CodecDescriptor = CodecDescriptor;
function createBaseInterfaceDescriptor() {
  return {
    fullname: "",
    interfaceAcceptingMessages: [],
    interfaceImplementers: []
  };
}
var InterfaceDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    var _iterator4 = _createForOfIteratorHelper(message.interfaceAcceptingMessages),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.interfaceImplementers),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v = _step5.value;
        InterfaceImplementerDescriptor.encode(_v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseInterfaceDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.interfaceAcceptingMessages.push(InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.interfaceImplementers.push(InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname2, _object$interfaceAcce, _object$interfaceImpl;
    var message = createBaseInterfaceDescriptor();
    message.fullname = (_object$fullname2 = object.fullname) !== null && _object$fullname2 !== void 0 ? _object$fullname2 : "";
    message.interfaceAcceptingMessages = ((_object$interfaceAcce = object.interfaceAcceptingMessages) === null || _object$interfaceAcce === void 0 ? void 0 : _object$interfaceAcce.map(function (e) {
      return InterfaceAcceptingMessageDescriptor.fromPartial(e);
    })) || [];
    message.interfaceImplementers = ((_object$interfaceImpl = object.interfaceImplementers) === null || _object$interfaceImpl === void 0 ? void 0 : _object$interfaceImpl.map(function (e) {
      return InterfaceImplementerDescriptor.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      fullname: object.fullname,
      interfaceAcceptingMessages: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_accepting_messages) ? object.interface_accepting_messages.map(function (e) {
        return InterfaceAcceptingMessageDescriptor.fromAmino(e);
      }) : [],
      interfaceImplementers: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_implementers) ? object.interface_implementers.map(function (e) {
        return InterfaceImplementerDescriptor.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.fullname = message.fullname;
    if (message.interfaceAcceptingMessages) {
      obj.interface_accepting_messages = message.interfaceAcceptingMessages.map(function (e) {
        return e ? InterfaceAcceptingMessageDescriptor.toAmino(e) : undefined;
      });
    } else {
      obj.interface_accepting_messages = [];
    }
    if (message.interfaceImplementers) {
      obj.interface_implementers = message.interfaceImplementers.map(function (e) {
        return e ? InterfaceImplementerDescriptor.toAmino(e) : undefined;
      });
    } else {
      obj.interface_implementers = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return InterfaceDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InterfaceDescriptor",
      value: InterfaceDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return InterfaceDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return InterfaceDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
      value: InterfaceDescriptor.encode(message).finish()
    };
  }
};
exports.InterfaceDescriptor = InterfaceDescriptor;
function createBaseInterfaceImplementerDescriptor() {
  return {
    fullname: "",
    typeUrl: ""
  };
}
var InterfaceImplementerDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.typeUrl !== "") {
      writer.uint32(18).string(message.typeUrl);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInterfaceImplementerDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.typeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname3, _object$typeUrl;
    var message = createBaseInterfaceImplementerDescriptor();
    message.fullname = (_object$fullname3 = object.fullname) !== null && _object$fullname3 !== void 0 ? _object$fullname3 : "";
    message.typeUrl = (_object$typeUrl = object.typeUrl) !== null && _object$typeUrl !== void 0 ? _object$typeUrl : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      fullname: object.fullname,
      typeUrl: object.type_url
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.fullname = message.fullname;
    obj.type_url = message.typeUrl;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return InterfaceImplementerDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InterfaceImplementerDescriptor",
      value: InterfaceImplementerDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return InterfaceImplementerDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return InterfaceImplementerDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
      value: InterfaceImplementerDescriptor.encode(message).finish()
    };
  }
};
exports.InterfaceImplementerDescriptor = InterfaceImplementerDescriptor;
function createBaseInterfaceAcceptingMessageDescriptor() {
  return {
    fullname: "",
    fieldDescriptorNames: []
  };
}
var InterfaceAcceptingMessageDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    var _iterator6 = _createForOfIteratorHelper(message.fieldDescriptorNames),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInterfaceAcceptingMessageDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.fieldDescriptorNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname4, _object$fieldDescript;
    var message = createBaseInterfaceAcceptingMessageDescriptor();
    message.fullname = (_object$fullname4 = object.fullname) !== null && _object$fullname4 !== void 0 ? _object$fullname4 : "";
    message.fieldDescriptorNames = ((_object$fieldDescript = object.fieldDescriptorNames) === null || _object$fieldDescript === void 0 ? void 0 : _object$fieldDescript.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      fullname: object.fullname,
      fieldDescriptorNames: Array.isArray(object === null || object === void 0 ? void 0 : object.field_descriptor_names) ? object.field_descriptor_names.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.fullname = message.fullname;
    if (message.fieldDescriptorNames) {
      obj.field_descriptor_names = message.fieldDescriptorNames.map(function (e) {
        return e;
      });
    } else {
      obj.field_descriptor_names = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return InterfaceAcceptingMessageDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InterfaceAcceptingMessageDescriptor",
      value: InterfaceAcceptingMessageDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return InterfaceAcceptingMessageDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return InterfaceAcceptingMessageDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
      value: InterfaceAcceptingMessageDescriptor.encode(message).finish()
    };
  }
};
exports.InterfaceAcceptingMessageDescriptor = InterfaceAcceptingMessageDescriptor;
function createBaseConfigurationDescriptor() {
  return {
    bech32AccountAddressPrefix: ""
  };
}
var ConfigurationDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.bech32AccountAddressPrefix !== "") {
      writer.uint32(10).string(message.bech32AccountAddressPrefix);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConfigurationDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32AccountAddressPrefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$bech32Account;
    var message = createBaseConfigurationDescriptor();
    message.bech32AccountAddressPrefix = (_object$bech32Account = object.bech32AccountAddressPrefix) !== null && _object$bech32Account !== void 0 ? _object$bech32Account : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      bech32AccountAddressPrefix: object.bech32_account_address_prefix
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.bech32_account_address_prefix = message.bech32AccountAddressPrefix;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ConfigurationDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConfigurationDescriptor",
      value: ConfigurationDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ConfigurationDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return ConfigurationDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
      value: ConfigurationDescriptor.encode(message).finish()
    };
  }
};
exports.ConfigurationDescriptor = ConfigurationDescriptor;
function createBaseMsgDescriptor() {
  return {
    msgTypeUrl: ""
  };
}
var MsgDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.msgTypeUrl !== "") {
      writer.uint32(10).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$msgTypeUrl;
    var message = createBaseMsgDescriptor();
    message.msgTypeUrl = (_object$msgTypeUrl = object.msgTypeUrl) !== null && _object$msgTypeUrl !== void 0 ? _object$msgTypeUrl : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      msgTypeUrl: object.msg_type_url
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.msg_type_url = message.msgTypeUrl;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDescriptor",
      value: MsgDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
      value: MsgDescriptor.encode(message).finish()
    };
  }
};
exports.MsgDescriptor = MsgDescriptor;
function createBaseGetAuthnDescriptorRequest() {
  return {};
}
var GetAuthnDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetAuthnDescriptorRequest();
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
    var message = createBaseGetAuthnDescriptorRequest();
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
    return GetAuthnDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetAuthnDescriptorRequest",
      value: GetAuthnDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetAuthnDescriptorRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetAuthnDescriptorRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
      value: GetAuthnDescriptorRequest.encode(message).finish()
    };
  }
};
exports.GetAuthnDescriptorRequest = GetAuthnDescriptorRequest;
function createBaseGetAuthnDescriptorResponse() {
  return {
    authn: AuthnDescriptor.fromPartial({})
  };
}
var GetAuthnDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetAuthnDescriptorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetAuthnDescriptorResponse();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      authn: object !== null && object !== void 0 && object.authn ? AuthnDescriptor.fromAmino(object.authn) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.authn = message.authn ? AuthnDescriptor.toAmino(message.authn) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetAuthnDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetAuthnDescriptorResponse",
      value: GetAuthnDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetAuthnDescriptorResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetAuthnDescriptorResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
      value: GetAuthnDescriptorResponse.encode(message).finish()
    };
  }
};
exports.GetAuthnDescriptorResponse = GetAuthnDescriptorResponse;
function createBaseGetChainDescriptorRequest() {
  return {};
}
var GetChainDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetChainDescriptorRequest();
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
    var message = createBaseGetChainDescriptorRequest();
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
    return GetChainDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetChainDescriptorRequest",
      value: GetChainDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetChainDescriptorRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetChainDescriptorRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
      value: GetChainDescriptorRequest.encode(message).finish()
    };
  }
};
exports.GetChainDescriptorRequest = GetChainDescriptorRequest;
function createBaseGetChainDescriptorResponse() {
  return {
    chain: ChainDescriptor.fromPartial({})
  };
}
var GetChainDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetChainDescriptorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetChainDescriptorResponse();
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      chain: object !== null && object !== void 0 && object.chain ? ChainDescriptor.fromAmino(object.chain) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.chain = message.chain ? ChainDescriptor.toAmino(message.chain) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetChainDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetChainDescriptorResponse",
      value: GetChainDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetChainDescriptorResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetChainDescriptorResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
      value: GetChainDescriptorResponse.encode(message).finish()
    };
  }
};
exports.GetChainDescriptorResponse = GetChainDescriptorResponse;
function createBaseGetCodecDescriptorRequest() {
  return {};
}
var GetCodecDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetCodecDescriptorRequest();
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
    var message = createBaseGetCodecDescriptorRequest();
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
    return GetCodecDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetCodecDescriptorRequest",
      value: GetCodecDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetCodecDescriptorRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetCodecDescriptorRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
      value: GetCodecDescriptorRequest.encode(message).finish()
    };
  }
};
exports.GetCodecDescriptorRequest = GetCodecDescriptorRequest;
function createBaseGetCodecDescriptorResponse() {
  return {
    codec: CodecDescriptor.fromPartial({})
  };
}
var GetCodecDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetCodecDescriptorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetCodecDescriptorResponse();
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      codec: object !== null && object !== void 0 && object.codec ? CodecDescriptor.fromAmino(object.codec) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.codec = message.codec ? CodecDescriptor.toAmino(message.codec) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetCodecDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetCodecDescriptorResponse",
      value: GetCodecDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetCodecDescriptorResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetCodecDescriptorResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
      value: GetCodecDescriptorResponse.encode(message).finish()
    };
  }
};
exports.GetCodecDescriptorResponse = GetCodecDescriptorResponse;
function createBaseGetConfigurationDescriptorRequest() {
  return {};
}
var GetConfigurationDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetConfigurationDescriptorRequest();
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
    var message = createBaseGetConfigurationDescriptorRequest();
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
    return GetConfigurationDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetConfigurationDescriptorRequest",
      value: GetConfigurationDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetConfigurationDescriptorRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetConfigurationDescriptorRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
      value: GetConfigurationDescriptorRequest.encode(message).finish()
    };
  }
};
exports.GetConfigurationDescriptorRequest = GetConfigurationDescriptorRequest;
function createBaseGetConfigurationDescriptorResponse() {
  return {
    config: ConfigurationDescriptor.fromPartial({})
  };
}
var GetConfigurationDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.config !== undefined) {
      ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetConfigurationDescriptorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetConfigurationDescriptorResponse();
    message.config = object.config !== undefined && object.config !== null ? ConfigurationDescriptor.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      config: object !== null && object !== void 0 && object.config ? ConfigurationDescriptor.fromAmino(object.config) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.config = message.config ? ConfigurationDescriptor.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetConfigurationDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetConfigurationDescriptorResponse",
      value: GetConfigurationDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetConfigurationDescriptorResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetConfigurationDescriptorResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
      value: GetConfigurationDescriptorResponse.encode(message).finish()
    };
  }
};
exports.GetConfigurationDescriptorResponse = GetConfigurationDescriptorResponse;
function createBaseGetQueryServicesDescriptorRequest() {
  return {};
}
var GetQueryServicesDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetQueryServicesDescriptorRequest();
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
    var message = createBaseGetQueryServicesDescriptorRequest();
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
    return GetQueryServicesDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetQueryServicesDescriptorRequest",
      value: GetQueryServicesDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetQueryServicesDescriptorRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetQueryServicesDescriptorRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
      value: GetQueryServicesDescriptorRequest.encode(message).finish()
    };
  }
};
exports.GetQueryServicesDescriptorRequest = GetQueryServicesDescriptorRequest;
function createBaseGetQueryServicesDescriptorResponse() {
  return {
    queries: QueryServicesDescriptor.fromPartial({})
  };
}
var GetQueryServicesDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.queries !== undefined) {
      QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetQueryServicesDescriptorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetQueryServicesDescriptorResponse();
    message.queries = object.queries !== undefined && object.queries !== null ? QueryServicesDescriptor.fromPartial(object.queries) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      queries: object !== null && object !== void 0 && object.queries ? QueryServicesDescriptor.fromAmino(object.queries) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.queries = message.queries ? QueryServicesDescriptor.toAmino(message.queries) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetQueryServicesDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetQueryServicesDescriptorResponse",
      value: GetQueryServicesDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetQueryServicesDescriptorResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetQueryServicesDescriptorResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
      value: GetQueryServicesDescriptorResponse.encode(message).finish()
    };
  }
};
exports.GetQueryServicesDescriptorResponse = GetQueryServicesDescriptorResponse;
function createBaseGetTxDescriptorRequest() {
  return {};
}
var GetTxDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxDescriptorRequest();
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
    var message = createBaseGetTxDescriptorRequest();
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
    return GetTxDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetTxDescriptorRequest",
      value: GetTxDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetTxDescriptorRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetTxDescriptorRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
      value: GetTxDescriptorRequest.encode(message).finish()
    };
  }
};
exports.GetTxDescriptorRequest = GetTxDescriptorRequest;
function createBaseGetTxDescriptorResponse() {
  return {
    tx: TxDescriptor.fromPartial({})
  };
}
var GetTxDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxDescriptorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetTxDescriptorResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      tx: object !== null && object !== void 0 && object.tx ? TxDescriptor.fromAmino(object.tx) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.tx = message.tx ? TxDescriptor.toAmino(message.tx) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetTxDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetTxDescriptorResponse",
      value: GetTxDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetTxDescriptorResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetTxDescriptorResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
      value: GetTxDescriptorResponse.encode(message).finish()
    };
  }
};
exports.GetTxDescriptorResponse = GetTxDescriptorResponse;
function createBaseQueryServicesDescriptor() {
  return {
    queryServices: []
  };
}
var QueryServicesDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator7 = _createForOfIteratorHelper(message.queryServices),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryServicesDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryServices.push(QueryServiceDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$queryServices;
    var message = createBaseQueryServicesDescriptor();
    message.queryServices = ((_object$queryServices = object.queryServices) === null || _object$queryServices === void 0 ? void 0 : _object$queryServices.map(function (e) {
      return QueryServiceDescriptor.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      queryServices: Array.isArray(object === null || object === void 0 ? void 0 : object.query_services) ? object.query_services.map(function (e) {
        return QueryServiceDescriptor.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.queryServices) {
      obj.query_services = message.queryServices.map(function (e) {
        return e ? QueryServiceDescriptor.toAmino(e) : undefined;
      });
    } else {
      obj.query_services = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryServicesDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryServicesDescriptor",
      value: QueryServicesDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryServicesDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryServicesDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
      value: QueryServicesDescriptor.encode(message).finish()
    };
  }
};
exports.QueryServicesDescriptor = QueryServicesDescriptor;
function createBaseQueryServiceDescriptor() {
  return {
    fullname: "",
    isModule: false,
    methods: []
  };
}
var QueryServiceDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.isModule === true) {
      writer.uint32(16).bool(message.isModule);
    }
    var _iterator8 = _createForOfIteratorHelper(message.methods),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseQueryServiceDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.isModule = reader.bool();
          break;
        case 3:
          message.methods.push(QueryMethodDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname5, _object$isModule, _object$methods;
    var message = createBaseQueryServiceDescriptor();
    message.fullname = (_object$fullname5 = object.fullname) !== null && _object$fullname5 !== void 0 ? _object$fullname5 : "";
    message.isModule = (_object$isModule = object.isModule) !== null && _object$isModule !== void 0 ? _object$isModule : false;
    message.methods = ((_object$methods = object.methods) === null || _object$methods === void 0 ? void 0 : _object$methods.map(function (e) {
      return QueryMethodDescriptor.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      fullname: object.fullname,
      isModule: object.is_module,
      methods: Array.isArray(object === null || object === void 0 ? void 0 : object.methods) ? object.methods.map(function (e) {
        return QueryMethodDescriptor.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.fullname = message.fullname;
    obj.is_module = message.isModule;
    if (message.methods) {
      obj.methods = message.methods.map(function (e) {
        return e ? QueryMethodDescriptor.toAmino(e) : undefined;
      });
    } else {
      obj.methods = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryServiceDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryServiceDescriptor",
      value: QueryServiceDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryServiceDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryServiceDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
      value: QueryServiceDescriptor.encode(message).finish()
    };
  }
};
exports.QueryServiceDescriptor = QueryServiceDescriptor;
function createBaseQueryMethodDescriptor() {
  return {
    name: "",
    fullQueryPath: ""
  };
}
var QueryMethodDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.fullQueryPath !== "") {
      writer.uint32(18).string(message.fullQueryPath);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryMethodDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.fullQueryPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name2, _object$fullQueryPath;
    var message = createBaseQueryMethodDescriptor();
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.fullQueryPath = (_object$fullQueryPath = object.fullQueryPath) !== null && _object$fullQueryPath !== void 0 ? _object$fullQueryPath : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      fullQueryPath: object.full_query_path
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    obj.full_query_path = message.fullQueryPath;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryMethodDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryMethodDescriptor",
      value: QueryMethodDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryMethodDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryMethodDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
      value: QueryMethodDescriptor.encode(message).finish()
    };
  }
};
exports.QueryMethodDescriptor = QueryMethodDescriptor;