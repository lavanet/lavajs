import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentRequest, QueryCurrentResponse, QueryListProjectsRequest, QueryListProjectsResponse, QueryListRequest, QueryListResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.current = this.current.bind(this);
    this.listProjects = this.listProjects.bind(this);
    this.list = this.list.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  current(request) {
    const data = QueryCurrentRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "Current", data);
    return promise.then(data => QueryCurrentResponse.decode(new BinaryReader(data)));
  }
  listProjects(request) {
    const data = QueryListProjectsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "ListProjects", data);
    return promise.then(data => QueryListProjectsResponse.decode(new BinaryReader(data)));
  }
  list(request = {}) {
    const data = QueryListRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "List", data);
    return promise.then(data => QueryListResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    current(request) {
      return queryService.current(request);
    },
    listProjects(request) {
      return queryService.listProjects(request);
    },
    list(request) {
      return queryService.list(request);
    }
  };
};