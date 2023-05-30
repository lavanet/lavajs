import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentRequest, QueryCurrentResponse, QueryListProjectsRequest, QueryListProjectsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Current items. */
    current(request: QueryCurrentRequest): Promise<QueryCurrentResponse>;
    /** Queries a list of ListProjects items. */
    listProjects(request: QueryListProjectsRequest): Promise<QueryListProjectsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    current(request: QueryCurrentRequest): Promise<QueryCurrentResponse>;
    listProjects(request: QueryListProjectsRequest): Promise<QueryListProjectsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    current(request: QueryCurrentRequest): Promise<QueryCurrentResponse>;
    listProjects(request: QueryListProjectsRequest): Promise<QueryListProjectsResponse>;
};
