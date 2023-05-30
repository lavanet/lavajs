import { ServiceApi, ServiceApiSDKType } from "./service_api";
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum Spec_ProvidersTypes {
    dynamic = 0,
    static = 1,
    UNRECOGNIZED = -1
}
export declare const Spec_ProvidersTypesSDKType: typeof Spec_ProvidersTypes;
export declare function spec_ProvidersTypesFromJSON(object: any): Spec_ProvidersTypes;
export declare function spec_ProvidersTypesToJSON(object: Spec_ProvidersTypes): string;
export interface Spec {
    index: string;
    name: string;
    imports: string[];
    apis: ServiceApi[];
    enabled: boolean;
    reliabilityThreshold: number;
    dataReliabilityEnabled: boolean;
    blockDistanceForFinalizedData: number;
    blocksInFinalizationProof: number;
    averageBlockTime: Long;
    allowedBlockLagForQosSync: Long;
    blockLastUpdated: Long;
    minStakeProvider?: Coin;
    minStakeClient?: Coin;
    providersTypes: Spec_ProvidersTypes;
}
export interface SpecSDKType {
    index: string;
    name: string;
    imports: string[];
    apis: ServiceApiSDKType[];
    enabled: boolean;
    reliability_threshold: number;
    data_reliability_enabled: boolean;
    block_distance_for_finalized_data: number;
    blocks_in_finalization_proof: number;
    average_block_time: Long;
    allowed_block_lag_for_qos_sync: Long;
    block_last_updated: Long;
    min_stake_provider?: CoinSDKType;
    min_stake_client?: CoinSDKType;
    providers_types: Spec_ProvidersTypes;
}
export declare const Spec: {
    encode(message: Spec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Spec;
    fromJSON(object: any): Spec;
    toJSON(message: Spec): unknown;
    fromPartial(object: Partial<Spec>): Spec;
};
