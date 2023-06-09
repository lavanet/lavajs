import { Plan, PlanSDKType } from "./plan";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
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
  encode(message: PlansAddProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): PlansAddProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): PlansAddProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      plans: Array.isArray(object?.plans) ? object.plans.map((e: any) => Plan.fromJSON(e)) : []
    };
  },
  toJSON(message: PlansAddProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.plans) {
      obj.plans = message.plans.map(e => e ? Plan.toJSON(e) : undefined);
    } else {
      obj.plans = [];
    }
    return obj;
  },
  fromPartial(object: Partial<PlansAddProposal>): PlansAddProposal {
    const message = createBasePlansAddProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plans = object.plans?.map(e => Plan.fromPartial(e)) || [];
    return message;
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
  encode(message: PlansDelProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): PlansDelProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): PlansDelProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      plans: Array.isArray(object?.plans) ? object.plans.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: PlansDelProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.plans) {
      obj.plans = message.plans.map(e => e);
    } else {
      obj.plans = [];
    }
    return obj;
  },
  fromPartial(object: Partial<PlansDelProposal>): PlansDelProposal {
    const message = createBasePlansDelProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plans = object.plans?.map(e => e) || [];
    return message;
  }
};