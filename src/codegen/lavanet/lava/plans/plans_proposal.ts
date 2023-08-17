import { Plan, PlanSDKType } from "./plan";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface PlansAddProposal {
  title: string;
  description: string;
  plans: Plan[];
}
export interface PlansAddProposalSDKType {
  title: string;
  description: string;
  plans: PlanSDKType[];
}
export interface PlansDelProposal {
  title: string;
  description: string;
  plans: string[];
}
export interface PlansDelProposalSDKType {
  title: string;
  description: string;
  plans: string[];
}
function createBasePlansAddProposal(): PlansAddProposal {
  return {
    title: "",
    description: "",
    plans: []
  };
}
export const PlansAddProposal = {
  typeUrl: "/lavanet.lava.plans.PlansAddProposal",
  encode(message: PlansAddProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.plans) {
      Plan.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PlansAddProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlansAddProposal();
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
          message.plans.push(Plan.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PlansAddProposal>): PlansAddProposal {
    const message = createBasePlansAddProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plans = object.plans?.map(e => Plan.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PlansAddProposalAmino): PlansAddProposal {
    return {
      title: object.title,
      description: object.description,
      plans: Array.isArray(object?.plans) ? object.plans.map((e: any) => Plan.fromAmino(e)) : []
    };
  },
  toAmino(message: PlansAddProposal): PlansAddProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.plans) {
      obj.plans = message.plans.map(e => e ? Plan.toAmino(e) : undefined);
    } else {
      obj.plans = [];
    }
    return obj;
  },
  fromAminoMsg(object: PlansAddProposalAminoMsg): PlansAddProposal {
    return PlansAddProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: PlansAddProposalProtoMsg): PlansAddProposal {
    return PlansAddProposal.decode(message.value);
  },
  toProto(message: PlansAddProposal): Uint8Array {
    return PlansAddProposal.encode(message).finish();
  },
  toProtoMsg(message: PlansAddProposal): PlansAddProposalProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.PlansAddProposal",
      value: PlansAddProposal.encode(message).finish()
    };
  }
};
function createBasePlansDelProposal(): PlansDelProposal {
  return {
    title: "",
    description: "",
    plans: []
  };
}
export const PlansDelProposal = {
  typeUrl: "/lavanet.lava.plans.PlansDelProposal",
  encode(message: PlansDelProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.plans) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PlansDelProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlansDelProposal();
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
          message.plans.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PlansDelProposal>): PlansDelProposal {
    const message = createBasePlansDelProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plans = object.plans?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PlansDelProposalAmino): PlansDelProposal {
    return {
      title: object.title,
      description: object.description,
      plans: Array.isArray(object?.plans) ? object.plans.map((e: any) => e) : []
    };
  },
  toAmino(message: PlansDelProposal): PlansDelProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.plans) {
      obj.plans = message.plans.map(e => e);
    } else {
      obj.plans = [];
    }
    return obj;
  },
  fromAminoMsg(object: PlansDelProposalAminoMsg): PlansDelProposal {
    return PlansDelProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: PlansDelProposalProtoMsg): PlansDelProposal {
    return PlansDelProposal.decode(message.value);
  },
  toProto(message: PlansDelProposal): Uint8Array {
    return PlansDelProposal.encode(message).finish();
  },
  toProtoMsg(message: PlansDelProposal): PlansDelProposalProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.PlansDelProposal",
      value: PlansDelProposal.encode(message).finish()
    };
  }
};