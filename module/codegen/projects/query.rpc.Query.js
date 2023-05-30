import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryInfoRequest, QueryInfoResponse, QueryDeveloperRequest, QueryDeveloperResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.info = this.info.bind(this);
    this.developer = this.developer.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  info(request) {
    const data = QueryInfoRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Query", "Info", data);
    return promise.then(data => QueryInfoResponse.decode(new _m0.Reader(data)));
  }
  developer(request) {
    const data = QueryDeveloperRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Query", "Developer", data);
    return promise.then(data => QueryDeveloperResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    info(request) {
      return queryService.info(request);
    },
    developer(request) {
      return queryService.developer(request);
    }
  };
};