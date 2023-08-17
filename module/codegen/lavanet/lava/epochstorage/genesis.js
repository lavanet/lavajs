import { Params } from "./params";
import { StakeStorage } from "./stake_storage";
import { EpochDetails } from "./epoch_details";
import { FixatedParams } from "./fixated_params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the epochstorage module's genesis state. */

/** GenesisState defines the epochstorage module's genesis state. */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    stakeStorageList: [],
    epochDetails: EpochDetails.fromPartial({}),
    fixatedParamsList: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.epochstorage.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stakeStorageList) {
      StakeStorage.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.epochDetails !== undefined) {
      EpochDetails.encode(message.epochDetails, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.fixatedParamsList) {
      FixatedParams.encode(v, writer.uint32(34).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.stakeStorageList.push(StakeStorage.decode(reader, reader.uint32()));
          break;
        case 3:
          message.epochDetails = EpochDetails.decode(reader, reader.uint32());
          break;
        case 4:
          message.fixatedParamsList.push(FixatedParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$stakeStorageL, _object$fixatedParams;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.stakeStorageList = ((_object$stakeStorageL = object.stakeStorageList) === null || _object$stakeStorageL === void 0 ? void 0 : _object$stakeStorageL.map(e => StakeStorage.fromPartial(e))) || [];
    message.epochDetails = object.epochDetails !== undefined && object.epochDetails !== null ? EpochDetails.fromPartial(object.epochDetails) : undefined;
    message.fixatedParamsList = ((_object$fixatedParams = object.fixatedParamsList) === null || _object$fixatedParams === void 0 ? void 0 : _object$fixatedParams.map(e => FixatedParams.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? Params.fromAmino(object.params) : undefined,
      stakeStorageList: Array.isArray(object === null || object === void 0 ? void 0 : object.stakeStorageList) ? object.stakeStorageList.map(e => StakeStorage.fromAmino(e)) : [],
      epochDetails: object !== null && object !== void 0 && object.epochDetails ? EpochDetails.fromAmino(object.epochDetails) : undefined,
      fixatedParamsList: Array.isArray(object === null || object === void 0 ? void 0 : object.fixatedParamsList) ? object.fixatedParamsList.map(e => FixatedParams.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.stakeStorageList) {
      obj.stakeStorageList = message.stakeStorageList.map(e => e ? StakeStorage.toAmino(e) : undefined);
    } else {
      obj.stakeStorageList = [];
    }
    obj.epochDetails = message.epochDetails ? EpochDetails.toAmino(message.epochDetails) : undefined;
    if (message.fixatedParamsList) {
      obj.fixatedParamsList = message.fixatedParamsList.map(e => e ? FixatedParams.toAmino(e) : undefined);
    } else {
      obj.fixatedParamsList = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};