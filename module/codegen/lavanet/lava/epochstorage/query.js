import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { StakeStorage } from "./stake_storage";
import { EpochDetails } from "./epoch_details";
import { FixatedParams } from "./fixated_params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryParamsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetStakeStorageRequest() {
  return {
    index: ""
  };
}
export const QueryGetStakeStorageRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakeStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index;
    const message = createBaseQueryGetStakeStorageRequest();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetStakeStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetStakeStorageRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetStakeStorageRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageRequest",
      value: QueryGetStakeStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetStakeStorageResponse() {
  return {
    stakeStorage: StakeStorage.fromPartial({})
  };
}
export const QueryGetStakeStorageResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.stakeStorage !== undefined) {
      StakeStorage.encode(message.stakeStorage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakeStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeStorage = StakeStorage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetStakeStorageResponse();
    message.stakeStorage = object.stakeStorage !== undefined && object.stakeStorage !== null ? StakeStorage.fromPartial(object.stakeStorage) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      stakeStorage: object !== null && object !== void 0 && object.stakeStorage ? StakeStorage.fromAmino(object.stakeStorage) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.stakeStorage = message.stakeStorage ? StakeStorage.toAmino(message.stakeStorage) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetStakeStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetStakeStorageResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetStakeStorageResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageResponse",
      value: QueryGetStakeStorageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllStakeStorageRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllStakeStorageRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakeStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAllStakeStorageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllStakeStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllStakeStorageRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllStakeStorageRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageRequest",
      value: QueryAllStakeStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllStakeStorageResponse() {
  return {
    stakeStorage: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllStakeStorageResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.stakeStorage) {
      StakeStorage.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakeStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeStorage.push(StakeStorage.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$stakeStorage;
    const message = createBaseQueryAllStakeStorageResponse();
    message.stakeStorage = ((_object$stakeStorage = object.stakeStorage) === null || _object$stakeStorage === void 0 ? void 0 : _object$stakeStorage.map(e => StakeStorage.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      stakeStorage: Array.isArray(object === null || object === void 0 ? void 0 : object.stakeStorage) ? object.stakeStorage.map(e => StakeStorage.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.stakeStorage) {
      obj.stakeStorage = message.stakeStorage.map(e => e ? StakeStorage.toAmino(e) : undefined);
    } else {
      obj.stakeStorage = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllStakeStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllStakeStorageResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllStakeStorageResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageResponse",
      value: QueryAllStakeStorageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochDetailsRequest() {
  return {};
}
export const QueryGetEpochDetailsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseQueryGetEpochDetailsRequest();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetEpochDetailsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetEpochDetailsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetEpochDetailsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsRequest",
      value: QueryGetEpochDetailsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochDetailsResponse() {
  return {
    EpochDetails: EpochDetails.fromPartial({})
  };
}
export const QueryGetEpochDetailsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.EpochDetails !== undefined) {
      EpochDetails.encode(message.EpochDetails, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.EpochDetails = EpochDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetEpochDetailsResponse();
    message.EpochDetails = object.EpochDetails !== undefined && object.EpochDetails !== null ? EpochDetails.fromPartial(object.EpochDetails) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      EpochDetails: object !== null && object !== void 0 && object.EpochDetails ? EpochDetails.fromAmino(object.EpochDetails) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.EpochDetails = message.EpochDetails ? EpochDetails.toAmino(message.EpochDetails) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetEpochDetailsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetEpochDetailsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetEpochDetailsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsResponse",
      value: QueryGetEpochDetailsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetFixatedParamsRequest() {
  return {
    index: ""
  };
}
export const QueryGetFixatedParamsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFixatedParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index2;
    const message = createBaseQueryGetFixatedParamsRequest();
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : "";
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetFixatedParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetFixatedParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetFixatedParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsRequest",
      value: QueryGetFixatedParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetFixatedParamsResponse() {
  return {
    fixatedParams: FixatedParams.fromPartial({})
  };
}
export const QueryGetFixatedParamsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.fixatedParams !== undefined) {
      FixatedParams.encode(message.fixatedParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFixatedParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixatedParams = FixatedParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetFixatedParamsResponse();
    message.fixatedParams = object.fixatedParams !== undefined && object.fixatedParams !== null ? FixatedParams.fromPartial(object.fixatedParams) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      fixatedParams: object !== null && object !== void 0 && object.fixatedParams ? FixatedParams.fromAmino(object.fixatedParams) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.fixatedParams = message.fixatedParams ? FixatedParams.toAmino(message.fixatedParams) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetFixatedParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetFixatedParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetFixatedParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsResponse",
      value: QueryGetFixatedParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllFixatedParamsRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllFixatedParamsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFixatedParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAllFixatedParamsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllFixatedParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllFixatedParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllFixatedParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsRequest",
      value: QueryAllFixatedParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllFixatedParamsResponse() {
  return {
    fixatedParams: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllFixatedParamsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.fixatedParams) {
      FixatedParams.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFixatedParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixatedParams.push(FixatedParams.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$fixatedParams;
    const message = createBaseQueryAllFixatedParamsResponse();
    message.fixatedParams = ((_object$fixatedParams = object.fixatedParams) === null || _object$fixatedParams === void 0 ? void 0 : _object$fixatedParams.map(e => FixatedParams.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      fixatedParams: Array.isArray(object === null || object === void 0 ? void 0 : object.fixatedParams) ? object.fixatedParams.map(e => FixatedParams.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.fixatedParams) {
      obj.fixatedParams = message.fixatedParams.map(e => e ? FixatedParams.toAmino(e) : undefined);
    } else {
      obj.fixatedParams = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllFixatedParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllFixatedParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllFixatedParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsResponse",
      value: QueryAllFixatedParamsResponse.encode(message).finish()
    };
  }
};