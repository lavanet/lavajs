"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgSoftwareUpgradeResponse = exports.MsgSoftwareUpgrade = exports.MsgCancelUpgradeResponse = exports.MsgCancelUpgrade = void 0;
var _upgrade = require("./upgrade");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

function createBaseMsgSoftwareUpgrade() {
  return {
    authority: "",
    plan: undefined
  };
}
var MsgSoftwareUpgrade = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      _upgrade.Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSoftwareUpgrade();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = _upgrade.Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      authority: (0, _helpers.isSet)(object.authority) ? String(object.authority) : "",
      plan: (0, _helpers.isSet)(object.plan) ? _upgrade.Plan.fromJSON(object.plan) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.plan !== undefined && (obj.plan = message.plan ? _upgrade.Plan.toJSON(message.plan) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$authority;
    var message = createBaseMsgSoftwareUpgrade();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.plan = object.plan !== undefined && object.plan !== null ? _upgrade.Plan.fromPartial(object.plan) : undefined;
    return message;
  }
};
exports.MsgSoftwareUpgrade = MsgSoftwareUpgrade;
function createBaseMsgSoftwareUpgradeResponse() {
  return {};
}
var MsgSoftwareUpgradeResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSoftwareUpgradeResponse();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  }
};
exports.MsgSoftwareUpgradeResponse = MsgSoftwareUpgradeResponse;
function createBaseMsgCancelUpgrade() {
  return {
    authority: ""
  };
}
var MsgCancelUpgrade = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCancelUpgrade();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      authority: (0, _helpers.isSet)(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$authority2;
    var message = createBaseMsgCancelUpgrade();
    message.authority = (_object$authority2 = object.authority) !== null && _object$authority2 !== void 0 ? _object$authority2 : "";
    return message;
  }
};
exports.MsgCancelUpgrade = MsgCancelUpgrade;
function createBaseMsgCancelUpgradeResponse() {
  return {};
}
var MsgCancelUpgradeResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCancelUpgradeResponse();
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgCancelUpgradeResponse();
    return message;
  }
};
exports.MsgCancelUpgradeResponse = MsgCancelUpgradeResponse;