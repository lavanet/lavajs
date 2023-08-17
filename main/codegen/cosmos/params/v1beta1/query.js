"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subspace = exports.QuerySubspacesResponse = exports.QuerySubspacesRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
var _params = require("./params");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 */

/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 */

/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 */

/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 */

/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 */

/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 */

function createBaseQueryParamsRequest() {
  return {
    subspace: "",
    key: ""
  };
}
var QueryParamsRequest = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$subspace, _object$key;
    var message = createBaseQueryParamsRequest();
    message.subspace = (_object$subspace = object.subspace) !== null && _object$subspace !== void 0 ? _object$subspace : "";
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      subspace: object.subspace,
      key: object.key
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.subspace = message.subspace;
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    param: _params.ParamChange.fromPartial({})
  };
}
var QueryParamsResponse = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.param !== undefined) {
      _params.ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
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
          message.param = _params.ParamChange.decode(reader, reader.uint32());
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
    message.param = object.param !== undefined && object.param !== null ? _params.ParamChange.fromPartial(object.param) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      param: object !== null && object !== void 0 && object.param ? _params.ParamChange.fromAmino(object.param) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.param = message.param ? _params.ParamChange.toAmino(message.param) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQuerySubspacesRequest() {
  return {};
}
var QuerySubspacesRequest = {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySubspacesRequest();
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
    var message = createBaseQuerySubspacesRequest();
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
    return QuerySubspacesRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySubspacesRequest",
      value: QuerySubspacesRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QuerySubspacesRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QuerySubspacesRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
      value: QuerySubspacesRequest.encode(message).finish()
    };
  }
};
exports.QuerySubspacesRequest = QuerySubspacesRequest;
function createBaseQuerySubspacesResponse() {
  return {
    subspaces: []
  };
}
var QuerySubspacesResponse = {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.subspaces),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Subspace.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQuerySubspacesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaces.push(Subspace.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$subspaces;
    var message = createBaseQuerySubspacesResponse();
    message.subspaces = ((_object$subspaces = object.subspaces) === null || _object$subspaces === void 0 ? void 0 : _object$subspaces.map(function (e) {
      return Subspace.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      subspaces: Array.isArray(object === null || object === void 0 ? void 0 : object.subspaces) ? object.subspaces.map(function (e) {
        return Subspace.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map(function (e) {
        return e ? Subspace.toAmino(e) : undefined;
      });
    } else {
      obj.subspaces = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QuerySubspacesResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySubspacesResponse",
      value: QuerySubspacesResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QuerySubspacesResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QuerySubspacesResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
      value: QuerySubspacesResponse.encode(message).finish()
    };
  }
};
exports.QuerySubspacesResponse = QuerySubspacesResponse;
function createBaseSubspace() {
  return {
    subspace: "",
    keys: []
  };
}
var Subspace = {
  typeUrl: "/cosmos.params.v1beta1.Subspace",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    var _iterator2 = _createForOfIteratorHelper(message.keys),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(18).string(v);
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
    var message = createBaseSubspace();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$subspace2, _object$keys;
    var message = createBaseSubspace();
    message.subspace = (_object$subspace2 = object.subspace) !== null && _object$subspace2 !== void 0 ? _object$subspace2 : "";
    message.keys = ((_object$keys = object.keys) === null || _object$keys === void 0 ? void 0 : _object$keys.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      subspace: object.subspace,
      keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.subspace = message.subspace;
    if (message.keys) {
      obj.keys = message.keys.map(function (e) {
        return e;
      });
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Subspace.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Subspace",
      value: Subspace.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Subspace.decode(message.value);
  },
  toProto: function toProto(message) {
    return Subspace.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.params.v1beta1.Subspace",
      value: Subspace.encode(message).finish()
    };
  }
};
exports.Subspace = Subspace;