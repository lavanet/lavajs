import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    majorityPercent: string;
    voteStartSpan: Long;
    votePeriod: Long;
    Rewards?: Rewards;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    majorityPercent: string;
    voteStartSpan: Long;
    votePeriod: Long;
    Rewards?: RewardsSDKType;
}
export interface Rewards {
    winnerRewardPercent: string;
    clientRewardPercent: string;
    votersRewardPercent: string;
}
export interface RewardsSDKType {
    winnerRewardPercent: string;
    clientRewardPercent: string;
    votersRewardPercent: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const Rewards: {
    encode(message: Rewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Rewards;
    fromJSON(object: any): Rewards;
    toJSON(message: Rewards): unknown;
    fromPartial(object: Partial<Rewards>): Rewards;
};
