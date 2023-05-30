import { Long, isSet, bytesFromBase64, base64FromBytes } from "../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseProvider() {
  return {
    account: "",
    response: new Uint8Array()
  };
}
export const Provider = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.response.length !== 0) {
      writer.uint32(18).bytes(message.response);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      response: isSet(object.response) ? bytesFromBase64(object.response) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.account !== undefined && (obj.account = message.account);
    message.response !== undefined && (obj.response = base64FromBytes(message.response !== undefined ? message.response : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$account, _object$response;
    const message = createBaseProvider();
    message.account = (_object$account = object.account) !== null && _object$account !== void 0 ? _object$account : "";
    message.response = (_object$response = object.response) !== null && _object$response !== void 0 ? _object$response : new Uint8Array();
    return message;
  }
};
function createBaseVote() {
  return {
    address: "",
    Hash: new Uint8Array(),
    Result: Long.ZERO
  };
}
export const Vote = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      Hash: isSet(object.Hash) ? bytesFromBase64(object.Hash) : new Uint8Array(),
      Result: isSet(object.Result) ? Long.fromValue(object.Result) : Long.ZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.Hash !== undefined && (obj.Hash = base64FromBytes(message.Hash !== undefined ? message.Hash : new Uint8Array()));
    message.Result !== undefined && (obj.Result = (message.Result || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$address, _object$Hash;
    const message = createBaseVote();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.Hash = (_object$Hash = object.Hash) !== null && _object$Hash !== void 0 ? _object$Hash : new Uint8Array();
    message.Result = object.Result !== undefined && object.Result !== null ? Long.fromValue(object.Result) : Long.ZERO;
    return message;
  }
};
function createBaseConflictVote() {
  return {
    index: "",
    clientAddress: "",
    voteDeadline: Long.UZERO,
    voteStartBlock: Long.UZERO,
    voteState: Long.ZERO,
    chainID: "",
    apiUrl: "",
    requestData: new Uint8Array(),
    requestBlock: Long.UZERO,
    firstProvider: undefined,
    secondProvider: undefined,
    votes: []
  };
}
export const ConflictVote = {
  encode(message, writer = _m0.Writer.create()) {
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
    for (const v of message.votes) {
      Vote.encode(v, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConflictVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      clientAddress: isSet(object.clientAddress) ? String(object.clientAddress) : "",
      voteDeadline: isSet(object.voteDeadline) ? Long.fromValue(object.voteDeadline) : Long.UZERO,
      voteStartBlock: isSet(object.voteStartBlock) ? Long.fromValue(object.voteStartBlock) : Long.UZERO,
      voteState: isSet(object.voteState) ? Long.fromValue(object.voteState) : Long.ZERO,
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      apiUrl: isSet(object.apiUrl) ? String(object.apiUrl) : "",
      requestData: isSet(object.requestData) ? bytesFromBase64(object.requestData) : new Uint8Array(),
      requestBlock: isSet(object.requestBlock) ? Long.fromValue(object.requestBlock) : Long.UZERO,
      firstProvider: isSet(object.firstProvider) ? Provider.fromJSON(object.firstProvider) : undefined,
      secondProvider: isSet(object.secondProvider) ? Provider.fromJSON(object.secondProvider) : undefined,
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(e => Vote.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.clientAddress !== undefined && (obj.clientAddress = message.clientAddress);
    message.voteDeadline !== undefined && (obj.voteDeadline = (message.voteDeadline || Long.UZERO).toString());
    message.voteStartBlock !== undefined && (obj.voteStartBlock = (message.voteStartBlock || Long.UZERO).toString());
    message.voteState !== undefined && (obj.voteState = (message.voteState || Long.ZERO).toString());
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.apiUrl !== undefined && (obj.apiUrl = message.apiUrl);
    message.requestData !== undefined && (obj.requestData = base64FromBytes(message.requestData !== undefined ? message.requestData : new Uint8Array()));
    message.requestBlock !== undefined && (obj.requestBlock = (message.requestBlock || Long.UZERO).toString());
    message.firstProvider !== undefined && (obj.firstProvider = message.firstProvider ? Provider.toJSON(message.firstProvider) : undefined);
    message.secondProvider !== undefined && (obj.secondProvider = message.secondProvider ? Provider.toJSON(message.secondProvider) : undefined);
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$index, _object$clientAddress, _object$chainID, _object$apiUrl, _object$requestData, _object$votes;
    const message = createBaseConflictVote();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.clientAddress = (_object$clientAddress = object.clientAddress) !== null && _object$clientAddress !== void 0 ? _object$clientAddress : "";
    message.voteDeadline = object.voteDeadline !== undefined && object.voteDeadline !== null ? Long.fromValue(object.voteDeadline) : Long.UZERO;
    message.voteStartBlock = object.voteStartBlock !== undefined && object.voteStartBlock !== null ? Long.fromValue(object.voteStartBlock) : Long.UZERO;
    message.voteState = object.voteState !== undefined && object.voteState !== null ? Long.fromValue(object.voteState) : Long.ZERO;
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.apiUrl = (_object$apiUrl = object.apiUrl) !== null && _object$apiUrl !== void 0 ? _object$apiUrl : "";
    message.requestData = (_object$requestData = object.requestData) !== null && _object$requestData !== void 0 ? _object$requestData : new Uint8Array();
    message.requestBlock = object.requestBlock !== undefined && object.requestBlock !== null ? Long.fromValue(object.requestBlock) : Long.UZERO;
    message.firstProvider = object.firstProvider !== undefined && object.firstProvider !== null ? Provider.fromPartial(object.firstProvider) : undefined;
    message.secondProvider = object.secondProvider !== undefined && object.secondProvider !== null ? Provider.fromPartial(object.secondProvider) : undefined;
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(e => Vote.fromPartial(e))) || [];
    return message;
  }
};