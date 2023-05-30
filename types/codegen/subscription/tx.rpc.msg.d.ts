import { Rpc } from "../helpers";
import { MsgBuy, MsgBuyResponse, MsgAddProject, MsgAddProjectResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    buy(request: MsgBuy): Promise<MsgBuyResponse>;
    addProject(request: MsgAddProject): Promise<MsgAddProjectResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    buy(request: MsgBuy): Promise<MsgBuyResponse>;
    addProject(request: MsgAddProject): Promise<MsgAddProjectResponse>;
}
