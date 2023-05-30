import { Params, ParamsSDKType } from "./params";
import { StakeStorage, StakeStorageSDKType } from "./stake_storage";
import { EpochDetails, EpochDetailsSDKType } from "./epoch_details";
import { FixatedParams, FixatedParamsSDKType } from "./fixated_params";
import * as _m0 from "protobufjs/minimal";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
