import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.
 * 
 * Protobuf library provides support to pack/unpack Any values in the form
 * of utility functions or additional generated methods of the Any type.
 * 
 * Example 1: Pack and unpack a message in C++.
 * 
 *     Foo foo = ...;
 *     Any any;
 *     any.PackFrom(foo);
 *     ...
 *     if (any.UnpackTo(&foo)) {
 *       ...
 *     }
 * 
 * Example 2: Pack and unpack a message in Java.
 * 
 *     Foo foo = ...;
 *     Any any = Any.pack(foo);
 *     ...
 *     if (any.is(Foo.class)) {
 *       foo = any.unpack(Foo.class);
 *     }
 * 
 *  Example 3: Pack and unpack a message in Python.
 * 
 *     foo = Foo(...)
 *     any = Any()
 *     any.Pack(foo)
 *     ...
 *     if any.Is(Foo.DESCRIPTOR):
 *       any.Unpack(foo)
 *       ...
 * 
 *  Example 4: Pack and unpack a message in Go
 * 
 *      foo := &pb.Foo{...}
 *      any, err := ptypes.MarshalAny(foo)
 *      ...
 *      foo := &pb.Foo{}
 *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
 *        ...
 *      }
 * 
 * The pack methods provided by protobuf library will by default use
 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
 * methods only use the fully qualified type name after the last '/'
 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
 * name "y.z".
 * 
 * 
 * JSON
 * ====
 * The JSON representation of an `Any` value uses the regular
 * representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:
 * 
 *     package google.profile;
 *     message Person {
 *       string first_name = 1;
 *       string last_name = 2;
 *     }
 * 
 *     {
 *       "@type": "type.googleapis.com/google.profile.Person",
 *       "firstName": <string>,
 *       "lastName": <string>
 *     }
 * 
 * If the embedded message type is well-known and has a custom JSON
 * representation, that representation will be embedded adding a field
 * `value` which holds the custom JSON in addition to the `@type`
 * field. Example (for message [google.protobuf.Duration][]):
 * 
 *     {
 *       "@type": "type.googleapis.com/google.protobuf.Duration",
 *       "value": "1.212s"
 *     }
 */

/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.
 * 
 * Protobuf library provides support to pack/unpack Any values in the form
 * of utility functions or additional generated methods of the Any type.
 * 
 * Example 1: Pack and unpack a message in C++.
 * 
 *     Foo foo = ...;
 *     Any any;
 *     any.PackFrom(foo);
 *     ...
 *     if (any.UnpackTo(&foo)) {
 *       ...
 *     }
 * 
 * Example 2: Pack and unpack a message in Java.
 * 
 *     Foo foo = ...;
 *     Any any = Any.pack(foo);
 *     ...
 *     if (any.is(Foo.class)) {
 *       foo = any.unpack(Foo.class);
 *     }
 * 
 *  Example 3: Pack and unpack a message in Python.
 * 
 *     foo = Foo(...)
 *     any = Any()
 *     any.Pack(foo)
 *     ...
 *     if any.Is(Foo.DESCRIPTOR):
 *       any.Unpack(foo)
 *       ...
 * 
 *  Example 4: Pack and unpack a message in Go
 * 
 *      foo := &pb.Foo{...}
 *      any, err := ptypes.MarshalAny(foo)
 *      ...
 *      foo := &pb.Foo{}
 *      if err := ptypes.UnmarshalAny(any, foo); err != nil {
 *        ...
 *      }
 * 
 * The pack methods provided by protobuf library will by default use
 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
 * methods only use the fully qualified type name after the last '/'
 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
 * name "y.z".
 * 
 * 
 * JSON
 * ====
 * The JSON representation of an `Any` value uses the regular
 * representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:
 * 
 *     package google.profile;
 *     message Person {
 *       string first_name = 1;
 *       string last_name = 2;
 *     }
 * 
 *     {
 *       "@type": "type.googleapis.com/google.profile.Person",
 *       "firstName": <string>,
 *       "lastName": <string>
 *     }
 * 
 * If the embedded message type is well-known and has a custom JSON
 * representation, that representation will be embedded adding a field
 * `value` which holds the custom JSON in addition to the `@type`
 * field. Example (for message [google.protobuf.Duration][]):
 * 
 *     {
 *       "@type": "type.googleapis.com/google.protobuf.Duration",
 *       "value": "1.212s"
 *     }
 */

function createBaseAny() {
  return {
    $typeUrl: "/google.protobuf.Any",
    typeUrl: "",
    value: new Uint8Array()
  };
}
export const Any = {
  typeUrl: "/google.protobuf.Any",
  encode(message, writer = BinaryWriter.create()) {
    if (message.typeUrl !== "") {
      writer.uint32(10).string(message.typeUrl);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAny();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeUrl = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$typeUrl, _object$value;
    const message = createBaseAny();
    message.typeUrl = (_object$typeUrl = object.typeUrl) !== null && _object$typeUrl !== void 0 ? _object$typeUrl : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      typeUrl: object.type,
      value: object.value
    };
  },
  toAmino(message) {
    const obj = {};
    obj.type = message.typeUrl;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return Any.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Any.decode(message.value);
  },
  toProto(message) {
    return Any.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Any",
      value: Any.encode(message).finish()
    };
  }
};