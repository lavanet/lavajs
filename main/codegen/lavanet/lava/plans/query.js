"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryListResponse = exports.QueryListRequest = exports.QueryInfoResponse = exports.QueryInfoRequest = exports.ListInfoStruct = void 0;
var _params = require("./params");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _plan = require("./plan");
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
  typeUrl: "/lavanet.lava.plans.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.plans.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.plans.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.plans.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryListRequest() {
  return {};
}
var QueryListRequest = {
  typeUrl: "/lavanet.lava.plans.QueryListRequest",
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
      typeUrl: "/lavanet.lava.plans.QueryListRequest",
      value: QueryListRequest.encode(message).finish()
    };
  }
};
exports.QueryListRequest = QueryListRequest;
function createBaseQueryListResponse() {
  return {
    plansInfo: []
  };
}
var QueryListResponse = {
  typeUrl: "/lavanet.lava.plans.QueryListResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.plansInfo),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ListInfoStruct.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryListResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plansInfo.push(ListInfoStruct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$plansInfo;
    var message = createBaseQueryListResponse();
    message.plansInfo = ((_object$plansInfo = object.plansInfo) === null || _object$plansInfo === void 0 ? void 0 : _object$plansInfo.map(function (e) {
      return ListInfoStruct.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      plansInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.plans_info) ? object.plans_info.map(function (e) {
        return ListInfoStruct.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.plansInfo) {
      obj.plans_info = message.plansInfo.map(function (e) {
        return e ? ListInfoStruct.toAmino(e) : undefined;
      });
    } else {
      obj.plans_info = [];
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
      typeUrl: "/lavanet.lava.plans.QueryListResponse",
      value: QueryListResponse.encode(message).finish()
    };
  }
};
exports.QueryListResponse = QueryListResponse;
function createBaseListInfoStruct() {
  return {
    index: "",
    description: "",
    price: _coin.Coin.fromPartial({})
  };
}
var ListInfoStruct = {
  typeUrl: "/lavanet.lava.plans.ListInfoStruct",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.price !== undefined) {
      _coin.Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
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
          message.index = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.price = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$description;
    var message = createBaseListInfoStruct();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.price = object.price !== undefined && object.price !== null ? _coin.Coin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      index: object.index,
      description: object.description,
      price: object !== null && object !== void 0 && object.price ? _coin.Coin.fromAmino(object.price) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.index = message.index;
    obj.description = message.description;
    obj.price = message.price ? _coin.Coin.toAmino(message.price) : undefined;
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
      typeUrl: "/lavanet.lava.plans.ListInfoStruct",
      value: ListInfoStruct.encode(message).finish()
    };
  }
};
exports.ListInfoStruct = ListInfoStruct;
function createBaseQueryInfoRequest() {
  return {
    planIndex: ""
  };
}
var QueryInfoRequest = {
  typeUrl: "/lavanet.lava.plans.QueryInfoRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.planIndex !== "") {
      writer.uint32(10).string(message.planIndex);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryInfoRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$planIndex;
    var message = createBaseQueryInfoRequest();
    message.planIndex = (_object$planIndex = object.planIndex) !== null && _object$planIndex !== void 0 ? _object$planIndex : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      planIndex: object.plan_index
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.plan_index = message.planIndex;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryInfoRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryInfoRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.plans.QueryInfoRequest",
      value: QueryInfoRequest.encode(message).finish()
    };
  }
};
exports.QueryInfoRequest = QueryInfoRequest;
function createBaseQueryInfoResponse() {
  return {
    planInfo: _plan.Plan.fromPartial({})
  };
}
var QueryInfoResponse = {
  typeUrl: "/lavanet.lava.plans.QueryInfoResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.planInfo !== undefined) {
      _plan.Plan.encode(message.planInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planInfo = _plan.Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryInfoResponse();
    message.planInfo = object.planInfo !== undefined && object.planInfo !== null ? _plan.Plan.fromPartial(object.planInfo) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      planInfo: object !== null && object !== void 0 && object.plan_info ? _plan.Plan.fromAmino(object.plan_info) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.plan_info = message.planInfo ? _plan.Plan.toAmino(message.planInfo) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryInfoResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryInfoResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.plans.QueryInfoResponse",
      value: QueryInfoResponse.encode(message).finish()
    };
  }
};
exports.QueryInfoResponse = QueryInfoResponse;