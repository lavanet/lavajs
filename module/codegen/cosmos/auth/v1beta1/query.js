import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params } from "./auth";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

/** QueryAccountRequest is the request type for the Query/Account RPC method. */

/** QueryAccountRequest is the request type for the Query/Account RPC method. */

/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */

/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/** QueryAccountResponse is the response type for the Query/Account RPC method. */

/** QueryAccountResponse is the response type for the Query/Account RPC method. */

/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */

/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */

/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */

/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */

/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */

/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */

/** AddressBytesToStringRequest is the request type for AddressString rpc method */

/** AddressBytesToStringRequest is the request type for AddressString rpc method */

/** AddressBytesToStringResponse is the response type for AddressString rpc method */

/** AddressBytesToStringResponse is the response type for AddressString rpc method */

/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */

/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */

/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */

/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */

function createBaseQueryAccountsRequest() {
  return {
    pagination: undefined
  };
}
export const QueryAccountsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
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
    const message = createBaseQueryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAccountsResponse() {
  return {
    accounts: [],
    pagination: undefined
  };
}
export const QueryAccountsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.accounts) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
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
      accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map(e => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$accounts;
    const message = createBaseQueryAccountsResponse();
    message.accounts = ((_object$accounts = object.accounts) === null || _object$accounts === void 0 ? void 0 : _object$accounts.map(e => Any.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAccountRequest() {
  return {
    address: ""
  };
}
export const QueryAccountRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseQueryAccountRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
function createBaseQueryModuleAccountsRequest() {
  return {};
}
export const QueryModuleAccountsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsRequest();
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
    const message = createBaseQueryModuleAccountsRequest();
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
function createBaseQueryAccountResponse() {
  return {
    account: undefined
  };
}
export const QueryAccountResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
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
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.account !== undefined && (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    return message;
  }
};
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
function createBaseQueryModuleAccountsResponse() {
  return {
    accounts: []
  };
}
export const QueryModuleAccountsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.accounts) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
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
      accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map(e => Any.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$accounts2;
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = ((_object$accounts2 = object.accounts) === null || _object$accounts2 === void 0 ? void 0 : _object$accounts2.map(e => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseBech32PrefixRequest() {
  return {};
}
export const Bech32PrefixRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixRequest();
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
    const message = createBaseBech32PrefixRequest();
    return message;
  }
};
function createBaseBech32PrefixResponse() {
  return {
    bech32Prefix: ""
  };
}
export const Bech32PrefixResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
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
      bech32Prefix: isSet(object.bech32Prefix) ? String(object.bech32Prefix) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.bech32Prefix !== undefined && (obj.bech32Prefix = message.bech32Prefix);
    return obj;
  },
  fromPartial(object) {
    var _object$bech32Prefix;
    const message = createBaseBech32PrefixResponse();
    message.bech32Prefix = (_object$bech32Prefix = object.bech32Prefix) !== null && _object$bech32Prefix !== void 0 ? _object$bech32Prefix : "";
    return message;
  }
};
function createBaseAddressBytesToStringRequest() {
  return {
    addressBytes: new Uint8Array()
  };
}
export const AddressBytesToStringRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
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
      addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.addressBytes !== undefined && (obj.addressBytes = base64FromBytes(message.addressBytes !== undefined ? message.addressBytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$addressBytes;
    const message = createBaseAddressBytesToStringRequest();
    message.addressBytes = (_object$addressBytes = object.addressBytes) !== null && _object$addressBytes !== void 0 ? _object$addressBytes : new Uint8Array();
    return message;
  }
};
function createBaseAddressBytesToStringResponse() {
  return {
    addressString: ""
  };
}
export const AddressBytesToStringResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
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
      addressString: isSet(object.addressString) ? String(object.addressString) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.addressString !== undefined && (obj.addressString = message.addressString);
    return obj;
  },
  fromPartial(object) {
    var _object$addressString;
    const message = createBaseAddressBytesToStringResponse();
    message.addressString = (_object$addressString = object.addressString) !== null && _object$addressString !== void 0 ? _object$addressString : "";
    return message;
  }
};
function createBaseAddressStringToBytesRequest() {
  return {
    addressString: ""
  };
}
export const AddressStringToBytesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
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
      addressString: isSet(object.addressString) ? String(object.addressString) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.addressString !== undefined && (obj.addressString = message.addressString);
    return obj;
  },
  fromPartial(object) {
    var _object$addressString2;
    const message = createBaseAddressStringToBytesRequest();
    message.addressString = (_object$addressString2 = object.addressString) !== null && _object$addressString2 !== void 0 ? _object$addressString2 : "";
    return message;
  }
};
function createBaseAddressStringToBytesResponse() {
  return {
    addressBytes: new Uint8Array()
  };
}
export const AddressStringToBytesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
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
      addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.addressBytes !== undefined && (obj.addressBytes = base64FromBytes(message.addressBytes !== undefined ? message.addressBytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$addressBytes2;
    const message = createBaseAddressStringToBytesResponse();
    message.addressBytes = (_object$addressBytes2 = object.addressBytes) !== null && _object$addressBytes2 !== void 0 ? _object$addressBytes2 : new Uint8Array();
    return message;
  }
};