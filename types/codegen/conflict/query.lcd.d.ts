import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetConflictVoteRequest, QueryGetConflictVoteResponseSDKType, QueryAllConflictVoteRequest, QueryAllConflictVoteResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    conflictVote(params: QueryGetConflictVoteRequest): Promise<QueryGetConflictVoteResponseSDKType>;
    conflictVoteAll(params?: QueryAllConflictVoteRequest): Promise<QueryAllConflictVoteResponseSDKType>;
}
