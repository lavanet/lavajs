import { Spec, SpecSDKType } from "./spec";
import * as _m0 from "protobufjs/minimal";
export interface SpecAddProposal {
    title: string;
    description: string;
    specs: Spec[];
}
export interface SpecAddProposalSDKType {
    title: string;
    description: string;
    specs: SpecSDKType[];
}
export declare const SpecAddProposal: {
    encode(message: SpecAddProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpecAddProposal;
    fromJSON(object: any): SpecAddProposal;
    toJSON(message: SpecAddProposal): unknown;
    fromPartial(object: Partial<SpecAddProposal>): SpecAddProposal;
};
