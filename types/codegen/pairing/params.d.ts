import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    mintCoinsPerCU: string;
    burnCoinsPerCU: string;
    fraudStakeSlashingFactor: string;
    fraudSlashingAmount: Long;
    servicersToPairCount: Long;
    epochBlocksOverlap: Long;
    stakeToMaxCUList: string;
    unpayLimit: string;
    slashLimit: string;
    dataReliabilityReward: string;
    QoSWeight: string;
    recommendedEpochNumToCollectPayment: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    mintCoinsPerCU: string;
    burnCoinsPerCU: string;
    fraudStakeSlashingFactor: string;
    fraudSlashingAmount: Long;
    servicersToPairCount: Long;
    epochBlocksOverlap: Long;
    stakeToMaxCUList: string;
    unpayLimit: string;
    slashLimit: string;
    dataReliabilityReward: string;
    QoSWeight: string;
    recommendedEpochNumToCollectPayment: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
