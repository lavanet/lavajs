import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */

/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */

/** Params represents the parameters used for by the slashing module. */

/** Params represents the parameters used for by the slashing module. */

function createBaseValidatorSigningInfo() {
  return {
    address: "",
    startHeight: BigInt(0),
    indexOffset: BigInt(0),
    jailedUntil: new Date(),
    tombstoned: false,
    missedBlocksCounter: BigInt(0)
  };
}
export const ValidatorSigningInfo = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.startHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.startHeight);
    }
    if (message.indexOffset !== BigInt(0)) {
      writer.uint32(24).int64(message.indexOffset);
    }
    if (message.jailedUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.jailedUntil), writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (message.missedBlocksCounter !== BigInt(0)) {
      writer.uint32(48).int64(message.missedBlocksCounter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.startHeight = reader.int64();
          break;
        case 3:
          message.indexOffset = reader.int64();
          break;
        case 4:
          message.jailedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tombstoned = reader.bool();
          break;
        case 6:
          message.missedBlocksCounter = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$address, _object$jailedUntil, _object$tombstoned;
    const message = createBaseValidatorSigningInfo();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? BigInt(object.startHeight.toString()) : BigInt(0);
    message.indexOffset = object.indexOffset !== undefined && object.indexOffset !== null ? BigInt(object.indexOffset.toString()) : BigInt(0);
    message.jailedUntil = (_object$jailedUntil = object.jailedUntil) !== null && _object$jailedUntil !== void 0 ? _object$jailedUntil : undefined;
    message.tombstoned = (_object$tombstoned = object.tombstoned) !== null && _object$tombstoned !== void 0 ? _object$tombstoned : false;
    message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? BigInt(object.missedBlocksCounter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      address: object.address,
      startHeight: BigInt(object.start_height),
      indexOffset: BigInt(object.index_offset),
      jailedUntil: object.jailed_until,
      tombstoned: object.tombstoned,
      missedBlocksCounter: BigInt(object.missed_blocks_counter)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address;
    obj.start_height = message.startHeight ? message.startHeight.toString() : undefined;
    obj.index_offset = message.indexOffset ? message.indexOffset.toString() : undefined;
    obj.jailed_until = message.jailedUntil;
    obj.tombstoned = message.tombstoned;
    obj.missed_blocks_counter = message.missedBlocksCounter ? message.missedBlocksCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorSigningInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorSigningInfo",
      value: ValidatorSigningInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorSigningInfo.decode(message.value);
  },
  toProto(message) {
    return ValidatorSigningInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
      value: ValidatorSigningInfo.encode(message).finish()
    };
  }
};
function createBaseParams() {
  return {
    signedBlocksWindow: BigInt(0),
    minSignedPerWindow: new Uint8Array(),
    downtimeJailDuration: Duration.fromPartial({}),
    slashFractionDoubleSign: new Uint8Array(),
    slashFractionDowntime: new Uint8Array()
  };
}
export const Params = {
  typeUrl: "/cosmos.slashing.v1beta1.Params",
  encode(message, writer = BinaryWriter.create()) {
    if (message.signedBlocksWindow !== BigInt(0)) {
      writer.uint32(8).int64(message.signedBlocksWindow);
    }
    if (message.minSignedPerWindow.length !== 0) {
      writer.uint32(18).bytes(message.minSignedPerWindow);
    }
    if (message.downtimeJailDuration !== undefined) {
      Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.slashFractionDoubleSign.length !== 0) {
      writer.uint32(34).bytes(message.slashFractionDoubleSign);
    }
    if (message.slashFractionDowntime.length !== 0) {
      writer.uint32(42).bytes(message.slashFractionDowntime);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedBlocksWindow = reader.int64();
          break;
        case 2:
          message.minSignedPerWindow = reader.bytes();
          break;
        case 3:
          message.downtimeJailDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.slashFractionDoubleSign = reader.bytes();
          break;
        case 5:
          message.slashFractionDowntime = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$minSignedPerW, _object$slashFraction, _object$slashFraction2;
    const message = createBaseParams();
    message.signedBlocksWindow = object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null ? BigInt(object.signedBlocksWindow.toString()) : BigInt(0);
    message.minSignedPerWindow = (_object$minSignedPerW = object.minSignedPerWindow) !== null && _object$minSignedPerW !== void 0 ? _object$minSignedPerW : new Uint8Array();
    message.downtimeJailDuration = object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null ? Duration.fromPartial(object.downtimeJailDuration) : undefined;
    message.slashFractionDoubleSign = (_object$slashFraction = object.slashFractionDoubleSign) !== null && _object$slashFraction !== void 0 ? _object$slashFraction : new Uint8Array();
    message.slashFractionDowntime = (_object$slashFraction2 = object.slashFractionDowntime) !== null && _object$slashFraction2 !== void 0 ? _object$slashFraction2 : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      signedBlocksWindow: BigInt(object.signed_blocks_window),
      minSignedPerWindow: object.min_signed_per_window,
      downtimeJailDuration: object !== null && object !== void 0 && object.downtime_jail_duration ? Duration.fromAmino(object.downtime_jail_duration) : undefined,
      slashFractionDoubleSign: object.slash_fraction_double_sign,
      slashFractionDowntime: object.slash_fraction_downtime
    };
  },
  toAmino(message) {
    const obj = {};
    obj.signed_blocks_window = message.signedBlocksWindow ? message.signedBlocksWindow.toString() : undefined;
    obj.min_signed_per_window = message.minSignedPerWindow;
    obj.downtime_jail_duration = message.downtimeJailDuration ? Duration.toAmino(message.downtimeJailDuration) : undefined;
    obj.slash_fraction_double_sign = message.slashFractionDoubleSign;
    obj.slash_fraction_downtime = message.slashFractionDowntime;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};