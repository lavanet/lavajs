import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.spec = this.spec.bind(this);
    this.specAll = this.specAll.bind(this);
    this.specRaw = this.specRaw.bind(this);
    this.specAllRaw = this.specAllRaw.bind(this);
    this.showAllChains = this.showAllChains.bind(this);
    this.showChainInfo = this.showChainInfo.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params = {}) {
    const endpoint = `lavanet/lava/spec/params`;
    return await this.req.get(endpoint);
  }
  /* Queries a Spec by id. */
  async spec(params) {
    const endpoint = `lavanet/lava/spec/spec/${params.ChainID}`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of Spec items. */
  async specAll(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/spec/spec`;
    return await this.req.get(endpoint, options);
  }
  /* Queries a Spec by id (raw form). */
  async specRaw(params) {
    const endpoint = `lavanet/lava/spec/spec_raw/${params.ChainID}`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of Spec items (raw form). */
  async specAllRaw(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/spec/spec_raw`;
    return await this.req.get(endpoint, options);
  }
  /* Queries a list of ShowAllChains items. */
  async showAllChains(_params = {}) {
    const endpoint = `lavanet/lava/spec/show_all_chains`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of ShowChainInfo items. */
  async showChainInfo(params) {
    const endpoint = `lavanet/lava/spec/show_chain_info/${params.chainName}`;
    return await this.req.get(endpoint);
  }
}