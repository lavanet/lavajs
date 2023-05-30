import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EpochDetails {
    startBlock: Long;
    earliestStart: Long;
    deletedEpochs: Long[];
}
export interface EpochDetailsSDKType {
    startBlock: Long;
    earliestStart: Long;
    deletedEpochs: Long[];
}
export declare const EpochDetails: {
    encode(message: EpochDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochDetails;
    fromJSON(object: any): EpochDetails;
    toJSON(message: EpochDetails): unknown;
    fromPartial(object: Partial<EpochDetails>): EpochDetails;
};
