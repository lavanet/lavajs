import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    conflictVote(request: QueryGetConflictVoteRequest): Promise<QueryGetConflictVoteResponse>;
    conflictVoteAll(request?: QueryAllConflictVoteRequest): Promise<QueryAllConflictVoteResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    conflictVote(request: QueryGetConflictVoteRequest): Promise<QueryGetConflictVoteResponse>;
    conflictVoteAll(request?: QueryAllConflictVoteRequest): Promise<QueryAllConflictVoteResponse>;
};
