"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlansDelProposal = exports.PlansAddProposal = void 0;
var _plan = require("./plan");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBasePlansAddProposal() {
  return {
    title: "",
    description: "",
    plans: []
  };
}
var PlansAddProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    var _iterator = _createForOfIteratorHelper(message.plans),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _plan.Plan.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePlansAddProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.plans.push(_plan.Plan.decode(reader, reader.uint32()));
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      plans: Array.isArray(object === null || object === void 0 ? void 0 : object.plans) ? object.plans.map(function (e) {
        return _plan.Plan.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.plans) {
      obj.plans = message.plans.map(function (e) {
        return e ? _plan.Plan.toJSON(e) : undefined;
      });
    } else {
      obj.plans = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title, _object$description, _object$plans;
    var message = createBasePlansAddProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.plans = ((_object$plans = object.plans) === null || _object$plans === void 0 ? void 0 : _object$plans.map(function (e) {
      return _plan.Plan.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.PlansAddProposal = PlansAddProposal;
function createBasePlansDelProposal() {
  return {
    title: "",
    description: "",
    plans: []
  };
}
var PlansDelProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    var _iterator2 = _createForOfIteratorHelper(message.plans),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(26).string(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePlansDelProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.plans.push(reader.string());
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
      title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      plans: Array.isArray(object === null || object === void 0 ? void 0 : object.plans) ? object.plans.map(function (e) {
        return String(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.plans) {
      obj.plans = message.plans.map(function (e) {
        return e;
      });
    } else {
      obj.plans = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title2, _object$description2, _object$plans2;
    var message = createBasePlansDelProposal();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.plans = ((_object$plans2 = object.plans) === null || _object$plans2 === void 0 ? void 0 : _object$plans2.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.PlansDelProposal = PlansDelProposal;