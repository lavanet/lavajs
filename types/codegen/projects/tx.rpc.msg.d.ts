import { Rpc } from "../helpers";
import { MsgAddKeys, MsgAddKeysResponse, MsgSetPolicy, MsgSetPolicyResponse, MsgSetSubscriptionPolicy, MsgSetSubscriptionPolicyResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    addKeys(request: MsgAddKeys): Promise<MsgAddKeysResponse>;
    setPolicy(request: MsgSetPolicy): Promise<MsgSetPolicyResponse>;
    setSubscriptionPolicy(request: MsgSetSubscriptionPolicy): Promise<MsgSetSubscriptionPolicyResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    addKeys(request: MsgAddKeys): Promise<MsgAddKeysResponse>;
    setPolicy(request: MsgSetPolicy): Promise<MsgSetPolicyResponse>;
    setSubscriptionPolicy(request: MsgSetSubscriptionPolicy): Promise<MsgSetSubscriptionPolicyResponse>;
}
