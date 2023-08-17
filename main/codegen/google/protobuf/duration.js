"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Duration = void 0;
var _binary = require("../../binary");
/**
 * A Duration represents a signed, fixed-length span of time represented
 * as a count of seconds and fractions of seconds at nanosecond
 * resolution. It is independent of any calendar and concepts like "day"
 * or "month". It is related to Timestamp in that the difference between
 * two Timestamp values is a Duration and it can be added or subtracted
 * from a Timestamp. Range is approximately +-10,000 years.
 * 
 * # Examples
 * 
 * Example 1: Compute Duration from two Timestamps in pseudo code.
 * 
 *     Timestamp start = ...;
 *     Timestamp end = ...;
 *     Duration duration = ...;
 * 
 *     duration.seconds = end.seconds - start.seconds;
 *     duration.nanos = end.nanos - start.nanos;
 * 
 *     if (duration.seconds < 0 && duration.nanos > 0) {
 *       duration.seconds += 1;
 *       duration.nanos -= 1000000000;
 *     } else if (durations.seconds > 0 && duration.nanos < 0) {
 *       duration.seconds -= 1;
 *       duration.nanos += 1000000000;
 *     }
 * 
 * Example 2: Compute Timestamp from Timestamp + Duration in pseudo code.
 * 
 *     Timestamp start = ...;
 *     Duration duration = ...;
 *     Timestamp end = ...;
 * 
 *     end.seconds = start.seconds + duration.seconds;
 *     end.nanos = start.nanos + duration.nanos;
 * 
 *     if (end.nanos < 0) {
 *       end.seconds -= 1;
 *       end.nanos += 1000000000;
 *     } else if (end.nanos >= 1000000000) {
 *       end.seconds += 1;
 *       end.nanos -= 1000000000;
 *     }
 * 
 * Example 3: Compute Duration from datetime.timedelta in Python.
 * 
 *     td = datetime.timedelta(days=3, minutes=10)
 *     duration = Duration()
 *     duration.FromTimedelta(td)
 * 
 * # JSON Mapping
 * 
 * In JSON format, the Duration type is encoded as a string rather than an
 * object, where the string ends in the suffix "s" (indicating seconds) and
 * is preceded by the number of seconds, with nanoseconds expressed as
 * fractional seconds. For example, 3 seconds with 0 nanoseconds should be
 * encoded in JSON format as "3s", while 3 seconds and 1 nanosecond should
 * be expressed in JSON format as "3.000000001s", and 3 seconds and 1
 * microsecond should be expressed in JSON format as "3.000001s".
 */

/**
 * A Duration represents a signed, fixed-length span of time represented
 * as a count of seconds and fractions of seconds at nanosecond
 * resolution. It is independent of any calendar and concepts like "day"
 * or "month". It is related to Timestamp in that the difference between
 * two Timestamp values is a Duration and it can be added or subtracted
 * from a Timestamp. Range is approximately +-10,000 years.
 * 
 * # Examples
 * 
 * Example 1: Compute Duration from two Timestamps in pseudo code.
 * 
 *     Timestamp start = ...;
 *     Timestamp end = ...;
 *     Duration duration = ...;
 * 
 *     duration.seconds = end.seconds - start.seconds;
 *     duration.nanos = end.nanos - start.nanos;
 * 
 *     if (duration.seconds < 0 && duration.nanos > 0) {
 *       duration.seconds += 1;
 *       duration.nanos -= 1000000000;
 *     } else if (durations.seconds > 0 && duration.nanos < 0) {
 *       duration.seconds -= 1;
 *       duration.nanos += 1000000000;
 *     }
 * 
 * Example 2: Compute Timestamp from Timestamp + Duration in pseudo code.
 * 
 *     Timestamp start = ...;
 *     Duration duration = ...;
 *     Timestamp end = ...;
 * 
 *     end.seconds = start.seconds + duration.seconds;
 *     end.nanos = start.nanos + duration.nanos;
 * 
 *     if (end.nanos < 0) {
 *       end.seconds -= 1;
 *       end.nanos += 1000000000;
 *     } else if (end.nanos >= 1000000000) {
 *       end.seconds += 1;
 *       end.nanos -= 1000000000;
 *     }
 * 
 * Example 3: Compute Duration from datetime.timedelta in Python.
 * 
 *     td = datetime.timedelta(days=3, minutes=10)
 *     duration = Duration()
 *     duration.FromTimedelta(td)
 * 
 * # JSON Mapping
 * 
 * In JSON format, the Duration type is encoded as a string rather than an
 * object, where the string ends in the suffix "s" (indicating seconds) and
 * is preceded by the number of seconds, with nanoseconds expressed as
 * fractional seconds. For example, 3 seconds with 0 nanoseconds should be
 * encoded in JSON format as "3s", while 3 seconds and 1 nanosecond should
 * be expressed in JSON format as "3.000000001s", and 3 seconds and 1
 * microsecond should be expressed in JSON format as "3.000001s".
 */

function createBaseDuration() {
  return {
    seconds: BigInt(0),
    nanos: 0
  };
}
var Duration = {
  typeUrl: "/google.protobuf.Duration",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.seconds !== BigInt(0)) {
      writer.uint32(8).int64(message.seconds);
    }
    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDuration();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.int64();
          break;
        case 2:
          message.nanos = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$nanos;
    var message = createBaseDuration();
    message.seconds = object.seconds !== undefined && object.seconds !== null ? BigInt(object.seconds.toString()) : BigInt(0);
    message.nanos = (_object$nanos = object.nanos) !== null && _object$nanos !== void 0 ? _object$nanos : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    var value = BigInt(object);
    return {
      seconds: value / BigInt("1000000000"),
      nanos: Number(value % BigInt("1000000000"))
    };
  },
  toAmino: function toAmino(message) {
    return (message.seconds * BigInt("1000000000") + BigInt(message.nanos)).toString();
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Duration.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Duration.decode(message.value);
  },
  toProto: function toProto(message) {
    return Duration.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Duration",
      value: Duration.encode(message).finish()
    };
  }
};
exports.Duration = Duration;