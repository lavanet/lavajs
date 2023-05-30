import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDetection, MsgConflictVoteCommit, MsgConflictVoteReveal } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        detection(value: MsgDetection): {
            typeUrl: string;
            value: Uint8Array;
        };
        conflictVoteCommit(value: MsgConflictVoteCommit): {
            typeUrl: string;
            value: Uint8Array;
        };
        conflictVoteReveal(value: MsgConflictVoteReveal): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        detection(value: MsgDetection): {
            typeUrl: string;
            value: MsgDetection;
        };
        conflictVoteCommit(value: MsgConflictVoteCommit): {
            typeUrl: string;
            value: MsgConflictVoteCommit;
        };
        conflictVoteReveal(value: MsgConflictVoteReveal): {
            typeUrl: string;
            value: MsgConflictVoteReveal;
        };
    };
    toJSON: {
        detection(value: MsgDetection): {
            typeUrl: string;
            value: unknown;
        };
        conflictVoteCommit(value: MsgConflictVoteCommit): {
            typeUrl: string;
            value: unknown;
        };
        conflictVoteReveal(value: MsgConflictVoteReveal): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        detection(value: any): {
            typeUrl: string;
            value: MsgDetection;
        };
        conflictVoteCommit(value: any): {
            typeUrl: string;
            value: MsgConflictVoteCommit;
        };
        conflictVoteReveal(value: any): {
            typeUrl: string;
            value: MsgConflictVoteReveal;
        };
    };
    fromPartial: {
        detection(value: MsgDetection): {
            typeUrl: string;
            value: MsgDetection;
        };
        conflictVoteCommit(value: MsgConflictVoteCommit): {
            typeUrl: string;
            value: MsgConflictVoteCommit;
        };
        conflictVoteReveal(value: MsgConflictVoteReveal): {
            typeUrl: string;
            value: MsgConflictVoteReveal;
        };
    };
};
