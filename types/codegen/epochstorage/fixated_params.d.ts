import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface FixatedParams {
    index: string;
    parameter: Uint8Array;
    fixationBlock: Long;
}
export interface FixatedParamsSDKType {
    index: string;
    parameter: Uint8Array;
    fixationBlock: Long;
}
export declare const FixatedParams: {
    encode(message: FixatedParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FixatedParams;
    fromJSON(object: any): FixatedParams;
    toJSON(message: FixatedParams): unknown;
    fromPartial(object: Partial<FixatedParams>): FixatedParams;
};
