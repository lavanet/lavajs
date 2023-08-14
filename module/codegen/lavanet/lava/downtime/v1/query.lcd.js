import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.queryParams = this.queryParams.bind(this);
    this.queryDowntime = this.queryDowntime.bind(this);
  }
  /* QueryParams */
  async queryParams(_params = {}) {
    const endpoint = `lavanet/lava/downtime/v1/params`;
    return await this.req.get(endpoint);
  }
  /* QueryDowntime */
  async queryDowntime(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.startBlock) !== "undefined") {
      options.params.start_block = params.startBlock;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.endBlock) !== "undefined") {
      options.params.end_block = params.endBlock;
    }
    const endpoint = `lavanet/lava/downtime/v1/query_downtime`;
    return await this.req.get(endpoint, options);
  }
}