import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetSpecRequest, QueryGetSpecResponseSDKType, QueryAllSpecRequest, QueryAllSpecResponseSDKType, QueryShowAllChainsRequest, QueryShowAllChainsResponseSDKType, QueryShowChainInfoRequest, QueryShowChainInfoResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    spec(params: QueryGetSpecRequest): Promise<QueryGetSpecResponseSDKType>;
    specAll(params?: QueryAllSpecRequest): Promise<QueryAllSpecResponseSDKType>;
    specRaw(params: QueryGetSpecRequest): Promise<QueryGetSpecResponseSDKType>;
    specAllRaw(params?: QueryAllSpecRequest): Promise<QueryAllSpecResponseSDKType>;
    showAllChains(_params?: QueryShowAllChainsRequest): Promise<QueryShowAllChainsResponseSDKType>;
    showChainInfo(params: QueryShowChainInfoRequest): Promise<QueryShowChainInfoResponseSDKType>;
}
