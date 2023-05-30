import { Coin } from "../cosmos/base/v1beta1/coin";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseStakeToMaxCUList() {
  return {
    List: []
  };
}
export const StakeToMaxCUList = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.List) {
      StakeToMaxCU.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeToMaxCUList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.List.push(StakeToMaxCU.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$List;
    const message = createBaseStakeToMaxCUList();
    message.List = ((_object$List = object.List) === null || _object$List === void 0 ? void 0 : _object$List.map(e => StakeToMaxCU.fromPartial(e))) || [];
    return message;
  }
};
function createBaseStakeToMaxCU() {
  return {
    StakeThreshold: undefined,
    MaxComputeUnits: Long.UZERO
  };
}
export const StakeToMaxCU = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.StakeThreshold !== undefined) {
      Coin.encode(message.StakeThreshold, writer.uint32(10).fork()).ldelim();
    }
    if (!message.MaxComputeUnits.isZero()) {
      writer.uint32(16).uint64(message.MaxComputeUnits);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeToMaxCU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.StakeThreshold = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.MaxComputeUnits = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseStakeToMaxCU();
    message.StakeThreshold = object.StakeThreshold !== undefined && object.StakeThreshold !== null ? Coin.fromPartial(object.StakeThreshold) : undefined;
    message.MaxComputeUnits = object.MaxComputeUnits !== undefined && object.MaxComputeUnits !== null ? Long.fromValue(object.MaxComputeUnits) : Long.UZERO;
    return message;
  }
};