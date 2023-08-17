import { Downtime, Params } from "./downtime";
import { Duration } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */

/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */

/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */

/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */

function createBaseQueryDowntimeRequest() {
  return {
    startBlock: BigInt(0),
    endBlock: BigInt(0)
  };
}
export const QueryDowntimeRequest = {
  typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.startBlock);
    }
    if (message.endBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.endBlock);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDowntimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlock = reader.uint64();
          break;
        case 2:
          message.endBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDowntimeRequest();
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? BigInt(object.endBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      startBlock: BigInt(object.start_block),
      endBlock: BigInt(object.end_block)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.start_block = message.startBlock ? message.startBlock.toString() : undefined;
    obj.end_block = message.endBlock ? message.endBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDowntimeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryDowntimeRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDowntimeRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeRequest",
      value: QueryDowntimeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDowntimeResponse() {
  return {
    downtimes: [],
    cumulativeDowntimeDuration: Duration.fromPartial({})
  };
}
export const QueryDowntimeResponse = {
  typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.downtimes) {
      Downtime.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.cumulativeDowntimeDuration !== undefined) {
      Duration.encode(message.cumulativeDowntimeDuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDowntimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downtimes.push(Downtime.decode(reader, reader.uint32()));
          break;
        case 2:
          message.cumulativeDowntimeDuration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$downtimes;
    const message = createBaseQueryDowntimeResponse();
    message.downtimes = ((_object$downtimes = object.downtimes) === null || _object$downtimes === void 0 ? void 0 : _object$downtimes.map(e => Downtime.fromPartial(e))) || [];
    message.cumulativeDowntimeDuration = object.cumulativeDowntimeDuration !== undefined && object.cumulativeDowntimeDuration !== null ? Duration.fromPartial(object.cumulativeDowntimeDuration) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      downtimes: Array.isArray(object === null || object === void 0 ? void 0 : object.downtimes) ? object.downtimes.map(e => Downtime.fromAmino(e)) : [],
      cumulativeDowntimeDuration: object !== null && object !== void 0 && object.cumulative_downtime_duration ? Duration.fromAmino(object.cumulative_downtime_duration) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? Downtime.toAmino(e) : undefined);
    } else {
      obj.downtimes = [];
    }
    obj.cumulative_downtime_duration = message.cumulativeDowntimeDuration ? Duration.toAmino(message.cumulativeDowntimeDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDowntimeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryDowntimeResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDowntimeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeResponse",
      value: QueryDowntimeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.downtime.v1.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.downtime.v1.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.downtime.v1.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.downtime.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};