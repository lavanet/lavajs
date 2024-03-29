"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var AminoConverter = {
  "/cosmos.bank.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgSend",
    toAmino: function toAmino(_ref) {
      var fromAddress = _ref.fromAddress,
        toAddress = _ref.toAddress,
        amount = _ref.amount;
      return {
        from_address: fromAddress,
        to_address: toAddress,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var from_address = _ref2.from_address,
        to_address = _ref2.to_address,
        amount = _ref2.amount;
      return {
        fromAddress: from_address,
        toAddress: to_address,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/cosmos.bank.v1beta1.MsgMultiSend": {
    aminoType: "cosmos-sdk/MsgMultiSend",
    toAmino: function toAmino(_ref3) {
      var inputs = _ref3.inputs,
        outputs = _ref3.outputs;
      return {
        inputs: inputs.map(function (el0) {
          return {
            address: el0.address,
            coins: el0.coins.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        }),
        outputs: outputs.map(function (el0) {
          return {
            address: el0.address,
            coins: el0.coins.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var inputs = _ref4.inputs,
        outputs = _ref4.outputs;
      return {
        inputs: inputs.map(function (el0) {
          return {
            address: el0.address,
            coins: el0.coins.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        }),
        outputs: outputs.map(function (el0) {
          return {
            address: el0.address,
            coins: el0.coins.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        })
      };
    }
  }
};
exports.AminoConverter = AminoConverter;