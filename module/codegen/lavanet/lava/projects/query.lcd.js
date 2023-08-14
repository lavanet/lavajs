import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.info = this.info.bind(this);
    this.developer = this.developer.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params = {}) {
    const endpoint = `lavanet/lava/projects/params`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of ShowProject items. */
  async info(params) {
    const endpoint = `lavanet/lava/projects/info/${params.project}`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of ShowDevelopersProject items. */
  async developer(params) {
    const endpoint = `lavanet/lava/projects/developer/${params.developer}`;
    return await this.req.get(endpoint);
  }
}