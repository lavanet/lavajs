import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
export interface ProbeRequest {
  guid: bigint;
  specId: string;
  apiInterface: string;
}
export interface ProbeRequestSDKType {
  guid: bigint;
  spec_id: string;
  api_interface: string;
}
export interface ProbeReply {
  guid: bigint;
  latestBlock: bigint;
  finalizedBlocksHashes: Uint8Array;
  lavaEpoch: bigint;
}
export interface ProbeReplySDKType {
  guid: bigint;
  latest_block: bigint;
  finalized_blocks_hashes: Uint8Array;
  lava_epoch: bigint;
}
export interface RelaySession {
  specId: string;
  contentHash: Uint8Array;
  sessionId: bigint;
  /** total compute unit used including this relay */
  cuSum: bigint;
  provider: string;
  relayNum: bigint;
  qosReport: QualityOfServiceReport;
  epoch: bigint;
  unresponsiveProviders: Uint8Array;
  lavaChainId: string;
  sig: Uint8Array;
  badge: Badge;
  qosExcellenceReport: QualityOfServiceReport;
}
export interface RelaySessionSDKType {
  spec_id: string;
  content_hash: Uint8Array;
  session_id: bigint;
  cu_sum: bigint;
  provider: string;
  relay_num: bigint;
  qos_report: QualityOfServiceReportSDKType;
  epoch: bigint;
  unresponsive_providers: Uint8Array;
  lava_chain_id: string;
  sig: Uint8Array;
  badge: BadgeSDKType;
  qos_excellence_report: QualityOfServiceReportSDKType;
}
export interface Badge {
  cuAllocation: bigint;
  epoch: bigint;
  address: string;
  lavaChainId: string;
  projectSig: Uint8Array;
}
export interface BadgeSDKType {
  cu_allocation: bigint;
  epoch: bigint;
  address: string;
  lava_chain_id: string;
  project_sig: Uint8Array;
}
export interface RelayPrivateData {
  connectionType: string;
  /** some relays have associated urls that are filled with params ('/block/{height}') */
  apiUrl: string;
  data: Uint8Array;
  requestBlock: bigint;
  apiInterface: string;
  salt: Uint8Array;
  metadata: Metadata[];
  addon: string;
  extensions: string[];
}
export interface RelayPrivateDataSDKType {
  connection_type: string;
  api_url: string;
  data: Uint8Array;
  request_block: bigint;
  api_interface: string;
  salt: Uint8Array;
  metadata: MetadataSDKType[];
  addon: string;
  extensions: string[];
}
export interface Metadata {
  name: string;
  value: string;
}
export interface MetadataSDKType {
  name: string;
  value: string;
}
export interface RelayRequest {
  relaySession: RelaySession;
  relayData: RelayPrivateData;
}
export interface RelayRequestSDKType {
  relay_session: RelaySessionSDKType;
  relay_data: RelayPrivateDataSDKType;
}
export interface RelayReply {
  data: Uint8Array;
  /** sign the data hash+query hash+nonce */
  sig: Uint8Array;
  latestBlock: bigint;
  finalizedBlocksHashes: Uint8Array;
  /** sign latest_block+finalized_blocks_hashes+session_id+block_height+relay_num */
  sigBlocks: Uint8Array;
  metadata: Metadata[];
}
export interface RelayReplySDKType {
  data: Uint8Array;
  sig: Uint8Array;
  latest_block: bigint;
  finalized_blocks_hashes: Uint8Array;
  sig_blocks: Uint8Array;
  metadata: MetadataSDKType[];
}
export interface QualityOfServiceReport {
  latency: string;
  availability: string;
  sync: string;
}
export interface QualityOfServiceReportSDKType {
  latency: string;
  availability: string;
  sync: string;
}
function createBaseProbeRequest(): ProbeRequest {
  return {
    guid: BigInt(0),
    specId: "",
    apiInterface: ""
  };
}
export const ProbeRequest = {
  typeUrl: "/lavanet.lava.pairing.ProbeRequest",
  encode(message: ProbeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guid !== BigInt(0)) {
      writer.uint32(8).uint64(message.guid);
    }
    if (message.specId !== "") {
      writer.uint32(18).string(message.specId);
    }
    if (message.apiInterface !== "") {
      writer.uint32(26).string(message.apiInterface);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProbeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProbeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guid = reader.uint64();
          break;
        case 2:
          message.specId = reader.string();
          break;
        case 3:
          message.apiInterface = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProbeRequest>): ProbeRequest {
    const message = createBaseProbeRequest();
    message.guid = object.guid !== undefined && object.guid !== null ? BigInt(object.guid.toString()) : BigInt(0);
    message.specId = object.specId ?? "";
    message.apiInterface = object.apiInterface ?? "";
    return message;
  },
  fromAmino(object: ProbeRequestAmino): ProbeRequest {
    return {
      guid: BigInt(object.guid),
      specId: object.spec_id,
      apiInterface: object.api_interface
    };
  },
  toAmino(message: ProbeRequest): ProbeRequestAmino {
    const obj: any = {};
    obj.guid = message.guid ? message.guid.toString() : undefined;
    obj.spec_id = message.specId;
    obj.api_interface = message.apiInterface;
    return obj;
  },
  fromAminoMsg(object: ProbeRequestAminoMsg): ProbeRequest {
    return ProbeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ProbeRequestProtoMsg): ProbeRequest {
    return ProbeRequest.decode(message.value);
  },
  toProto(message: ProbeRequest): Uint8Array {
    return ProbeRequest.encode(message).finish();
  },
  toProtoMsg(message: ProbeRequest): ProbeRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProbeRequest",
      value: ProbeRequest.encode(message).finish()
    };
  }
};
function createBaseProbeReply(): ProbeReply {
  return {
    guid: BigInt(0),
    latestBlock: BigInt(0),
    finalizedBlocksHashes: new Uint8Array(),
    lavaEpoch: BigInt(0)
  };
}
export const ProbeReply = {
  typeUrl: "/lavanet.lava.pairing.ProbeReply",
  encode(message: ProbeReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guid !== BigInt(0)) {
      writer.uint32(8).uint64(message.guid);
    }
    if (message.latestBlock !== BigInt(0)) {
      writer.uint32(16).int64(message.latestBlock);
    }
    if (message.finalizedBlocksHashes.length !== 0) {
      writer.uint32(26).bytes(message.finalizedBlocksHashes);
    }
    if (message.lavaEpoch !== BigInt(0)) {
      writer.uint32(32).uint64(message.lavaEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProbeReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProbeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guid = reader.uint64();
          break;
        case 2:
          message.latestBlock = reader.int64();
          break;
        case 3:
          message.finalizedBlocksHashes = reader.bytes();
          break;
        case 4:
          message.lavaEpoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProbeReply>): ProbeReply {
    const message = createBaseProbeReply();
    message.guid = object.guid !== undefined && object.guid !== null ? BigInt(object.guid.toString()) : BigInt(0);
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? BigInt(object.latestBlock.toString()) : BigInt(0);
    message.finalizedBlocksHashes = object.finalizedBlocksHashes ?? new Uint8Array();
    message.lavaEpoch = object.lavaEpoch !== undefined && object.lavaEpoch !== null ? BigInt(object.lavaEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProbeReplyAmino): ProbeReply {
    return {
      guid: BigInt(object.guid),
      latestBlock: BigInt(object.latest_block),
      finalizedBlocksHashes: object.finalized_blocks_hashes,
      lavaEpoch: BigInt(object.lava_epoch)
    };
  },
  toAmino(message: ProbeReply): ProbeReplyAmino {
    const obj: any = {};
    obj.guid = message.guid ? message.guid.toString() : undefined;
    obj.latest_block = message.latestBlock ? message.latestBlock.toString() : undefined;
    obj.finalized_blocks_hashes = message.finalizedBlocksHashes;
    obj.lava_epoch = message.lavaEpoch ? message.lavaEpoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProbeReplyAminoMsg): ProbeReply {
    return ProbeReply.fromAmino(object.value);
  },
  fromProtoMsg(message: ProbeReplyProtoMsg): ProbeReply {
    return ProbeReply.decode(message.value);
  },
  toProto(message: ProbeReply): Uint8Array {
    return ProbeReply.encode(message).finish();
  },
  toProtoMsg(message: ProbeReply): ProbeReplyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProbeReply",
      value: ProbeReply.encode(message).finish()
    };
  }
};
function createBaseRelaySession(): RelaySession {
  return {
    specId: "",
    contentHash: new Uint8Array(),
    sessionId: BigInt(0),
    cuSum: BigInt(0),
    provider: "",
    relayNum: BigInt(0),
    qosReport: QualityOfServiceReport.fromPartial({}),
    epoch: BigInt(0),
    unresponsiveProviders: new Uint8Array(),
    lavaChainId: "",
    sig: new Uint8Array(),
    badge: Badge.fromPartial({}),
    qosExcellenceReport: QualityOfServiceReport.fromPartial({})
  };
}
export const RelaySession = {
  typeUrl: "/lavanet.lava.pairing.RelaySession",
  encode(message: RelaySession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.specId !== "") {
      writer.uint32(10).string(message.specId);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(18).bytes(message.contentHash);
    }
    if (message.sessionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.sessionId);
    }
    if (message.cuSum !== BigInt(0)) {
      writer.uint32(32).uint64(message.cuSum);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (message.relayNum !== BigInt(0)) {
      writer.uint32(48).uint64(message.relayNum);
    }
    if (message.qosReport !== undefined) {
      QualityOfServiceReport.encode(message.qosReport, writer.uint32(58).fork()).ldelim();
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(64).int64(message.epoch);
    }
    if (message.unresponsiveProviders.length !== 0) {
      writer.uint32(74).bytes(message.unresponsiveProviders);
    }
    if (message.lavaChainId !== "") {
      writer.uint32(82).string(message.lavaChainId);
    }
    if (message.sig.length !== 0) {
      writer.uint32(90).bytes(message.sig);
    }
    if (message.badge !== undefined) {
      Badge.encode(message.badge, writer.uint32(98).fork()).ldelim();
    }
    if (message.qosExcellenceReport !== undefined) {
      QualityOfServiceReport.encode(message.qosExcellenceReport, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelaySession {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelaySession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.specId = reader.string();
          break;
        case 2:
          message.contentHash = reader.bytes();
          break;
        case 3:
          message.sessionId = reader.uint64();
          break;
        case 4:
          message.cuSum = reader.uint64();
          break;
        case 5:
          message.provider = reader.string();
          break;
        case 6:
          message.relayNum = reader.uint64();
          break;
        case 7:
          message.qosReport = QualityOfServiceReport.decode(reader, reader.uint32());
          break;
        case 8:
          message.epoch = reader.int64();
          break;
        case 9:
          message.unresponsiveProviders = reader.bytes();
          break;
        case 10:
          message.lavaChainId = reader.string();
          break;
        case 11:
          message.sig = reader.bytes();
          break;
        case 12:
          message.badge = Badge.decode(reader, reader.uint32());
          break;
        case 13:
          message.qosExcellenceReport = QualityOfServiceReport.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RelaySession>): RelaySession {
    const message = createBaseRelaySession();
    message.specId = object.specId ?? "";
    message.contentHash = object.contentHash ?? new Uint8Array();
    message.sessionId = object.sessionId !== undefined && object.sessionId !== null ? BigInt(object.sessionId.toString()) : BigInt(0);
    message.cuSum = object.cuSum !== undefined && object.cuSum !== null ? BigInt(object.cuSum.toString()) : BigInt(0);
    message.provider = object.provider ?? "";
    message.relayNum = object.relayNum !== undefined && object.relayNum !== null ? BigInt(object.relayNum.toString()) : BigInt(0);
    message.qosReport = object.qosReport !== undefined && object.qosReport !== null ? QualityOfServiceReport.fromPartial(object.qosReport) : undefined;
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.unresponsiveProviders = object.unresponsiveProviders ?? new Uint8Array();
    message.lavaChainId = object.lavaChainId ?? "";
    message.sig = object.sig ?? new Uint8Array();
    message.badge = object.badge !== undefined && object.badge !== null ? Badge.fromPartial(object.badge) : undefined;
    message.qosExcellenceReport = object.qosExcellenceReport !== undefined && object.qosExcellenceReport !== null ? QualityOfServiceReport.fromPartial(object.qosExcellenceReport) : undefined;
    return message;
  },
  fromAmino(object: RelaySessionAmino): RelaySession {
    return {
      specId: object.spec_id,
      contentHash: object.content_hash,
      sessionId: BigInt(object.session_id),
      cuSum: BigInt(object.cu_sum),
      provider: object.provider,
      relayNum: BigInt(object.relay_num),
      qosReport: object?.qos_report ? QualityOfServiceReport.fromAmino(object.qos_report) : undefined,
      epoch: BigInt(object.epoch),
      unresponsiveProviders: object.unresponsive_providers,
      lavaChainId: object.lava_chain_id,
      sig: object.sig,
      badge: object?.badge ? Badge.fromAmino(object.badge) : undefined,
      qosExcellenceReport: object?.qos_excellence_report ? QualityOfServiceReport.fromAmino(object.qos_excellence_report) : undefined
    };
  },
  toAmino(message: RelaySession): RelaySessionAmino {
    const obj: any = {};
    obj.spec_id = message.specId;
    obj.content_hash = message.contentHash;
    obj.session_id = message.sessionId ? message.sessionId.toString() : undefined;
    obj.cu_sum = message.cuSum ? message.cuSum.toString() : undefined;
    obj.provider = message.provider;
    obj.relay_num = message.relayNum ? message.relayNum.toString() : undefined;
    obj.qos_report = message.qosReport ? QualityOfServiceReport.toAmino(message.qosReport) : undefined;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.unresponsive_providers = message.unresponsiveProviders;
    obj.lava_chain_id = message.lavaChainId;
    obj.sig = message.sig;
    obj.badge = message.badge ? Badge.toAmino(message.badge) : undefined;
    obj.qos_excellence_report = message.qosExcellenceReport ? QualityOfServiceReport.toAmino(message.qosExcellenceReport) : undefined;
    return obj;
  },
  fromAminoMsg(object: RelaySessionAminoMsg): RelaySession {
    return RelaySession.fromAmino(object.value);
  },
  fromProtoMsg(message: RelaySessionProtoMsg): RelaySession {
    return RelaySession.decode(message.value);
  },
  toProto(message: RelaySession): Uint8Array {
    return RelaySession.encode(message).finish();
  },
  toProtoMsg(message: RelaySession): RelaySessionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.RelaySession",
      value: RelaySession.encode(message).finish()
    };
  }
};
function createBaseBadge(): Badge {
  return {
    cuAllocation: BigInt(0),
    epoch: BigInt(0),
    address: "",
    lavaChainId: "",
    projectSig: new Uint8Array()
  };
}
export const Badge = {
  typeUrl: "/lavanet.lava.pairing.Badge",
  encode(message: Badge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cuAllocation !== BigInt(0)) {
      writer.uint32(8).uint64(message.cuAllocation);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.lavaChainId !== "") {
      writer.uint32(34).string(message.lavaChainId);
    }
    if (message.projectSig.length !== 0) {
      writer.uint32(42).bytes(message.projectSig);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Badge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cuAllocation = reader.uint64();
          break;
        case 2:
          message.epoch = reader.uint64();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.lavaChainId = reader.string();
          break;
        case 5:
          message.projectSig = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Badge>): Badge {
    const message = createBaseBadge();
    message.cuAllocation = object.cuAllocation !== undefined && object.cuAllocation !== null ? BigInt(object.cuAllocation.toString()) : BigInt(0);
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.lavaChainId = object.lavaChainId ?? "";
    message.projectSig = object.projectSig ?? new Uint8Array();
    return message;
  },
  fromAmino(object: BadgeAmino): Badge {
    return {
      cuAllocation: BigInt(object.cu_allocation),
      epoch: BigInt(object.epoch),
      address: object.address,
      lavaChainId: object.lava_chain_id,
      projectSig: object.project_sig
    };
  },
  toAmino(message: Badge): BadgeAmino {
    const obj: any = {};
    obj.cu_allocation = message.cuAllocation ? message.cuAllocation.toString() : undefined;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.address = message.address;
    obj.lava_chain_id = message.lavaChainId;
    obj.project_sig = message.projectSig;
    return obj;
  },
  fromAminoMsg(object: BadgeAminoMsg): Badge {
    return Badge.fromAmino(object.value);
  },
  fromProtoMsg(message: BadgeProtoMsg): Badge {
    return Badge.decode(message.value);
  },
  toProto(message: Badge): Uint8Array {
    return Badge.encode(message).finish();
  },
  toProtoMsg(message: Badge): BadgeProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.Badge",
      value: Badge.encode(message).finish()
    };
  }
};
function createBaseRelayPrivateData(): RelayPrivateData {
  return {
    connectionType: "",
    apiUrl: "",
    data: new Uint8Array(),
    requestBlock: BigInt(0),
    apiInterface: "",
    salt: new Uint8Array(),
    metadata: [],
    addon: "",
    extensions: []
  };
}
export const RelayPrivateData = {
  typeUrl: "/lavanet.lava.pairing.RelayPrivateData",
  encode(message: RelayPrivateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionType !== "") {
      writer.uint32(10).string(message.connectionType);
    }
    if (message.apiUrl !== "") {
      writer.uint32(18).string(message.apiUrl);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.requestBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.requestBlock);
    }
    if (message.apiInterface !== "") {
      writer.uint32(42).string(message.apiInterface);
    }
    if (message.salt.length !== 0) {
      writer.uint32(50).bytes(message.salt);
    }
    for (const v of message.metadata) {
      Metadata.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.addon !== "") {
      writer.uint32(66).string(message.addon);
    }
    for (const v of message.extensions) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayPrivateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayPrivateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionType = reader.string();
          break;
        case 2:
          message.apiUrl = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.requestBlock = reader.int64();
          break;
        case 5:
          message.apiInterface = reader.string();
          break;
        case 6:
          message.salt = reader.bytes();
          break;
        case 7:
          message.metadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        case 8:
          message.addon = reader.string();
          break;
        case 9:
          message.extensions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RelayPrivateData>): RelayPrivateData {
    const message = createBaseRelayPrivateData();
    message.connectionType = object.connectionType ?? "";
    message.apiUrl = object.apiUrl ?? "";
    message.data = object.data ?? new Uint8Array();
    message.requestBlock = object.requestBlock !== undefined && object.requestBlock !== null ? BigInt(object.requestBlock.toString()) : BigInt(0);
    message.apiInterface = object.apiInterface ?? "";
    message.salt = object.salt ?? new Uint8Array();
    message.metadata = object.metadata?.map(e => Metadata.fromPartial(e)) || [];
    message.addon = object.addon ?? "";
    message.extensions = object.extensions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RelayPrivateDataAmino): RelayPrivateData {
    return {
      connectionType: object.connection_type,
      apiUrl: object.api_url,
      data: object.data,
      requestBlock: BigInt(object.request_block),
      apiInterface: object.api_interface,
      salt: object.salt,
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Metadata.fromAmino(e)) : [],
      addon: object.addon,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => e) : []
    };
  },
  toAmino(message: RelayPrivateData): RelayPrivateDataAmino {
    const obj: any = {};
    obj.connection_type = message.connectionType;
    obj.api_url = message.apiUrl;
    obj.data = message.data;
    obj.request_block = message.requestBlock ? message.requestBlock.toString() : undefined;
    obj.api_interface = message.apiInterface;
    obj.salt = message.salt;
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? Metadata.toAmino(e) : undefined);
    } else {
      obj.metadata = [];
    }
    obj.addon = message.addon;
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e);
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromAminoMsg(object: RelayPrivateDataAminoMsg): RelayPrivateData {
    return RelayPrivateData.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayPrivateDataProtoMsg): RelayPrivateData {
    return RelayPrivateData.decode(message.value);
  },
  toProto(message: RelayPrivateData): Uint8Array {
    return RelayPrivateData.encode(message).finish();
  },
  toProtoMsg(message: RelayPrivateData): RelayPrivateDataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayPrivateData",
      value: RelayPrivateData.encode(message).finish()
    };
  }
};
function createBaseMetadata(): Metadata {
  return {
    name: "",
    value: ""
  };
}
export const Metadata = {
  typeUrl: "/lavanet.lava.pairing.Metadata",
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    return {
      name: object.name,
      value: object.value
    };
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
function createBaseRelayRequest(): RelayRequest {
  return {
    relaySession: RelaySession.fromPartial({}),
    relayData: RelayPrivateData.fromPartial({})
  };
}
export const RelayRequest = {
  typeUrl: "/lavanet.lava.pairing.RelayRequest",
  encode(message: RelayRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.relaySession !== undefined) {
      RelaySession.encode(message.relaySession, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayData !== undefined) {
      RelayPrivateData.encode(message.relayData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relaySession = RelaySession.decode(reader, reader.uint32());
          break;
        case 2:
          message.relayData = RelayPrivateData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RelayRequest>): RelayRequest {
    const message = createBaseRelayRequest();
    message.relaySession = object.relaySession !== undefined && object.relaySession !== null ? RelaySession.fromPartial(object.relaySession) : undefined;
    message.relayData = object.relayData !== undefined && object.relayData !== null ? RelayPrivateData.fromPartial(object.relayData) : undefined;
    return message;
  },
  fromAmino(object: RelayRequestAmino): RelayRequest {
    return {
      relaySession: object?.relay_session ? RelaySession.fromAmino(object.relay_session) : undefined,
      relayData: object?.relay_data ? RelayPrivateData.fromAmino(object.relay_data) : undefined
    };
  },
  toAmino(message: RelayRequest): RelayRequestAmino {
    const obj: any = {};
    obj.relay_session = message.relaySession ? RelaySession.toAmino(message.relaySession) : undefined;
    obj.relay_data = message.relayData ? RelayPrivateData.toAmino(message.relayData) : undefined;
    return obj;
  },
  fromAminoMsg(object: RelayRequestAminoMsg): RelayRequest {
    return RelayRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayRequestProtoMsg): RelayRequest {
    return RelayRequest.decode(message.value);
  },
  toProto(message: RelayRequest): Uint8Array {
    return RelayRequest.encode(message).finish();
  },
  toProtoMsg(message: RelayRequest): RelayRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayRequest",
      value: RelayRequest.encode(message).finish()
    };
  }
};
function createBaseRelayReply(): RelayReply {
  return {
    data: new Uint8Array(),
    sig: new Uint8Array(),
    latestBlock: BigInt(0),
    finalizedBlocksHashes: new Uint8Array(),
    sigBlocks: new Uint8Array(),
    metadata: []
  };
}
export const RelayReply = {
  typeUrl: "/lavanet.lava.pairing.RelayReply",
  encode(message: RelayReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    if (message.latestBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.latestBlock);
    }
    if (message.finalizedBlocksHashes.length !== 0) {
      writer.uint32(42).bytes(message.finalizedBlocksHashes);
    }
    if (message.sigBlocks.length !== 0) {
      writer.uint32(50).bytes(message.sigBlocks);
    }
    for (const v of message.metadata) {
      Metadata.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.sig = reader.bytes();
          break;
        case 4:
          message.latestBlock = reader.int64();
          break;
        case 5:
          message.finalizedBlocksHashes = reader.bytes();
          break;
        case 6:
          message.sigBlocks = reader.bytes();
          break;
        case 7:
          message.metadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RelayReply>): RelayReply {
    const message = createBaseRelayReply();
    message.data = object.data ?? new Uint8Array();
    message.sig = object.sig ?? new Uint8Array();
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? BigInt(object.latestBlock.toString()) : BigInt(0);
    message.finalizedBlocksHashes = object.finalizedBlocksHashes ?? new Uint8Array();
    message.sigBlocks = object.sigBlocks ?? new Uint8Array();
    message.metadata = object.metadata?.map(e => Metadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RelayReplyAmino): RelayReply {
    return {
      data: object.data,
      sig: object.sig,
      latestBlock: BigInt(object.latest_block),
      finalizedBlocksHashes: object.finalized_blocks_hashes,
      sigBlocks: object.sig_blocks,
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Metadata.fromAmino(e)) : []
    };
  },
  toAmino(message: RelayReply): RelayReplyAmino {
    const obj: any = {};
    obj.data = message.data;
    obj.sig = message.sig;
    obj.latest_block = message.latestBlock ? message.latestBlock.toString() : undefined;
    obj.finalized_blocks_hashes = message.finalizedBlocksHashes;
    obj.sig_blocks = message.sigBlocks;
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? Metadata.toAmino(e) : undefined);
    } else {
      obj.metadata = [];
    }
    return obj;
  },
  fromAminoMsg(object: RelayReplyAminoMsg): RelayReply {
    return RelayReply.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayReplyProtoMsg): RelayReply {
    return RelayReply.decode(message.value);
  },
  toProto(message: RelayReply): Uint8Array {
    return RelayReply.encode(message).finish();
  },
  toProtoMsg(message: RelayReply): RelayReplyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayReply",
      value: RelayReply.encode(message).finish()
    };
  }
};
function createBaseQualityOfServiceReport(): QualityOfServiceReport {
  return {
    latency: "",
    availability: "",
    sync: ""
  };
}
export const QualityOfServiceReport = {
  typeUrl: "/lavanet.lava.pairing.QualityOfServiceReport",
  encode(message: QualityOfServiceReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.latency !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.latency, 18).atomics);
    }
    if (message.availability !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.availability, 18).atomics);
    }
    if (message.sync !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.sync, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QualityOfServiceReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQualityOfServiceReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latency = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.availability = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.sync = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QualityOfServiceReport>): QualityOfServiceReport {
    const message = createBaseQualityOfServiceReport();
    message.latency = object.latency ?? "";
    message.availability = object.availability ?? "";
    message.sync = object.sync ?? "";
    return message;
  },
  fromAmino(object: QualityOfServiceReportAmino): QualityOfServiceReport {
    return {
      latency: object.latency,
      availability: object.availability,
      sync: object.sync
    };
  },
  toAmino(message: QualityOfServiceReport): QualityOfServiceReportAmino {
    const obj: any = {};
    obj.latency = message.latency;
    obj.availability = message.availability;
    obj.sync = message.sync;
    return obj;
  },
  fromAminoMsg(object: QualityOfServiceReportAminoMsg): QualityOfServiceReport {
    return QualityOfServiceReport.fromAmino(object.value);
  },
  fromProtoMsg(message: QualityOfServiceReportProtoMsg): QualityOfServiceReport {
    return QualityOfServiceReport.decode(message.value);
  },
  toProto(message: QualityOfServiceReport): Uint8Array {
    return QualityOfServiceReport.encode(message).finish();
  },
  toProtoMsg(message: QualityOfServiceReport): QualityOfServiceReportProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QualityOfServiceReport",
      value: QualityOfServiceReport.encode(message).finish()
    };
  }
};