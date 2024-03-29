"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryListResponse = exports.QueryListRequest = exports.QueryListProjectsResponse = exports.QueryListProjectsRequest = exports.QueryCurrentResponse = exports.QueryCurrentRequest = exports.ListInfoStruct = void 0;
var _params = require("./params");
var _subscription = require("./subscription");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryParamsRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: _params.Params.fromPartial({})
  };
}
var QueryParamsResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryParamsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _params.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _params.Params.fromAmino(object.params) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _params.Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryCurrentRequest() {
  return {
    consumer: ""
  };
}
var QueryCurrentRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryCurrentRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCurrentRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$consumer;
    var message = createBaseQueryCurrentRequest();
    message.consumer = (_object$consumer = object.consumer) !== null && _object$consumer !== void 0 ? _object$consumer : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      consumer: object.consumer
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.consumer = message.consumer;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryCurrentRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryCurrentRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryCurrentRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryCurrentRequest",
      value: QueryCurrentRequest.encode(message).finish()
    };
  }
};
exports.QueryCurrentRequest = QueryCurrentRequest;
function createBaseQueryCurrentResponse() {
  return {
    sub: undefined
  };
}
var QueryCurrentResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryCurrentResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.sub !== undefined) {
      _subscription.Subscription.encode(message.sub, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCurrentResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sub = _subscription.Subscription.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryCurrentResponse();
    message.sub = object.sub !== undefined && object.sub !== null ? _subscription.Subscription.fromPartial(object.sub) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      sub: object !== null && object !== void 0 && object.sub ? _subscription.Subscription.fromAmino(object.sub) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.sub = message.sub ? _subscription.Subscription.toAmino(message.sub) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryCurrentResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryCurrentResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryCurrentResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryCurrentResponse",
      value: QueryCurrentResponse.encode(message).finish()
    };
  }
};
exports.QueryCurrentResponse = QueryCurrentResponse;
function createBaseQueryListProjectsRequest() {
  return {
    subscription: ""
  };
}
var QueryListProjectsRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryListProjectsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.subscription !== "") {
      writer.uint32(10).string(message.subscription);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryListProjectsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$subscription;
    var message = createBaseQueryListProjectsRequest();
    message.subscription = (_object$subscription = object.subscription) !== null && _object$subscription !== void 0 ? _object$subscription : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      subscription: object.subscription
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.subscription = message.subscription;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryListProjectsRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryListProjectsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryListProjectsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListProjectsRequest",
      value: QueryListProjectsRequest.encode(message).finish()
    };
  }
};
exports.QueryListProjectsRequest = QueryListProjectsRequest;
function createBaseQueryListProjectsResponse() {
  return {
    projects: []
  };
}
var QueryListProjectsResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryListProjectsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.projects),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryListProjectsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$projects;
    var message = createBaseQueryListProjectsResponse();
    message.projects = ((_object$projects = object.projects) === null || _object$projects === void 0 ? void 0 : _object$projects.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      projects: Array.isArray(object === null || object === void 0 ? void 0 : object.projects) ? object.projects.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.projects) {
      obj.projects = message.projects.map(function (e) {
        return e;
      });
    } else {
      obj.projects = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryListProjectsResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryListProjectsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryListProjectsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListProjectsResponse",
      value: QueryListProjectsResponse.encode(message).finish()
    };
  }
};
exports.QueryListProjectsResponse = QueryListProjectsResponse;
function createBaseQueryListRequest() {
  return {};
}
var QueryListRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryListRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryListRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryListRequest();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryListRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryListRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryListRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListRequest",
      value: QueryListRequest.encode(message).finish()
    };
  }
};
exports.QueryListRequest = QueryListRequest;
function createBaseQueryListResponse() {
  return {
    subsInfo: []
  };
}
var QueryListResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryListResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.subsInfo),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        ListInfoStruct.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryListResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$subsInfo;
    var message = createBaseQueryListResponse();
    message.subsInfo = ((_object$subsInfo = object.subsInfo) === null || _object$subsInfo === void 0 ? void 0 : _object$subsInfo.map(function (e) {
      return ListInfoStruct.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      subsInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.subs_info) ? object.subs_info.map(function (e) {
        return ListInfoStruct.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.subsInfo) {
      obj.subs_info = message.subsInfo.map(function (e) {
        return e ? ListInfoStruct.toAmino(e) : undefined;
      });
    } else {
      obj.subs_info = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryListResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryListResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryListResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListResponse",
      value: QueryListResponse.encode(message).finish()
    };
  }
};
exports.QueryListResponse = QueryListResponse;
function createBaseListInfoStruct() {
  return {
    consumer: "",
    plan: "",
    durationTotal: BigInt(0),
    durationLeft: BigInt(0),
    monthExpiry: BigInt(0),
    monthCuTotal: BigInt(0),
    monthCuLeft: BigInt(0)
  };
}
var ListInfoStruct = {
  typeUrl: "/lavanet.lava.subscription.ListInfoStruct",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    if (message.plan !== "") {
      writer.uint32(18).string(message.plan);
    }
    if (message.durationTotal !== BigInt(0)) {
      writer.uint32(24).uint64(message.durationTotal);
    }
    if (message.durationLeft !== BigInt(0)) {
      writer.uint32(32).uint64(message.durationLeft);
    }
    if (message.monthExpiry !== BigInt(0)) {
      writer.uint32(40).uint64(message.monthExpiry);
    }
    if (message.monthCuTotal !== BigInt(0)) {
      writer.uint32(48).uint64(message.monthCuTotal);
    }
    if (message.monthCuLeft !== BigInt(0)) {
      writer.uint32(56).uint64(message.monthCuLeft);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseListInfoStruct();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$consumer2, _object$plan;
    var message = createBaseListInfoStruct();
    message.consumer = (_object$consumer2 = object.consumer) !== null && _object$consumer2 !== void 0 ? _object$consumer2 : "";
    message.plan = (_object$plan = object.plan) !== null && _object$plan !== void 0 ? _object$plan : "";
    message.durationTotal = object.durationTotal !== undefined && object.durationTotal !== null ? BigInt(object.durationTotal.toString()) : BigInt(0);
    message.durationLeft = object.durationLeft !== undefined && object.durationLeft !== null ? BigInt(object.durationLeft.toString()) : BigInt(0);
    message.monthExpiry = object.monthExpiry !== undefined && object.monthExpiry !== null ? BigInt(object.monthExpiry.toString()) : BigInt(0);
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? BigInt(object.monthCuTotal.toString()) : BigInt(0);
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? BigInt(object.monthCuLeft.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      consumer: object.consumer,
      plan: object.plan,
      durationTotal: BigInt(object.duration_total),
      durationLeft: BigInt(object.duration_left),
      monthExpiry: BigInt(object.month_expiry),
      monthCuTotal: BigInt(object.month_cu_total),
      monthCuLeft: BigInt(object.month_cu_left)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.consumer = message.consumer;
    obj.plan = message.plan;
    obj.duration_total = message.durationTotal ? message.durationTotal.toString() : undefined;
    obj.duration_left = message.durationLeft ? message.durationLeft.toString() : undefined;
    obj.month_expiry = message.monthExpiry ? message.monthExpiry.toString() : undefined;
    obj.month_cu_total = message.monthCuTotal ? message.monthCuTotal.toString() : undefined;
    obj.month_cu_left = message.monthCuLeft ? message.monthCuLeft.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ListInfoStruct.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ListInfoStruct.decode(message.value);
  },
  toProto: function toProto(message) {
    return ListInfoStruct.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.ListInfoStruct",
      value: ListInfoStruct.encode(message).finish()
    };
  }
};
exports.ListInfoStruct = ListInfoStruct;