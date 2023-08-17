import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { BinaryReader } from "../../../binary";
import { MsgDetection, MsgDetectionResponse, MsgConflictVoteCommit, MsgConflictVoteCommitResponse, MsgConflictVoteReveal, MsgConflictVoteRevealResponse } from "./tx";
/** Msg defines the Msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.detection = this.detection.bind(this);
    this.conflictVoteCommit = this.conflictVoteCommit.bind(this);
    this.conflictVoteReveal = this.conflictVoteReveal.bind(this);
  }
  detection(request) {
    const data = MsgDetection.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.conflict.Msg", "Detection", data);
    return promise.then(data => MsgDetectionResponse.decode(new BinaryReader(data)));
  }
  conflictVoteCommit(request) {
    const data = MsgConflictVoteCommit.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.conflict.Msg", "ConflictVoteCommit", data);
    return promise.then(data => MsgConflictVoteCommitResponse.decode(new BinaryReader(data)));
  }
  conflictVoteReveal(request) {
    const data = MsgConflictVoteReveal.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.conflict.Msg", "ConflictVoteReveal", data);
    return promise.then(data => MsgConflictVoteRevealResponse.decode(new BinaryReader(data)));
  }
}