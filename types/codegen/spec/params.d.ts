import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    geolocationCount: Long;
    maxCU: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    geolocationCount: Long;
    maxCU: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
