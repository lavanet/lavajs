import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { BinaryReader } from "../../../binary";
import { MsgAddKeys, MsgAddKeysResponse, MsgDelKeys, MsgDelKeysResponse, MsgSetPolicy, MsgSetPolicyResponse, MsgSetSubscriptionPolicy, MsgSetSubscriptionPolicyResponse } from "./tx";
/** Msg defines the Msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.addKeys = this.addKeys.bind(this);
    this.delKeys = this.delKeys.bind(this);
    this.setPolicy = this.setPolicy.bind(this);
    this.setSubscriptionPolicy = this.setSubscriptionPolicy.bind(this);
  }
  addKeys(request) {
    const data = MsgAddKeys.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Msg", "AddKeys", data);
    return promise.then(data => MsgAddKeysResponse.decode(new BinaryReader(data)));
  }
  delKeys(request) {
    const data = MsgDelKeys.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Msg", "DelKeys", data);
    return promise.then(data => MsgDelKeysResponse.decode(new BinaryReader(data)));
  }
  setPolicy(request) {
    const data = MsgSetPolicy.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Msg", "SetPolicy", data);
    return promise.then(data => MsgSetPolicyResponse.decode(new BinaryReader(data)));
  }
  setSubscriptionPolicy(request) {
    const data = MsgSetSubscriptionPolicy.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Msg", "SetSubscriptionPolicy", data);
    return promise.then(data => MsgSetSubscriptionPolicyResponse.decode(new BinaryReader(data)));
  }
}