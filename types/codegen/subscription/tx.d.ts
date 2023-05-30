import { ProjectData, ProjectDataSDKType } from "../projects/project";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgBuy {
    creator: string;
    consumer: string;
    index: string;
    /** in months */
    duration: Long;
}
export interface MsgBuySDKType {
    creator: string;
    consumer: string;
    index: string;
    duration: Long;
}
export interface MsgBuyResponse {
}
export interface MsgBuyResponseSDKType {
}
export interface MsgAddProject {
    creator: string;
    projectData?: ProjectData;
}
export interface MsgAddProjectSDKType {
    creator: string;
    project_data?: ProjectDataSDKType;
}
export interface MsgAddProjectResponse {
}
export interface MsgAddProjectResponseSDKType {
}
export declare const MsgBuy: {
    encode(message: MsgBuy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuy;
    fromJSON(object: any): MsgBuy;
    toJSON(message: MsgBuy): unknown;
    fromPartial(object: Partial<MsgBuy>): MsgBuy;
};
export declare const MsgBuyResponse: {
    encode(_: MsgBuyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyResponse;
    fromJSON(_: any): MsgBuyResponse;
    toJSON(_: MsgBuyResponse): unknown;
    fromPartial(_: Partial<MsgBuyResponse>): MsgBuyResponse;
};
export declare const MsgAddProject: {
    encode(message: MsgAddProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProject;
    fromJSON(object: any): MsgAddProject;
    toJSON(message: MsgAddProject): unknown;
    fromPartial(object: Partial<MsgAddProject>): MsgAddProject;
};
export declare const MsgAddProjectResponse: {
    encode(_: MsgAddProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProjectResponse;
    fromJSON(_: any): MsgAddProjectResponse;
    toJSON(_: MsgAddProjectResponse): unknown;
    fromPartial(_: Partial<MsgAddProjectResponse>): MsgAddProjectResponse;
};
