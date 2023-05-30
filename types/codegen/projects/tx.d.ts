import { ProjectKey, ProjectKeySDKType, Policy, PolicySDKType } from "./project";
import * as _m0 from "protobufjs/minimal";
export interface MsgAddKeys {
    creator: string;
    project: string;
    projectKeys: ProjectKey[];
}
export interface MsgAddKeysSDKType {
    creator: string;
    project: string;
    project_keys: ProjectKeySDKType[];
}
export interface MsgAddKeysResponse {
}
export interface MsgAddKeysResponseSDKType {
}
export interface MsgSetPolicy {
    creator: string;
    project: string;
    policy?: Policy;
}
export interface MsgSetPolicySDKType {
    creator: string;
    project: string;
    policy?: PolicySDKType;
}
export interface MsgSetPolicyResponse {
}
export interface MsgSetPolicyResponseSDKType {
}
export interface MsgSetSubscriptionPolicy {
    creator: string;
    projects: string[];
    policy?: Policy;
}
export interface MsgSetSubscriptionPolicySDKType {
    creator: string;
    projects: string[];
    policy?: PolicySDKType;
}
export interface MsgSetSubscriptionPolicyResponse {
}
export interface MsgSetSubscriptionPolicyResponseSDKType {
}
export declare const MsgAddKeys: {
    encode(message: MsgAddKeys, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddKeys;
    fromJSON(object: any): MsgAddKeys;
    toJSON(message: MsgAddKeys): unknown;
    fromPartial(object: Partial<MsgAddKeys>): MsgAddKeys;
};
export declare const MsgAddKeysResponse: {
    encode(_: MsgAddKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddKeysResponse;
    fromJSON(_: any): MsgAddKeysResponse;
    toJSON(_: MsgAddKeysResponse): unknown;
    fromPartial(_: Partial<MsgAddKeysResponse>): MsgAddKeysResponse;
};
export declare const MsgSetPolicy: {
    encode(message: MsgSetPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPolicy;
    fromJSON(object: any): MsgSetPolicy;
    toJSON(message: MsgSetPolicy): unknown;
    fromPartial(object: Partial<MsgSetPolicy>): MsgSetPolicy;
};
export declare const MsgSetPolicyResponse: {
    encode(_: MsgSetPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPolicyResponse;
    fromJSON(_: any): MsgSetPolicyResponse;
    toJSON(_: MsgSetPolicyResponse): unknown;
    fromPartial(_: Partial<MsgSetPolicyResponse>): MsgSetPolicyResponse;
};
export declare const MsgSetSubscriptionPolicy: {
    encode(message: MsgSetSubscriptionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSubscriptionPolicy;
    fromJSON(object: any): MsgSetSubscriptionPolicy;
    toJSON(message: MsgSetSubscriptionPolicy): unknown;
    fromPartial(object: Partial<MsgSetSubscriptionPolicy>): MsgSetSubscriptionPolicy;
};
export declare const MsgSetSubscriptionPolicyResponse: {
    encode(_: MsgSetSubscriptionPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSubscriptionPolicyResponse;
    fromJSON(_: any): MsgSetSubscriptionPolicyResponse;
    toJSON(_: MsgSetSubscriptionPolicyResponse): unknown;
    fromPartial(_: Partial<MsgSetSubscriptionPolicyResponse>): MsgSetSubscriptionPolicyResponse;
};
