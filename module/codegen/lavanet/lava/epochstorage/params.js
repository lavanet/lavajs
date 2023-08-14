import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    unstakeHoldBlocks: Long.UZERO,
    epochBlocks: Long.UZERO,
    epochsToSave: Long.UZERO,
    latestParamChange: Long.UZERO,
    unstakeHoldBlocksStatic: Long.UZERO
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.unstakeHoldBlocks.isZero()) {
      writer.uint32(8).uint64(message.unstakeHoldBlocks);
    }
    if (!message.epochBlocks.isZero()) {
      writer.uint32(16).uint64(message.epochBlocks);
    }
    if (!message.epochsToSave.isZero()) {
      writer.uint32(24).uint64(message.epochsToSave);
    }
    if (!message.latestParamChange.isZero()) {
      writer.uint32(32).uint64(message.latestParamChange);
    }
    if (!message.unstakeHoldBlocksStatic.isZero()) {
      writer.uint32(40).uint64(message.unstakeHoldBlocksStatic);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unstakeHoldBlocks = reader.uint64();
          break;
        case 2:
          message.epochBlocks = reader.uint64();
          break;
        case 3:
          message.epochsToSave = reader.uint64();
          break;
        case 4:
          message.latestParamChange = reader.uint64();
          break;
        case 5:
          message.unstakeHoldBlocksStatic = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.unstakeHoldBlocks = object.unstakeHoldBlocks !== undefined && object.unstakeHoldBlocks !== null ? Long.fromValue(object.unstakeHoldBlocks) : Long.UZERO;
    message.epochBlocks = object.epochBlocks !== undefined && object.epochBlocks !== null ? Long.fromValue(object.epochBlocks) : Long.UZERO;
    message.epochsToSave = object.epochsToSave !== undefined && object.epochsToSave !== null ? Long.fromValue(object.epochsToSave) : Long.UZERO;
    message.latestParamChange = object.latestParamChange !== undefined && object.latestParamChange !== null ? Long.fromValue(object.latestParamChange) : Long.UZERO;
    message.unstakeHoldBlocksStatic = object.unstakeHoldBlocksStatic !== undefined && object.unstakeHoldBlocksStatic !== null ? Long.fromValue(object.unstakeHoldBlocksStatic) : Long.UZERO;
    return message;
  }
};