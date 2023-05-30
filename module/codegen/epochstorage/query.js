import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { StakeStorage } from "./stake_storage";
import { EpochDetails } from "./epoch_details";
import { FixatedParams } from "./fixated_params";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryGetStakeStorageRequest() {
  return {
    index: ""
  };
}
export const QueryGetStakeStorageRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object) {
    var _object$index;
    const message = createBaseQueryGetStakeStorageRequest();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    return message;
  }
};
function createBaseQueryGetStakeStorageResponse() {
  return {
    stakeStorage: undefined
  };
}
export const QueryGetStakeStorageResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.stakeStorage !== undefined) {
      StakeStorage.encode(message.stakeStorage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      stakeStorage: isSet(object.stakeStorage) ? StakeStorage.fromJSON(object.stakeStorage) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.stakeStorage !== undefined && (obj.stakeStorage = message.stakeStorage ? StakeStorage.toJSON(message.stakeStorage) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryGetStakeStorageResponse();
    message.stakeStorage = object.stakeStorage !== undefined && object.stakeStorage !== null ? StakeStorage.fromPartial(object.stakeStorage) : undefined;
    return message;
  }
};
function createBaseQueryAllStakeStorageRequest() {
  return {
    pagination: undefined
  };
}
export const QueryAllStakeStorageRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryAllStakeStorageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllStakeStorageResponse() {
  return {
    stakeStorage: [],
    pagination: undefined
  };
}
export const QueryAllStakeStorageResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.stakeStorage) {
      StakeStorage.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      stakeStorage: Array.isArray(object === null || object === void 0 ? void 0 : object.stakeStorage) ? object.stakeStorage.map(e => StakeStorage.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.stakeStorage) {
      obj.stakeStorage = message.stakeStorage.map(e => e ? StakeStorage.toJSON(e) : undefined);
    } else {
      obj.stakeStorage = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$stakeStorage;
    const message = createBaseQueryAllStakeStorageResponse();
    message.stakeStorage = ((_object$stakeStorage = object.stakeStorage) === null || _object$stakeStorage === void 0 ? void 0 : _object$stakeStorage.map(e => StakeStorage.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetEpochDetailsRequest() {
  return {};
}
export const QueryGetEpochDetailsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseQueryGetEpochDetailsRequest();
    return message;
  }
};
function createBaseQueryGetEpochDetailsResponse() {
  return {
    EpochDetails: undefined
  };
}
export const QueryGetEpochDetailsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.EpochDetails !== undefined) {
      EpochDetails.encode(message.EpochDetails, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      EpochDetails: isSet(object.EpochDetails) ? EpochDetails.fromJSON(object.EpochDetails) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.EpochDetails !== undefined && (obj.EpochDetails = message.EpochDetails ? EpochDetails.toJSON(message.EpochDetails) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryGetEpochDetailsResponse();
    message.EpochDetails = object.EpochDetails !== undefined && object.EpochDetails !== null ? EpochDetails.fromPartial(object.EpochDetails) : undefined;
    return message;
  }
};
function createBaseQueryGetFixatedParamsRequest() {
  return {
    index: ""
  };
}
export const QueryGetFixatedParamsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object) {
    var _object$index2;
    const message = createBaseQueryGetFixatedParamsRequest();
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : "";
    return message;
  }
};
function createBaseQueryGetFixatedParamsResponse() {
  return {
    fixatedParams: undefined
  };
}
export const QueryGetFixatedParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fixatedParams !== undefined) {
      FixatedParams.encode(message.fixatedParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      fixatedParams: isSet(object.fixatedParams) ? FixatedParams.fromJSON(object.fixatedParams) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.fixatedParams !== undefined && (obj.fixatedParams = message.fixatedParams ? FixatedParams.toJSON(message.fixatedParams) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryGetFixatedParamsResponse();
    message.fixatedParams = object.fixatedParams !== undefined && object.fixatedParams !== null ? FixatedParams.fromPartial(object.fixatedParams) : undefined;
    return message;
  }
};
function createBaseQueryAllFixatedParamsRequest() {
  return {
    pagination: undefined
  };
}
export const QueryAllFixatedParamsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryAllFixatedParamsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllFixatedParamsResponse() {
  return {
    fixatedParams: [],
    pagination: undefined
  };
}
export const QueryAllFixatedParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.fixatedParams) {
      FixatedParams.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      fixatedParams: Array.isArray(object === null || object === void 0 ? void 0 : object.fixatedParams) ? object.fixatedParams.map(e => FixatedParams.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.fixatedParams) {
      obj.fixatedParams = message.fixatedParams.map(e => e ? FixatedParams.toJSON(e) : undefined);
    } else {
      obj.fixatedParams = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$fixatedParams;
    const message = createBaseQueryAllFixatedParamsResponse();
    message.fixatedParams = ((_object$fixatedParams = object.fixatedParams) === null || _object$fixatedParams === void 0 ? void 0 : _object$fixatedParams.map(e => FixatedParams.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};