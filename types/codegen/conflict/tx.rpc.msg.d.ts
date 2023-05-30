import { Rpc } from "../helpers";
import { MsgDetection, MsgDetectionResponse, MsgConflictVoteCommit, MsgConflictVoteCommitResponse, MsgConflictVoteReveal, MsgConflictVoteRevealResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    detection(request: MsgDetection): Promise<MsgDetectionResponse>;
    conflictVoteCommit(request: MsgConflictVoteCommit): Promise<MsgConflictVoteCommitResponse>;
    conflictVoteReveal(request: MsgConflictVoteReveal): Promise<MsgConflictVoteRevealResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    detection(request: MsgDetection): Promise<MsgDetectionResponse>;
    conflictVoteCommit(request: MsgConflictVoteCommit): Promise<MsgConflictVoteCommitResponse>;
    conflictVoteReveal(request: MsgConflictVoteReveal): Promise<MsgConflictVoteRevealResponse>;
}
