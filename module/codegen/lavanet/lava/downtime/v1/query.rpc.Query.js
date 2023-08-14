import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDowntimeRequest, QueryDowntimeResponse } from "./query";
/** Query represents the query service API for the downtime module. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.queryParams = this.queryParams.bind(this);
    this.queryDowntime = this.queryDowntime.bind(this);
  }
  queryParams(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.downtime.v1.Query", "QueryParams", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  queryDowntime(request) {
    const data = QueryDowntimeRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.downtime.v1.Query", "QueryDowntime", data);
    return promise.then(data => QueryDowntimeResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryParams(request) {
      return queryService.queryParams(request);
    },
    queryDowntime(request) {
      return queryService.queryDowntime(request);
    }
  };
};