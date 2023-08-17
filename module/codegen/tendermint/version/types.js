import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */

/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */

/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */

/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */

function createBaseApp() {
  return {
    protocol: BigInt(0),
    software: ""
  };
}
export const App = {
  typeUrl: "/tendermint.version.App",
  encode(message, writer = BinaryWriter.create()) {
    if (message.protocol !== BigInt(0)) {
      writer.uint32(8).uint64(message.protocol);
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocol = reader.uint64();
          break;
        case 2:
          message.software = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$software;
    const message = createBaseApp();
    message.protocol = object.protocol !== undefined && object.protocol !== null ? BigInt(object.protocol.toString()) : BigInt(0);
    message.software = (_object$software = object.software) !== null && _object$software !== void 0 ? _object$software : "";
    return message;
  },
  fromAmino(object) {
    return {
      protocol: BigInt(object.protocol),
      software: object.software
    };
  },
  toAmino(message) {
    const obj = {};
    obj.protocol = message.protocol ? message.protocol.toString() : undefined;
    obj.software = message.software;
    return obj;
  },
  fromAminoMsg(object) {
    return App.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return App.decode(message.value);
  },
  toProto(message) {
    return App.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.version.App",
      value: App.encode(message).finish()
    };
  }
};
function createBaseConsensus() {
  return {
    block: BigInt(0),
    app: BigInt(0)
  };
}
export const Consensus = {
  typeUrl: "/tendermint.version.Consensus",
  encode(message, writer = BinaryWriter.create()) {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.app !== BigInt(0)) {
      writer.uint32(16).uint64(message.app);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        case 2:
          message.app = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConsensus();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      block: BigInt(object.block),
      app: BigInt(object.app)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.block = message.block ? message.block.toString() : undefined;
    obj.app = message.app ? message.app.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Consensus.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Consensus.decode(message.value);
  },
  toProto(message) {
    return Consensus.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.version.Consensus",
      value: Consensus.encode(message).finish()
    };
  }
};