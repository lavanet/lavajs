import { Downtime, DowntimeSDKType, Params, ParamsSDKType } from "./downtime";
import { Duration, DurationSDKType } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeRequest {
  startBlock: bigint;
  endBlock: bigint;
}
/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeRequestSDKType {
  start_block: bigint;
  end_block: bigint;
}
/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeResponse {
  downtimes: Downtime[];
  cumulativeDowntimeDuration: Duration;
}
/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeResponseSDKType {
  downtimes: DowntimeSDKType[];
  cumulative_downtime_duration: DurationSDKType;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryDowntimeRequest(): QueryDowntimeRequest {
  return {
    startBlock: BigInt(0),
    endBlock: BigInt(0)
  };
}
export const QueryDowntimeRequest = {
  typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeRequest",
  encode(message: QueryDowntimeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.startBlock);
    }
    if (message.endBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.endBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDowntimeRequest {
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
  fromPartial(object: Partial<QueryDowntimeRequest>): QueryDowntimeRequest {
    const message = createBaseQueryDowntimeRequest();
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? BigInt(object.endBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryDowntimeRequestAmino): QueryDowntimeRequest {
    return {
      startBlock: BigInt(object.start_block),
      endBlock: BigInt(object.end_block)
    };
  },
  toAmino(message: QueryDowntimeRequest): QueryDowntimeRequestAmino {
    const obj: any = {};
    obj.start_block = message.startBlock ? message.startBlock.toString() : undefined;
    obj.end_block = message.endBlock ? message.endBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDowntimeRequestAminoMsg): QueryDowntimeRequest {
    return QueryDowntimeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDowntimeRequestProtoMsg): QueryDowntimeRequest {
    return QueryDowntimeRequest.decode(message.value);
  },
  toProto(message: QueryDowntimeRequest): Uint8Array {
    return QueryDowntimeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDowntimeRequest): QueryDowntimeRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeRequest",
      value: QueryDowntimeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDowntimeResponse(): QueryDowntimeResponse {
  return {
    downtimes: [],
    cumulativeDowntimeDuration: Duration.fromPartial({})
  };
}
export const QueryDowntimeResponse = {
  typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeResponse",
  encode(message: QueryDowntimeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.downtimes) {
      Downtime.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.cumulativeDowntimeDuration !== undefined) {
      Duration.encode(message.cumulativeDowntimeDuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDowntimeResponse {
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
  fromPartial(object: Partial<QueryDowntimeResponse>): QueryDowntimeResponse {
    const message = createBaseQueryDowntimeResponse();
    message.downtimes = object.downtimes?.map(e => Downtime.fromPartial(e)) || [];
    message.cumulativeDowntimeDuration = object.cumulativeDowntimeDuration !== undefined && object.cumulativeDowntimeDuration !== null ? Duration.fromPartial(object.cumulativeDowntimeDuration) : undefined;
    return message;
  },
  fromAmino(object: QueryDowntimeResponseAmino): QueryDowntimeResponse {
    return {
      downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e: any) => Downtime.fromAmino(e)) : [],
      cumulativeDowntimeDuration: object?.cumulative_downtime_duration ? Duration.fromAmino(object.cumulative_downtime_duration) : undefined
    };
  },
  toAmino(message: QueryDowntimeResponse): QueryDowntimeResponseAmino {
    const obj: any = {};
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? Downtime.toAmino(e) : undefined);
    } else {
      obj.downtimes = [];
    }
    obj.cumulative_downtime_duration = message.cumulativeDowntimeDuration ? Duration.toAmino(message.cumulativeDowntimeDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDowntimeResponseAminoMsg): QueryDowntimeResponse {
    return QueryDowntimeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDowntimeResponseProtoMsg): QueryDowntimeResponse {
    return QueryDowntimeResponse.decode(message.value);
  },
  toProto(message: QueryDowntimeResponse): Uint8Array {
    return QueryDowntimeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDowntimeResponse): QueryDowntimeResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeResponse",
      value: QueryDowntimeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.downtime.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lavanet.lava.downtime.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};