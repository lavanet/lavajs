import { Plan, PlanSDKType } from "./plan";
import * as _m0 from "protobufjs/minimal";
export interface PlansAddProposal {
    title: string;
    description: string;
    plans: Plan[];
}
export interface PlansAddProposalSDKType {
    title: string;
    description: string;
    plans: PlanSDKType[];
}
export declare const PlansAddProposal: {
    encode(message: PlansAddProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlansAddProposal;
    fromJSON(object: any): PlansAddProposal;
    toJSON(message: PlansAddProposal): unknown;
    fromPartial(object: Partial<PlansAddProposal>): PlansAddProposal;
};
