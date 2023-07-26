export const AminoConverter = {
  "/cosmos.slashing.v1beta1.MsgUnjail": {
    aminoType: "cosmos-sdk/MsgUnjail",
    toAmino: ({
      validatorAddr
    }) => {
      return {
        validator_addr: validatorAddr
      };
    },
    fromAmino: ({
      validator_addr
    }) => {
      return {
        validatorAddr: validator_addr
      };
    }
  }
};