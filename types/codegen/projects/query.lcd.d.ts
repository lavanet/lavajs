import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryInfoRequest, QueryInfoResponseSDKType, QueryDeveloperRequest, QueryDeveloperResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    info(params: QueryInfoRequest): Promise<QueryInfoResponseSDKType>;
    developer(params: QueryDeveloperRequest): Promise<QueryDeveloperResponseSDKType>;
}
