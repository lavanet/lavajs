import { Params, ParamsSDKType } from "./params";
import { Spec, SpecSDKType } from "./spec";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the spec module's genesis state. */
export interface GenesisState {
    params?: Params;
    specList: Spec[];
    specCount: Long;
}
/** GenesisState defines the spec module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    specList: SpecSDKType[];
    specCount: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
