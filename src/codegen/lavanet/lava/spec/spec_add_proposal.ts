import { Spec, SpecSDKType } from "./spec";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface SpecAddProposal {
  title: string;
  description: string;
  specs: Spec[];
}
export interface SpecAddProposalSDKType {
  title: string;
  description: string;
  specs: SpecSDKType[];
}
function createBaseSpecAddProposal(): SpecAddProposal {
  return {
    title: "",
    description: "",
    specs: []
  };
}
export const SpecAddProposal = {
  typeUrl: "/lavanet.lava.spec.SpecAddProposal",
  encode(message: SpecAddProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.specs) {
      Spec.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpecAddProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpecAddProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.specs.push(Spec.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SpecAddProposal>): SpecAddProposal {
    const message = createBaseSpecAddProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.specs = object.specs?.map(e => Spec.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SpecAddProposalAmino): SpecAddProposal {
    return {
      title: object.title,
      description: object.description,
      specs: Array.isArray(object?.specs) ? object.specs.map((e: any) => Spec.fromAmino(e)) : []
    };
  },
  toAmino(message: SpecAddProposal): SpecAddProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.specs) {
      obj.specs = message.specs.map(e => e ? Spec.toAmino(e) : undefined);
    } else {
      obj.specs = [];
    }
    return obj;
  },
  fromAminoMsg(object: SpecAddProposalAminoMsg): SpecAddProposal {
    return SpecAddProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: SpecAddProposalProtoMsg): SpecAddProposal {
    return SpecAddProposal.decode(message.value);
  },
  toProto(message: SpecAddProposal): Uint8Array {
    return SpecAddProposal.encode(message).finish();
  },
  toProtoMsg(message: SpecAddProposal): SpecAddProposalProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.SpecAddProposal",
      value: SpecAddProposal.encode(message).finish()
    };
  }
};