import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the raw genesis transaction in JSON. */

/** GenesisState defines the raw genesis transaction in JSON. */

function createBaseGenesisState() {
  return {
    genTxs: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.genTxs) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genTxs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$genTxs;
    const message = createBaseGenesisState();
    message.genTxs = ((_object$genTxs = object.genTxs) === null || _object$genTxs === void 0 ? void 0 : _object$genTxs.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      genTxs: Array.isArray(object === null || object === void 0 ? void 0 : object.gen_txs) ? object.gen_txs.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.genTxs) {
      obj.gen_txs = message.genTxs.map(e => e);
    } else {
      obj.gen_txs = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.genutil.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};