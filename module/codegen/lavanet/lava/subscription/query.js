import { Params } from "./params";
import { Subscription } from "./subscription";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

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
function createBaseQueryCurrentRequest() {
  return {
    consumer: ""
  };
}
export const QueryCurrentRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$consumer;
    const message = createBaseQueryCurrentRequest();
    message.consumer = (_object$consumer = object.consumer) !== null && _object$consumer !== void 0 ? _object$consumer : "";
    return message;
  }
};
function createBaseQueryCurrentResponse() {
  return {
    sub: undefined
  };
}
export const QueryCurrentResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sub !== undefined) {
      Subscription.encode(message.sub, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sub = Subscription.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCurrentResponse();
    message.sub = object.sub !== undefined && object.sub !== null ? Subscription.fromPartial(object.sub) : undefined;
    return message;
  }
};
function createBaseQueryListProjectsRequest() {
  return {
    subscription: ""
  };
}
export const QueryListProjectsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.subscription !== "") {
      writer.uint32(10).string(message.subscription);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListProjectsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$subscription;
    const message = createBaseQueryListProjectsRequest();
    message.subscription = (_object$subscription = object.subscription) !== null && _object$subscription !== void 0 ? _object$subscription : "";
    return message;
  }
};
function createBaseQueryListProjectsResponse() {
  return {
    projects: []
  };
}
export const QueryListProjectsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.projects) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListProjectsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projects.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$projects;
    const message = createBaseQueryListProjectsResponse();
    message.projects = ((_object$projects = object.projects) === null || _object$projects === void 0 ? void 0 : _object$projects.map(e => e)) || [];
    return message;
  }
};
function createBaseQueryListRequest() {
  return {};
}
export const QueryListRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRequest();
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
    const message = createBaseQueryListRequest();
    return message;
  }
};
function createBaseQueryListResponse() {
  return {
    subsInfo: []
  };
}
export const QueryListResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.subsInfo) {
      ListInfoStruct.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subsInfo.push(ListInfoStruct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$subsInfo;
    const message = createBaseQueryListResponse();
    message.subsInfo = ((_object$subsInfo = object.subsInfo) === null || _object$subsInfo === void 0 ? void 0 : _object$subsInfo.map(e => ListInfoStruct.fromPartial(e))) || [];
    return message;
  }
};
function createBaseListInfoStruct() {
  return {
    consumer: "",
    plan: "",
    durationTotal: Long.UZERO,
    durationLeft: Long.UZERO,
    monthExpiry: Long.UZERO,
    monthCuTotal: Long.UZERO,
    monthCuLeft: Long.UZERO
  };
}
export const ListInfoStruct = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    if (message.plan !== "") {
      writer.uint32(18).string(message.plan);
    }
    if (!message.durationTotal.isZero()) {
      writer.uint32(24).uint64(message.durationTotal);
    }
    if (!message.durationLeft.isZero()) {
      writer.uint32(32).uint64(message.durationLeft);
    }
    if (!message.monthExpiry.isZero()) {
      writer.uint32(40).uint64(message.monthExpiry);
    }
    if (!message.monthCuTotal.isZero()) {
      writer.uint32(48).uint64(message.monthCuTotal);
    }
    if (!message.monthCuLeft.isZero()) {
      writer.uint32(56).uint64(message.monthCuLeft);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInfoStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        case 2:
          message.plan = reader.string();
          break;
        case 3:
          message.durationTotal = reader.uint64();
          break;
        case 4:
          message.durationLeft = reader.uint64();
          break;
        case 5:
          message.monthExpiry = reader.uint64();
          break;
        case 6:
          message.monthCuTotal = reader.uint64();
          break;
        case 7:
          message.monthCuLeft = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$consumer2, _object$plan;
    const message = createBaseListInfoStruct();
    message.consumer = (_object$consumer2 = object.consumer) !== null && _object$consumer2 !== void 0 ? _object$consumer2 : "";
    message.plan = (_object$plan = object.plan) !== null && _object$plan !== void 0 ? _object$plan : "";
    message.durationTotal = object.durationTotal !== undefined && object.durationTotal !== null ? Long.fromValue(object.durationTotal) : Long.UZERO;
    message.durationLeft = object.durationLeft !== undefined && object.durationLeft !== null ? Long.fromValue(object.durationLeft) : Long.UZERO;
    message.monthExpiry = object.monthExpiry !== undefined && object.monthExpiry !== null ? Long.fromValue(object.monthExpiry) : Long.UZERO;
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? Long.fromValue(object.monthCuTotal) : Long.UZERO;
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? Long.fromValue(object.monthCuLeft) : Long.UZERO;
    return message;
  }
};