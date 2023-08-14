import { Downtime, Params } from "./downtime";
import { Duration } from "../../../../google/protobuf/duration";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */

/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */

/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */

/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */

function createBaseQueryDowntimeRequest() {
  return {
    startBlock: Long.UZERO,
    endBlock: Long.UZERO
  };
}
export const QueryDowntimeRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.startBlock.isZero()) {
      writer.uint32(8).uint64(message.startBlock);
    }
    if (!message.endBlock.isZero()) {
      writer.uint32(16).uint64(message.endBlock);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDowntimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlock = reader.uint64();
          break;
        case 2:
          message.endBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDowntimeRequest();
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? Long.fromValue(object.startBlock) : Long.UZERO;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? Long.fromValue(object.endBlock) : Long.UZERO;
    return message;
  }
};
function createBaseQueryDowntimeResponse() {
  return {
    downtimes: [],
    cumulativeDowntimeDuration: undefined
  };
}
export const QueryDowntimeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.downtimes) {
      Downtime.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.cumulativeDowntimeDuration !== undefined) {
      Duration.encode(message.cumulativeDowntimeDuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDowntimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downtimes.push(Downtime.decode(reader, reader.uint32()));
          break;
        case 2:
          message.cumulativeDowntimeDuration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$downtimes;
    const message = createBaseQueryDowntimeResponse();
    message.downtimes = ((_object$downtimes = object.downtimes) === null || _object$downtimes === void 0 ? void 0 : _object$downtimes.map(e => Downtime.fromPartial(e))) || [];
    message.cumulativeDowntimeDuration = object.cumulativeDowntimeDuration !== undefined && object.cumulativeDowntimeDuration !== null ? Duration.fromPartial(object.cumulativeDowntimeDuration) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};