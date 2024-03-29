"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _amino = require("@cosmjs/amino");
var _encoding = require("@cosmjs/encoding");
var AminoConverter = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: function toAmino(_ref) {
      var description = _ref.description,
        commission = _ref.commission,
        minSelfDelegation = _ref.minSelfDelegation,
        delegatorAddress = _ref.delegatorAddress,
        validatorAddress = _ref.validatorAddress,
        pubkey = _ref.pubkey,
        value = _ref.value;
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.securityContact,
          details: description.details
        },
        commission: {
          rate: commission.rate,
          max_rate: commission.maxRate,
          max_change_rate: commission.maxChangeRate
        },
        min_self_delegation: minSelfDelegation,
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        pubkey: {
          typeUrl: "/cosmos.crypto.secp256k1.PubKey",
          value: (0, _encoding.fromBase64)((0, _amino.decodeBech32Pubkey)(pubkey).value)
        },
        value: {
          denom: value.denom,
          amount: value.amount
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var description = _ref2.description,
        commission = _ref2.commission,
        min_self_delegation = _ref2.min_self_delegation,
        delegator_address = _ref2.delegator_address,
        validator_address = _ref2.validator_address,
        pubkey = _ref2.pubkey,
        value = _ref2.value;
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          securityContact: description.security_contact,
          details: description.details
        },
        commission: {
          rate: commission.rate,
          maxRate: commission.max_rate,
          maxChangeRate: commission.max_change_rate
        },
        minSelfDelegation: min_self_delegation,
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        pubkey: (0, _amino.encodeBech32Pubkey)({
          type: "tendermint/PubKeySecp256k1",
          value: (0, _encoding.toBase64)(pubkey.value)
        }, "cosmos"),
        value: {
          denom: value.denom,
          amount: value.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: function toAmino(_ref3) {
      var description = _ref3.description,
        validatorAddress = _ref3.validatorAddress,
        commissionRate = _ref3.commissionRate,
        minSelfDelegation = _ref3.minSelfDelegation;
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.securityContact,
          details: description.details
        },
        validator_address: validatorAddress,
        commission_rate: commissionRate,
        min_self_delegation: minSelfDelegation
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var description = _ref4.description,
        validator_address = _ref4.validator_address,
        commission_rate = _ref4.commission_rate,
        min_self_delegation = _ref4.min_self_delegation;
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          securityContact: description.security_contact,
          details: description.details
        },
        validatorAddress: validator_address,
        commissionRate: commission_rate,
        minSelfDelegation: min_self_delegation
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: function toAmino(_ref5) {
      var delegatorAddress = _ref5.delegatorAddress,
        validatorAddress = _ref5.validatorAddress,
        amount = _ref5.amount;
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var delegator_address = _ref6.delegator_address,
        validator_address = _ref6.validator_address,
        amount = _ref6.amount;
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: function toAmino(_ref7) {
      var delegatorAddress = _ref7.delegatorAddress,
        validatorSrcAddress = _ref7.validatorSrcAddress,
        validatorDstAddress = _ref7.validatorDstAddress,
        amount = _ref7.amount;
      return {
        delegator_address: delegatorAddress,
        validator_src_address: validatorSrcAddress,
        validator_dst_address: validatorDstAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var delegator_address = _ref8.delegator_address,
        validator_src_address = _ref8.validator_src_address,
        validator_dst_address = _ref8.validator_dst_address,
        amount = _ref8.amount;
      return {
        delegatorAddress: delegator_address,
        validatorSrcAddress: validator_src_address,
        validatorDstAddress: validator_dst_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: function toAmino(_ref9) {
      var delegatorAddress = _ref9.delegatorAddress,
        validatorAddress = _ref9.validatorAddress,
        amount = _ref9.amount;
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var delegator_address = _ref10.delegator_address,
        validator_address = _ref10.validator_address,
        amount = _ref10.amount;
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;