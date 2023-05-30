import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Long } from "../helpers";
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
export declare const StakeToMaxCUList: {
    encode(message: StakeToMaxCUList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakeToMaxCUList;
    fromJSON(object: any): StakeToMaxCUList;
    toJSON(message: StakeToMaxCUList): unknown;
    fromPartial(object: Partial<StakeToMaxCUList>): StakeToMaxCUList;
};
export declare const StakeToMaxCU: {
    encode(message: StakeToMaxCU, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakeToMaxCU;
    fromJSON(object: any): StakeToMaxCU;
    toJSON(message: StakeToMaxCU): unknown;
    fromPartial(object: Partial<StakeToMaxCU>): StakeToMaxCU;
};
