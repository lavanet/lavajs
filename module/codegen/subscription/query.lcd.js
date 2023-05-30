import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.current = this.current.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params = {}) {
    const endpoint = `lavanet/lava/subscription/params`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of Current items. */
  async current(params) {
    const endpoint = `lavanet/lava/subscription/current/${params.consumer}`;
    return await this.req.get(endpoint);
  }
}