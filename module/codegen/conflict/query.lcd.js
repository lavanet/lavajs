import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.conflictVote = this.conflictVote.bind(this);
    this.conflictVoteAll = this.conflictVoteAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params = {}) {
    const endpoint = `lavanet/lava/conflict/params`;
    return await this.req.get(endpoint);
  }
  /* Queries a ConflictVote by index. */
  async conflictVote(params) {
    const endpoint = `lavanet/lava/conflict/conflict_vote/${params.index}`;
    return await this.req.get(endpoint);
  }
  /* Queries a list of ConflictVote items. */
  async conflictVoteAll(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `lavanet/lava/conflict/conflict_vote`;
    return await this.req.get(endpoint, options);
  }
}