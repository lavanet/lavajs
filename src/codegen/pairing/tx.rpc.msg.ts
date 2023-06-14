import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgStakeProvider, MsgStakeProviderResponse, MsgUnstakeProvider, MsgUnstakeProviderResponse, MsgRelayPayment, MsgRelayPaymentResponse, MsgFreezeProvider, MsgFreezeProviderResponse, MsgUnfreezeProvider, MsgUnfreezeProviderResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  stakeProvider(request: MsgStakeProvider): Promise<MsgStakeProviderResponse>;
  unstakeProvider(request: MsgUnstakeProvider): Promise<MsgUnstakeProviderResponse>;
  relayPayment(request: MsgRelayPayment): Promise<MsgRelayPaymentResponse>;
  freezeProvider(request: MsgFreezeProvider): Promise<MsgFreezeProviderResponse>;
  unfreezeProvider(request: MsgUnfreezeProvider): Promise<MsgUnfreezeProviderResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.stakeProvider = this.stakeProvider.bind(this);
    this.unstakeProvider = this.unstakeProvider.bind(this);
    this.relayPayment = this.relayPayment.bind(this);
    this.freezeProvider = this.freezeProvider.bind(this);
    this.unfreezeProvider = this.unfreezeProvider.bind(this);
  }
  stakeProvider(request: MsgStakeProvider): Promise<MsgStakeProviderResponse> {
    const data = MsgStakeProvider.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "StakeProvider", data);
    return promise.then(data => MsgStakeProviderResponse.decode(new _m0.Reader(data)));
  }
  unstakeProvider(request: MsgUnstakeProvider): Promise<MsgUnstakeProviderResponse> {
    const data = MsgUnstakeProvider.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "UnstakeProvider", data);
    return promise.then(data => MsgUnstakeProviderResponse.decode(new _m0.Reader(data)));
  }
  relayPayment(request: MsgRelayPayment): Promise<MsgRelayPaymentResponse> {
    const data = MsgRelayPayment.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "RelayPayment", data);
    return promise.then(data => MsgRelayPaymentResponse.decode(new _m0.Reader(data)));
  }
  freezeProvider(request: MsgFreezeProvider): Promise<MsgFreezeProviderResponse> {
    const data = MsgFreezeProvider.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "FreezeProvider", data);
    return promise.then(data => MsgFreezeProviderResponse.decode(new _m0.Reader(data)));
  }
  unfreezeProvider(request: MsgUnfreezeProvider): Promise<MsgUnfreezeProviderResponse> {
    const data = MsgUnfreezeProvider.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "UnfreezeProvider", data);
    return promise.then(data => MsgUnfreezeProviderResponse.decode(new _m0.Reader(data)));
  }
}