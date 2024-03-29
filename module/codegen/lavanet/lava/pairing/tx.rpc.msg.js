import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { BinaryReader } from "../../../binary";
import { MsgStakeProvider, MsgStakeProviderResponse, MsgUnstakeProvider, MsgUnstakeProviderResponse, MsgRelayPayment, MsgRelayPaymentResponse, MsgFreezeProvider, MsgFreezeProviderResponse, MsgUnfreezeProvider, MsgUnfreezeProviderResponse } from "./tx";
/** Msg defines the Msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.stakeProvider = this.stakeProvider.bind(this);
    this.unstakeProvider = this.unstakeProvider.bind(this);
    this.relayPayment = this.relayPayment.bind(this);
    this.freezeProvider = this.freezeProvider.bind(this);
    this.unfreezeProvider = this.unfreezeProvider.bind(this);
  }
  stakeProvider(request) {
    const data = MsgStakeProvider.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "StakeProvider", data);
    return promise.then(data => MsgStakeProviderResponse.decode(new BinaryReader(data)));
  }
  unstakeProvider(request) {
    const data = MsgUnstakeProvider.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "UnstakeProvider", data);
    return promise.then(data => MsgUnstakeProviderResponse.decode(new BinaryReader(data)));
  }
  relayPayment(request) {
    const data = MsgRelayPayment.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "RelayPayment", data);
    return promise.then(data => MsgRelayPaymentResponse.decode(new BinaryReader(data)));
  }
  freezeProvider(request) {
    const data = MsgFreezeProvider.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "FreezeProvider", data);
    return promise.then(data => MsgFreezeProviderResponse.decode(new BinaryReader(data)));
  }
  unfreezeProvider(request) {
    const data = MsgUnfreezeProvider.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "UnfreezeProvider", data);
    return promise.then(data => MsgUnfreezeProviderResponse.decode(new BinaryReader(data)));
  }
}