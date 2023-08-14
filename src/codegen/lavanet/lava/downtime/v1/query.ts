import { Downtime, DowntimeSDKType, Params, ParamsSDKType } from "./downtime";
import { Duration, DurationSDKType } from "../../../../google/protobuf/duration";
import { Long, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeRequest {
  startBlock: Long;
  endBlock: Long;
}
/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeRequestSDKType {
  start_block: Long;
  end_block: Long;
}
/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeResponse {
  downtimes: Downtime[];
  cumulativeDowntimeDuration?: Duration;
}
/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeResponseSDKType {
  downtimes: DowntimeSDKType[];
  cumulative_downtime_duration?: DurationSDKType;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseQueryDowntimeRequest(): QueryDowntimeRequest {
  return {
    startBlock: Long.UZERO,
    endBlock: Long.UZERO
  };
}
export const QueryDowntimeRequest = {
  encode(message: QueryDowntimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startBlock.isZero()) {
      writer.uint32(8).uint64(message.startBlock);
    }
    if (!message.endBlock.isZero()) {
      writer.uint32(16).uint64(message.endBlock);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDowntimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDowntimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlock = (reader.uint64() as Long);
          break;
        case 2:
          message.endBlock = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDowntimeRequest>): QueryDowntimeRequest {
    const message = createBaseQueryDowntimeRequest();
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? Long.fromValue(object.startBlock) : Long.UZERO;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? Long.fromValue(object.endBlock) : Long.UZERO;
    return message;
  }
};
function createBaseQueryDowntimeResponse(): QueryDowntimeResponse {
  return {
    downtimes: [],
    cumulativeDowntimeDuration: undefined
  };
}
export const QueryDowntimeResponse = {
  encode(message: QueryDowntimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.downtimes) {
      Downtime.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.cumulativeDowntimeDuration !== undefined) {
      Duration.encode(message.cumulativeDowntimeDuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDowntimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryDowntimeResponse>): QueryDowntimeResponse {
    const message = createBaseQueryDowntimeResponse();
    message.downtimes = object.downtimes?.map(e => Downtime.fromPartial(e)) || [];
    message.cumulativeDowntimeDuration = object.cumulativeDowntimeDuration !== undefined && object.cumulativeDowntimeDuration !== null ? Duration.fromPartial(object.cumulativeDowntimeDuration) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
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
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};