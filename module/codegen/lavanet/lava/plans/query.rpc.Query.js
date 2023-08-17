import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryListRequest, QueryListResponse, QueryInfoRequest, QueryInfoResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.list = this.list.bind(this);
    this.info = this.info.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.plans.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  list(request = {}) {
    const data = QueryListRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.plans.Query", "List", data);
    return promise.then(data => QueryListResponse.decode(new BinaryReader(data)));
  }
  info(request) {
    const data = QueryInfoRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.plans.Query", "Info", data);
    return promise.then(data => QueryInfoResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    list(request) {
      return queryService.list(request);
    },
    info(request) {
      return queryService.info(request);
    }
  };
};