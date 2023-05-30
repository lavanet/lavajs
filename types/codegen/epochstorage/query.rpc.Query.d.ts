import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetStakeStorageRequest, QueryGetStakeStorageResponse, QueryAllStakeStorageRequest, QueryAllStakeStorageResponse, QueryGetEpochDetailsRequest, QueryGetEpochDetailsResponse, QueryGetFixatedParamsRequest, QueryGetFixatedParamsResponse, QueryAllFixatedParamsRequest, QueryAllFixatedParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a StakeStorage by index. */
    stakeStorage(request: QueryGetStakeStorageRequest): Promise<QueryGetStakeStorageResponse>;
    /** Queries a list of StakeStorage items. */
    stakeStorageAll(request?: QueryAllStakeStorageRequest): Promise<QueryAllStakeStorageResponse>;
    /** Queries a EpochDetails by index. */
    epochDetails(request?: QueryGetEpochDetailsRequest): Promise<QueryGetEpochDetailsResponse>;
    /** Queries a FixatedParams by index. */
    fixatedParams(request: QueryGetFixatedParamsRequest): Promise<QueryGetFixatedParamsResponse>;
    /** Queries a list of FixatedParams items. */
    fixatedParamsAll(request?: QueryAllFixatedParamsRequest): Promise<QueryAllFixatedParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    stakeStorage(request: QueryGetStakeStorageRequest): Promise<QueryGetStakeStorageResponse>;
    stakeStorageAll(request?: QueryAllStakeStorageRequest): Promise<QueryAllStakeStorageResponse>;
    epochDetails(request?: QueryGetEpochDetailsRequest): Promise<QueryGetEpochDetailsResponse>;
    fixatedParams(request: QueryGetFixatedParamsRequest): Promise<QueryGetFixatedParamsResponse>;
    fixatedParamsAll(request?: QueryAllFixatedParamsRequest): Promise<QueryAllFixatedParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    stakeStorage(request: QueryGetStakeStorageRequest): Promise<QueryGetStakeStorageResponse>;
    stakeStorageAll(request?: QueryAllStakeStorageRequest): Promise<QueryAllStakeStorageResponse>;
    epochDetails(request?: QueryGetEpochDetailsRequest): Promise<QueryGetEpochDetailsResponse>;
    fixatedParams(request: QueryGetFixatedParamsRequest): Promise<QueryGetFixatedParamsResponse>;
    fixatedParamsAll(request?: QueryAllFixatedParamsRequest): Promise<QueryAllFixatedParamsResponse>;
};
