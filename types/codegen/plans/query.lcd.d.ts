import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryListRequest, QueryListResponseSDKType, QueryInfoRequest, QueryInfoResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    list(_params?: QueryListRequest): Promise<QueryListResponseSDKType>;
    info(params: QueryInfoRequest): Promise<QueryInfoResponseSDKType>;
}
