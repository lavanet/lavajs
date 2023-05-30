import { StakeEntry, StakeEntrySDKType } from "./stake_entry";
import * as _m0 from "protobufjs/minimal";
export interface StakeStorage {
    index: string;
    stakeEntries: StakeEntry[];
    epochBlockHash: Uint8Array;
}
export interface StakeStorageSDKType {
    index: string;
    stakeEntries: StakeEntrySDKType[];
    epochBlockHash: Uint8Array;
}
export declare const StakeStorage: {
    encode(message: StakeStorage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakeStorage;
    fromJSON(object: any): StakeStorage;
    toJSON(message: StakeStorage): unknown;
    fromPartial(object: Partial<StakeStorage>): StakeStorage;
};
