"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrantQueueItem = exports.GrantAuthorization = exports.Grant = exports.GenericAuthorization = void 0;
var _any = require("../../../google/protobuf/any");
var _timestamp = require("../../../google/protobuf/timestamp");
var _binary = require("../../../binary");
var _helpers = require("../../../helpers");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */

/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */

/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */

/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */

/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */

/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */

/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */

/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */

function createBaseGenericAuthorization() {
  return {
    msg: ""
  };
}
var GenericAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$msg;
    var message = createBaseGenericAuthorization();
    message.msg = (_object$msg = object.msg) !== null && _object$msg !== void 0 ? _object$msg : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      msg: object.msg
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.msg = message.msg;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GenericAuthorization.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenericAuthorization",
      value: GenericAuthorization.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GenericAuthorization.decode(message.value);
  },
  toProto: function toProto(message) {
    return GenericAuthorization.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
      value: GenericAuthorization.encode(message).finish()
    };
  }
};
exports.GenericAuthorization = GenericAuthorization;
function createBaseGrant() {
  return {
    authorization: _any.Any.fromPartial({}),
    expiration: undefined
  };
}
var Grant = {
  typeUrl: "/cosmos.authz.v1beta1.Grant",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.authorization !== undefined) {
      _any.Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGrant();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = _any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.expiration = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$expiration;
    var message = createBaseGrant();
    message.authorization = object.authorization !== undefined && object.authorization !== null ? _any.Any.fromPartial(object.authorization) : undefined;
    message.expiration = (_object$expiration = object.expiration) !== null && _object$expiration !== void 0 ? _object$expiration : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      authorization: object !== null && object !== void 0 && object.authorization ? _any.Any.fromAmino(object.authorization) : undefined,
      expiration: object === null || object === void 0 ? void 0 : object.expiration
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.authorization = message.authorization ? _any.Any.toAmino(message.authorization) : undefined;
    obj.expiration = message.expiration;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Grant.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Grant",
      value: Grant.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Grant.decode(message.value);
  },
  toProto: function toProto(message) {
    return Grant.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.Grant",
      value: Grant.encode(message).finish()
    };
  }
};
exports.Grant = Grant;
function createBaseGrantAuthorization() {
  return {
    granter: "",
    grantee: "",
    authorization: _any.Any.fromPartial({}),
    expiration: new Date()
  };
}
var GrantAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== undefined) {
      _any.Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.expiration), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGrantAuthorization();
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
          message.authorization = _any.Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.expiration = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$granter, _object$grantee, _object$expiration2;
    var message = createBaseGrantAuthorization();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.authorization = object.authorization !== undefined && object.authorization !== null ? _any.Any.fromPartial(object.authorization) : undefined;
    message.expiration = (_object$expiration2 = object.expiration) !== null && _object$expiration2 !== void 0 ? _object$expiration2 : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      granter: object.granter,
      grantee: object.grantee,
      authorization: object !== null && object !== void 0 && object.authorization ? _any.Any.fromAmino(object.authorization) : undefined,
      expiration: object.expiration
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.authorization = message.authorization ? _any.Any.toAmino(message.authorization) : undefined;
    obj.expiration = message.expiration;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GrantAuthorization.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GrantAuthorization",
      value: GrantAuthorization.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GrantAuthorization.decode(message.value);
  },
  toProto: function toProto(message) {
    return GrantAuthorization.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
      value: GrantAuthorization.encode(message).finish()
    };
  }
};
exports.GrantAuthorization = GrantAuthorization;
function createBaseGrantQueueItem() {
  return {
    msgTypeUrls: []
  };
}
var GrantQueueItem = {
  typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.msgTypeUrls),
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
    var message = createBaseGrantQueueItem();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$msgTypeUrls;
    var message = createBaseGrantQueueItem();
    message.msgTypeUrls = ((_object$msgTypeUrls = object.msgTypeUrls) === null || _object$msgTypeUrls === void 0 ? void 0 : _object$msgTypeUrls.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      msgTypeUrls: Array.isArray(object === null || object === void 0 ? void 0 : object.msg_type_urls) ? object.msg_type_urls.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(function (e) {
        return e;
      });
    } else {
      obj.msg_type_urls = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GrantQueueItem.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GrantQueueItem",
      value: GrantQueueItem.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GrantQueueItem.decode(message.value);
  },
  toProto: function toProto(message) {
    return GrantQueueItem.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
      value: GrantQueueItem.encode(message).finish()
    };
  }
};
exports.GrantQueueItem = GrantQueueItem;