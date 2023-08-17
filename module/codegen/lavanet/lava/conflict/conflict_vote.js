import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseProvider() {
  return {
    account: "",
    response: new Uint8Array()
  };
}
export const Provider = {
  typeUrl: "/lavanet.lava.conflict.Provider",
  encode(message, writer = BinaryWriter.create()) {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.response.length !== 0) {
      writer.uint32(18).bytes(message.response);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$account, _object$response;
    const message = createBaseProvider();
    message.account = (_object$account = object.account) !== null && _object$account !== void 0 ? _object$account : "";
    message.response = (_object$response = object.response) !== null && _object$response !== void 0 ? _object$response : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      account: object.account,
      response: object.response
    };
  },
  toAmino(message) {
    const obj = {};
    obj.account = message.account;
    obj.response = message.response;
    return obj;
  },
  fromAminoMsg(object) {
    return Provider.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Provider.decode(message.value);
  },
  toProto(message) {
    return Provider.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.Provider",
      value: Provider.encode(message).finish()
    };
  }
};
function createBaseVote() {
  return {
    address: "",
    Hash: new Uint8Array(),
    Result: BigInt(0)
  };
}
export const Vote = {
  typeUrl: "/lavanet.lava.conflict.Vote",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.Hash.length !== 0) {
      writer.uint32(18).bytes(message.Hash);
    }
    if (message.Result !== BigInt(0)) {
      writer.uint32(24).int64(message.Result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$address, _object$Hash;
    const message = createBaseVote();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.Hash = (_object$Hash = object.Hash) !== null && _object$Hash !== void 0 ? _object$Hash : new Uint8Array();
    message.Result = object.Result !== undefined && object.Result !== null ? BigInt(object.Result.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      address: object.address,
      Hash: object.Hash,
      Result: BigInt(object.Result)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address;
    obj.Hash = message.Hash;
    obj.Result = message.Result ? message.Result.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Vote.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Vote.decode(message.value);
  },
  toProto(message) {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
function createBaseConflictVote() {
  return {
    index: "",
    clientAddress: "",
    voteDeadline: BigInt(0),
    voteStartBlock: BigInt(0),
    voteState: BigInt(0),
    chainID: "",
    apiUrl: "",
    requestData: new Uint8Array(),
    requestBlock: BigInt(0),
    firstProvider: Provider.fromPartial({}),
    secondProvider: Provider.fromPartial({}),
    votes: []
  };
}
export const ConflictVote = {
  typeUrl: "/lavanet.lava.conflict.ConflictVote",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.clientAddress !== "") {
      writer.uint32(18).string(message.clientAddress);
    }
    if (message.voteDeadline !== BigInt(0)) {
      writer.uint32(24).uint64(message.voteDeadline);
    }
    if (message.voteStartBlock !== BigInt(0)) {
      writer.uint32(32).uint64(message.voteStartBlock);
    }
    if (message.voteState !== BigInt(0)) {
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
    if (message.requestBlock !== BigInt(0)) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$index, _object$clientAddress, _object$chainID, _object$apiUrl, _object$requestData, _object$votes;
    const message = createBaseConflictVote();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.clientAddress = (_object$clientAddress = object.clientAddress) !== null && _object$clientAddress !== void 0 ? _object$clientAddress : "";
    message.voteDeadline = object.voteDeadline !== undefined && object.voteDeadline !== null ? BigInt(object.voteDeadline.toString()) : BigInt(0);
    message.voteStartBlock = object.voteStartBlock !== undefined && object.voteStartBlock !== null ? BigInt(object.voteStartBlock.toString()) : BigInt(0);
    message.voteState = object.voteState !== undefined && object.voteState !== null ? BigInt(object.voteState.toString()) : BigInt(0);
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.apiUrl = (_object$apiUrl = object.apiUrl) !== null && _object$apiUrl !== void 0 ? _object$apiUrl : "";
    message.requestData = (_object$requestData = object.requestData) !== null && _object$requestData !== void 0 ? _object$requestData : new Uint8Array();
    message.requestBlock = object.requestBlock !== undefined && object.requestBlock !== null ? BigInt(object.requestBlock.toString()) : BigInt(0);
    message.firstProvider = object.firstProvider !== undefined && object.firstProvider !== null ? Provider.fromPartial(object.firstProvider) : undefined;
    message.secondProvider = object.secondProvider !== undefined && object.secondProvider !== null ? Provider.fromPartial(object.secondProvider) : undefined;
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(e => Vote.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index,
      clientAddress: object.clientAddress,
      voteDeadline: BigInt(object.voteDeadline),
      voteStartBlock: BigInt(object.voteStartBlock),
      voteState: BigInt(object.voteState),
      chainID: object.chainID,
      apiUrl: object.apiUrl,
      requestData: object.requestData,
      requestBlock: BigInt(object.requestBlock),
      firstProvider: object !== null && object !== void 0 && object.firstProvider ? Provider.fromAmino(object.firstProvider) : undefined,
      secondProvider: object !== null && object !== void 0 && object.secondProvider ? Provider.fromAmino(object.secondProvider) : undefined,
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(e => Vote.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    obj.clientAddress = message.clientAddress;
    obj.voteDeadline = message.voteDeadline ? message.voteDeadline.toString() : undefined;
    obj.voteStartBlock = message.voteStartBlock ? message.voteStartBlock.toString() : undefined;
    obj.voteState = message.voteState ? message.voteState.toString() : undefined;
    obj.chainID = message.chainID;
    obj.apiUrl = message.apiUrl;
    obj.requestData = message.requestData;
    obj.requestBlock = message.requestBlock ? message.requestBlock.toString() : undefined;
    obj.firstProvider = message.firstProvider ? Provider.toAmino(message.firstProvider) : undefined;
    obj.secondProvider = message.secondProvider ? Provider.toAmino(message.secondProvider) : undefined;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ConflictVote.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ConflictVote.decode(message.value);
  },
  toProto(message) {
    return ConflictVote.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.ConflictVote",
      value: ConflictVote.encode(message).finish()
    };
  }
};