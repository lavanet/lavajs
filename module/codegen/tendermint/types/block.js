import { Header, Data, Commit } from "./types";
import { EvidenceList } from "./evidence";
import * as _m0 from "protobufjs/minimal";
function createBaseBlock() {
  return {
    header: undefined,
    data: undefined,
    evidence: undefined,
    lastCommit: undefined
  };
}
export const Block = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== undefined) {
      Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.lastCommit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBlock();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.data = object.data !== undefined && object.data !== null ? Data.fromPartial(object.data) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceList.fromPartial(object.evidence) : undefined;
    message.lastCommit = object.lastCommit !== undefined && object.lastCommit !== null ? Commit.fromPartial(object.lastCommit) : undefined;
    return message;
  }
};