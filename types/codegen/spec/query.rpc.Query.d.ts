import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetSpecRequest, QueryGetSpecResponse, QueryAllSpecRequest, QueryAllSpecResponse, QueryShowAllChainsRequest, QueryShowAllChainsResponse, QueryShowChainInfoRequest, QueryShowChainInfoResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Spec by id. */
    spec(request: QueryGetSpecRequest): Promise<QueryGetSpecResponse>;
    /** Queries a list of Spec items. */
    specAll(request?: QueryAllSpecRequest): Promise<QueryAllSpecResponse>;
    /** Queries a Spec by id (raw form). */
    specRaw(request: QueryGetSpecRequest): Promise<QueryGetSpecResponse>;
    /** Queries a list of Spec items (raw form). */
    specAllRaw(request?: QueryAllSpecRequest): Promise<QueryAllSpecResponse>;
    /** Queries a list of ShowAllChains items. */
    showAllChains(request?: QueryShowAllChainsRequest): Promise<QueryShowAllChainsResponse>;
    /** Queries a list of ShowChainInfo items. */
    showChainInfo(request: QueryShowChainInfoRequest): Promise<QueryShowChainInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    spec(request: QueryGetSpecRequest): Promise<QueryGetSpecResponse>;
    specAll(request?: QueryAllSpecRequest): Promise<QueryAllSpecResponse>;
    specRaw(request: QueryGetSpecRequest): Promise<QueryGetSpecResponse>;
    specAllRaw(request?: QueryAllSpecRequest): Promise<QueryAllSpecResponse>;
    showAllChains(request?: QueryShowAllChainsRequest): Promise<QueryShowAllChainsResponse>;
    showChainInfo(request: QueryShowChainInfoRequest): Promise<QueryShowChainInfoResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    spec(request: QueryGetSpecRequest): Promise<QueryGetSpecResponse>;
    specAll(request?: QueryAllSpecRequest): Promise<QueryAllSpecResponse>;
    specRaw(request: QueryGetSpecRequest): Promise<QueryGetSpecResponse>;
    specAllRaw(request?: QueryAllSpecRequest): Promise<QueryAllSpecResponse>;
    showAllChains(request?: QueryShowAllChainsRequest): Promise<QueryShowAllChainsResponse>;
    showChainInfo(request: QueryShowChainInfoRequest): Promise<QueryShowChainInfoResponse>;
};
