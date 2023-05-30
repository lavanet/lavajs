import { Params, ParamsSDKType } from "./params";
import { ConflictVote, ConflictVoteSDKType } from "./conflict_vote";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the conflict module's genesis state. */
export interface GenesisState {
    params?: Params;
    conflictVoteList: ConflictVote[];
}
/** GenesisState defines the conflict module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    conflictVoteList: ConflictVoteSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
