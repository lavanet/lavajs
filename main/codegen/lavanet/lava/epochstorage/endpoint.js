"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Endpoint = void 0;
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseEndpoint() {
  return {
    iPPORT: "",
    geolocation: BigInt(0),
    addons: [],
    apiInterfaces: [],
    extensions: []
  };
}
var Endpoint = {
  typeUrl: "/lavanet.lava.epochstorage.Endpoint",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.iPPORT !== "") {
      writer.uint32(10).string(message.iPPORT);
    }
    if (message.geolocation !== BigInt(0)) {
      writer.uint32(24).uint64(message.geolocation);
    }
    var _iterator = _createForOfIteratorHelper(message.addons),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(34).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.apiInterfaces),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        writer.uint32(42).string(_v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.extensions),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        writer.uint32(50).string(_v2);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEndpoint();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iPPORT = reader.string();
          break;
        case 3:
          message.geolocation = reader.uint64();
          break;
        case 4:
          message.addons.push(reader.string());
          break;
        case 5:
          message.apiInterfaces.push(reader.string());
          break;
        case 6:
          message.extensions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$iPPORT, _object$addons, _object$apiInterfaces, _object$extensions;
    var message = createBaseEndpoint();
    message.iPPORT = (_object$iPPORT = object.iPPORT) !== null && _object$iPPORT !== void 0 ? _object$iPPORT : "";
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? BigInt(object.geolocation.toString()) : BigInt(0);
    message.addons = ((_object$addons = object.addons) === null || _object$addons === void 0 ? void 0 : _object$addons.map(function (e) {
      return e;
    })) || [];
    message.apiInterfaces = ((_object$apiInterfaces = object.apiInterfaces) === null || _object$apiInterfaces === void 0 ? void 0 : _object$apiInterfaces.map(function (e) {
      return e;
    })) || [];
    message.extensions = ((_object$extensions = object.extensions) === null || _object$extensions === void 0 ? void 0 : _object$extensions.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      iPPORT: object.iPPORT,
      geolocation: BigInt(object.geolocation),
      addons: Array.isArray(object === null || object === void 0 ? void 0 : object.addons) ? object.addons.map(function (e) {
        return e;
      }) : [],
      apiInterfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.api_interfaces) ? object.api_interfaces.map(function (e) {
        return e;
      }) : [],
      extensions: Array.isArray(object === null || object === void 0 ? void 0 : object.extensions) ? object.extensions.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.iPPORT = message.iPPORT;
    obj.geolocation = message.geolocation ? message.geolocation.toString() : undefined;
    if (message.addons) {
      obj.addons = message.addons.map(function (e) {
        return e;
      });
    } else {
      obj.addons = [];
    }
    if (message.apiInterfaces) {
      obj.api_interfaces = message.apiInterfaces.map(function (e) {
        return e;
      });
    } else {
      obj.api_interfaces = [];
    }
    if (message.extensions) {
      obj.extensions = message.extensions.map(function (e) {
        return e;
      });
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Endpoint.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Endpoint.decode(message.value);
  },
  toProto: function toProto(message) {
    return Endpoint.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.Endpoint",
      value: Endpoint.encode(message).finish()
    };
  }
};
exports.Endpoint = Endpoint;