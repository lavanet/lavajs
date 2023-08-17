import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export enum Header_HeaderType {
  pass_send = 0,
  pass_reply = 1,
  pass_both = 2,
  /** pass_ignore - allows it to pass around but is not signed */
  pass_ignore = 3,
  UNRECOGNIZED = -1,
}
export const Header_HeaderTypeSDKType = Header_HeaderType;
export function header_HeaderTypeFromJSON(object: any): Header_HeaderType {
  switch (object) {
    case 0:
    case "pass_send":
      return Header_HeaderType.pass_send;
    case 1:
    case "pass_reply":
      return Header_HeaderType.pass_reply;
    case 2:
    case "pass_both":
      return Header_HeaderType.pass_both;
    case 3:
    case "pass_ignore":
      return Header_HeaderType.pass_ignore;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Header_HeaderType.UNRECOGNIZED;
  }
}
export function header_HeaderTypeToJSON(object: Header_HeaderType): string {
  switch (object) {
    case Header_HeaderType.pass_send:
      return "pass_send";
    case Header_HeaderType.pass_reply:
      return "pass_reply";
    case Header_HeaderType.pass_both:
      return "pass_both";
    case Header_HeaderType.pass_ignore:
      return "pass_ignore";
    case Header_HeaderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum EXTENSION {
  NONE = 0,
  ARCHIVE = 1,
  UNRECOGNIZED = -1,
}
export const EXTENSIONSDKType = EXTENSION;
export function eXTENSIONFromJSON(object: any): EXTENSION {
  switch (object) {
    case 0:
    case "NONE":
      return EXTENSION.NONE;
    case 1:
    case "ARCHIVE":
      return EXTENSION.ARCHIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EXTENSION.UNRECOGNIZED;
  }
}
export function eXTENSIONToJSON(object: EXTENSION): string {
  switch (object) {
    case EXTENSION.NONE:
      return "NONE";
    case EXTENSION.ARCHIVE:
      return "ARCHIVE";
    case EXTENSION.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FUNCTION_TAG {
  DISABLED = 0,
  GET_BLOCKNUM = 1,
  GET_BLOCK_BY_NUM = 2,
  SET_LATEST_IN_METADATA = 3,
  SET_LATEST_IN_BODY = 4,
  VERIFICATION = 5,
  UNRECOGNIZED = -1,
}
export const FUNCTION_TAGSDKType = FUNCTION_TAG;
export function fUNCTION_TAGFromJSON(object: any): FUNCTION_TAG {
  switch (object) {
    case 0:
    case "DISABLED":
      return FUNCTION_TAG.DISABLED;
    case 1:
    case "GET_BLOCKNUM":
      return FUNCTION_TAG.GET_BLOCKNUM;
    case 2:
    case "GET_BLOCK_BY_NUM":
      return FUNCTION_TAG.GET_BLOCK_BY_NUM;
    case 3:
    case "SET_LATEST_IN_METADATA":
      return FUNCTION_TAG.SET_LATEST_IN_METADATA;
    case 4:
    case "SET_LATEST_IN_BODY":
      return FUNCTION_TAG.SET_LATEST_IN_BODY;
    case 5:
    case "VERIFICATION":
      return FUNCTION_TAG.VERIFICATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FUNCTION_TAG.UNRECOGNIZED;
  }
}
export function fUNCTION_TAGToJSON(object: FUNCTION_TAG): string {
  switch (object) {
    case FUNCTION_TAG.DISABLED:
      return "DISABLED";
    case FUNCTION_TAG.GET_BLOCKNUM:
      return "GET_BLOCKNUM";
    case FUNCTION_TAG.GET_BLOCK_BY_NUM:
      return "GET_BLOCK_BY_NUM";
    case FUNCTION_TAG.SET_LATEST_IN_METADATA:
      return "SET_LATEST_IN_METADATA";
    case FUNCTION_TAG.SET_LATEST_IN_BODY:
      return "SET_LATEST_IN_BODY";
    case FUNCTION_TAG.VERIFICATION:
      return "VERIFICATION";
    case FUNCTION_TAG.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum PARSER_FUNC {
  EMPTY = 0,
  /** PARSE_BY_ARG - means parameters are ordered and flat expected arguments are: [param index] (example: PARAMS: [<#BlockNum>,"banana"]) args: 0 */
  PARSE_BY_ARG = 1,
  /** PARSE_CANONICAL - means parameters are ordered and one of them has named properties, expected arguments are: [param index to object,prop_name in object] (example: PARAMS: ["banana",{prop_name:<#BlockNum>}]) need to configure args: 1,"prop_name" */
  PARSE_CANONICAL = 2,
  /** PARSE_DICTIONARY - means parameters are named, expected arguments are [prop_name,separator] (example: PARAMS: {prop_name:<#BlockNum>,prop2:"banana"}) args: "prop_name" */
  PARSE_DICTIONARY = 3,
  /**
   * PARSE_DICTIONARY_OR_ORDERED - means parameters are named expected arguments are [prop_name,separator,parameter order if not found] for input of: block=15&address=abc OR ?abc,15 we will do args: block,=,1
   * reserved
   */
  PARSE_DICTIONARY_OR_ORDERED = 4,
  /** DEFAULT - means parameters are non related to block, and should fetch latest block args: "latest" */
  DEFAULT = 6,
  UNRECOGNIZED = -1,
}
export const PARSER_FUNCSDKType = PARSER_FUNC;
export function pARSER_FUNCFromJSON(object: any): PARSER_FUNC {
  switch (object) {
    case 0:
    case "EMPTY":
      return PARSER_FUNC.EMPTY;
    case 1:
    case "PARSE_BY_ARG":
      return PARSER_FUNC.PARSE_BY_ARG;
    case 2:
    case "PARSE_CANONICAL":
      return PARSER_FUNC.PARSE_CANONICAL;
    case 3:
    case "PARSE_DICTIONARY":
      return PARSER_FUNC.PARSE_DICTIONARY;
    case 4:
    case "PARSE_DICTIONARY_OR_ORDERED":
      return PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED;
    case 6:
    case "DEFAULT":
      return PARSER_FUNC.DEFAULT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PARSER_FUNC.UNRECOGNIZED;
  }
}
export function pARSER_FUNCToJSON(object: PARSER_FUNC): string {
  switch (object) {
    case PARSER_FUNC.EMPTY:
      return "EMPTY";
    case PARSER_FUNC.PARSE_BY_ARG:
      return "PARSE_BY_ARG";
    case PARSER_FUNC.PARSE_CANONICAL:
      return "PARSE_CANONICAL";
    case PARSER_FUNC.PARSE_DICTIONARY:
      return "PARSE_DICTIONARY";
    case PARSER_FUNC.PARSE_DICTIONARY_OR_ORDERED:
      return "PARSE_DICTIONARY_OR_ORDERED";
    case PARSER_FUNC.DEFAULT:
      return "DEFAULT";
    case PARSER_FUNC.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ApiCollection {
  enabled: boolean;
  collectionData: CollectionData;
  apis: Api[];
  headers: Header[];
  /** by collectionKey */
  inheritanceApis: CollectionData[];
  parseDirectives: ParseDirective[];
  extensions: Extension[];
  verifications: Verification[];
}
export interface ApiCollectionSDKType {
  enabled: boolean;
  collection_data: CollectionDataSDKType;
  apis: ApiSDKType[];
  headers: HeaderSDKType[];
  inheritance_apis: CollectionDataSDKType[];
  parse_directives: ParseDirectiveSDKType[];
  extensions: ExtensionSDKType[];
  verifications: VerificationSDKType[];
}
export interface Extension {
  name: string;
  cuMultiplier: number;
  rule: Rule;
}
export interface ExtensionSDKType {
  name: string;
  cu_multiplier: number;
  rule: RuleSDKType;
}
export interface Rule {
  block: bigint;
}
export interface RuleSDKType {
  block: bigint;
}
export interface Verification {
  name: string;
  parseDirective: ParseDirective;
  values: ParseValue[];
}
export interface VerificationSDKType {
  name: string;
  parse_directive: ParseDirectiveSDKType;
  values: ParseValueSDKType[];
}
export interface ParseValue {
  extension: string;
  expectedValue: string;
  latestDistance: bigint;
}
export interface ParseValueSDKType {
  extension: string;
  expected_value: string;
  latest_distance: bigint;
}
export interface CollectionData {
  apiInterface: string;
  internalPath: string;
  type: string;
  addOn: string;
}
export interface CollectionDataSDKType {
  api_interface: string;
  internal_path: string;
  type: string;
  add_on: string;
}
export interface Header {
  name: string;
  kind: Header_HeaderType;
  functionTag: FUNCTION_TAG;
}
export interface HeaderSDKType {
  name: string;
  kind: Header_HeaderType;
  function_tag: FUNCTION_TAG;
}
export interface Api {
  enabled: boolean;
  name: string;
  computeUnits: bigint;
  extraComputeUnits: bigint;
  category: SpecCategory;
  blockParsing: BlockParser;
}
export interface ApiSDKType {
  enabled: boolean;
  name: string;
  compute_units: bigint;
  extra_compute_units: bigint;
  category: SpecCategorySDKType;
  block_parsing: BlockParserSDKType;
}
export interface ParseDirective {
  functionTag: FUNCTION_TAG;
  functionTemplate: string;
  resultParsing: BlockParser;
  apiName: string;
}
export interface ParseDirectiveSDKType {
  function_tag: FUNCTION_TAG;
  function_template: string;
  result_parsing: BlockParserSDKType;
  api_name: string;
}
export interface BlockParser {
  parserArg: string[];
  parserFunc: PARSER_FUNC;
  /** default value when set allows parsing failures to assume the default value */
  defaultValue: string;
  /** used to parse byte responses: base64,hex,bech32 */
  encoding: string;
}
export interface BlockParserSDKType {
  parser_arg: string[];
  parser_func: PARSER_FUNC;
  default_value: string;
  encoding: string;
}
export interface SpecCategory {
  deterministic: boolean;
  local: boolean;
  subscription: boolean;
  stateful: number;
  hangingApi: boolean;
}
export interface SpecCategorySDKType {
  deterministic: boolean;
  local: boolean;
  subscription: boolean;
  stateful: number;
  hanging_api: boolean;
}
function createBaseApiCollection(): ApiCollection {
  return {
    enabled: false,
    collectionData: CollectionData.fromPartial({}),
    apis: [],
    headers: [],
    inheritanceApis: [],
    parseDirectives: [],
    extensions: [],
    verifications: []
  };
}
export const ApiCollection = {
  typeUrl: "/lavanet.lava.spec.ApiCollection",
  encode(message: ApiCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.collectionData !== undefined) {
      CollectionData.encode(message.collectionData, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.apis) {
      Api.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.headers) {
      Header.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.inheritanceApis) {
      CollectionData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.parseDirectives) {
      ParseDirective.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extensions) {
      Extension.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.verifications) {
      Verification.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ApiCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.collectionData = CollectionData.decode(reader, reader.uint32());
          break;
        case 3:
          message.apis.push(Api.decode(reader, reader.uint32()));
          break;
        case 4:
          message.headers.push(Header.decode(reader, reader.uint32()));
          break;
        case 5:
          message.inheritanceApis.push(CollectionData.decode(reader, reader.uint32()));
          break;
        case 6:
          message.parseDirectives.push(ParseDirective.decode(reader, reader.uint32()));
          break;
        case 7:
          message.extensions.push(Extension.decode(reader, reader.uint32()));
          break;
        case 8:
          message.verifications.push(Verification.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ApiCollection>): ApiCollection {
    const message = createBaseApiCollection();
    message.enabled = object.enabled ?? false;
    message.collectionData = object.collectionData !== undefined && object.collectionData !== null ? CollectionData.fromPartial(object.collectionData) : undefined;
    message.apis = object.apis?.map(e => Api.fromPartial(e)) || [];
    message.headers = object.headers?.map(e => Header.fromPartial(e)) || [];
    message.inheritanceApis = object.inheritanceApis?.map(e => CollectionData.fromPartial(e)) || [];
    message.parseDirectives = object.parseDirectives?.map(e => ParseDirective.fromPartial(e)) || [];
    message.extensions = object.extensions?.map(e => Extension.fromPartial(e)) || [];
    message.verifications = object.verifications?.map(e => Verification.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ApiCollectionAmino): ApiCollection {
    return {
      enabled: object.enabled,
      collectionData: object?.collection_data ? CollectionData.fromAmino(object.collection_data) : undefined,
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromAmino(e)) : [],
      headers: Array.isArray(object?.headers) ? object.headers.map((e: any) => Header.fromAmino(e)) : [],
      inheritanceApis: Array.isArray(object?.inheritance_apis) ? object.inheritance_apis.map((e: any) => CollectionData.fromAmino(e)) : [],
      parseDirectives: Array.isArray(object?.parse_directives) ? object.parse_directives.map((e: any) => ParseDirective.fromAmino(e)) : [],
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Extension.fromAmino(e)) : [],
      verifications: Array.isArray(object?.verifications) ? object.verifications.map((e: any) => Verification.fromAmino(e)) : []
    };
  },
  toAmino(message: ApiCollection): ApiCollectionAmino {
    const obj: any = {};
    obj.enabled = message.enabled;
    obj.collection_data = message.collectionData ? CollectionData.toAmino(message.collectionData) : undefined;
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toAmino(e) : undefined);
    } else {
      obj.apis = [];
    }
    if (message.headers) {
      obj.headers = message.headers.map(e => e ? Header.toAmino(e) : undefined);
    } else {
      obj.headers = [];
    }
    if (message.inheritanceApis) {
      obj.inheritance_apis = message.inheritanceApis.map(e => e ? CollectionData.toAmino(e) : undefined);
    } else {
      obj.inheritance_apis = [];
    }
    if (message.parseDirectives) {
      obj.parse_directives = message.parseDirectives.map(e => e ? ParseDirective.toAmino(e) : undefined);
    } else {
      obj.parse_directives = [];
    }
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Extension.toAmino(e) : undefined);
    } else {
      obj.extensions = [];
    }
    if (message.verifications) {
      obj.verifications = message.verifications.map(e => e ? Verification.toAmino(e) : undefined);
    } else {
      obj.verifications = [];
    }
    return obj;
  },
  fromAminoMsg(object: ApiCollectionAminoMsg): ApiCollection {
    return ApiCollection.fromAmino(object.value);
  },
  fromProtoMsg(message: ApiCollectionProtoMsg): ApiCollection {
    return ApiCollection.decode(message.value);
  },
  toProto(message: ApiCollection): Uint8Array {
    return ApiCollection.encode(message).finish();
  },
  toProtoMsg(message: ApiCollection): ApiCollectionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.ApiCollection",
      value: ApiCollection.encode(message).finish()
    };
  }
};
function createBaseExtension(): Extension {
  return {
    name: "",
    cuMultiplier: 0,
    rule: Rule.fromPartial({})
  };
}
export const Extension = {
  typeUrl: "/lavanet.lava.spec.Extension",
  encode(message: Extension, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.cuMultiplier !== 0) {
      writer.uint32(21).float(message.cuMultiplier);
    }
    if (message.rule !== undefined) {
      Rule.encode(message.rule, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Extension {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.cuMultiplier = reader.float();
          break;
        case 3:
          message.rule = Rule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Extension>): Extension {
    const message = createBaseExtension();
    message.name = object.name ?? "";
    message.cuMultiplier = object.cuMultiplier ?? 0;
    message.rule = object.rule !== undefined && object.rule !== null ? Rule.fromPartial(object.rule) : undefined;
    return message;
  },
  fromAmino(object: ExtensionAmino): Extension {
    return {
      name: object.name,
      cuMultiplier: object.cu_multiplier,
      rule: object?.rule ? Rule.fromAmino(object.rule) : undefined
    };
  },
  toAmino(message: Extension): ExtensionAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.cu_multiplier = message.cuMultiplier;
    obj.rule = message.rule ? Rule.toAmino(message.rule) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExtensionAminoMsg): Extension {
    return Extension.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtensionProtoMsg): Extension {
    return Extension.decode(message.value);
  },
  toProto(message: Extension): Uint8Array {
    return Extension.encode(message).finish();
  },
  toProtoMsg(message: Extension): ExtensionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.Extension",
      value: Extension.encode(message).finish()
    };
  }
};
function createBaseRule(): Rule {
  return {
    block: BigInt(0)
  };
}
export const Rule = {
  typeUrl: "/lavanet.lava.spec.Rule",
  encode(message: Rule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Rule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Rule>): Rule {
    const message = createBaseRule();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RuleAmino): Rule {
    return {
      block: BigInt(object.block)
    };
  },
  toAmino(message: Rule): RuleAmino {
    const obj: any = {};
    obj.block = message.block ? message.block.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RuleAminoMsg): Rule {
    return Rule.fromAmino(object.value);
  },
  fromProtoMsg(message: RuleProtoMsg): Rule {
    return Rule.decode(message.value);
  },
  toProto(message: Rule): Uint8Array {
    return Rule.encode(message).finish();
  },
  toProtoMsg(message: Rule): RuleProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.Rule",
      value: Rule.encode(message).finish()
    };
  }
};
function createBaseVerification(): Verification {
  return {
    name: "",
    parseDirective: ParseDirective.fromPartial({}),
    values: []
  };
}
export const Verification = {
  typeUrl: "/lavanet.lava.spec.Verification",
  encode(message: Verification, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.parseDirective !== undefined) {
      ParseDirective.encode(message.parseDirective, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.values) {
      ParseValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Verification {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.parseDirective = ParseDirective.decode(reader, reader.uint32());
          break;
        case 3:
          message.values.push(ParseValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Verification>): Verification {
    const message = createBaseVerification();
    message.name = object.name ?? "";
    message.parseDirective = object.parseDirective !== undefined && object.parseDirective !== null ? ParseDirective.fromPartial(object.parseDirective) : undefined;
    message.values = object.values?.map(e => ParseValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: VerificationAmino): Verification {
    return {
      name: object.name,
      parseDirective: object?.parse_directive ? ParseDirective.fromAmino(object.parse_directive) : undefined,
      values: Array.isArray(object?.values) ? object.values.map((e: any) => ParseValue.fromAmino(e)) : []
    };
  },
  toAmino(message: Verification): VerificationAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.parse_directive = message.parseDirective ? ParseDirective.toAmino(message.parseDirective) : undefined;
    if (message.values) {
      obj.values = message.values.map(e => e ? ParseValue.toAmino(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromAminoMsg(object: VerificationAminoMsg): Verification {
    return Verification.fromAmino(object.value);
  },
  fromProtoMsg(message: VerificationProtoMsg): Verification {
    return Verification.decode(message.value);
  },
  toProto(message: Verification): Uint8Array {
    return Verification.encode(message).finish();
  },
  toProtoMsg(message: Verification): VerificationProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.Verification",
      value: Verification.encode(message).finish()
    };
  }
};
function createBaseParseValue(): ParseValue {
  return {
    extension: "",
    expectedValue: "",
    latestDistance: BigInt(0)
  };
}
export const ParseValue = {
  typeUrl: "/lavanet.lava.spec.ParseValue",
  encode(message: ParseValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.extension !== "") {
      writer.uint32(10).string(message.extension);
    }
    if (message.expectedValue !== "") {
      writer.uint32(18).string(message.expectedValue);
    }
    if (message.latestDistance !== BigInt(0)) {
      writer.uint32(24).uint64(message.latestDistance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParseValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extension = reader.string();
          break;
        case 2:
          message.expectedValue = reader.string();
          break;
        case 3:
          message.latestDistance = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ParseValue>): ParseValue {
    const message = createBaseParseValue();
    message.extension = object.extension ?? "";
    message.expectedValue = object.expectedValue ?? "";
    message.latestDistance = object.latestDistance !== undefined && object.latestDistance !== null ? BigInt(object.latestDistance.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParseValueAmino): ParseValue {
    return {
      extension: object.extension,
      expectedValue: object.expected_value,
      latestDistance: BigInt(object.latest_distance)
    };
  },
  toAmino(message: ParseValue): ParseValueAmino {
    const obj: any = {};
    obj.extension = message.extension;
    obj.expected_value = message.expectedValue;
    obj.latest_distance = message.latestDistance ? message.latestDistance.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParseValueAminoMsg): ParseValue {
    return ParseValue.fromAmino(object.value);
  },
  fromProtoMsg(message: ParseValueProtoMsg): ParseValue {
    return ParseValue.decode(message.value);
  },
  toProto(message: ParseValue): Uint8Array {
    return ParseValue.encode(message).finish();
  },
  toProtoMsg(message: ParseValue): ParseValueProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.ParseValue",
      value: ParseValue.encode(message).finish()
    };
  }
};
function createBaseCollectionData(): CollectionData {
  return {
    apiInterface: "",
    internalPath: "",
    type: "",
    addOn: ""
  };
}
export const CollectionData = {
  typeUrl: "/lavanet.lava.spec.CollectionData",
  encode(message: CollectionData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apiInterface !== "") {
      writer.uint32(10).string(message.apiInterface);
    }
    if (message.internalPath !== "") {
      writer.uint32(18).string(message.internalPath);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.addOn !== "") {
      writer.uint32(34).string(message.addOn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CollectionData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiInterface = reader.string();
          break;
        case 2:
          message.internalPath = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.addOn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CollectionData>): CollectionData {
    const message = createBaseCollectionData();
    message.apiInterface = object.apiInterface ?? "";
    message.internalPath = object.internalPath ?? "";
    message.type = object.type ?? "";
    message.addOn = object.addOn ?? "";
    return message;
  },
  fromAmino(object: CollectionDataAmino): CollectionData {
    return {
      apiInterface: object.api_interface,
      internalPath: object.internal_path,
      type: object.type,
      addOn: object.add_on
    };
  },
  toAmino(message: CollectionData): CollectionDataAmino {
    const obj: any = {};
    obj.api_interface = message.apiInterface;
    obj.internal_path = message.internalPath;
    obj.type = message.type;
    obj.add_on = message.addOn;
    return obj;
  },
  fromAminoMsg(object: CollectionDataAminoMsg): CollectionData {
    return CollectionData.fromAmino(object.value);
  },
  fromProtoMsg(message: CollectionDataProtoMsg): CollectionData {
    return CollectionData.decode(message.value);
  },
  toProto(message: CollectionData): Uint8Array {
    return CollectionData.encode(message).finish();
  },
  toProtoMsg(message: CollectionData): CollectionDataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.CollectionData",
      value: CollectionData.encode(message).finish()
    };
  }
};
function createBaseHeader(): Header {
  return {
    name: "",
    kind: 0,
    functionTag: 0
  };
}
export const Header = {
  typeUrl: "/lavanet.lava.spec.Header",
  encode(message: Header, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.kind !== 0) {
      writer.uint32(16).int32(message.kind);
    }
    if (message.functionTag !== 0) {
      writer.uint32(24).int32(message.functionTag);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.kind = (reader.int32() as any);
          break;
        case 3:
          message.functionTag = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Header>): Header {
    const message = createBaseHeader();
    message.name = object.name ?? "";
    message.kind = object.kind ?? 0;
    message.functionTag = object.functionTag ?? 0;
    return message;
  },
  fromAmino(object: HeaderAmino): Header {
    return {
      name: object.name,
      kind: isSet(object.kind) ? header_HeaderTypeFromJSON(object.kind) : -1,
      functionTag: isSet(object.function_tag) ? fUNCTION_TAGFromJSON(object.function_tag) : -1
    };
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.kind = message.kind;
    obj.function_tag = message.functionTag;
    return obj;
  },
  fromAminoMsg(object: HeaderAminoMsg): Header {
    return Header.fromAmino(object.value);
  },
  fromProtoMsg(message: HeaderProtoMsg): Header {
    return Header.decode(message.value);
  },
  toProto(message: Header): Uint8Array {
    return Header.encode(message).finish();
  },
  toProtoMsg(message: Header): HeaderProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.Header",
      value: Header.encode(message).finish()
    };
  }
};
function createBaseApi(): Api {
  return {
    enabled: false,
    name: "",
    computeUnits: BigInt(0),
    extraComputeUnits: BigInt(0),
    category: SpecCategory.fromPartial({}),
    blockParsing: BlockParser.fromPartial({})
  };
}
export const Api = {
  typeUrl: "/lavanet.lava.spec.Api",
  encode(message: Api, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.computeUnits !== BigInt(0)) {
      writer.uint32(24).uint64(message.computeUnits);
    }
    if (message.extraComputeUnits !== BigInt(0)) {
      writer.uint32(32).uint64(message.extraComputeUnits);
    }
    if (message.category !== undefined) {
      SpecCategory.encode(message.category, writer.uint32(50).fork()).ldelim();
    }
    if (message.blockParsing !== undefined) {
      BlockParser.encode(message.blockParsing, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Api {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.computeUnits = reader.uint64();
          break;
        case 4:
          message.extraComputeUnits = reader.uint64();
          break;
        case 6:
          message.category = SpecCategory.decode(reader, reader.uint32());
          break;
        case 7:
          message.blockParsing = BlockParser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Api>): Api {
    const message = createBaseApi();
    message.enabled = object.enabled ?? false;
    message.name = object.name ?? "";
    message.computeUnits = object.computeUnits !== undefined && object.computeUnits !== null ? BigInt(object.computeUnits.toString()) : BigInt(0);
    message.extraComputeUnits = object.extraComputeUnits !== undefined && object.extraComputeUnits !== null ? BigInt(object.extraComputeUnits.toString()) : BigInt(0);
    message.category = object.category !== undefined && object.category !== null ? SpecCategory.fromPartial(object.category) : undefined;
    message.blockParsing = object.blockParsing !== undefined && object.blockParsing !== null ? BlockParser.fromPartial(object.blockParsing) : undefined;
    return message;
  },
  fromAmino(object: ApiAmino): Api {
    return {
      enabled: object.enabled,
      name: object.name,
      computeUnits: BigInt(object.compute_units),
      extraComputeUnits: BigInt(object.extra_compute_units),
      category: object?.category ? SpecCategory.fromAmino(object.category) : undefined,
      blockParsing: object?.block_parsing ? BlockParser.fromAmino(object.block_parsing) : undefined
    };
  },
  toAmino(message: Api): ApiAmino {
    const obj: any = {};
    obj.enabled = message.enabled;
    obj.name = message.name;
    obj.compute_units = message.computeUnits ? message.computeUnits.toString() : undefined;
    obj.extra_compute_units = message.extraComputeUnits ? message.extraComputeUnits.toString() : undefined;
    obj.category = message.category ? SpecCategory.toAmino(message.category) : undefined;
    obj.block_parsing = message.blockParsing ? BlockParser.toAmino(message.blockParsing) : undefined;
    return obj;
  },
  fromAminoMsg(object: ApiAminoMsg): Api {
    return Api.fromAmino(object.value);
  },
  fromProtoMsg(message: ApiProtoMsg): Api {
    return Api.decode(message.value);
  },
  toProto(message: Api): Uint8Array {
    return Api.encode(message).finish();
  },
  toProtoMsg(message: Api): ApiProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.Api",
      value: Api.encode(message).finish()
    };
  }
};
function createBaseParseDirective(): ParseDirective {
  return {
    functionTag: 0,
    functionTemplate: "",
    resultParsing: BlockParser.fromPartial({}),
    apiName: ""
  };
}
export const ParseDirective = {
  typeUrl: "/lavanet.lava.spec.ParseDirective",
  encode(message: ParseDirective, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.functionTag !== 0) {
      writer.uint32(8).int32(message.functionTag);
    }
    if (message.functionTemplate !== "") {
      writer.uint32(18).string(message.functionTemplate);
    }
    if (message.resultParsing !== undefined) {
      BlockParser.encode(message.resultParsing, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiName !== "") {
      writer.uint32(34).string(message.apiName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParseDirective {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseDirective();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.functionTag = (reader.int32() as any);
          break;
        case 2:
          message.functionTemplate = reader.string();
          break;
        case 3:
          message.resultParsing = BlockParser.decode(reader, reader.uint32());
          break;
        case 4:
          message.apiName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ParseDirective>): ParseDirective {
    const message = createBaseParseDirective();
    message.functionTag = object.functionTag ?? 0;
    message.functionTemplate = object.functionTemplate ?? "";
    message.resultParsing = object.resultParsing !== undefined && object.resultParsing !== null ? BlockParser.fromPartial(object.resultParsing) : undefined;
    message.apiName = object.apiName ?? "";
    return message;
  },
  fromAmino(object: ParseDirectiveAmino): ParseDirective {
    return {
      functionTag: isSet(object.function_tag) ? fUNCTION_TAGFromJSON(object.function_tag) : -1,
      functionTemplate: object.function_template,
      resultParsing: object?.result_parsing ? BlockParser.fromAmino(object.result_parsing) : undefined,
      apiName: object.api_name
    };
  },
  toAmino(message: ParseDirective): ParseDirectiveAmino {
    const obj: any = {};
    obj.function_tag = message.functionTag;
    obj.function_template = message.functionTemplate;
    obj.result_parsing = message.resultParsing ? BlockParser.toAmino(message.resultParsing) : undefined;
    obj.api_name = message.apiName;
    return obj;
  },
  fromAminoMsg(object: ParseDirectiveAminoMsg): ParseDirective {
    return ParseDirective.fromAmino(object.value);
  },
  fromProtoMsg(message: ParseDirectiveProtoMsg): ParseDirective {
    return ParseDirective.decode(message.value);
  },
  toProto(message: ParseDirective): Uint8Array {
    return ParseDirective.encode(message).finish();
  },
  toProtoMsg(message: ParseDirective): ParseDirectiveProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.ParseDirective",
      value: ParseDirective.encode(message).finish()
    };
  }
};
function createBaseBlockParser(): BlockParser {
  return {
    parserArg: [],
    parserFunc: 0,
    defaultValue: "",
    encoding: ""
  };
}
export const BlockParser = {
  typeUrl: "/lavanet.lava.spec.BlockParser",
  encode(message: BlockParser, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.parserArg) {
      writer.uint32(10).string(v!);
    }
    if (message.parserFunc !== 0) {
      writer.uint32(16).int32(message.parserFunc);
    }
    if (message.defaultValue !== "") {
      writer.uint32(26).string(message.defaultValue);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockParser {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parserArg.push(reader.string());
          break;
        case 2:
          message.parserFunc = (reader.int32() as any);
          break;
        case 3:
          message.defaultValue = reader.string();
          break;
        case 4:
          message.encoding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BlockParser>): BlockParser {
    const message = createBaseBlockParser();
    message.parserArg = object.parserArg?.map(e => e) || [];
    message.parserFunc = object.parserFunc ?? 0;
    message.defaultValue = object.defaultValue ?? "";
    message.encoding = object.encoding ?? "";
    return message;
  },
  fromAmino(object: BlockParserAmino): BlockParser {
    return {
      parserArg: Array.isArray(object?.parser_arg) ? object.parser_arg.map((e: any) => e) : [],
      parserFunc: isSet(object.parser_func) ? pARSER_FUNCFromJSON(object.parser_func) : -1,
      defaultValue: object.default_value,
      encoding: object.encoding
    };
  },
  toAmino(message: BlockParser): BlockParserAmino {
    const obj: any = {};
    if (message.parserArg) {
      obj.parser_arg = message.parserArg.map(e => e);
    } else {
      obj.parser_arg = [];
    }
    obj.parser_func = message.parserFunc;
    obj.default_value = message.defaultValue;
    obj.encoding = message.encoding;
    return obj;
  },
  fromAminoMsg(object: BlockParserAminoMsg): BlockParser {
    return BlockParser.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockParserProtoMsg): BlockParser {
    return BlockParser.decode(message.value);
  },
  toProto(message: BlockParser): Uint8Array {
    return BlockParser.encode(message).finish();
  },
  toProtoMsg(message: BlockParser): BlockParserProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.BlockParser",
      value: BlockParser.encode(message).finish()
    };
  }
};
function createBaseSpecCategory(): SpecCategory {
  return {
    deterministic: false,
    local: false,
    subscription: false,
    stateful: 0,
    hangingApi: false
  };
}
export const SpecCategory = {
  typeUrl: "/lavanet.lava.spec.SpecCategory",
  encode(message: SpecCategory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deterministic === true) {
      writer.uint32(8).bool(message.deterministic);
    }
    if (message.local === true) {
      writer.uint32(16).bool(message.local);
    }
    if (message.subscription === true) {
      writer.uint32(24).bool(message.subscription);
    }
    if (message.stateful !== 0) {
      writer.uint32(32).uint32(message.stateful);
    }
    if (message.hangingApi === true) {
      writer.uint32(40).bool(message.hangingApi);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpecCategory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpecCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deterministic = reader.bool();
          break;
        case 2:
          message.local = reader.bool();
          break;
        case 3:
          message.subscription = reader.bool();
          break;
        case 4:
          message.stateful = reader.uint32();
          break;
        case 5:
          message.hangingApi = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SpecCategory>): SpecCategory {
    const message = createBaseSpecCategory();
    message.deterministic = object.deterministic ?? false;
    message.local = object.local ?? false;
    message.subscription = object.subscription ?? false;
    message.stateful = object.stateful ?? 0;
    message.hangingApi = object.hangingApi ?? false;
    return message;
  },
  fromAmino(object: SpecCategoryAmino): SpecCategory {
    return {
      deterministic: object.deterministic,
      local: object.local,
      subscription: object.subscription,
      stateful: object.stateful,
      hangingApi: object.hanging_api
    };
  },
  toAmino(message: SpecCategory): SpecCategoryAmino {
    const obj: any = {};
    obj.deterministic = message.deterministic;
    obj.local = message.local;
    obj.subscription = message.subscription;
    obj.stateful = message.stateful;
    obj.hanging_api = message.hangingApi;
    return obj;
  },
  fromAminoMsg(object: SpecCategoryAminoMsg): SpecCategory {
    return SpecCategory.fromAmino(object.value);
  },
  fromProtoMsg(message: SpecCategoryProtoMsg): SpecCategory {
    return SpecCategory.decode(message.value);
  },
  toProto(message: SpecCategory): Uint8Array {
    return SpecCategory.encode(message).finish();
  },
  toProtoMsg(message: SpecCategory): SpecCategoryProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.SpecCategory",
      value: SpecCategory.encode(message).finish()
    };
  }
};