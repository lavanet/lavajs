import { Rpc } from "../helpers";
import { MsgStakeProvider, MsgStakeProviderResponse, MsgStakeClient, MsgStakeClientResponse, MsgUnstakeProvider, MsgUnstakeProviderResponse, MsgUnstakeClient, MsgUnstakeClientResponse, MsgRelayPayment, MsgRelayPaymentResponse, MsgFreezeProvider, MsgFreezeProviderResponse, MsgUnfreezeProvider, MsgUnfreezeProviderResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    stakeProvider(request: MsgStakeProvider): Promise<MsgStakeProviderResponse>;
    stakeClient(request: MsgStakeClient): Promise<MsgStakeClientResponse>;
    unstakeProvider(request: MsgUnstakeProvider): Promise<MsgUnstakeProviderResponse>;
    unstakeClient(request: MsgUnstakeClient): Promise<MsgUnstakeClientResponse>;
    relayPayment(request: MsgRelayPayment): Promise<MsgRelayPaymentResponse>;
    freezeProvider(request: MsgFreezeProvider): Promise<MsgFreezeProviderResponse>;
    unfreezeProvider(request: MsgUnfreezeProvider): Promise<MsgUnfreezeProviderResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    stakeProvider(request: MsgStakeProvider): Promise<MsgStakeProviderResponse>;
    stakeClient(request: MsgStakeClient): Promise<MsgStakeClientResponse>;
    unstakeProvider(request: MsgUnstakeProvider): Promise<MsgUnstakeProviderResponse>;
    unstakeClient(request: MsgUnstakeClient): Promise<MsgUnstakeClientResponse>;
    relayPayment(request: MsgRelayPayment): Promise<MsgRelayPaymentResponse>;
    freezeProvider(request: MsgFreezeProvider): Promise<MsgFreezeProviderResponse>;
    unfreezeProvider(request: MsgUnfreezeProvider): Promise<MsgUnfreezeProviderResponse>;
}
