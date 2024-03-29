import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCurrentRequest, QueryCurrentResponseSDKType, QueryListProjectsRequest, QueryListProjectsResponseSDKType, QueryListRequest, QueryListResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.current = this.current.bind(this);
    this.listProjects = this.listProjects.bind(this);
    this.list = this.list.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `lavanet/lava/subscription/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Current items. */
  async current(params: QueryCurrentRequest): Promise<QueryCurrentResponseSDKType> {
    const endpoint = `lavanet/lava/subscription/current/${params.consumer}`;
    return await this.req.get<QueryCurrentResponseSDKType>(endpoint);
  }
  /* Queries a list of ListProjects items. */
  async listProjects(params: QueryListProjectsRequest): Promise<QueryListProjectsResponseSDKType> {
    const endpoint = `lavanet/lava/subscription/list_projects/${params.subscription}`;
    return await this.req.get<QueryListProjectsResponseSDKType>(endpoint);
  }
  /* Queries a list of List items. */
  async list(_params: QueryListRequest = {}): Promise<QueryListResponseSDKType> {
    const endpoint = `lavanet/lava/subscription/list`;
    return await this.req.get<QueryListResponseSDKType>(endpoint);
  }
}