import { Params } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */

/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */

/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */

/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */

/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */

/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */

/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */

/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest",
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
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest",
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
  typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse",
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
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInflationRequest() {
  return {};
}
export const QueryInflationRequest = {
  typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationRequest();
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
    const message = createBaseQueryInflationRequest();
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
    return QueryInflationRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryInflationRequest",
      value: QueryInflationRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryInflationRequest.decode(message.value);
  },
  toProto(message) {
    return QueryInflationRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest",
      value: QueryInflationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInflationResponse() {
  return {
    inflation: new Uint8Array()
  };
}
export const QueryInflationResponse = {
  typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.inflation.length !== 0) {
      writer.uint32(10).bytes(message.inflation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$inflation;
    const message = createBaseQueryInflationResponse();
    message.inflation = (_object$inflation = object.inflation) !== null && _object$inflation !== void 0 ? _object$inflation : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      inflation: object.inflation
    };
  },
  toAmino(message) {
    const obj = {};
    obj.inflation = message.inflation;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryInflationResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryInflationResponse",
      value: QueryInflationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryInflationResponse.decode(message.value);
  },
  toProto(message) {
    return QueryInflationResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse",
      value: QueryInflationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAnnualProvisionsRequest() {
  return {};
}
export const QueryAnnualProvisionsRequest = {
  typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnnualProvisionsRequest();
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
    const message = createBaseQueryAnnualProvisionsRequest();
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
    return QueryAnnualProvisionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAnnualProvisionsRequest",
      value: QueryAnnualProvisionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAnnualProvisionsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAnnualProvisionsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest",
      value: QueryAnnualProvisionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAnnualProvisionsResponse() {
  return {
    annualProvisions: new Uint8Array()
  };
}
export const QueryAnnualProvisionsResponse = {
  typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.annualProvisions.length !== 0) {
      writer.uint32(10).bytes(message.annualProvisions);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnnualProvisionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annualProvisions = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$annualProvisi;
    const message = createBaseQueryAnnualProvisionsResponse();
    message.annualProvisions = (_object$annualProvisi = object.annualProvisions) !== null && _object$annualProvisi !== void 0 ? _object$annualProvisi : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      annualProvisions: object.annual_provisions
    };
  },
  toAmino(message) {
    const obj = {};
    obj.annual_provisions = message.annualProvisions;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAnnualProvisionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAnnualProvisionsResponse",
      value: QueryAnnualProvisionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAnnualProvisionsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAnnualProvisionsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse",
      value: QueryAnnualProvisionsResponse.encode(message).finish()
    };
  }
};