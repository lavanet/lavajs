import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.list = this.list.bind(this);
    this.info = this.info.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params = {}) {
    const endpoint = `lavanet/lava/plans/params`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of List items. */
  async list(_params = {}) {
    const endpoint = `lavanet/lava/plans/list`;
    return await this.req.get(endpoint);
  }
  /* Queries an Info item. */
  async info(params) {
    const endpoint = `lavanet/lava/plans/info/${params.planIndex}`;
    return await this.req.get(endpoint);
  }
}