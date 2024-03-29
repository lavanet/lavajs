import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the crisis module's genesis state. */

/** GenesisState defines the crisis module's genesis state. */

function createBaseGenesisState() {
  return {
    constantFee: Coin.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.constantFee !== undefined) {
      Coin.encode(message.constantFee, writer.uint32(26).fork()).ldelim();
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
        case 3:
          message.constantFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.constantFee = object.constantFee !== undefined && object.constantFee !== null ? Coin.fromPartial(object.constantFee) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      constantFee: object !== null && object !== void 0 && object.constant_fee ? Coin.fromAmino(object.constant_fee) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.constant_fee = message.constantFee ? Coin.toAmino(message.constantFee) : undefined;
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
      typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};