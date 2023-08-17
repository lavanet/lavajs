import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as lavanetLavaConflictTxRegistry from "./lava/conflict/tx.registry";
import * as lavanetLavaPairingTxRegistry from "./lava/pairing/tx.registry";
import * as lavanetLavaProjectsTxRegistry from "./lava/projects/tx.registry";
import * as lavanetLavaSubscriptionTxRegistry from "./lava/subscription/tx.registry";
import * as lavanetLavaConflictTxAmino from "./lava/conflict/tx.amino";
import * as lavanetLavaPairingTxAmino from "./lava/pairing/tx.amino";
import * as lavanetLavaProjectsTxAmino from "./lava/projects/tx.amino";
import * as lavanetLavaSubscriptionTxAmino from "./lava/subscription/tx.amino";
export const lavanetAminoConverters = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, lavanetLavaConflictTxAmino.AminoConverter), lavanetLavaPairingTxAmino.AminoConverter), lavanetLavaProjectsTxAmino.AminoConverter), lavanetLavaSubscriptionTxAmino.AminoConverter);
export const lavanetProtoRegistry = [...lavanetLavaConflictTxRegistry.registry, ...lavanetLavaPairingTxRegistry.registry, ...lavanetLavaProjectsTxRegistry.registry, ...lavanetLavaSubscriptionTxRegistry.registry];
export const getSigningLavanetClientOptions = ({
  defaultTypes = defaultRegistryTypes
} = {}) => {
  const registry = new Registry([...defaultTypes, ...lavanetProtoRegistry]);
  const aminoTypes = new AminoTypes(_objectSpread({}, lavanetAminoConverters));
  return {
    registry,
    aminoTypes
  };
};
export const getSigningLavanetClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningLavanetClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry,
    aminoTypes
  });
  return client;
};