import { Params, ParamsSDKType } from "./params";
import { StakeStorage, StakeStorageSDKType } from "./stake_storage";
import { EpochDetails, EpochDetailsSDKType } from "./epoch_details";
import { FixatedParams, FixatedParamsSDKType } from "./fixated_params";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** GenesisState defines the epochstorage module's genesis state. */
export interface GenesisState {
  params?: Params;
  stakeStorageList: StakeStorage[];
  epochDetails?: EpochDetails;
  fixatedParamsList: FixatedParams[];
}
/** GenesisState defines the epochstorage module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  stakeStorageList: StakeStorageSDKType[];
  epochDetails?: EpochDetailsSDKType;
  fixatedParamsList: FixatedParamsSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    stakeStorageList: [],
    epochDetails: undefined,
    fixatedParamsList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stakeStorageList) {
      StakeStorage.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.epochDetails !== undefined) {
      EpochDetails.encode(message.epochDetails, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.fixatedParamsList) {
      FixatedParams.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      stakeStorageList: Array.isArray(object?.stakeStorageList) ? object.stakeStorageList.map((e: any) => StakeStorage.fromJSON(e)) : [],
      epochDetails: isSet(object.epochDetails) ? EpochDetails.fromJSON(object.epochDetails) : undefined,
      fixatedParamsList: Array.isArray(object?.fixatedParamsList) ? object.fixatedParamsList.map((e: any) => FixatedParams.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.stakeStorageList) {
      obj.stakeStorageList = message.stakeStorageList.map(e => e ? StakeStorage.toJSON(e) : undefined);
    } else {
      obj.stakeStorageList = [];
    }
    message.epochDetails !== undefined && (obj.epochDetails = message.epochDetails ? EpochDetails.toJSON(message.epochDetails) : undefined);
    if (message.fixatedParamsList) {
      obj.fixatedParamsList = message.fixatedParamsList.map(e => e ? FixatedParams.toJSON(e) : undefined);
    } else {
      obj.fixatedParamsList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.stakeStorageList = object.stakeStorageList?.map(e => StakeStorage.fromPartial(e)) || [];
    message.epochDetails = object.epochDetails !== undefined && object.epochDetails !== null ? EpochDetails.fromPartial(object.epochDetails) : undefined;
    message.fixatedParamsList = object.fixatedParamsList?.map(e => FixatedParams.fromPartial(e)) || [];
    return message;
  }
};