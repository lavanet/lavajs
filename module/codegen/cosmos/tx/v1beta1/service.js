import { Tx } from "./tx";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { TxResponse, GasInfo, Result } from "../../base/abci/v1beta1/abci";
import { BlockID } from "../../../tendermint/types/types";
import { Block } from "../../../tendermint/types/block";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** OrderBy defines the sorting order */
export let OrderBy = /*#__PURE__*/function (OrderBy) {
  OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
  OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
  OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
  OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return OrderBy;
}({});
export const OrderBySDKType = OrderBy;
export function orderByFromJSON(object) {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return OrderBy.ORDER_BY_UNSPECIFIED;
    case 1:
    case "ORDER_BY_ASC":
      return OrderBy.ORDER_BY_ASC;
    case 2:
    case "ORDER_BY_DESC":
      return OrderBy.ORDER_BY_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBy.UNRECOGNIZED;
  }
}
export function orderByToJSON(object) {
  switch (object) {
    case OrderBy.ORDER_BY_UNSPECIFIED:
      return "ORDER_BY_UNSPECIFIED";
    case OrderBy.ORDER_BY_ASC:
      return "ORDER_BY_ASC";
    case OrderBy.ORDER_BY_DESC:
      return "ORDER_BY_DESC";
    case OrderBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export let BroadcastMode = /*#__PURE__*/function (BroadcastMode) {
  BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
  BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BroadcastMode;
}({});
export const BroadcastModeSDKType = BroadcastMode;
export function broadcastModeFromJSON(object) {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;
    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;
    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}
export function broadcastModeToJSON(object) {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";
    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";
    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";
    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";
    case BroadcastMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */

/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */

/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */

/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */

/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */

/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */

/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */

/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */

/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */

/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */

/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */

/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */

/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */

/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */

/** GetTxResponse is the response type for the Service.GetTx method. */

/** GetTxResponse is the response type for the Service.GetTx method. */

/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

function createBaseGetTxsEventRequest() {
  return {
    events: [],
    pagination: undefined,
    orderBy: 0
  };
}
export const GetTxsEventRequest = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.events) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderBy !== 0) {
      writer.uint32(24).int32(message.orderBy);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderBy = reader.int32();
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
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(e => String(e)) : [],
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      orderBy: isSet(object.orderBy) ? orderByFromJSON(object.orderBy) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.events) {
      obj.events = message.events.map(e => e);
    } else {
      obj.events = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.orderBy !== undefined && (obj.orderBy = orderByToJSON(message.orderBy));
    return obj;
  },
  fromPartial(object) {
    var _object$events, _object$orderBy;
    const message = createBaseGetTxsEventRequest();
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(e => e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.orderBy = (_object$orderBy = object.orderBy) !== null && _object$orderBy !== void 0 ? _object$orderBy : 0;
    return message;
  }
};
function createBaseGetTxsEventResponse() {
  return {
    txs: [],
    txResponses: [],
    pagination: undefined
  };
}
export const GetTxsEventResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.txs) {
      Tx.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResponses) {
      TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(e => Tx.fromJSON(e)) : [],
      txResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.txResponses) ? object.txResponses.map(e => TxResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }
    if (message.txResponses) {
      obj.txResponses = message.txResponses.map(e => e ? TxResponse.toJSON(e) : undefined);
    } else {
      obj.txResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$txs, _object$txResponses;
    const message = createBaseGetTxsEventResponse();
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(e => Tx.fromPartial(e))) || [];
    message.txResponses = ((_object$txResponses = object.txResponses) === null || _object$txResponses === void 0 ? void 0 : _object$txResponses.map(e => TxResponse.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseBroadcastTxRequest() {
  return {
    txBytes: new Uint8Array(),
    mode: 0
  };
}
export const BroadcastTxRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        case 2:
          message.mode = reader.int32();
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
      txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array(),
      mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.txBytes !== undefined && (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
    message.mode !== undefined && (obj.mode = broadcastModeToJSON(message.mode));
    return obj;
  },
  fromPartial(object) {
    var _object$txBytes, _object$mode;
    const message = createBaseBroadcastTxRequest();
    message.txBytes = (_object$txBytes = object.txBytes) !== null && _object$txBytes !== void 0 ? _object$txBytes : new Uint8Array();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    return message;
  }
};
function createBaseBroadcastTxResponse() {
  return {
    txResponse: undefined
  };
}
export const BroadcastTxResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
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
      txResponse: isSet(object.txResponse) ? TxResponse.fromJSON(object.txResponse) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.txResponse !== undefined && (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseBroadcastTxResponse();
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
    return message;
  }
};
function createBaseSimulateRequest() {
  return {
    tx: undefined,
    txBytes: new Uint8Array()
  };
}
export const SimulateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txBytes = reader.bytes();
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
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.txBytes !== undefined && (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$txBytes2;
    const message = createBaseSimulateRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.txBytes = (_object$txBytes2 = object.txBytes) !== null && _object$txBytes2 !== void 0 ? _object$txBytes2 : new Uint8Array();
    return message;
  }
};
function createBaseSimulateResponse() {
  return {
    gasInfo: undefined,
    result: undefined
  };
}
export const SimulateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
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
      gasInfo: isSet(object.gasInfo) ? GasInfo.fromJSON(object.gasInfo) : undefined,
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseSimulateResponse();
    message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  }
};
function createBaseGetTxRequest() {
  return {
    hash: ""
  };
}
export const GetTxRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
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
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object) {
    var _object$hash;
    const message = createBaseGetTxRequest();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
function createBaseGetTxResponse() {
  return {
    tx: undefined,
    txResponse: undefined
  };
}
export const GetTxResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
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
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      txResponse: isSet(object.txResponse) ? TxResponse.fromJSON(object.txResponse) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.txResponse !== undefined && (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGetTxResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
    return message;
  }
};
function createBaseGetBlockWithTxsRequest() {
  return {
    height: Long.ZERO,
    pagination: undefined
  };
}
export const GetBlockWithTxsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
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
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGetBlockWithTxsRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseGetBlockWithTxsResponse() {
  return {
    txs: [],
    blockId: undefined,
    block: undefined,
    pagination: undefined
  };
}
export const GetBlockWithTxsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.txs) {
      Tx.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 4:
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(e => Tx.fromJSON(e)) : [],
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$txs2;
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = ((_object$txs2 = object.txs) === null || _object$txs2 === void 0 ? void 0 : _object$txs2.map(e => Tx.fromPartial(e))) || [];
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};