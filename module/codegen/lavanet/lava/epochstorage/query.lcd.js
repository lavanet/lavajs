import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.stakeStorage = this.stakeStorage.bind(this);
    this.stakeStorageAll = this.stakeStorageAll.bind(this);
    this.epochDetails = this.epochDetails.bind(this);
    this.fixatedParams = this.fixatedParams.bind(this);
    this.fixatedParamsAll = this.fixatedParamsAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params = {}) {
    const endpoint = `lavanet/lava/epochstorage/params`;
    return await this.req.get(endpoint);
  }
  /* Queries a StakeStorage by index. */
  async stakeStorage(params) {
    const endpoint = `lavanet/lava/epochstorage/stake_storage/${params.index}`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of StakeStorage items. */
  async stakeStorageAll(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/epochstorage/stake_storage`;
    return await this.req.get(endpoint, options);
  }
  /* Queries a EpochDetails by index. */
  async epochDetails(_params = {}) {
    const endpoint = `lavanet/lava/epochstorage/epoch_details`;
    return await this.req.get(endpoint);
  }
  /* Queries a FixatedParams by index. */
  async fixatedParams(params) {
    const endpoint = `lavanet/lava/epochstorage/fixated_params/${params.index}`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of FixatedParams items. */
  async fixatedParamsAll(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/epochstorage/fixated_params`;
    return await this.req.get(endpoint, options);
  }
}