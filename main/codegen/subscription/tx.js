"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgBuyResponse = exports.MsgBuy = exports.MsgAddProjectResponse = exports.MsgAddProject = void 0;
var _project = require("../projects/project");
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseMsgBuy() {
  return {
    creator: "",
    consumer: "",
    index: "",
    duration: _helpers.Long.UZERO
  };
}
var MsgBuy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    if (!message.duration.isZero()) {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBuy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumer = reader.string();
          break;
        case 3:
          message.index = reader.string();
          break;
        case 4:
          message.duration = reader.uint64();
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
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      consumer: (0, _helpers.isSet)(object.consumer) ? String(object.consumer) : "",
      index: (0, _helpers.isSet)(object.index) ? String(object.index) : "",
      duration: (0, _helpers.isSet)(object.duration) ? _helpers.Long.fromValue(object.duration) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.index !== undefined && (obj.index = message.index);
    message.duration !== undefined && (obj.duration = (message.duration || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator, _object$consumer, _object$index;
    var message = createBaseMsgBuy();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.consumer = (_object$consumer = object.consumer) !== null && _object$consumer !== void 0 ? _object$consumer : "";
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.duration = object.duration !== undefined && object.duration !== null ? _helpers.Long.fromValue(object.duration) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgBuy = MsgBuy;
function createBaseMsgBuyResponse() {
  return {};
}
var MsgBuyResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBuyResponse();
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
    var message = createBaseMsgBuyResponse();
    return message;
  }
};
exports.MsgBuyResponse = MsgBuyResponse;
function createBaseMsgAddProject() {
  return {
    creator: "",
    projectData: undefined
  };
}
var MsgAddProject = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectData !== undefined) {
      _project.ProjectData.encode(message.projectData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgAddProject();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projectData = _project.ProjectData.decode(reader, reader.uint32());
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
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      projectData: (0, _helpers.isSet)(object.projectData) ? _project.ProjectData.fromJSON(object.projectData) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.projectData !== undefined && (obj.projectData = message.projectData ? _project.ProjectData.toJSON(message.projectData) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2;
    var message = createBaseMsgAddProject();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.projectData = object.projectData !== undefined && object.projectData !== null ? _project.ProjectData.fromPartial(object.projectData) : undefined;
    return message;
  }
};
exports.MsgAddProject = MsgAddProject;
function createBaseMsgAddProjectResponse() {
  return {};
}
var MsgAddProjectResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgAddProjectResponse();
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
    var message = createBaseMsgAddProjectResponse();
    return message;
  }
};
exports.MsgAddProjectResponse = MsgAddProjectResponse;