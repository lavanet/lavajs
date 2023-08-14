import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDowntimeRequest, QueryDowntimeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.queryParams = this.queryParams.bind(this);
    this.queryDowntime = this.queryDowntime.bind(this);
  }
  /* QueryParams */
  async queryParams(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lavanet/lava/downtime/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* QueryDowntime */
  async queryDowntime(params: QueryDowntimeRequest): Promise<QueryDowntimeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.startBlock !== "undefined") {
      options.params.start_block = params.startBlock;
    }
    if (typeof params?.endBlock !== "undefined") {
      options.params.end_block = params.endBlock;
    }
    const endpoint = `lavanet/lava/downtime/v1/query_downtime`;
    return await this.req.get<QueryDowntimeResponseSDKType>(endpoint, options);
  }
}