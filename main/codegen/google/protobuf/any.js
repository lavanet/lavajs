"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Any = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
    typeUrl: "",
    value: new Uint8Array()
  };
}
var Any = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.typeUrl !== "") {
      writer.uint32(10).string(message.typeUrl);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAny();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      typeUrl: (0, _helpers.isSet)(object.typeUrl) ? String(object.typeUrl) : "",
      value: (0, _helpers.isSet)(object.value) ? (0, _helpers.bytesFromBase64)(object.value) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    message.value !== undefined && (obj.value = (0, _helpers.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$typeUrl, _object$value;
    var message = createBaseAny();
    message.typeUrl = (_object$typeUrl = object.typeUrl) !== null && _object$typeUrl !== void 0 ? _object$typeUrl : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    return message;
  }
};
exports.Any = Any;