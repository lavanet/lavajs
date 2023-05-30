"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vote = exports.Provider = exports.ConflictVote = void 0;
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseProvider() {
  return {
    account: "",
    response: new Uint8Array()
  };
}
var Provider = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.response.length !== 0) {
      writer.uint32(18).bytes(message.response);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProvider();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.response = reader.bytes();
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
      account: (0, _helpers.isSet)(object.account) ? String(object.account) : "",
      response: (0, _helpers.isSet)(object.response) ? (0, _helpers.bytesFromBase64)(object.response) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.account !== undefined && (obj.account = message.account);
    message.response !== undefined && (obj.response = (0, _helpers.base64FromBytes)(message.response !== undefined ? message.response : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$account, _object$response;
    var message = createBaseProvider();
    message.account = (_object$account = object.account) !== null && _object$account !== void 0 ? _object$account : "";
    message.response = (_object$response = object.response) !== null && _object$response !== void 0 ? _object$response : new Uint8Array();
    return message;
  }
};
exports.Provider = Provider;
function createBaseVote() {
  return {
    address: "",
    Hash: new Uint8Array(),
    Result: _helpers.Long.ZERO
  };
}
var Vote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.Hash.length !== 0) {
      writer.uint32(18).bytes(message.Hash);
    }
    if (!message.Result.isZero()) {
      writer.uint32(24).int64(message.Result);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.Hash = reader.bytes();
          break;
        case 3:
          message.Result = reader.int64();
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      Hash: (0, _helpers.isSet)(object.Hash) ? (0, _helpers.bytesFromBase64)(object.Hash) : new Uint8Array(),
      Result: (0, _helpers.isSet)(object.Result) ? _helpers.Long.fromValue(object.Result) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.Hash !== undefined && (obj.Hash = (0, _helpers.base64FromBytes)(message.Hash !== undefined ? message.Hash : new Uint8Array()));
    message.Result !== undefined && (obj.Result = (message.Result || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$Hash;
    var message = createBaseVote();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.Hash = (_object$Hash = object.Hash) !== null && _object$Hash !== void 0 ? _object$Hash : new Uint8Array();
    message.Result = object.Result !== undefined && object.Result !== null ? _helpers.Long.fromValue(object.Result) : _helpers.Long.ZERO;
    return message;
  }
};
exports.Vote = Vote;
function createBaseConflictVote() {
  return {
    index: "",
    clientAddress: "",
    voteDeadline: _helpers.Long.UZERO,
    voteStartBlock: _helpers.Long.UZERO,
    voteState: _helpers.Long.ZERO,
    chainID: "",
    apiUrl: "",
    requestData: new Uint8Array(),
    requestBlock: _helpers.Long.UZERO,
    firstProvider: undefined,
    secondProvider: undefined,
    votes: []
  };
}
var ConflictVote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.clientAddress !== "") {
      writer.uint32(18).string(message.clientAddress);
    }
    if (!message.voteDeadline.isZero()) {
      writer.uint32(24).uint64(message.voteDeadline);
    }
    if (!message.voteStartBlock.isZero()) {
      writer.uint32(32).uint64(message.voteStartBlock);
    }
    if (!message.voteState.isZero()) {
      writer.uint32(40).int64(message.voteState);
    }
    if (message.chainID !== "") {
      writer.uint32(50).string(message.chainID);
    }
    if (message.apiUrl !== "") {
      writer.uint32(58).string(message.apiUrl);
    }
    if (message.requestData.length !== 0) {
      writer.uint32(66).bytes(message.requestData);
    }
    if (!message.requestBlock.isZero()) {
      writer.uint32(72).uint64(message.requestBlock);
    }
    if (message.firstProvider !== undefined) {
      Provider.encode(message.firstProvider, writer.uint32(82).fork()).ldelim();
    }
    if (message.secondProvider !== undefined) {
      Provider.encode(message.secondProvider, writer.uint32(90).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.votes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Vote.encode(v, writer.uint32(98).fork()).ldelim();
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
    var message = createBaseConflictVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.clientAddress = reader.string();
          break;
        case 3:
          message.voteDeadline = reader.uint64();
          break;
        case 4:
          message.voteStartBlock = reader.uint64();
          break;
        case 5:
          message.voteState = reader.int64();
          break;
        case 6:
          message.chainID = reader.string();
          break;
        case 7:
          message.apiUrl = reader.string();
          break;
        case 8:
          message.requestData = reader.bytes();
          break;
        case 9:
          message.requestBlock = reader.uint64();
          break;
        case 10:
          message.firstProvider = Provider.decode(reader, reader.uint32());
          break;
        case 11:
          message.secondProvider = Provider.decode(reader, reader.uint32());
          break;
        case 12:
          message.votes.push(Vote.decode(reader, reader.uint32()));
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
      index: (0, _helpers.isSet)(object.index) ? String(object.index) : "",
      clientAddress: (0, _helpers.isSet)(object.clientAddress) ? String(object.clientAddress) : "",
      voteDeadline: (0, _helpers.isSet)(object.voteDeadline) ? _helpers.Long.fromValue(object.voteDeadline) : _helpers.Long.UZERO,
      voteStartBlock: (0, _helpers.isSet)(object.voteStartBlock) ? _helpers.Long.fromValue(object.voteStartBlock) : _helpers.Long.UZERO,
      voteState: (0, _helpers.isSet)(object.voteState) ? _helpers.Long.fromValue(object.voteState) : _helpers.Long.ZERO,
      chainID: (0, _helpers.isSet)(object.chainID) ? String(object.chainID) : "",
      apiUrl: (0, _helpers.isSet)(object.apiUrl) ? String(object.apiUrl) : "",
      requestData: (0, _helpers.isSet)(object.requestData) ? (0, _helpers.bytesFromBase64)(object.requestData) : new Uint8Array(),
      requestBlock: (0, _helpers.isSet)(object.requestBlock) ? _helpers.Long.fromValue(object.requestBlock) : _helpers.Long.UZERO,
      firstProvider: (0, _helpers.isSet)(object.firstProvider) ? Provider.fromJSON(object.firstProvider) : undefined,
      secondProvider: (0, _helpers.isSet)(object.secondProvider) ? Provider.fromJSON(object.secondProvider) : undefined,
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) {
        return Vote.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.clientAddress !== undefined && (obj.clientAddress = message.clientAddress);
    message.voteDeadline !== undefined && (obj.voteDeadline = (message.voteDeadline || _helpers.Long.UZERO).toString());
    message.voteStartBlock !== undefined && (obj.voteStartBlock = (message.voteStartBlock || _helpers.Long.UZERO).toString());
    message.voteState !== undefined && (obj.voteState = (message.voteState || _helpers.Long.ZERO).toString());
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.apiUrl !== undefined && (obj.apiUrl = message.apiUrl);
    message.requestData !== undefined && (obj.requestData = (0, _helpers.base64FromBytes)(message.requestData !== undefined ? message.requestData : new Uint8Array()));
    message.requestBlock !== undefined && (obj.requestBlock = (message.requestBlock || _helpers.Long.UZERO).toString());
    message.firstProvider !== undefined && (obj.firstProvider = message.firstProvider ? Provider.toJSON(message.firstProvider) : undefined);
    message.secondProvider !== undefined && (obj.secondProvider = message.secondProvider ? Provider.toJSON(message.secondProvider) : undefined);
    if (message.votes) {
      obj.votes = message.votes.map(function (e) {
        return e ? Vote.toJSON(e) : undefined;
      });
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$clientAddress, _object$chainID, _object$apiUrl, _object$requestData, _object$votes;
    var message = createBaseConflictVote();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.clientAddress = (_object$clientAddress = object.clientAddress) !== null && _object$clientAddress !== void 0 ? _object$clientAddress : "";
    message.voteDeadline = object.voteDeadline !== undefined && object.voteDeadline !== null ? _helpers.Long.fromValue(object.voteDeadline) : _helpers.Long.UZERO;
    message.voteStartBlock = object.voteStartBlock !== undefined && object.voteStartBlock !== null ? _helpers.Long.fromValue(object.voteStartBlock) : _helpers.Long.UZERO;
    message.voteState = object.voteState !== undefined && object.voteState !== null ? _helpers.Long.fromValue(object.voteState) : _helpers.Long.ZERO;
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.apiUrl = (_object$apiUrl = object.apiUrl) !== null && _object$apiUrl !== void 0 ? _object$apiUrl : "";
    message.requestData = (_object$requestData = object.requestData) !== null && _object$requestData !== void 0 ? _object$requestData : new Uint8Array();
    message.requestBlock = object.requestBlock !== undefined && object.requestBlock !== null ? _helpers.Long.fromValue(object.requestBlock) : _helpers.Long.UZERO;
    message.firstProvider = object.firstProvider !== undefined && object.firstProvider !== null ? Provider.fromPartial(object.firstProvider) : undefined;
    message.secondProvider = object.secondProvider !== undefined && object.secondProvider !== null ? Provider.fromPartial(object.secondProvider) : undefined;
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(function (e) {
      return Vote.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ConflictVote = ConflictVote;