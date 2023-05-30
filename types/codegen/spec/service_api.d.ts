import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum PARSER_FUNC {
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
    UNRECOGNIZED = -1
}
export declare const PARSER_FUNCSDKType: typeof PARSER_FUNC;
export declare function pARSER_FUNCFromJSON(object: any): PARSER_FUNC;
export declare function pARSER_FUNCToJSON(object: PARSER_FUNC): string;
export interface ServiceApi {
    name: string;
    blockParsing?: BlockParser;
    computeUnits: Long;
    enabled: boolean;
    apiInterfaces: ApiInterface[];
    reserved?: SpecCategory;
    parsing?: Parsing;
    internalPath: string;
}
export interface ServiceApiSDKType {
    name: string;
    block_parsing?: BlockParserSDKType;
    compute_units: Long;
    enabled: boolean;
    api_interfaces: ApiInterfaceSDKType[];
    reserved?: SpecCategorySDKType;
    parsing?: ParsingSDKType;
    internal_path: string;
}
export interface Parsing {
    functionTag: string;
    functionTemplate: string;
    resultParsing?: BlockParser;
}
export interface ParsingSDKType {
    function_tag: string;
    function_template: string;
    result_parsing?: BlockParserSDKType;
}
export interface ApiInterface {
    interface: string;
    type: string;
    extraComputeUnits: Long;
    category?: SpecCategory;
    overwriteBlockParsing?: BlockParser;
}
export interface ApiInterfaceSDKType {
    interface: string;
    type: string;
    extra_compute_units: Long;
    category?: SpecCategorySDKType;
    overwrite_block_parsing?: BlockParserSDKType;
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
export declare const ServiceApi: {
    encode(message: ServiceApi, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceApi;
    fromJSON(object: any): ServiceApi;
    toJSON(message: ServiceApi): unknown;
    fromPartial(object: Partial<ServiceApi>): ServiceApi;
};
export declare const Parsing: {
    encode(message: Parsing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Parsing;
    fromJSON(object: any): Parsing;
    toJSON(message: Parsing): unknown;
    fromPartial(object: Partial<Parsing>): Parsing;
};
export declare const ApiInterface: {
    encode(message: ApiInterface, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ApiInterface;
    fromJSON(object: any): ApiInterface;
    toJSON(message: ApiInterface): unknown;
    fromPartial(object: Partial<ApiInterface>): ApiInterface;
};
export declare const BlockParser: {
    encode(message: BlockParser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockParser;
    fromJSON(object: any): BlockParser;
    toJSON(message: BlockParser): unknown;
    fromPartial(object: Partial<BlockParser>): BlockParser;
};
export declare const SpecCategory: {
    encode(message: SpecCategory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpecCategory;
    fromJSON(object: any): SpecCategory;
    toJSON(message: SpecCategory): unknown;
    fromPartial(object: Partial<SpecCategory>): SpecCategory;
};
