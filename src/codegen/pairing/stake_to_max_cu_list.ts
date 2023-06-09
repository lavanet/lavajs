import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface StakeToMaxCUList {
  List: StakeToMaxCU[];
}
export interface StakeToMaxCUListSDKType {
  List: StakeToMaxCUSDKType[];
}
export interface StakeToMaxCU {
  StakeThreshold?: Coin;
  MaxComputeUnits: Long;
}
export interface StakeToMaxCUSDKType {
  StakeThreshold?: CoinSDKType;
  MaxComputeUnits: Long;
}
function createBaseStakeToMaxCUList(): StakeToMaxCUList {
  return {
    List: []
  };
}
export const StakeToMaxCUList = {
  encode(message: StakeToMaxCUList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.List) {
      StakeToMaxCU.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StakeToMaxCUList {
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
  fromJSON(object: any): StakeToMaxCUList {
    return {
      List: Array.isArray(object?.List) ? object.List.map((e: any) => StakeToMaxCU.fromJSON(e)) : []
    };
  },
  toJSON(message: StakeToMaxCUList): unknown {
    const obj: any = {};
    if (message.List) {
      obj.List = message.List.map(e => e ? StakeToMaxCU.toJSON(e) : undefined);
    } else {
      obj.List = [];
    }
    return obj;
  },
  fromPartial(object: Partial<StakeToMaxCUList>): StakeToMaxCUList {
    const message = createBaseStakeToMaxCUList();
    message.List = object.List?.map(e => StakeToMaxCU.fromPartial(e)) || [];
    return message;
  }
};
function createBaseStakeToMaxCU(): StakeToMaxCU {
  return {
    StakeThreshold: undefined,
    MaxComputeUnits: Long.UZERO
  };
}
export const StakeToMaxCU = {
  encode(message: StakeToMaxCU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.StakeThreshold !== undefined) {
      Coin.encode(message.StakeThreshold, writer.uint32(10).fork()).ldelim();
    }
    if (!message.MaxComputeUnits.isZero()) {
      writer.uint32(16).uint64(message.MaxComputeUnits);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StakeToMaxCU {
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
          message.MaxComputeUnits = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StakeToMaxCU {
    return {
      StakeThreshold: isSet(object.StakeThreshold) ? Coin.fromJSON(object.StakeThreshold) : undefined,
      MaxComputeUnits: isSet(object.MaxComputeUnits) ? Long.fromValue(object.MaxComputeUnits) : Long.UZERO
    };
  },
  toJSON(message: StakeToMaxCU): unknown {
    const obj: any = {};
    message.StakeThreshold !== undefined && (obj.StakeThreshold = message.StakeThreshold ? Coin.toJSON(message.StakeThreshold) : undefined);
    message.MaxComputeUnits !== undefined && (obj.MaxComputeUnits = (message.MaxComputeUnits || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<StakeToMaxCU>): StakeToMaxCU {
    const message = createBaseStakeToMaxCU();
    message.StakeThreshold = object.StakeThreshold !== undefined && object.StakeThreshold !== null ? Coin.fromPartial(object.StakeThreshold) : undefined;
    message.MaxComputeUnits = object.MaxComputeUnits !== undefined && object.MaxComputeUnits !== null ? Long.fromValue(object.MaxComputeUnits) : Long.UZERO;
    return message;
  }
};