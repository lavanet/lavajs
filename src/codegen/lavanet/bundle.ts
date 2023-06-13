import * as _1 from "../common/fixationEntry";
import * as _2 from "../proto/common/fixationEntry";
import * as _3 from "../conflict/conflict_data";
import * as _4 from "../conflict/conflict_vote";
import * as _5 from "../conflict/genesis";
import * as _6 from "../conflict/params";
import * as _7 from "../conflict/query";
import * as _8 from "../conflict/tx";
import * as _9 from "../proto/conflict/conflict_data";
import * as _10 from "../proto/conflict/conflict_vote";
import * as _11 from "../proto/conflict/genesis";
import * as _12 from "../proto/conflict/params";
import * as _13 from "../proto/conflict/query";
import * as _14 from "../proto/conflict/tx";
import * as _15 from "../epochstorage/endpoint";
import * as _16 from "../epochstorage/epoch_details";
import * as _17 from "../epochstorage/fixated_params";
import * as _18 from "../epochstorage/genesis";
import * as _19 from "../epochstorage/params";
import * as _20 from "../epochstorage/query";
import * as _21 from "../epochstorage/stake_entry";
import * as _22 from "../epochstorage/stake_storage";
import * as _23 from "../epochstorage/tx";
import * as _24 from "../proto/epochstorage/endpoint";
import * as _25 from "../proto/epochstorage/epoch_details";
import * as _26 from "../proto/epochstorage/fixated_params";
import * as _27 from "../proto/epochstorage/genesis";
import * as _28 from "../proto/epochstorage/params";
import * as _29 from "../proto/epochstorage/query";
import * as _30 from "../proto/epochstorage/stake_entry";
import * as _31 from "../proto/epochstorage/stake_storage";
import * as _32 from "../proto/epochstorage/tx";
import * as _33 from "../pairing/badges";
import * as _34 from "../pairing/epoch_payments";
import * as _35 from "../pairing/genesis";
import * as _36 from "../pairing/params";
import * as _37 from "../pairing/provider_payment_storage";
import * as _38 from "../pairing/query";
import * as _39 from "../pairing/relay";
import * as _40 from "../pairing/relayCache";
import * as _41 from "../pairing/stake_to_max_cu_list";
import * as _42 from "../pairing/tx";
import * as _43 from "../pairing/unique_payment_storage_client_provider";
import * as _44 from "../proto/pairing/badge_used_cu";
import * as _45 from "../proto/pairing/epoch_payments";
import * as _46 from "../proto/pairing/genesis";
import * as _47 from "../proto/pairing/params";
import * as _48 from "../proto/pairing/provider_payment_storage";
import * as _49 from "../proto/pairing/query";
import * as _50 from "../proto/pairing/relay";
import * as _51 from "../proto/pairing/relayCache";
import * as _52 from "../proto/pairing/stake_to_max_cu_list";
import * as _53 from "../proto/pairing/tx";
import * as _54 from "../proto/pairing/unique_payment_storage_client_provider";
import * as _55 from "../plans/genesis";
import * as _56 from "../plans/params";
import * as _57 from "../plans/plan";
import * as _58 from "../plans/plans_add_proposal";
import * as _59 from "../plans/plans_proposal";
import * as _60 from "../plans/query";
import * as _61 from "../plans/tx";
import * as _62 from "../proto/plans/genesis";
import * as _63 from "../proto/plans/params";
import * as _64 from "../proto/plans/plan";
import * as _65 from "../proto/plans/plans_add_proposal";
import * as _66 from "../proto/plans/query";
import * as _67 from "../proto/plans/tx";
import * as _68 from "../projects/genesis";
import * as _69 from "../projects/params";
import * as _70 from "../projects/project";
import * as _71 from "../projects/query";
import * as _72 from "../projects/tx";
import * as _73 from "../proto/projects/genesis";
import * as _74 from "../proto/projects/params";
import * as _75 from "../proto/projects/project";
import * as _76 from "../proto/projects/query";
import * as _77 from "../proto/projects/tx";
import * as _78 from "../proto/spec/genesis";
import * as _79 from "../proto/spec/params";
import * as _80 from "../proto/spec/query";
import * as _81 from "../proto/spec/service_api";
import * as _82 from "../proto/spec/spec_add_proposal";
import * as _83 from "../proto/spec/spec";
import * as _84 from "../proto/spec/tx";
import * as _85 from "../spec/genesis";
import * as _86 from "../spec/params";
import * as _87 from "../spec/query";
import * as _88 from "../spec/service_api";
import * as _89 from "../spec/spec_add_proposal";
import * as _90 from "../spec/spec";
import * as _91 from "../spec/tx";
import * as _92 from "../proto/subscription/genesis";
import * as _93 from "../proto/subscription/params";
import * as _94 from "../proto/subscription/query";
import * as _95 from "../proto/subscription/subscription";
import * as _96 from "../proto/subscription/tx";
import * as _97 from "../subscription/genesis";
import * as _98 from "../subscription/params";
import * as _99 from "../subscription/query";
import * as _100 from "../subscription/subscription";
import * as _101 from "../subscription/tx";
import * as _215 from "../conflict/tx.amino";
import * as _216 from "../pairing/tx.amino";
import * as _217 from "../projects/tx.amino";
import * as _218 from "../proto/conflict/tx.amino";
import * as _219 from "../proto/pairing/tx.amino";
import * as _220 from "../proto/projects/tx.amino";
import * as _221 from "../proto/subscription/tx.amino";
import * as _222 from "../subscription/tx.amino";
import * as _223 from "../conflict/tx.registry";
import * as _224 from "../pairing/tx.registry";
import * as _225 from "../projects/tx.registry";
import * as _226 from "../proto/conflict/tx.registry";
import * as _227 from "../proto/pairing/tx.registry";
import * as _228 from "../proto/projects/tx.registry";
import * as _229 from "../proto/subscription/tx.registry";
import * as _230 from "../subscription/tx.registry";
import * as _231 from "../conflict/query.rpc.Query";
import * as _232 from "../epochstorage/query.rpc.Query";
import * as _233 from "../pairing/query.rpc.Query";
import * as _234 from "../plans/query.rpc.Query";
import * as _235 from "../projects/query.rpc.Query";
import * as _236 from "../proto/conflict/query.rpc.Query";
import * as _237 from "../proto/epochstorage/query.rpc.Query";
import * as _238 from "../proto/pairing/query.rpc.Query";
import * as _239 from "../proto/plans/query.rpc.Query";
import * as _240 from "../proto/projects/query.rpc.Query";
import * as _241 from "../proto/spec/query.rpc.Query";
import * as _242 from "../proto/subscription/query.rpc.Query";
import * as _243 from "../spec/query.rpc.Query";
import * as _244 from "../subscription/query.rpc.Query";
import * as _245 from "../conflict/tx.rpc.msg";
import * as _246 from "../pairing/tx.rpc.msg";
import * as _247 from "../projects/tx.rpc.msg";
import * as _248 from "../proto/conflict/tx.rpc.msg";
import * as _249 from "../proto/pairing/tx.rpc.msg";
import * as _250 from "../proto/projects/tx.rpc.msg";
import * as _251 from "../proto/subscription/tx.rpc.msg";
import * as _252 from "../subscription/tx.rpc.msg";
import * as _313 from "./rpc.query";
import * as _314 from "./rpc.tx";
export namespace lavanet {
  export namespace lava {
    export const common = {
      ..._1,
      ..._2
    };
    export const conflict = {
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._215,
      ..._218,
      ..._223,
      ..._226,
      ..._231,
      ..._236,
      ..._245,
      ..._248
    };
    export const epochstorage = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._232,
      ..._237
    };
    export const pairing = {
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._216,
      ..._219,
      ..._224,
      ..._227,
      ..._233,
      ..._238,
      ..._246,
      ..._249
    };
    export const plans = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._234,
      ..._239
    };
    export const projects = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._217,
      ..._220,
      ..._225,
      ..._228,
      ..._235,
      ..._240,
      ..._247,
      ..._250
    };
    export const spec = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._241,
      ..._243
    };
    export const subscription = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._221,
      ..._222,
      ..._229,
      ..._230,
      ..._242,
      ..._244,
      ..._251,
      ..._252
    };
  }
  export const ClientFactory = {
    ..._313,
    ..._314
  };
}