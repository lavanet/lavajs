import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Endpoint, EndpointSDKType } from "./endpoint";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface StakeEntry {
    stake?: Coin;
    address: string;
    stakeAppliedBlock: Long;
    endpoints: Endpoint[];
    geolocation: Long;
    chain: string;
    moniker: string;
}
export interface StakeEntrySDKType {
    stake?: CoinSDKType;
    address: string;
    stake_applied_block: Long;
    endpoints: EndpointSDKType[];
    geolocation: Long;
    chain: string;
    moniker: string;
}
export declare const StakeEntry: {
    encode(message: StakeEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakeEntry;
    fromJSON(object: any): StakeEntry;
    toJSON(message: StakeEntry): unknown;
    fromPartial(object: Partial<StakeEntry>): StakeEntry;
};
