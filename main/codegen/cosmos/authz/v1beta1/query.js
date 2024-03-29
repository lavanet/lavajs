"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryGrantsResponse = exports.QueryGrantsRequest = exports.QueryGranterGrantsResponse = exports.QueryGranterGrantsRequest = exports.QueryGranteeGrantsResponse = exports.QueryGranteeGrantsRequest = void 0;
var _pagination = require("../../base/query/v1beta1/pagination");
var _authz = require("./authz");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */

/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */

/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */

/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */

/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */

/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */

/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */

/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */

/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */

/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */

/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */

/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */

function createBaseQueryGrantsRequest() {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGrantsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.msgTypeUrl = reader.string();
          break;
        case 4:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$granter, _object$grantee, _object$msgTypeUrl;
    var message = createBaseQueryGrantsRequest();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.msgTypeUrl = (_object$msgTypeUrl = object.msgTypeUrl) !== null && _object$msgTypeUrl !== void 0 ? _object$msgTypeUrl : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      granter: object.granter,
      grantee: object.grantee,
      msgTypeUrl: object.msg_type_url,
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.msg_type_url = message.msgTypeUrl;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGrantsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGrantsRequest",
      value: QueryGrantsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGrantsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGrantsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
      value: QueryGrantsRequest.encode(message).finish()
    };
  }
};
exports.QueryGrantsRequest = QueryGrantsRequest;
function createBaseQueryGrantsResponse() {
  return {
    grants: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.grants),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _authz.Grant.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGrantsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(_authz.Grant.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$grants;
    var message = createBaseQueryGrantsResponse();
    message.grants = ((_object$grants = object.grants) === null || _object$grants === void 0 ? void 0 : _object$grants.map(function (e) {
      return _authz.Grant.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(function (e) {
        return _authz.Grant.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.grants) {
      obj.grants = message.grants.map(function (e) {
        return e ? _authz.Grant.toAmino(e) : undefined;
      });
    } else {
      obj.grants = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGrantsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGrantsResponse",
      value: QueryGrantsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGrantsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGrantsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
      value: QueryGrantsResponse.encode(message).finish()
    };
  }
};
exports.QueryGrantsResponse = QueryGrantsResponse;
function createBaseQueryGranterGrantsRequest() {
  return {
    granter: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryGranterGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGranterGrantsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$granter2;
    var message = createBaseQueryGranterGrantsRequest();
    message.granter = (_object$granter2 = object.granter) !== null && _object$granter2 !== void 0 ? _object$granter2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      granter: object.granter,
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.granter = message.granter;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGranterGrantsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGranterGrantsRequest",
      value: QueryGranterGrantsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGranterGrantsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGranterGrantsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
      value: QueryGranterGrantsRequest.encode(message).finish()
    };
  }
};
exports.QueryGranterGrantsRequest = QueryGranterGrantsRequest;
function createBaseQueryGranterGrantsResponse() {
  return {
    grants: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryGranterGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.grants),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _authz.GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGranterGrantsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(_authz.GrantAuthorization.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$grants2;
    var message = createBaseQueryGranterGrantsResponse();
    message.grants = ((_object$grants2 = object.grants) === null || _object$grants2 === void 0 ? void 0 : _object$grants2.map(function (e) {
      return _authz.GrantAuthorization.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(function (e) {
        return _authz.GrantAuthorization.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.grants) {
      obj.grants = message.grants.map(function (e) {
        return e ? _authz.GrantAuthorization.toAmino(e) : undefined;
      });
    } else {
      obj.grants = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGranterGrantsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGranterGrantsResponse",
      value: QueryGranterGrantsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGranterGrantsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGranterGrantsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
      value: QueryGranterGrantsResponse.encode(message).finish()
    };
  }
};
exports.QueryGranterGrantsResponse = QueryGranterGrantsResponse;
function createBaseQueryGranteeGrantsRequest() {
  return {
    grantee: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryGranteeGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGranteeGrantsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$grantee2;
    var message = createBaseQueryGranteeGrantsRequest();
    message.grantee = (_object$grantee2 = object.grantee) !== null && _object$grantee2 !== void 0 ? _object$grantee2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      grantee: object.grantee,
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.grantee = message.grantee;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGranteeGrantsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGranteeGrantsRequest",
      value: QueryGranteeGrantsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGranteeGrantsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGranteeGrantsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
      value: QueryGranteeGrantsRequest.encode(message).finish()
    };
  }
};
exports.QueryGranteeGrantsRequest = QueryGranteeGrantsRequest;
function createBaseQueryGranteeGrantsResponse() {
  return {
    grants: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryGranteeGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator3 = _createForOfIteratorHelper(message.grants),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _authz.GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGranteeGrantsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(_authz.GrantAuthorization.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$grants3;
    var message = createBaseQueryGranteeGrantsResponse();
    message.grants = ((_object$grants3 = object.grants) === null || _object$grants3 === void 0 ? void 0 : _object$grants3.map(function (e) {
      return _authz.GrantAuthorization.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(function (e) {
        return _authz.GrantAuthorization.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.grants) {
      obj.grants = message.grants.map(function (e) {
        return e ? _authz.GrantAuthorization.toAmino(e) : undefined;
      });
    } else {
      obj.grants = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGranteeGrantsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGranteeGrantsResponse",
      value: QueryGranteeGrantsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGranteeGrantsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGranteeGrantsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
      value: QueryGranteeGrantsResponse.encode(message).finish()
    };
  }
};
exports.QueryGranteeGrantsResponse = QueryGranteeGrantsResponse;