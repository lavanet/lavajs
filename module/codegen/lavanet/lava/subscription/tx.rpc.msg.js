import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgBuy, MsgBuyResponse, MsgAddProject, MsgAddProjectResponse, MsgDelProject, MsgDelProjectResponse } from "./tx";
/** Msg defines the Msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.buy = this.buy.bind(this);
    this.addProject = this.addProject.bind(this);
    this.delProject = this.delProject.bind(this);
  }
  buy(request) {
    const data = MsgBuy.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Msg", "Buy", data);
    return promise.then(data => MsgBuyResponse.decode(new _m0.Reader(data)));
  }
  addProject(request) {
    const data = MsgAddProject.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Msg", "AddProject", data);
    return promise.then(data => MsgAddProjectResponse.decode(new _m0.Reader(data)));
  }
  delProject(request) {
    const data = MsgDelProject.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Msg", "DelProject", data);
    return promise.then(data => MsgDelProjectResponse.decode(new _m0.Reader(data)));
  }
}