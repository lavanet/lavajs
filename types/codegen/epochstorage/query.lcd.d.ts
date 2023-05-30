import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetStakeStorageRequest, QueryGetStakeStorageResponseSDKType, QueryAllStakeStorageRequest, QueryAllStakeStorageResponseSDKType, QueryGetEpochDetailsRequest, QueryGetEpochDetailsResponseSDKType, QueryGetFixatedParamsRequest, QueryGetFixatedParamsResponseSDKType, QueryAllFixatedParamsRequest, QueryAllFixatedParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    stakeStorage(params: QueryGetStakeStorageRequest): Promise<QueryGetStakeStorageResponseSDKType>;
    stakeStorageAll(params?: QueryAllStakeStorageRequest): Promise<QueryAllStakeStorageResponseSDKType>;
    epochDetails(_params?: QueryGetEpochDetailsRequest): Promise<QueryGetEpochDetailsResponseSDKType>;
    fixatedParams(params: QueryGetFixatedParamsRequest): Promise<QueryGetFixatedParamsResponseSDKType>;
    fixatedParamsAll(params?: QueryAllFixatedParamsRequest): Promise<QueryAllFixatedParamsResponseSDKType>;
}
