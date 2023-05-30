import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum ProjectKey_Type {
    NONE = 0,
    ADMIN = 1,
    DEVELOPER = 2,
    UNRECOGNIZED = -1
}
export declare const ProjectKey_TypeSDKType: typeof ProjectKey_Type;
export declare function projectKey_TypeFromJSON(object: any): ProjectKey_Type;
export declare function projectKey_TypeToJSON(object: ProjectKey_Type): string;
export interface Project {
    /** unique id that will be the combination of subscription address and project name, cannot be changed once created */
    index: string;
    /** the subscription address that owns the project */
    subscription: string;
    /** the description of the project for the users convinient */
    description: string;
    /** enabled flag */
    enabled: boolean;
    /** list of the projects keys */
    projectKeys: ProjectKey[];
    adminPolicy?: Policy;
    usedCu: Long;
    subscriptionPolicy?: Policy;
    /** snapshot id to uniquely identify snapshots */
    snapshot: Long;
}
export interface ProjectSDKType {
    index: string;
    subscription: string;
    description: string;
    enabled: boolean;
    project_keys: ProjectKeySDKType[];
    admin_policy?: PolicySDKType;
    used_cu: Long;
    subscription_policy?: PolicySDKType;
    snapshot: Long;
}
export interface ProjectKey {
    /** the address of the project key */
    key: string;
    kinds: number;
}
export interface ProjectKeySDKType {
    key: string;
    kinds: number;
}
/** protobuf expected in YAML format: used "moretags" to simplify parsing */
export interface Policy {
    chainPolicies: ChainPolicy[];
    geolocationProfile: Long;
    totalCuLimit: Long;
    epochCuLimit: Long;
    maxProvidersToPair: Long;
}
/** protobuf expected in YAML format: used "moretags" to simplify parsing */
export interface PolicySDKType {
    chain_policies: ChainPolicySDKType[];
    geolocation_profile: Long;
    total_cu_limit: Long;
    epoch_cu_limit: Long;
    max_providers_to_pair: Long;
}
export interface ChainPolicy {
    chainId: string;
    apis: string[];
}
export interface ChainPolicySDKType {
    chain_id: string;
    apis: string[];
}
export interface ProtoDeveloperData {
    projectID: string;
}
export interface ProtoDeveloperDataSDKType {
    projectID: string;
}
/** used as a container struct for the subscription module */
export interface ProjectData {
    name: string;
    description: string;
    enabled: boolean;
    projectKeys: ProjectKey[];
    policy?: Policy;
}
/** used as a container struct for the subscription module */
export interface ProjectDataSDKType {
    name: string;
    description: string;
    enabled: boolean;
    projectKeys: ProjectKeySDKType[];
    policy?: PolicySDKType;
}
export declare const Project: {
    encode(message: Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Project;
    fromJSON(object: any): Project;
    toJSON(message: Project): unknown;
    fromPartial(object: Partial<Project>): Project;
};
export declare const ProjectKey: {
    encode(message: ProjectKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectKey;
    fromJSON(object: any): ProjectKey;
    toJSON(message: ProjectKey): unknown;
    fromPartial(object: Partial<ProjectKey>): ProjectKey;
};
export declare const Policy: {
    encode(message: Policy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Policy;
    fromJSON(object: any): Policy;
    toJSON(message: Policy): unknown;
    fromPartial(object: Partial<Policy>): Policy;
};
export declare const ChainPolicy: {
    encode(message: ChainPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainPolicy;
    fromJSON(object: any): ChainPolicy;
    toJSON(message: ChainPolicy): unknown;
    fromPartial(object: Partial<ChainPolicy>): ChainPolicy;
};
export declare const ProtoDeveloperData: {
    encode(message: ProtoDeveloperData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtoDeveloperData;
    fromJSON(object: any): ProtoDeveloperData;
    toJSON(message: ProtoDeveloperData): unknown;
    fromPartial(object: Partial<ProtoDeveloperData>): ProtoDeveloperData;
};
export declare const ProjectData: {
    encode(message: ProjectData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectData;
    fromJSON(object: any): ProjectData;
    toJSON(message: ProjectData): unknown;
    fromPartial(object: Partial<ProjectData>): ProjectData;
};
