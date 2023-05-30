import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryInfoRequest, QueryInfoResponse, QueryDeveloperRequest, QueryDeveloperResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of ShowProject items. */
    info(request: QueryInfoRequest): Promise<QueryInfoResponse>;
    /** Queries a list of ShowDevelopersProject items. */
    developer(request: QueryDeveloperRequest): Promise<QueryDeveloperResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    info(request: QueryInfoRequest): Promise<QueryInfoResponse>;
    developer(request: QueryDeveloperRequest): Promise<QueryDeveloperResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    info(request: QueryInfoRequest): Promise<QueryInfoResponse>;
    developer(request: QueryDeveloperRequest): Promise<QueryDeveloperResponse>;
};
