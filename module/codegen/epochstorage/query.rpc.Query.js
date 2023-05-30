import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetStakeStorageRequest, QueryGetStakeStorageResponse, QueryAllStakeStorageRequest, QueryAllStakeStorageResponse, QueryGetEpochDetailsRequest, QueryGetEpochDetailsResponse, QueryGetFixatedParamsRequest, QueryGetFixatedParamsResponse, QueryAllFixatedParamsRequest, QueryAllFixatedParamsResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.stakeStorage = this.stakeStorage.bind(this);
    this.stakeStorageAll = this.stakeStorageAll.bind(this);
    this.epochDetails = this.epochDetails.bind(this);
    this.fixatedParams = this.fixatedParams.bind(this);
    this.fixatedParamsAll = this.fixatedParamsAll.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.epochstorage.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  stakeStorage(request) {
    const data = QueryGetStakeStorageRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.epochstorage.Query", "StakeStorage", data);
    return promise.then(data => QueryGetStakeStorageResponse.decode(new _m0.Reader(data)));
  }
  stakeStorageAll(request = {
    pagination: undefined
  }) {
    const data = QueryAllStakeStorageRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.epochstorage.Query", "StakeStorageAll", data);
    return promise.then(data => QueryAllStakeStorageResponse.decode(new _m0.Reader(data)));
  }
  epochDetails(request = {}) {
    const data = QueryGetEpochDetailsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.epochstorage.Query", "EpochDetails", data);
    return promise.then(data => QueryGetEpochDetailsResponse.decode(new _m0.Reader(data)));
  }
  fixatedParams(request) {
    const data = QueryGetFixatedParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.epochstorage.Query", "FixatedParams", data);
    return promise.then(data => QueryGetFixatedParamsResponse.decode(new _m0.Reader(data)));
  }
  fixatedParamsAll(request = {
    pagination: undefined
  }) {
    const data = QueryAllFixatedParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.epochstorage.Query", "FixatedParamsAll", data);
    return promise.then(data => QueryAllFixatedParamsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    stakeStorage(request) {
      return queryService.stakeStorage(request);
    },
    stakeStorageAll(request) {
      return queryService.stakeStorageAll(request);
    },
    epochDetails(request) {
      return queryService.epochDetails(request);
    },
    fixatedParams(request) {
      return queryService.fixatedParams(request);
    },
    fixatedParamsAll(request) {
      return queryService.fixatedParamsAll(request);
    }
  };
};