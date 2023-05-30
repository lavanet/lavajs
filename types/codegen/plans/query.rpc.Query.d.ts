import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryListRequest, QueryListResponse, QueryInfoRequest, QueryInfoResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of List items. */
    list(request?: QueryListRequest): Promise<QueryListResponse>;
    /** Queries an Info item. */
    info(request: QueryInfoRequest): Promise<QueryInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    list(request?: QueryListRequest): Promise<QueryListResponse>;
    info(request: QueryInfoRequest): Promise<QueryInfoResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    list(request?: QueryListRequest): Promise<QueryListResponse>;
    info(request: QueryInfoRequest): Promise<QueryInfoResponse>;
};
