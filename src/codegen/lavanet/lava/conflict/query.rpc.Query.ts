import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetConflictVoteRequest, QueryGetConflictVoteResponse, QueryAllConflictVoteRequest, QueryAllConflictVoteResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a ConflictVote by index. */
  conflictVote(request: QueryGetConflictVoteRequest): Promise<QueryGetConflictVoteResponse>;
  /** Queries a list of ConflictVote items. */
  conflictVoteAll(request?: QueryAllConflictVoteRequest): Promise<QueryAllConflictVoteResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.conflictVote = this.conflictVote.bind(this);
    this.conflictVoteAll = this.conflictVoteAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.conflict.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  conflictVote(request: QueryGetConflictVoteRequest): Promise<QueryGetConflictVoteResponse> {
    const data = QueryGetConflictVoteRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.conflict.Query", "ConflictVote", data);
    return promise.then(data => QueryGetConflictVoteResponse.decode(new BinaryReader(data)));
  }
  conflictVoteAll(request: QueryAllConflictVoteRequest = {
    pagination: undefined
  }): Promise<QueryAllConflictVoteResponse> {
    const data = QueryAllConflictVoteRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.conflict.Query", "ConflictVoteAll", data);
    return promise.then(data => QueryAllConflictVoteResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    conflictVote(request: QueryGetConflictVoteRequest): Promise<QueryGetConflictVoteResponse> {
      return queryService.conflictVote(request);
    },
    conflictVoteAll(request?: QueryAllConflictVoteRequest): Promise<QueryAllConflictVoteResponse> {
      return queryService.conflictVoteAll(request);
    }
  };
};