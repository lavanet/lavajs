import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetSpecRequest, QueryGetSpecResponse, QueryAllSpecRequest, QueryAllSpecResponse, QueryShowAllChainsRequest, QueryShowAllChainsResponse, QueryShowChainInfoRequest, QueryShowChainInfoResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.spec = this.spec.bind(this);
    this.specAll = this.specAll.bind(this);
    this.specRaw = this.specRaw.bind(this);
    this.specAllRaw = this.specAllRaw.bind(this);
    this.showAllChains = this.showAllChains.bind(this);
    this.showChainInfo = this.showChainInfo.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  spec(request) {
    const data = QueryGetSpecRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "Spec", data);
    return promise.then(data => QueryGetSpecResponse.decode(new BinaryReader(data)));
  }
  specAll(request = {
    pagination: undefined
  }) {
    const data = QueryAllSpecRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "SpecAll", data);
    return promise.then(data => QueryAllSpecResponse.decode(new BinaryReader(data)));
  }
  specRaw(request) {
    const data = QueryGetSpecRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "SpecRaw", data);
    return promise.then(data => QueryGetSpecResponse.decode(new BinaryReader(data)));
  }
  specAllRaw(request = {
    pagination: undefined
  }) {
    const data = QueryAllSpecRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "SpecAllRaw", data);
    return promise.then(data => QueryAllSpecResponse.decode(new BinaryReader(data)));
  }
  showAllChains(request = {}) {
    const data = QueryShowAllChainsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "ShowAllChains", data);
    return promise.then(data => QueryShowAllChainsResponse.decode(new BinaryReader(data)));
  }
  showChainInfo(request) {
    const data = QueryShowChainInfoRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "ShowChainInfo", data);
    return promise.then(data => QueryShowChainInfoResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    spec(request) {
      return queryService.spec(request);
    },
    specAll(request) {
      return queryService.specAll(request);
    },
    specRaw(request) {
      return queryService.specRaw(request);
    },
    specAllRaw(request) {
      return queryService.specAllRaw(request);
    },
    showAllChains(request) {
      return queryService.showAllChains(request);
    },
    showChainInfo(request) {
      return queryService.showChainInfo(request);
    }
  };
};