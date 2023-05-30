import * as _195 from "./api/http";
import * as _196 from "./protobuf/any";
import * as _197 from "./protobuf/descriptor";
import * as _198 from "./protobuf/duration";
import * as _199 from "./protobuf/empty";
import * as _200 from "./protobuf/timestamp";
import * as _201 from "./protobuf/wrappers";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _195.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.Http;
            fromJSON(object: any): _195.Http;
            toJSON(message: _195.Http): unknown;
            fromPartial(object: Partial<_195.Http>): _195.Http;
        };
        HttpRule: {
            encode(message: _195.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.HttpRule;
            fromJSON(object: any): _195.HttpRule;
            toJSON(message: _195.HttpRule): unknown;
            fromPartial(object: Partial<_195.HttpRule>): _195.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _195.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.CustomHttpPattern;
            fromJSON(object: any): _195.CustomHttpPattern;
            toJSON(message: _195.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_195.CustomHttpPattern>): _195.CustomHttpPattern;
        };
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _201.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.DoubleValue;
            fromJSON(object: any): _201.DoubleValue;
            toJSON(message: _201.DoubleValue): unknown;
            fromPartial(object: Partial<_201.DoubleValue>): _201.DoubleValue;
        };
        FloatValue: {
            encode(message: _201.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.FloatValue;
            fromJSON(object: any): _201.FloatValue;
            toJSON(message: _201.FloatValue): unknown;
            fromPartial(object: Partial<_201.FloatValue>): _201.FloatValue;
        };
        Int64Value: {
            encode(message: _201.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Int64Value;
            fromJSON(object: any): _201.Int64Value;
            toJSON(message: _201.Int64Value): unknown;
            fromPartial(object: Partial<_201.Int64Value>): _201.Int64Value;
        };
        UInt64Value: {
            encode(message: _201.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.UInt64Value;
            fromJSON(object: any): _201.UInt64Value;
            toJSON(message: _201.UInt64Value): unknown;
            fromPartial(object: Partial<_201.UInt64Value>): _201.UInt64Value;
        };
        Int32Value: {
            encode(message: _201.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Int32Value;
            fromJSON(object: any): _201.Int32Value;
            toJSON(message: _201.Int32Value): unknown;
            fromPartial(object: Partial<_201.Int32Value>): _201.Int32Value;
        };
        UInt32Value: {
            encode(message: _201.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.UInt32Value;
            fromJSON(object: any): _201.UInt32Value;
            toJSON(message: _201.UInt32Value): unknown;
            fromPartial(object: Partial<_201.UInt32Value>): _201.UInt32Value;
        };
        BoolValue: {
            encode(message: _201.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.BoolValue;
            fromJSON(object: any): _201.BoolValue;
            toJSON(message: _201.BoolValue): unknown;
            fromPartial(object: Partial<_201.BoolValue>): _201.BoolValue;
        };
        StringValue: {
            encode(message: _201.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.StringValue;
            fromJSON(object: any): _201.StringValue;
            toJSON(message: _201.StringValue): unknown;
            fromPartial(object: Partial<_201.StringValue>): _201.StringValue;
        };
        BytesValue: {
            encode(message: _201.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.BytesValue;
            fromJSON(object: any): _201.BytesValue;
            toJSON(message: _201.BytesValue): unknown;
            fromPartial(object: Partial<_201.BytesValue>): _201.BytesValue;
        };
        Timestamp: {
            encode(message: _200.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Timestamp;
            fromJSON(object: any): _200.Timestamp;
            toJSON(message: _200.Timestamp): unknown;
            fromPartial(object: Partial<_200.Timestamp>): _200.Timestamp;
        };
        Empty: {
            encode(_: _199.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Empty;
            fromJSON(_: any): _199.Empty;
            toJSON(_: _199.Empty): unknown;
            fromPartial(_: Partial<_199.Empty>): _199.Empty;
        };
        Duration: {
            encode(message: _198.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Duration;
            fromJSON(object: any): _198.Duration;
            toJSON(message: _198.Duration): unknown;
            fromPartial(object: Partial<_198.Duration>): _198.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _197.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _197.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _197.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _197.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _197.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _197.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _197.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _197.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _197.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _197.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _197.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _197.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _197.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _197.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _197.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _197.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _197.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _197.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _197.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _197.FieldOptions_CType;
        FieldOptions_JSType: typeof _197.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _197.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _197.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _197.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _197.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.FileDescriptorSet;
            fromJSON(object: any): _197.FileDescriptorSet;
            toJSON(message: _197.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_197.FileDescriptorSet>): _197.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _197.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.FileDescriptorProto;
            fromJSON(object: any): _197.FileDescriptorProto;
            toJSON(message: _197.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_197.FileDescriptorProto>): _197.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _197.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.DescriptorProto;
            fromJSON(object: any): _197.DescriptorProto;
            toJSON(message: _197.DescriptorProto): unknown;
            fromPartial(object: Partial<_197.DescriptorProto>): _197.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _197.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _197.DescriptorProto_ExtensionRange;
            toJSON(message: _197.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_197.DescriptorProto_ExtensionRange>): _197.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _197.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.DescriptorProto_ReservedRange;
            fromJSON(object: any): _197.DescriptorProto_ReservedRange;
            toJSON(message: _197.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_197.DescriptorProto_ReservedRange>): _197.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _197.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.ExtensionRangeOptions;
            fromJSON(object: any): _197.ExtensionRangeOptions;
            toJSON(message: _197.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_197.ExtensionRangeOptions>): _197.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _197.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.FieldDescriptorProto;
            fromJSON(object: any): _197.FieldDescriptorProto;
            toJSON(message: _197.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_197.FieldDescriptorProto>): _197.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _197.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.OneofDescriptorProto;
            fromJSON(object: any): _197.OneofDescriptorProto;
            toJSON(message: _197.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_197.OneofDescriptorProto>): _197.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _197.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.EnumDescriptorProto;
            fromJSON(object: any): _197.EnumDescriptorProto;
            toJSON(message: _197.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_197.EnumDescriptorProto>): _197.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _197.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _197.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _197.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_197.EnumDescriptorProto_EnumReservedRange>): _197.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _197.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.EnumValueDescriptorProto;
            fromJSON(object: any): _197.EnumValueDescriptorProto;
            toJSON(message: _197.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_197.EnumValueDescriptorProto>): _197.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _197.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.ServiceDescriptorProto;
            fromJSON(object: any): _197.ServiceDescriptorProto;
            toJSON(message: _197.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_197.ServiceDescriptorProto>): _197.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _197.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MethodDescriptorProto;
            fromJSON(object: any): _197.MethodDescriptorProto;
            toJSON(message: _197.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_197.MethodDescriptorProto>): _197.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _197.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.FileOptions;
            fromJSON(object: any): _197.FileOptions;
            toJSON(message: _197.FileOptions): unknown;
            fromPartial(object: Partial<_197.FileOptions>): _197.FileOptions;
        };
        MessageOptions: {
            encode(message: _197.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MessageOptions;
            fromJSON(object: any): _197.MessageOptions;
            toJSON(message: _197.MessageOptions): unknown;
            fromPartial(object: Partial<_197.MessageOptions>): _197.MessageOptions;
        };
        FieldOptions: {
            encode(message: _197.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.FieldOptions;
            fromJSON(object: any): _197.FieldOptions;
            toJSON(message: _197.FieldOptions): unknown;
            fromPartial(object: Partial<_197.FieldOptions>): _197.FieldOptions;
        };
        OneofOptions: {
            encode(message: _197.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.OneofOptions;
            fromJSON(object: any): _197.OneofOptions;
            toJSON(message: _197.OneofOptions): unknown;
            fromPartial(object: Partial<_197.OneofOptions>): _197.OneofOptions;
        };
        EnumOptions: {
            encode(message: _197.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.EnumOptions;
            fromJSON(object: any): _197.EnumOptions;
            toJSON(message: _197.EnumOptions): unknown;
            fromPartial(object: Partial<_197.EnumOptions>): _197.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _197.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.EnumValueOptions;
            fromJSON(object: any): _197.EnumValueOptions;
            toJSON(message: _197.EnumValueOptions): unknown;
            fromPartial(object: Partial<_197.EnumValueOptions>): _197.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _197.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.ServiceOptions;
            fromJSON(object: any): _197.ServiceOptions;
            toJSON(message: _197.ServiceOptions): unknown;
            fromPartial(object: Partial<_197.ServiceOptions>): _197.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _197.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.MethodOptions;
            fromJSON(object: any): _197.MethodOptions;
            toJSON(message: _197.MethodOptions): unknown;
            fromPartial(object: Partial<_197.MethodOptions>): _197.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _197.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.UninterpretedOption;
            fromJSON(object: any): _197.UninterpretedOption;
            toJSON(message: _197.UninterpretedOption): unknown;
            fromPartial(object: Partial<_197.UninterpretedOption>): _197.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _197.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.UninterpretedOption_NamePart;
            fromJSON(object: any): _197.UninterpretedOption_NamePart;
            toJSON(message: _197.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_197.UninterpretedOption_NamePart>): _197.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _197.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.SourceCodeInfo;
            fromJSON(object: any): _197.SourceCodeInfo;
            toJSON(message: _197.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_197.SourceCodeInfo>): _197.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _197.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.SourceCodeInfo_Location;
            fromJSON(object: any): _197.SourceCodeInfo_Location;
            toJSON(message: _197.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_197.SourceCodeInfo_Location>): _197.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _197.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.GeneratedCodeInfo;
            fromJSON(object: any): _197.GeneratedCodeInfo;
            toJSON(message: _197.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_197.GeneratedCodeInfo>): _197.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _197.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _197.GeneratedCodeInfo_Annotation;
            toJSON(message: _197.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_197.GeneratedCodeInfo_Annotation>): _197.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _196.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Any;
            fromJSON(object: any): _196.Any;
            toJSON(message: _196.Any): unknown;
            fromPartial(object: Partial<_196.Any>): _196.Any;
        };
    };
}
