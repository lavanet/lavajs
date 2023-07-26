import { Coin } from "../cosmos/base/v1beta1/coin";
import { Endpoint } from "./endpoint";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseStakeEntry() {
  return {
    stake: undefined,
    address: "",
    stakeAppliedBlock: Long.UZERO,
    endpoints: [],
    geolocation: Long.UZERO,
    chain: "",
    moniker: ""
  };
}
export const StakeEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (!message.stakeAppliedBlock.isZero()) {
      writer.uint32(24).uint64(message.stakeAppliedBlock);
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (!message.geolocation.isZero()) {
      writer.uint32(40).uint64(message.geolocation);
    }
    if (message.chain !== "") {
      writer.uint32(50).string(message.chain);
    }
    if (message.moniker !== "") {
      writer.uint32(66).string(message.moniker);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.stakeAppliedBlock = reader.uint64();
          break;
        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 5:
          message.geolocation = reader.uint64();
          break;
        case 6:
          message.chain = reader.string();
          break;
        case 8:
          message.moniker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$address, _object$endpoints, _object$chain, _object$moniker;
    const message = createBaseStakeEntry();
    message.stake = object.stake !== undefined && object.stake !== null ? Coin.fromPartial(object.stake) : undefined;
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.stakeAppliedBlock = object.stakeAppliedBlock !== undefined && object.stakeAppliedBlock !== null ? Long.fromValue(object.stakeAppliedBlock) : Long.UZERO;
    message.endpoints = ((_object$endpoints = object.endpoints) === null || _object$endpoints === void 0 ? void 0 : _object$endpoints.map(e => Endpoint.fromPartial(e))) || [];
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? Long.fromValue(object.geolocation) : Long.UZERO;
    message.chain = (_object$chain = object.chain) !== null && _object$chain !== void 0 ? _object$chain : "";
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    return message;
  }
};