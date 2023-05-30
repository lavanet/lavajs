import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBuy, MsgAddProject } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        buy(value: MsgBuy): {
            typeUrl: string;
            value: Uint8Array;
        };
        addProject(value: MsgAddProject): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        buy(value: MsgBuy): {
            typeUrl: string;
            value: MsgBuy;
        };
        addProject(value: MsgAddProject): {
            typeUrl: string;
            value: MsgAddProject;
        };
    };
    toJSON: {
        buy(value: MsgBuy): {
            typeUrl: string;
            value: unknown;
        };
        addProject(value: MsgAddProject): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        buy(value: any): {
            typeUrl: string;
            value: MsgBuy;
        };
        addProject(value: any): {
            typeUrl: string;
            value: MsgAddProject;
        };
    };
    fromPartial: {
        buy(value: MsgBuy): {
            typeUrl: string;
            value: MsgBuy;
        };
        addProject(value: MsgAddProject): {
            typeUrl: string;
            value: MsgAddProject;
        };
    };
};
