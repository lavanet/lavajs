"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var AminoConverter = {
  "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    toAmino: function toAmino(_ref) {
      var delegatorAddress = _ref.delegatorAddress,
        withdrawAddress = _ref.withdrawAddress;
      return {
        delegator_address: delegatorAddress,
        withdraw_address: withdrawAddress
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var delegator_address = _ref2.delegator_address,
        withdraw_address = _ref2.withdraw_address;
      return {
        delegatorAddress: delegator_address,
        withdrawAddress: withdraw_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
    toAmino: function toAmino(_ref3) {
      var delegatorAddress = _ref3.delegatorAddress,
        validatorAddress = _ref3.validatorAddress;
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var delegator_address = _ref4.delegator_address,
        validator_address = _ref4.validator_address;
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
    toAmino: function toAmino(_ref5) {
      var validatorAddress = _ref5.validatorAddress;
      return {
        validator_address: validatorAddress
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var validator_address = _ref6.validator_address;
      return {
        validatorAddress: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    toAmino: function toAmino(_ref7) {
      var amount = _ref7.amount,
        depositor = _ref7.depositor;
      return {
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        depositor: depositor
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var amount = _ref8.amount,
        depositor = _ref8.depositor;
      return {
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        depositor: depositor
      };
    }
  }
};
exports.AminoConverter = AminoConverter;