import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetConflictVoteRequest, QueryGetConflictVoteResponse, QueryAllConflictVoteRequest, QueryAllConflictVoteResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.conflictVote = this.conflictVote.bind(this);
    this.conflictVoteAll = this.conflictVoteAll.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.conflict.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  conflictVote(request) {
    const data = QueryGetConflictVoteRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.conflict.Query", "ConflictVote", data);
    return promise.then(data => QueryGetConflictVoteResponse.decode(new _m0.Reader(data)));
  }
  conflictVoteAll(request = {
    pagination: undefined
  }) {
    const data = QueryAllConflictVoteRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.conflict.Query", "ConflictVoteAll", data);
    return promise.then(data => QueryAllConflictVoteResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    conflictVote(request) {
      return queryService.conflictVote(request);
    },
    conflictVoteAll(request) {
      return queryService.conflictVoteAll(request);
    }
  };
};