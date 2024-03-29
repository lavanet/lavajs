import { BinaryReader, BinaryWriter } from "../../../../binary";
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
export const AppDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBaseAppDescriptor();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
    message.queryServices = object.queryServices !== undefined && object.queryServices !== null ? QueryServicesDescriptor.fromPartial(object.queryServices) : undefined;
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      authn: object !== null && object !== void 0 && object.authn ? AuthnDescriptor.fromAmino(object.authn) : undefined,
      chain: object !== null && object !== void 0 && object.chain ? ChainDescriptor.fromAmino(object.chain) : undefined,
      codec: object !== null && object !== void 0 && object.codec ? CodecDescriptor.fromAmino(object.codec) : undefined,
      configuration: object !== null && object !== void 0 && object.configuration ? ConfigurationDescriptor.fromAmino(object.configuration) : undefined,
      queryServices: object !== null && object !== void 0 && object.query_services ? QueryServicesDescriptor.fromAmino(object.query_services) : undefined,
      tx: object !== null && object !== void 0 && object.tx ? TxDescriptor.fromAmino(object.tx) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.authn = message.authn ? AuthnDescriptor.toAmino(message.authn) : undefined;
    obj.chain = message.chain ? ChainDescriptor.toAmino(message.chain) : undefined;
    obj.codec = message.codec ? CodecDescriptor.toAmino(message.codec) : undefined;
    obj.configuration = message.configuration ? ConfigurationDescriptor.toAmino(message.configuration) : undefined;
    obj.query_services = message.queryServices ? QueryServicesDescriptor.toAmino(message.queryServices) : undefined;
    obj.tx = message.tx ? TxDescriptor.toAmino(message.tx) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return AppDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AppDescriptor",
      value: AppDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AppDescriptor.decode(message.value);
  },
  toProto(message) {
    return AppDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
      value: AppDescriptor.encode(message).finish()
    };
  }
};
function createBaseTxDescriptor() {
  return {
    fullname: "",
    msgs: []
  };
}
export const TxDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.msgs) {
      MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$fullname, _object$msgs;
    const message = createBaseTxDescriptor();
    message.fullname = (_object$fullname = object.fullname) !== null && _object$fullname !== void 0 ? _object$fullname : "";
    message.msgs = ((_object$msgs = object.msgs) === null || _object$msgs === void 0 ? void 0 : _object$msgs.map(e => MsgDescriptor.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      fullname: object.fullname,
      msgs: Array.isArray(object === null || object === void 0 ? void 0 : object.msgs) ? object.msgs.map(e => MsgDescriptor.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.fullname = message.fullname;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? MsgDescriptor.toAmino(e) : undefined);
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return TxDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxDescriptor",
      value: TxDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxDescriptor.decode(message.value);
  },
  toProto(message) {
    return TxDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
      value: TxDescriptor.encode(message).finish()
    };
  }
};
function createBaseAuthnDescriptor() {
  return {
    signModes: []
  };
}
export const AuthnDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.signModes) {
      SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthnDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$signModes;
    const message = createBaseAuthnDescriptor();
    message.signModes = ((_object$signModes = object.signModes) === null || _object$signModes === void 0 ? void 0 : _object$signModes.map(e => SigningModeDescriptor.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      signModes: Array.isArray(object === null || object === void 0 ? void 0 : object.sign_modes) ? object.sign_modes.map(e => SigningModeDescriptor.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.signModes) {
      obj.sign_modes = message.signModes.map(e => e ? SigningModeDescriptor.toAmino(e) : undefined);
    } else {
      obj.sign_modes = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return AuthnDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AuthnDescriptor",
      value: AuthnDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AuthnDescriptor.decode(message.value);
  },
  toProto(message) {
    return AuthnDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
      value: AuthnDescriptor.encode(message).finish()
    };
  }
};
function createBaseSigningModeDescriptor() {
  return {
    name: "",
    number: 0,
    authnInfoProviderMethodFullname: ""
  };
}
export const SigningModeDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningModeDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$name, _object$number, _object$authnInfoProv;
    const message = createBaseSigningModeDescriptor();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.number = (_object$number = object.number) !== null && _object$number !== void 0 ? _object$number : 0;
    message.authnInfoProviderMethodFullname = (_object$authnInfoProv = object.authnInfoProviderMethodFullname) !== null && _object$authnInfoProv !== void 0 ? _object$authnInfoProv : "";
    return message;
  },
  fromAmino(object) {
    return {
      name: object.name,
      number: object.number,
      authnInfoProviderMethodFullname: object.authn_info_provider_method_fullname
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.number = message.number;
    obj.authn_info_provider_method_fullname = message.authnInfoProviderMethodFullname;
    return obj;
  },
  fromAminoMsg(object) {
    return SigningModeDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SigningModeDescriptor",
      value: SigningModeDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SigningModeDescriptor.decode(message.value);
  },
  toProto(message) {
    return SigningModeDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
      value: SigningModeDescriptor.encode(message).finish()
    };
  }
};
function createBaseChainDescriptor() {
  return {
    id: ""
  };
}
export const ChainDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$id;
    const message = createBaseChainDescriptor();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    return message;
  },
  fromAmino(object) {
    return {
      id: object.id
    };
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object) {
    return ChainDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ChainDescriptor",
      value: ChainDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ChainDescriptor.decode(message.value);
  },
  toProto(message) {
    return ChainDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
      value: ChainDescriptor.encode(message).finish()
    };
  }
};
function createBaseCodecDescriptor() {
  return {
    interfaces: []
  };
}
export const CodecDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.interfaces) {
      InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodecDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$interfaces;
    const message = createBaseCodecDescriptor();
    message.interfaces = ((_object$interfaces = object.interfaces) === null || _object$interfaces === void 0 ? void 0 : _object$interfaces.map(e => InterfaceDescriptor.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      interfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaces) ? object.interfaces.map(e => InterfaceDescriptor.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(e => e ? InterfaceDescriptor.toAmino(e) : undefined);
    } else {
      obj.interfaces = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return CodecDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CodecDescriptor",
      value: CodecDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CodecDescriptor.decode(message.value);
  },
  toProto(message) {
    return CodecDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
      value: CodecDescriptor.encode(message).finish()
    };
  }
};
function createBaseInterfaceDescriptor() {
  return {
    fullname: "",
    interfaceAcceptingMessages: [],
    interfaceImplementers: []
  };
}
export const InterfaceDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.interfaceAcceptingMessages) {
      InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.interfaceImplementers) {
      InterfaceImplementerDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$fullname2, _object$interfaceAcce, _object$interfaceImpl;
    const message = createBaseInterfaceDescriptor();
    message.fullname = (_object$fullname2 = object.fullname) !== null && _object$fullname2 !== void 0 ? _object$fullname2 : "";
    message.interfaceAcceptingMessages = ((_object$interfaceAcce = object.interfaceAcceptingMessages) === null || _object$interfaceAcce === void 0 ? void 0 : _object$interfaceAcce.map(e => InterfaceAcceptingMessageDescriptor.fromPartial(e))) || [];
    message.interfaceImplementers = ((_object$interfaceImpl = object.interfaceImplementers) === null || _object$interfaceImpl === void 0 ? void 0 : _object$interfaceImpl.map(e => InterfaceImplementerDescriptor.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      fullname: object.fullname,
      interfaceAcceptingMessages: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_accepting_messages) ? object.interface_accepting_messages.map(e => InterfaceAcceptingMessageDescriptor.fromAmino(e)) : [],
      interfaceImplementers: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_implementers) ? object.interface_implementers.map(e => InterfaceImplementerDescriptor.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.fullname = message.fullname;
    if (message.interfaceAcceptingMessages) {
      obj.interface_accepting_messages = message.interfaceAcceptingMessages.map(e => e ? InterfaceAcceptingMessageDescriptor.toAmino(e) : undefined);
    } else {
      obj.interface_accepting_messages = [];
    }
    if (message.interfaceImplementers) {
      obj.interface_implementers = message.interfaceImplementers.map(e => e ? InterfaceImplementerDescriptor.toAmino(e) : undefined);
    } else {
      obj.interface_implementers = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return InterfaceDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InterfaceDescriptor",
      value: InterfaceDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return InterfaceDescriptor.decode(message.value);
  },
  toProto(message) {
    return InterfaceDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
      value: InterfaceDescriptor.encode(message).finish()
    };
  }
};
function createBaseInterfaceImplementerDescriptor() {
  return {
    fullname: "",
    typeUrl: ""
  };
}
export const InterfaceImplementerDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.typeUrl !== "") {
      writer.uint32(18).string(message.typeUrl);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceImplementerDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$fullname3, _object$typeUrl;
    const message = createBaseInterfaceImplementerDescriptor();
    message.fullname = (_object$fullname3 = object.fullname) !== null && _object$fullname3 !== void 0 ? _object$fullname3 : "";
    message.typeUrl = (_object$typeUrl = object.typeUrl) !== null && _object$typeUrl !== void 0 ? _object$typeUrl : "";
    return message;
  },
  fromAmino(object) {
    return {
      fullname: object.fullname,
      typeUrl: object.type_url
    };
  },
  toAmino(message) {
    const obj = {};
    obj.fullname = message.fullname;
    obj.type_url = message.typeUrl;
    return obj;
  },
  fromAminoMsg(object) {
    return InterfaceImplementerDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InterfaceImplementerDescriptor",
      value: InterfaceImplementerDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return InterfaceImplementerDescriptor.decode(message.value);
  },
  toProto(message) {
    return InterfaceImplementerDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
      value: InterfaceImplementerDescriptor.encode(message).finish()
    };
  }
};
function createBaseInterfaceAcceptingMessageDescriptor() {
  return {
    fullname: "",
    fieldDescriptorNames: []
  };
}
export const InterfaceAcceptingMessageDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.fieldDescriptorNames) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$fullname4, _object$fieldDescript;
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    message.fullname = (_object$fullname4 = object.fullname) !== null && _object$fullname4 !== void 0 ? _object$fullname4 : "";
    message.fieldDescriptorNames = ((_object$fieldDescript = object.fieldDescriptorNames) === null || _object$fieldDescript === void 0 ? void 0 : _object$fieldDescript.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      fullname: object.fullname,
      fieldDescriptorNames: Array.isArray(object === null || object === void 0 ? void 0 : object.field_descriptor_names) ? object.field_descriptor_names.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.fullname = message.fullname;
    if (message.fieldDescriptorNames) {
      obj.field_descriptor_names = message.fieldDescriptorNames.map(e => e);
    } else {
      obj.field_descriptor_names = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return InterfaceAcceptingMessageDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InterfaceAcceptingMessageDescriptor",
      value: InterfaceAcceptingMessageDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return InterfaceAcceptingMessageDescriptor.decode(message.value);
  },
  toProto(message) {
    return InterfaceAcceptingMessageDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
      value: InterfaceAcceptingMessageDescriptor.encode(message).finish()
    };
  }
};
function createBaseConfigurationDescriptor() {
  return {
    bech32AccountAddressPrefix: ""
  };
}
export const ConfigurationDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.bech32AccountAddressPrefix !== "") {
      writer.uint32(10).string(message.bech32AccountAddressPrefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigurationDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$bech32Account;
    const message = createBaseConfigurationDescriptor();
    message.bech32AccountAddressPrefix = (_object$bech32Account = object.bech32AccountAddressPrefix) !== null && _object$bech32Account !== void 0 ? _object$bech32Account : "";
    return message;
  },
  fromAmino(object) {
    return {
      bech32AccountAddressPrefix: object.bech32_account_address_prefix
    };
  },
  toAmino(message) {
    const obj = {};
    obj.bech32_account_address_prefix = message.bech32AccountAddressPrefix;
    return obj;
  },
  fromAminoMsg(object) {
    return ConfigurationDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConfigurationDescriptor",
      value: ConfigurationDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ConfigurationDescriptor.decode(message.value);
  },
  toProto(message) {
    return ConfigurationDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
      value: ConfigurationDescriptor.encode(message).finish()
    };
  }
};
function createBaseMsgDescriptor() {
  return {
    msgTypeUrl: ""
  };
}
export const MsgDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.msgTypeUrl !== "") {
      writer.uint32(10).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$msgTypeUrl;
    const message = createBaseMsgDescriptor();
    message.msgTypeUrl = (_object$msgTypeUrl = object.msgTypeUrl) !== null && _object$msgTypeUrl !== void 0 ? _object$msgTypeUrl : "";
    return message;
  },
  fromAmino(object) {
    return {
      msgTypeUrl: object.msg_type_url
    };
  },
  toAmino(message) {
    const obj = {};
    obj.msg_type_url = message.msgTypeUrl;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDescriptor",
      value: MsgDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDescriptor.decode(message.value);
  },
  toProto(message) {
    return MsgDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
      value: MsgDescriptor.encode(message).finish()
    };
  }
};
function createBaseGetAuthnDescriptorRequest() {
  return {};
}
export const GetAuthnDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseGetAuthnDescriptorRequest();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetAuthnDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetAuthnDescriptorRequest",
      value: GetAuthnDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetAuthnDescriptorRequest.decode(message.value);
  },
  toProto(message) {
    return GetAuthnDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
      value: GetAuthnDescriptorRequest.encode(message).finish()
    };
  }
};
function createBaseGetAuthnDescriptorResponse() {
  return {
    authn: AuthnDescriptor.fromPartial({})
  };
}
export const GetAuthnDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBaseGetAuthnDescriptorResponse();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      authn: object !== null && object !== void 0 && object.authn ? AuthnDescriptor.fromAmino(object.authn) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.authn = message.authn ? AuthnDescriptor.toAmino(message.authn) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return GetAuthnDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetAuthnDescriptorResponse",
      value: GetAuthnDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetAuthnDescriptorResponse.decode(message.value);
  },
  toProto(message) {
    return GetAuthnDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
      value: GetAuthnDescriptorResponse.encode(message).finish()
    };
  }
};
function createBaseGetChainDescriptorRequest() {
  return {};
}
export const GetChainDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseGetChainDescriptorRequest();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetChainDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetChainDescriptorRequest",
      value: GetChainDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetChainDescriptorRequest.decode(message.value);
  },
  toProto(message) {
    return GetChainDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
      value: GetChainDescriptorRequest.encode(message).finish()
    };
  }
};
function createBaseGetChainDescriptorResponse() {
  return {
    chain: ChainDescriptor.fromPartial({})
  };
}
export const GetChainDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBaseGetChainDescriptorResponse();
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      chain: object !== null && object !== void 0 && object.chain ? ChainDescriptor.fromAmino(object.chain) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.chain = message.chain ? ChainDescriptor.toAmino(message.chain) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return GetChainDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetChainDescriptorResponse",
      value: GetChainDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetChainDescriptorResponse.decode(message.value);
  },
  toProto(message) {
    return GetChainDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
      value: GetChainDescriptorResponse.encode(message).finish()
    };
  }
};
function createBaseGetCodecDescriptorRequest() {
  return {};
}
export const GetCodecDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseGetCodecDescriptorRequest();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetCodecDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetCodecDescriptorRequest",
      value: GetCodecDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetCodecDescriptorRequest.decode(message.value);
  },
  toProto(message) {
    return GetCodecDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
      value: GetCodecDescriptorRequest.encode(message).finish()
    };
  }
};
function createBaseGetCodecDescriptorResponse() {
  return {
    codec: CodecDescriptor.fromPartial({})
  };
}
export const GetCodecDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBaseGetCodecDescriptorResponse();
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      codec: object !== null && object !== void 0 && object.codec ? CodecDescriptor.fromAmino(object.codec) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.codec = message.codec ? CodecDescriptor.toAmino(message.codec) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return GetCodecDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetCodecDescriptorResponse",
      value: GetCodecDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetCodecDescriptorResponse.decode(message.value);
  },
  toProto(message) {
    return GetCodecDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
      value: GetCodecDescriptorResponse.encode(message).finish()
    };
  }
};
function createBaseGetConfigurationDescriptorRequest() {
  return {};
}
export const GetConfigurationDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseGetConfigurationDescriptorRequest();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetConfigurationDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetConfigurationDescriptorRequest",
      value: GetConfigurationDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetConfigurationDescriptorRequest.decode(message.value);
  },
  toProto(message) {
    return GetConfigurationDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
      value: GetConfigurationDescriptorRequest.encode(message).finish()
    };
  }
};
function createBaseGetConfigurationDescriptorResponse() {
  return {
    config: ConfigurationDescriptor.fromPartial({})
  };
}
export const GetConfigurationDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.config !== undefined) {
      ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBaseGetConfigurationDescriptorResponse();
    message.config = object.config !== undefined && object.config !== null ? ConfigurationDescriptor.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      config: object !== null && object !== void 0 && object.config ? ConfigurationDescriptor.fromAmino(object.config) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.config = message.config ? ConfigurationDescriptor.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return GetConfigurationDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetConfigurationDescriptorResponse",
      value: GetConfigurationDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetConfigurationDescriptorResponse.decode(message.value);
  },
  toProto(message) {
    return GetConfigurationDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
      value: GetConfigurationDescriptorResponse.encode(message).finish()
    };
  }
};
function createBaseGetQueryServicesDescriptorRequest() {
  return {};
}
export const GetQueryServicesDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseGetQueryServicesDescriptorRequest();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetQueryServicesDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetQueryServicesDescriptorRequest",
      value: GetQueryServicesDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetQueryServicesDescriptorRequest.decode(message.value);
  },
  toProto(message) {
    return GetQueryServicesDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
      value: GetQueryServicesDescriptorRequest.encode(message).finish()
    };
  }
};
function createBaseGetQueryServicesDescriptorResponse() {
  return {
    queries: QueryServicesDescriptor.fromPartial({})
  };
}
export const GetQueryServicesDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.queries !== undefined) {
      QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBaseGetQueryServicesDescriptorResponse();
    message.queries = object.queries !== undefined && object.queries !== null ? QueryServicesDescriptor.fromPartial(object.queries) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      queries: object !== null && object !== void 0 && object.queries ? QueryServicesDescriptor.fromAmino(object.queries) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.queries = message.queries ? QueryServicesDescriptor.toAmino(message.queries) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return GetQueryServicesDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetQueryServicesDescriptorResponse",
      value: GetQueryServicesDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetQueryServicesDescriptorResponse.decode(message.value);
  },
  toProto(message) {
    return GetQueryServicesDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
      value: GetQueryServicesDescriptorResponse.encode(message).finish()
    };
  }
};
function createBaseGetTxDescriptorRequest() {
  return {};
}
export const GetTxDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseGetTxDescriptorRequest();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetTxDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetTxDescriptorRequest",
      value: GetTxDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetTxDescriptorRequest.decode(message.value);
  },
  toProto(message) {
    return GetTxDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
      value: GetTxDescriptorRequest.encode(message).finish()
    };
  }
};
function createBaseGetTxDescriptorResponse() {
  return {
    tx: TxDescriptor.fromPartial({})
  };
}
export const GetTxDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBaseGetTxDescriptorResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      tx: object !== null && object !== void 0 && object.tx ? TxDescriptor.fromAmino(object.tx) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.tx = message.tx ? TxDescriptor.toAmino(message.tx) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return GetTxDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetTxDescriptorResponse",
      value: GetTxDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetTxDescriptorResponse.decode(message.value);
  },
  toProto(message) {
    return GetTxDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
      value: GetTxDescriptorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServicesDescriptor() {
  return {
    queryServices: []
  };
}
export const QueryServicesDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.queryServices) {
      QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServicesDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$queryServices;
    const message = createBaseQueryServicesDescriptor();
    message.queryServices = ((_object$queryServices = object.queryServices) === null || _object$queryServices === void 0 ? void 0 : _object$queryServices.map(e => QueryServiceDescriptor.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      queryServices: Array.isArray(object === null || object === void 0 ? void 0 : object.query_services) ? object.query_services.map(e => QueryServiceDescriptor.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.queryServices) {
      obj.query_services = message.queryServices.map(e => e ? QueryServiceDescriptor.toAmino(e) : undefined);
    } else {
      obj.query_services = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryServicesDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryServicesDescriptor",
      value: QueryServicesDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryServicesDescriptor.decode(message.value);
  },
  toProto(message) {
    return QueryServicesDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
      value: QueryServicesDescriptor.encode(message).finish()
    };
  }
};
function createBaseQueryServiceDescriptor() {
  return {
    fullname: "",
    isModule: false,
    methods: []
  };
}
export const QueryServiceDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.isModule === true) {
      writer.uint32(16).bool(message.isModule);
    }
    for (const v of message.methods) {
      QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$fullname5, _object$isModule, _object$methods;
    const message = createBaseQueryServiceDescriptor();
    message.fullname = (_object$fullname5 = object.fullname) !== null && _object$fullname5 !== void 0 ? _object$fullname5 : "";
    message.isModule = (_object$isModule = object.isModule) !== null && _object$isModule !== void 0 ? _object$isModule : false;
    message.methods = ((_object$methods = object.methods) === null || _object$methods === void 0 ? void 0 : _object$methods.map(e => QueryMethodDescriptor.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      fullname: object.fullname,
      isModule: object.is_module,
      methods: Array.isArray(object === null || object === void 0 ? void 0 : object.methods) ? object.methods.map(e => QueryMethodDescriptor.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.fullname = message.fullname;
    obj.is_module = message.isModule;
    if (message.methods) {
      obj.methods = message.methods.map(e => e ? QueryMethodDescriptor.toAmino(e) : undefined);
    } else {
      obj.methods = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryServiceDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryServiceDescriptor",
      value: QueryServiceDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryServiceDescriptor.decode(message.value);
  },
  toProto(message) {
    return QueryServiceDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
      value: QueryServiceDescriptor.encode(message).finish()
    };
  }
};
function createBaseQueryMethodDescriptor() {
  return {
    name: "",
    fullQueryPath: ""
  };
}
export const QueryMethodDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.fullQueryPath !== "") {
      writer.uint32(18).string(message.fullQueryPath);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMethodDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$name2, _object$fullQueryPath;
    const message = createBaseQueryMethodDescriptor();
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.fullQueryPath = (_object$fullQueryPath = object.fullQueryPath) !== null && _object$fullQueryPath !== void 0 ? _object$fullQueryPath : "";
    return message;
  },
  fromAmino(object) {
    return {
      name: object.name,
      fullQueryPath: object.full_query_path
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.full_query_path = message.fullQueryPath;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryMethodDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryMethodDescriptor",
      value: QueryMethodDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryMethodDescriptor.decode(message.value);
  },
  toProto(message) {
    return QueryMethodDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
      value: QueryMethodDescriptor.encode(message).finish()
    };
  }
};