import * as _100 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _100.ScalarType;
    scalarTypeToJSON(object: _100.ScalarType): string;
    ScalarType: typeof _100.ScalarType;
    ScalarTypeSDKType: typeof _100.ScalarType;
    InterfaceDescriptor: {
        encode(message: _100.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.InterfaceDescriptor;
        fromJSON(object: any): _100.InterfaceDescriptor;
        toJSON(message: _100.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_100.InterfaceDescriptor>): _100.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _100.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ScalarDescriptor;
        fromJSON(object: any): _100.ScalarDescriptor;
        toJSON(message: _100.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_100.ScalarDescriptor>): _100.ScalarDescriptor;
    };
};
