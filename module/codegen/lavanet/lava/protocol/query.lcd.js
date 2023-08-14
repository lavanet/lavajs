import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params = {}) {
    const endpoint = `lavanet/lava/protocol/params`;
    return await this.req.get(endpoint);
  }
}