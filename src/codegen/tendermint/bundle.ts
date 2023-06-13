import * as _204 from "./abci/types";
import * as _205 from "./crypto/keys";
import * as _206 from "./crypto/proof";
import * as _207 from "./libs/bits/types";
import * as _208 from "./p2p/types";
import * as _209 from "./types/block";
import * as _210 from "./types/evidence";
import * as _211 from "./types/params";
import * as _212 from "./types/types";
import * as _213 from "./types/validator";
import * as _214 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._204
  };
  export const crypto = {
    ..._205,
    ..._206
  };
  export namespace libs {
    export const bits = {
      ..._207
    };
  }
  export const p2p = {
    ..._208
  };
  export const types = {
    ..._209,
    ..._210,
    ..._211,
    ..._212,
    ..._213
  };
  export const version = {
    ..._214
  };
}