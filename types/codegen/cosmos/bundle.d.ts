import * as _101 from "./app/v1alpha1/config";
import * as _102 from "./app/v1alpha1/module";
import * as _103 from "./app/v1alpha1/query";
import * as _104 from "./auth/v1beta1/auth";
import * as _105 from "./auth/v1beta1/genesis";
import * as _106 from "./auth/v1beta1/query";
import * as _107 from "./authz/v1beta1/authz";
import * as _108 from "./authz/v1beta1/event";
import * as _109 from "./authz/v1beta1/genesis";
import * as _110 from "./authz/v1beta1/query";
import * as _111 from "./authz/v1beta1/tx";
import * as _112 from "./bank/v1beta1/authz";
import * as _113 from "./bank/v1beta1/bank";
import * as _114 from "./bank/v1beta1/genesis";
import * as _115 from "./bank/v1beta1/query";
import * as _116 from "./bank/v1beta1/tx";
import * as _117 from "./base/abci/v1beta1/abci";
import * as _118 from "./base/kv/v1beta1/kv";
import * as _119 from "./base/query/v1beta1/pagination";
import * as _120 from "./base/reflection/v1beta1/reflection";
import * as _121 from "./base/reflection/v2alpha1/reflection";
import * as _122 from "./base/snapshots/v1beta1/snapshot";
import * as _123 from "./base/store/v1beta1/commit_info";
import * as _124 from "./base/store/v1beta1/listening";
import * as _125 from "./base/tendermint/v1beta1/query";
import * as _126 from "./base/v1beta1/coin";
import * as _127 from "./capability/v1beta1/capability";
import * as _128 from "./capability/v1beta1/genesis";
import * as _129 from "./crisis/v1beta1/genesis";
import * as _130 from "./crisis/v1beta1/tx";
import * as _131 from "./crypto/ed25519/keys";
import * as _132 from "./crypto/hd/v1/hd";
import * as _133 from "./crypto/keyring/v1/record";
import * as _134 from "./crypto/multisig/keys";
import * as _135 from "./crypto/secp256k1/keys";
import * as _136 from "./crypto/secp256r1/keys";
import * as _137 from "./distribution/v1beta1/distribution";
import * as _138 from "./distribution/v1beta1/genesis";
import * as _139 from "./distribution/v1beta1/query";
import * as _140 from "./distribution/v1beta1/tx";
import * as _141 from "./evidence/v1beta1/evidence";
import * as _142 from "./evidence/v1beta1/genesis";
import * as _143 from "./evidence/v1beta1/query";
import * as _144 from "./evidence/v1beta1/tx";
import * as _145 from "./feegrant/v1beta1/feegrant";
import * as _146 from "./feegrant/v1beta1/genesis";
import * as _147 from "./feegrant/v1beta1/query";
import * as _148 from "./feegrant/v1beta1/tx";
import * as _149 from "./genutil/v1beta1/genesis";
import * as _150 from "./gov/v1/genesis";
import * as _151 from "./gov/v1/gov";
import * as _152 from "./gov/v1/query";
import * as _153 from "./gov/v1/tx";
import * as _154 from "./gov/v1beta1/genesis";
import * as _155 from "./gov/v1beta1/gov";
import * as _156 from "./gov/v1beta1/query";
import * as _157 from "./gov/v1beta1/tx";
import * as _158 from "./group/v1/events";
import * as _159 from "./group/v1/genesis";
import * as _160 from "./group/v1/query";
import * as _161 from "./group/v1/tx";
import * as _162 from "./group/v1/types";
import * as _163 from "./mint/v1beta1/genesis";
import * as _164 from "./mint/v1beta1/mint";
import * as _165 from "./mint/v1beta1/query";
import * as _167 from "./nft/v1beta1/event";
import * as _168 from "./nft/v1beta1/genesis";
import * as _169 from "./nft/v1beta1/nft";
import * as _170 from "./nft/v1beta1/query";
import * as _171 from "./nft/v1beta1/tx";
import * as _172 from "./orm/v1/orm";
import * as _173 from "./orm/v1alpha1/schema";
import * as _174 from "./params/v1beta1/params";
import * as _175 from "./params/v1beta1/query";
import * as _176 from "./slashing/v1beta1/genesis";
import * as _177 from "./slashing/v1beta1/query";
import * as _178 from "./slashing/v1beta1/slashing";
import * as _179 from "./slashing/v1beta1/tx";
import * as _180 from "./staking/v1beta1/authz";
import * as _181 from "./staking/v1beta1/genesis";
import * as _182 from "./staking/v1beta1/query";
import * as _183 from "./staking/v1beta1/staking";
import * as _184 from "./staking/v1beta1/tx";
import * as _185 from "./tx/signing/v1beta1/signing";
import * as _186 from "./tx/v1beta1/service";
import * as _187 from "./tx/v1beta1/tx";
import * as _188 from "./upgrade/v1beta1/query";
import * as _189 from "./upgrade/v1beta1/tx";
import * as _190 from "./upgrade/v1beta1/upgrade";
import * as _191 from "./vesting/v1beta1/tx";
import * as _192 from "./vesting/v1beta1/vesting";
import * as _279 from "./app/v1alpha1/query.rpc.Query";
import * as _280 from "./auth/v1beta1/query.rpc.Query";
import * as _281 from "./authz/v1beta1/query.rpc.Query";
import * as _282 from "./bank/v1beta1/query.rpc.Query";
import * as _283 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _284 from "./distribution/v1beta1/query.rpc.Query";
import * as _285 from "./evidence/v1beta1/query.rpc.Query";
import * as _286 from "./feegrant/v1beta1/query.rpc.Query";
import * as _287 from "./gov/v1/query.rpc.Query";
import * as _288 from "./gov/v1beta1/query.rpc.Query";
import * as _289 from "./group/v1/query.rpc.Query";
import * as _290 from "./mint/v1beta1/query.rpc.Query";
import * as _291 from "./nft/v1beta1/query.rpc.Query";
import * as _292 from "./params/v1beta1/query.rpc.Query";
import * as _293 from "./slashing/v1beta1/query.rpc.Query";
import * as _294 from "./staking/v1beta1/query.rpc.Query";
import * as _295 from "./tx/v1beta1/service.rpc.Service";
import * as _296 from "./upgrade/v1beta1/query.rpc.Query";
import * as _297 from "./authz/v1beta1/tx.rpc.msg";
import * as _298 from "./bank/v1beta1/tx.rpc.msg";
import * as _299 from "./crisis/v1beta1/tx.rpc.msg";
import * as _300 from "./distribution/v1beta1/tx.rpc.msg";
import * as _301 from "./evidence/v1beta1/tx.rpc.msg";
import * as _302 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _303 from "./gov/v1/tx.rpc.msg";
import * as _304 from "./gov/v1beta1/tx.rpc.msg";
import * as _305 from "./group/v1/tx.rpc.msg";
import * as _306 from "./nft/v1beta1/tx.rpc.msg";
import * as _307 from "./slashing/v1beta1/tx.rpc.msg";
import * as _308 from "./staking/v1beta1/tx.rpc.msg";
import * as _309 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _310 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _279.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _103.QueryConfigRequest): Promise<_103.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _103.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryConfigRequest;
                fromJSON(_: any): _103.QueryConfigRequest;
                toJSON(_: _103.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_103.QueryConfigRequest>): _103.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _103.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryConfigResponse;
                fromJSON(object: any): _103.QueryConfigResponse;
                toJSON(message: _103.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_103.QueryConfigResponse>): _103.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _102.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ModuleDescriptor;
                fromJSON(object: any): _102.ModuleDescriptor;
                toJSON(message: _102.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_102.ModuleDescriptor>): _102.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _102.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.PackageReference;
                fromJSON(object: any): _102.PackageReference;
                toJSON(message: _102.PackageReference): unknown;
                fromPartial(object: Partial<_102.PackageReference>): _102.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _102.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MigrateFromInfo;
                fromJSON(object: any): _102.MigrateFromInfo;
                toJSON(message: _102.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_102.MigrateFromInfo>): _102.MigrateFromInfo;
            };
            Config: {
                encode(message: _101.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Config;
                fromJSON(object: any): _101.Config;
                toJSON(message: _101.Config): unknown;
                fromPartial(object: Partial<_101.Config>): _101.Config;
            };
            ModuleConfig: {
                encode(message: _101.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ModuleConfig;
                fromJSON(object: any): _101.ModuleConfig;
                toJSON(message: _101.ModuleConfig): unknown;
                fromPartial(object: Partial<_101.ModuleConfig>): _101.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _280.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _106.QueryAccountsRequest): Promise<_106.QueryAccountsResponse>;
                account(request: _106.QueryAccountRequest): Promise<_106.QueryAccountResponse>;
                params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                moduleAccounts(request?: _106.QueryModuleAccountsRequest): Promise<_106.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _106.Bech32PrefixRequest): Promise<_106.Bech32PrefixResponse>;
                addressBytesToString(request: _106.AddressBytesToStringRequest): Promise<_106.AddressBytesToStringResponse>;
                addressStringToBytes(request: _106.AddressStringToBytesRequest): Promise<_106.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _106.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryAccountsRequest;
                fromJSON(object: any): _106.QueryAccountsRequest;
                toJSON(message: _106.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_106.QueryAccountsRequest>): _106.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _106.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryAccountsResponse;
                fromJSON(object: any): _106.QueryAccountsResponse;
                toJSON(message: _106.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_106.QueryAccountsResponse>): _106.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _106.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryAccountRequest;
                fromJSON(object: any): _106.QueryAccountRequest;
                toJSON(message: _106.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_106.QueryAccountRequest>): _106.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _106.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryModuleAccountsRequest;
                fromJSON(_: any): _106.QueryModuleAccountsRequest;
                toJSON(_: _106.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_106.QueryModuleAccountsRequest>): _106.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _106.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryParamsResponse;
                fromJSON(object: any): _106.QueryParamsResponse;
                toJSON(message: _106.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_106.QueryParamsResponse>): _106.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _106.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryAccountResponse;
                fromJSON(object: any): _106.QueryAccountResponse;
                toJSON(message: _106.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_106.QueryAccountResponse>): _106.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _106.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryParamsRequest;
                fromJSON(_: any): _106.QueryParamsRequest;
                toJSON(_: _106.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_106.QueryParamsRequest>): _106.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _106.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryModuleAccountsResponse;
                fromJSON(object: any): _106.QueryModuleAccountsResponse;
                toJSON(message: _106.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_106.QueryModuleAccountsResponse>): _106.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _106.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Bech32PrefixRequest;
                fromJSON(_: any): _106.Bech32PrefixRequest;
                toJSON(_: _106.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_106.Bech32PrefixRequest>): _106.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _106.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Bech32PrefixResponse;
                fromJSON(object: any): _106.Bech32PrefixResponse;
                toJSON(message: _106.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_106.Bech32PrefixResponse>): _106.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _106.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.AddressBytesToStringRequest;
                fromJSON(object: any): _106.AddressBytesToStringRequest;
                toJSON(message: _106.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_106.AddressBytesToStringRequest>): _106.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _106.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.AddressBytesToStringResponse;
                fromJSON(object: any): _106.AddressBytesToStringResponse;
                toJSON(message: _106.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_106.AddressBytesToStringResponse>): _106.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _106.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.AddressStringToBytesRequest;
                fromJSON(object: any): _106.AddressStringToBytesRequest;
                toJSON(message: _106.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_106.AddressStringToBytesRequest>): _106.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _106.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.AddressStringToBytesResponse;
                fromJSON(object: any): _106.AddressStringToBytesResponse;
                toJSON(message: _106.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_106.AddressStringToBytesResponse>): _106.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _105.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GenesisState;
                fromJSON(object: any): _105.GenesisState;
                toJSON(message: _105.GenesisState): unknown;
                fromPartial(object: Partial<_105.GenesisState>): _105.GenesisState;
            };
            BaseAccount: {
                encode(message: _104.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.BaseAccount;
                fromJSON(object: any): _104.BaseAccount;
                toJSON(message: _104.BaseAccount): unknown;
                fromPartial(object: Partial<_104.BaseAccount>): _104.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _104.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ModuleAccount;
                fromJSON(object: any): _104.ModuleAccount;
                toJSON(message: _104.ModuleAccount): unknown;
                fromPartial(object: Partial<_104.ModuleAccount>): _104.ModuleAccount;
            };
            Params: {
                encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Params;
                fromJSON(object: any): _104.Params;
                toJSON(message: _104.Params): unknown;
                fromPartial(object: Partial<_104.Params>): _104.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _281.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _110.QueryGrantsRequest): Promise<_110.QueryGrantsResponse>;
                granterGrants(request: _110.QueryGranterGrantsRequest): Promise<_110.QueryGranterGrantsResponse>;
                granteeGrants(request: _110.QueryGranteeGrantsRequest): Promise<_110.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _111.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _111.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _111.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _111.MsgGrant): {
                        typeUrl: string;
                        value: _111.MsgGrant;
                    };
                    exec(value: _111.MsgExec): {
                        typeUrl: string;
                        value: _111.MsgExec;
                    };
                    revoke(value: _111.MsgRevoke): {
                        typeUrl: string;
                        value: _111.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _111.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _111.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _111.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _111.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _111.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _111.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _111.MsgGrant): {
                        typeUrl: string;
                        value: _111.MsgGrant;
                    };
                    exec(value: _111.MsgExec): {
                        typeUrl: string;
                        value: _111.MsgExec;
                    };
                    revoke(value: _111.MsgRevoke): {
                        typeUrl: string;
                        value: _111.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _111.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _111.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _111.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _111.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _111.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _111.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _111.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgGrant;
                fromJSON(object: any): _111.MsgGrant;
                toJSON(message: _111.MsgGrant): unknown;
                fromPartial(object: Partial<_111.MsgGrant>): _111.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _111.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgExecResponse;
                fromJSON(object: any): _111.MsgExecResponse;
                toJSON(message: _111.MsgExecResponse): unknown;
                fromPartial(object: Partial<_111.MsgExecResponse>): _111.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _111.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgExec;
                fromJSON(object: any): _111.MsgExec;
                toJSON(message: _111.MsgExec): unknown;
                fromPartial(object: Partial<_111.MsgExec>): _111.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _111.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgGrantResponse;
                fromJSON(_: any): _111.MsgGrantResponse;
                toJSON(_: _111.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_111.MsgGrantResponse>): _111.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _111.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgRevoke;
                fromJSON(object: any): _111.MsgRevoke;
                toJSON(message: _111.MsgRevoke): unknown;
                fromPartial(object: Partial<_111.MsgRevoke>): _111.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _111.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgRevokeResponse;
                fromJSON(_: any): _111.MsgRevokeResponse;
                toJSON(_: _111.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_111.MsgRevokeResponse>): _111.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _110.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryGrantsRequest;
                fromJSON(object: any): _110.QueryGrantsRequest;
                toJSON(message: _110.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_110.QueryGrantsRequest>): _110.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _110.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryGrantsResponse;
                fromJSON(object: any): _110.QueryGrantsResponse;
                toJSON(message: _110.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_110.QueryGrantsResponse>): _110.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _110.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryGranterGrantsRequest;
                fromJSON(object: any): _110.QueryGranterGrantsRequest;
                toJSON(message: _110.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_110.QueryGranterGrantsRequest>): _110.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _110.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryGranterGrantsResponse;
                fromJSON(object: any): _110.QueryGranterGrantsResponse;
                toJSON(message: _110.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_110.QueryGranterGrantsResponse>): _110.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _110.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryGranteeGrantsRequest;
                fromJSON(object: any): _110.QueryGranteeGrantsRequest;
                toJSON(message: _110.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_110.QueryGranteeGrantsRequest>): _110.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _110.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryGranteeGrantsResponse;
                fromJSON(object: any): _110.QueryGranteeGrantsResponse;
                toJSON(message: _110.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_110.QueryGranteeGrantsResponse>): _110.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState;
                fromJSON(object: any): _109.GenesisState;
                toJSON(message: _109.GenesisState): unknown;
                fromPartial(object: Partial<_109.GenesisState>): _109.GenesisState;
            };
            EventGrant: {
                encode(message: _108.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.EventGrant;
                fromJSON(object: any): _108.EventGrant;
                toJSON(message: _108.EventGrant): unknown;
                fromPartial(object: Partial<_108.EventGrant>): _108.EventGrant;
            };
            EventRevoke: {
                encode(message: _108.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.EventRevoke;
                fromJSON(object: any): _108.EventRevoke;
                toJSON(message: _108.EventRevoke): unknown;
                fromPartial(object: Partial<_108.EventRevoke>): _108.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _107.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.GenericAuthorization;
                fromJSON(object: any): _107.GenericAuthorization;
                toJSON(message: _107.GenericAuthorization): unknown;
                fromPartial(object: Partial<_107.GenericAuthorization>): _107.GenericAuthorization;
            };
            Grant: {
                encode(message: _107.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Grant;
                fromJSON(object: any): _107.Grant;
                toJSON(message: _107.Grant): unknown;
                fromPartial(object: Partial<_107.Grant>): _107.Grant;
            };
            GrantAuthorization: {
                encode(message: _107.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.GrantAuthorization;
                fromJSON(object: any): _107.GrantAuthorization;
                toJSON(message: _107.GrantAuthorization): unknown;
                fromPartial(object: Partial<_107.GrantAuthorization>): _107.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _107.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.GrantQueueItem;
                fromJSON(object: any): _107.GrantQueueItem;
                toJSON(message: _107.GrantQueueItem): unknown;
                fromPartial(object: Partial<_107.GrantQueueItem>): _107.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _115.QueryBalanceRequest): Promise<_115.QueryBalanceResponse>;
                allBalances(request: _115.QueryAllBalancesRequest): Promise<_115.QueryAllBalancesResponse>;
                spendableBalances(request: _115.QuerySpendableBalancesRequest): Promise<_115.QuerySpendableBalancesResponse>;
                totalSupply(request?: _115.QueryTotalSupplyRequest): Promise<_115.QueryTotalSupplyResponse>;
                supplyOf(request: _115.QuerySupplyOfRequest): Promise<_115.QuerySupplyOfResponse>;
                params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                denomMetadata(request: _115.QueryDenomMetadataRequest): Promise<_115.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _115.QueryDenomsMetadataRequest): Promise<_115.QueryDenomsMetadataResponse>;
                denomOwners(request: _115.QueryDenomOwnersRequest): Promise<_115.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _116.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _116.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _116.MsgSend): {
                        typeUrl: string;
                        value: _116.MsgSend;
                    };
                    multiSend(value: _116.MsgMultiSend): {
                        typeUrl: string;
                        value: _116.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _116.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _116.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _116.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _116.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _116.MsgSend): {
                        typeUrl: string;
                        value: _116.MsgSend;
                    };
                    multiSend(value: _116.MsgMultiSend): {
                        typeUrl: string;
                        value: _116.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _116.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _116.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _116.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _116.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _116.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgSend;
                fromJSON(object: any): _116.MsgSend;
                toJSON(message: _116.MsgSend): unknown;
                fromPartial(object: Partial<_116.MsgSend>): _116.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _116.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgSendResponse;
                fromJSON(_: any): _116.MsgSendResponse;
                toJSON(_: _116.MsgSendResponse): unknown;
                fromPartial(_: Partial<_116.MsgSendResponse>): _116.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _116.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgMultiSend;
                fromJSON(object: any): _116.MsgMultiSend;
                toJSON(message: _116.MsgMultiSend): unknown;
                fromPartial(object: Partial<_116.MsgMultiSend>): _116.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _116.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgMultiSendResponse;
                fromJSON(_: any): _116.MsgMultiSendResponse;
                toJSON(_: _116.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_116.MsgMultiSendResponse>): _116.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _115.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryBalanceRequest;
                fromJSON(object: any): _115.QueryBalanceRequest;
                toJSON(message: _115.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_115.QueryBalanceRequest>): _115.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _115.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryBalanceResponse;
                fromJSON(object: any): _115.QueryBalanceResponse;
                toJSON(message: _115.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_115.QueryBalanceResponse>): _115.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _115.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAllBalancesRequest;
                fromJSON(object: any): _115.QueryAllBalancesRequest;
                toJSON(message: _115.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_115.QueryAllBalancesRequest>): _115.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _115.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAllBalancesResponse;
                fromJSON(object: any): _115.QueryAllBalancesResponse;
                toJSON(message: _115.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_115.QueryAllBalancesResponse>): _115.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _115.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QuerySpendableBalancesRequest;
                fromJSON(object: any): _115.QuerySpendableBalancesRequest;
                toJSON(message: _115.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_115.QuerySpendableBalancesRequest>): _115.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _115.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QuerySpendableBalancesResponse;
                fromJSON(object: any): _115.QuerySpendableBalancesResponse;
                toJSON(message: _115.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_115.QuerySpendableBalancesResponse>): _115.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _115.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryTotalSupplyRequest;
                fromJSON(object: any): _115.QueryTotalSupplyRequest;
                toJSON(message: _115.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_115.QueryTotalSupplyRequest>): _115.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _115.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryTotalSupplyResponse;
                fromJSON(object: any): _115.QueryTotalSupplyResponse;
                toJSON(message: _115.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_115.QueryTotalSupplyResponse>): _115.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _115.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QuerySupplyOfRequest;
                fromJSON(object: any): _115.QuerySupplyOfRequest;
                toJSON(message: _115.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_115.QuerySupplyOfRequest>): _115.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _115.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QuerySupplyOfResponse;
                fromJSON(object: any): _115.QuerySupplyOfResponse;
                toJSON(message: _115.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_115.QuerySupplyOfResponse>): _115.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _115.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryParamsRequest;
                fromJSON(_: any): _115.QueryParamsRequest;
                toJSON(_: _115.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_115.QueryParamsRequest>): _115.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _115.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryParamsResponse;
                fromJSON(object: any): _115.QueryParamsResponse;
                toJSON(message: _115.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_115.QueryParamsResponse>): _115.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _115.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryDenomsMetadataRequest;
                fromJSON(object: any): _115.QueryDenomsMetadataRequest;
                toJSON(message: _115.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_115.QueryDenomsMetadataRequest>): _115.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _115.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryDenomsMetadataResponse;
                fromJSON(object: any): _115.QueryDenomsMetadataResponse;
                toJSON(message: _115.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_115.QueryDenomsMetadataResponse>): _115.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _115.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryDenomMetadataRequest;
                fromJSON(object: any): _115.QueryDenomMetadataRequest;
                toJSON(message: _115.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_115.QueryDenomMetadataRequest>): _115.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _115.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryDenomMetadataResponse;
                fromJSON(object: any): _115.QueryDenomMetadataResponse;
                toJSON(message: _115.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_115.QueryDenomMetadataResponse>): _115.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _115.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryDenomOwnersRequest;
                fromJSON(object: any): _115.QueryDenomOwnersRequest;
                toJSON(message: _115.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_115.QueryDenomOwnersRequest>): _115.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _115.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.DenomOwner;
                fromJSON(object: any): _115.DenomOwner;
                toJSON(message: _115.DenomOwner): unknown;
                fromPartial(object: Partial<_115.DenomOwner>): _115.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _115.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryDenomOwnersResponse;
                fromJSON(object: any): _115.QueryDenomOwnersResponse;
                toJSON(message: _115.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_115.QueryDenomOwnersResponse>): _115.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _114.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.GenesisState;
                fromJSON(object: any): _114.GenesisState;
                toJSON(message: _114.GenesisState): unknown;
                fromPartial(object: Partial<_114.GenesisState>): _114.GenesisState;
            };
            Balance: {
                encode(message: _114.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Balance;
                fromJSON(object: any): _114.Balance;
                toJSON(message: _114.Balance): unknown;
                fromPartial(object: Partial<_114.Balance>): _114.Balance;
            };
            Params: {
                encode(message: _113.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Params;
                fromJSON(object: any): _113.Params;
                toJSON(message: _113.Params): unknown;
                fromPartial(object: Partial<_113.Params>): _113.Params;
            };
            SendEnabled: {
                encode(message: _113.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.SendEnabled;
                fromJSON(object: any): _113.SendEnabled;
                toJSON(message: _113.SendEnabled): unknown;
                fromPartial(object: Partial<_113.SendEnabled>): _113.SendEnabled;
            };
            Input: {
                encode(message: _113.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Input;
                fromJSON(object: any): _113.Input;
                toJSON(message: _113.Input): unknown;
                fromPartial(object: Partial<_113.Input>): _113.Input;
            };
            Output: {
                encode(message: _113.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Output;
                fromJSON(object: any): _113.Output;
                toJSON(message: _113.Output): unknown;
                fromPartial(object: Partial<_113.Output>): _113.Output;
            };
            Supply: {
                encode(message: _113.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Supply;
                fromJSON(object: any): _113.Supply;
                toJSON(message: _113.Supply): unknown;
                fromPartial(object: Partial<_113.Supply>): _113.Supply;
            };
            DenomUnit: {
                encode(message: _113.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.DenomUnit;
                fromJSON(object: any): _113.DenomUnit;
                toJSON(message: _113.DenomUnit): unknown;
                fromPartial(object: Partial<_113.DenomUnit>): _113.DenomUnit;
            };
            Metadata: {
                encode(message: _113.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Metadata;
                fromJSON(object: any): _113.Metadata;
                toJSON(message: _113.Metadata): unknown;
                fromPartial(object: Partial<_113.Metadata>): _113.Metadata;
            };
            SendAuthorization: {
                encode(message: _112.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.SendAuthorization;
                fromJSON(object: any): _112.SendAuthorization;
                toJSON(message: _112.SendAuthorization): unknown;
                fromPartial(object: Partial<_112.SendAuthorization>): _112.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _117.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.TxResponse;
                    fromJSON(object: any): _117.TxResponse;
                    toJSON(message: _117.TxResponse): unknown;
                    fromPartial(object: Partial<_117.TxResponse>): _117.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _117.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ABCIMessageLog;
                    fromJSON(object: any): _117.ABCIMessageLog;
                    toJSON(message: _117.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_117.ABCIMessageLog>): _117.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _117.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.StringEvent;
                    fromJSON(object: any): _117.StringEvent;
                    toJSON(message: _117.StringEvent): unknown;
                    fromPartial(object: Partial<_117.StringEvent>): _117.StringEvent;
                };
                Attribute: {
                    encode(message: _117.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Attribute;
                    fromJSON(object: any): _117.Attribute;
                    toJSON(message: _117.Attribute): unknown;
                    fromPartial(object: Partial<_117.Attribute>): _117.Attribute;
                };
                GasInfo: {
                    encode(message: _117.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GasInfo;
                    fromJSON(object: any): _117.GasInfo;
                    toJSON(message: _117.GasInfo): unknown;
                    fromPartial(object: Partial<_117.GasInfo>): _117.GasInfo;
                };
                Result: {
                    encode(message: _117.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Result;
                    fromJSON(object: any): _117.Result;
                    toJSON(message: _117.Result): unknown;
                    fromPartial(object: Partial<_117.Result>): _117.Result;
                };
                SimulationResponse: {
                    encode(message: _117.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.SimulationResponse;
                    fromJSON(object: any): _117.SimulationResponse;
                    toJSON(message: _117.SimulationResponse): unknown;
                    fromPartial(object: Partial<_117.SimulationResponse>): _117.SimulationResponse;
                };
                MsgData: {
                    encode(message: _117.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgData;
                    fromJSON(object: any): _117.MsgData;
                    toJSON(message: _117.MsgData): unknown;
                    fromPartial(object: Partial<_117.MsgData>): _117.MsgData;
                };
                TxMsgData: {
                    encode(message: _117.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.TxMsgData;
                    fromJSON(object: any): _117.TxMsgData;
                    toJSON(message: _117.TxMsgData): unknown;
                    fromPartial(object: Partial<_117.TxMsgData>): _117.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _117.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.SearchTxsResult;
                    fromJSON(object: any): _117.SearchTxsResult;
                    toJSON(message: _117.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_117.SearchTxsResult>): _117.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _118.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Pairs;
                    fromJSON(object: any): _118.Pairs;
                    toJSON(message: _118.Pairs): unknown;
                    fromPartial(object: Partial<_118.Pairs>): _118.Pairs;
                };
                Pair: {
                    encode(message: _118.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Pair;
                    fromJSON(object: any): _118.Pair;
                    toJSON(message: _118.Pair): unknown;
                    fromPartial(object: Partial<_118.Pair>): _118.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _119.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PageRequest;
                    fromJSON(object: any): _119.PageRequest;
                    toJSON(message: _119.PageRequest): unknown;
                    fromPartial(object: Partial<_119.PageRequest>): _119.PageRequest;
                };
                PageResponse: {
                    encode(message: _119.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PageResponse;
                    fromJSON(object: any): _119.PageResponse;
                    toJSON(message: _119.PageResponse): unknown;
                    fromPartial(object: Partial<_119.PageResponse>): _119.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _120.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ListAllInterfacesRequest;
                    fromJSON(_: any): _120.ListAllInterfacesRequest;
                    toJSON(_: _120.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_120.ListAllInterfacesRequest>): _120.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _120.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ListAllInterfacesResponse;
                    fromJSON(object: any): _120.ListAllInterfacesResponse;
                    toJSON(message: _120.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_120.ListAllInterfacesResponse>): _120.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _120.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ListImplementationsRequest;
                    fromJSON(object: any): _120.ListImplementationsRequest;
                    toJSON(message: _120.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_120.ListImplementationsRequest>): _120.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _120.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ListImplementationsResponse;
                    fromJSON(object: any): _120.ListImplementationsResponse;
                    toJSON(message: _120.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_120.ListImplementationsResponse>): _120.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _121.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.AppDescriptor;
                    fromJSON(object: any): _121.AppDescriptor;
                    toJSON(message: _121.AppDescriptor): unknown;
                    fromPartial(object: Partial<_121.AppDescriptor>): _121.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _121.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.TxDescriptor;
                    fromJSON(object: any): _121.TxDescriptor;
                    toJSON(message: _121.TxDescriptor): unknown;
                    fromPartial(object: Partial<_121.TxDescriptor>): _121.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _121.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.AuthnDescriptor;
                    fromJSON(object: any): _121.AuthnDescriptor;
                    toJSON(message: _121.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_121.AuthnDescriptor>): _121.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _121.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.SigningModeDescriptor;
                    fromJSON(object: any): _121.SigningModeDescriptor;
                    toJSON(message: _121.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_121.SigningModeDescriptor>): _121.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _121.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ChainDescriptor;
                    fromJSON(object: any): _121.ChainDescriptor;
                    toJSON(message: _121.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_121.ChainDescriptor>): _121.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _121.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.CodecDescriptor;
                    fromJSON(object: any): _121.CodecDescriptor;
                    toJSON(message: _121.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_121.CodecDescriptor>): _121.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _121.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.InterfaceDescriptor;
                    fromJSON(object: any): _121.InterfaceDescriptor;
                    toJSON(message: _121.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_121.InterfaceDescriptor>): _121.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _121.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _121.InterfaceImplementerDescriptor;
                    toJSON(message: _121.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_121.InterfaceImplementerDescriptor>): _121.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _121.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _121.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _121.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_121.InterfaceAcceptingMessageDescriptor>): _121.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _121.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ConfigurationDescriptor;
                    fromJSON(object: any): _121.ConfigurationDescriptor;
                    toJSON(message: _121.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_121.ConfigurationDescriptor>): _121.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _121.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MsgDescriptor;
                    fromJSON(object: any): _121.MsgDescriptor;
                    toJSON(message: _121.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_121.MsgDescriptor>): _121.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _121.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _121.GetAuthnDescriptorRequest;
                    toJSON(_: _121.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_121.GetAuthnDescriptorRequest>): _121.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _121.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _121.GetAuthnDescriptorResponse;
                    toJSON(message: _121.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_121.GetAuthnDescriptorResponse>): _121.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _121.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetChainDescriptorRequest;
                    fromJSON(_: any): _121.GetChainDescriptorRequest;
                    toJSON(_: _121.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_121.GetChainDescriptorRequest>): _121.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _121.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetChainDescriptorResponse;
                    fromJSON(object: any): _121.GetChainDescriptorResponse;
                    toJSON(message: _121.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_121.GetChainDescriptorResponse>): _121.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _121.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetCodecDescriptorRequest;
                    fromJSON(_: any): _121.GetCodecDescriptorRequest;
                    toJSON(_: _121.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_121.GetCodecDescriptorRequest>): _121.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _121.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetCodecDescriptorResponse;
                    fromJSON(object: any): _121.GetCodecDescriptorResponse;
                    toJSON(message: _121.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_121.GetCodecDescriptorResponse>): _121.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _121.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _121.GetConfigurationDescriptorRequest;
                    toJSON(_: _121.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_121.GetConfigurationDescriptorRequest>): _121.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _121.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _121.GetConfigurationDescriptorResponse;
                    toJSON(message: _121.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_121.GetConfigurationDescriptorResponse>): _121.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _121.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _121.GetQueryServicesDescriptorRequest;
                    toJSON(_: _121.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_121.GetQueryServicesDescriptorRequest>): _121.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _121.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _121.GetQueryServicesDescriptorResponse;
                    toJSON(message: _121.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_121.GetQueryServicesDescriptorResponse>): _121.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _121.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetTxDescriptorRequest;
                    fromJSON(_: any): _121.GetTxDescriptorRequest;
                    toJSON(_: _121.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_121.GetTxDescriptorRequest>): _121.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _121.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetTxDescriptorResponse;
                    fromJSON(object: any): _121.GetTxDescriptorResponse;
                    toJSON(message: _121.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_121.GetTxDescriptorResponse>): _121.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _121.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryServicesDescriptor;
                    fromJSON(object: any): _121.QueryServicesDescriptor;
                    toJSON(message: _121.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_121.QueryServicesDescriptor>): _121.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _121.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryServiceDescriptor;
                    fromJSON(object: any): _121.QueryServiceDescriptor;
                    toJSON(message: _121.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_121.QueryServiceDescriptor>): _121.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _121.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryMethodDescriptor;
                    fromJSON(object: any): _121.QueryMethodDescriptor;
                    toJSON(message: _121.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_121.QueryMethodDescriptor>): _121.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _122.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Snapshot;
                    fromJSON(object: any): _122.Snapshot;
                    toJSON(message: _122.Snapshot): unknown;
                    fromPartial(object: Partial<_122.Snapshot>): _122.Snapshot;
                };
                Metadata: {
                    encode(message: _122.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Metadata;
                    fromJSON(object: any): _122.Metadata;
                    toJSON(message: _122.Metadata): unknown;
                    fromPartial(object: Partial<_122.Metadata>): _122.Metadata;
                };
                SnapshotItem: {
                    encode(message: _122.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SnapshotItem;
                    fromJSON(object: any): _122.SnapshotItem;
                    toJSON(message: _122.SnapshotItem): unknown;
                    fromPartial(object: Partial<_122.SnapshotItem>): _122.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _122.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SnapshotStoreItem;
                    fromJSON(object: any): _122.SnapshotStoreItem;
                    toJSON(message: _122.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_122.SnapshotStoreItem>): _122.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _122.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SnapshotIAVLItem;
                    fromJSON(object: any): _122.SnapshotIAVLItem;
                    toJSON(message: _122.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_122.SnapshotIAVLItem>): _122.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _122.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SnapshotExtensionMeta;
                    fromJSON(object: any): _122.SnapshotExtensionMeta;
                    toJSON(message: _122.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_122.SnapshotExtensionMeta>): _122.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _122.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SnapshotExtensionPayload;
                    fromJSON(object: any): _122.SnapshotExtensionPayload;
                    toJSON(message: _122.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_122.SnapshotExtensionPayload>): _122.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _122.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SnapshotKVItem;
                    fromJSON(object: any): _122.SnapshotKVItem;
                    toJSON(message: _122.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_122.SnapshotKVItem>): _122.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _122.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SnapshotSchema;
                    fromJSON(object: any): _122.SnapshotSchema;
                    toJSON(message: _122.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_122.SnapshotSchema>): _122.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _124.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.StoreKVPair;
                    fromJSON(object: any): _124.StoreKVPair;
                    toJSON(message: _124.StoreKVPair): unknown;
                    fromPartial(object: Partial<_124.StoreKVPair>): _124.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _123.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.CommitInfo;
                    fromJSON(object: any): _123.CommitInfo;
                    toJSON(message: _123.CommitInfo): unknown;
                    fromPartial(object: Partial<_123.CommitInfo>): _123.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _123.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.StoreInfo;
                    fromJSON(object: any): _123.StoreInfo;
                    toJSON(message: _123.StoreInfo): unknown;
                    fromPartial(object: Partial<_123.StoreInfo>): _123.StoreInfo;
                };
                CommitID: {
                    encode(message: _123.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.CommitID;
                    fromJSON(object: any): _123.CommitID;
                    toJSON(message: _123.CommitID): unknown;
                    fromPartial(object: Partial<_123.CommitID>): _123.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _283.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _125.GetNodeInfoRequest): Promise<_125.GetNodeInfoResponse>;
                    getSyncing(request?: _125.GetSyncingRequest): Promise<_125.GetSyncingResponse>;
                    getLatestBlock(request?: _125.GetLatestBlockRequest): Promise<_125.GetLatestBlockResponse>;
                    getBlockByHeight(request: _125.GetBlockByHeightRequest): Promise<_125.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _125.GetLatestValidatorSetRequest): Promise<_125.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _125.GetValidatorSetByHeightRequest): Promise<_125.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _125.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _125.GetValidatorSetByHeightRequest;
                    toJSON(message: _125.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_125.GetValidatorSetByHeightRequest>): _125.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _125.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _125.GetValidatorSetByHeightResponse;
                    toJSON(message: _125.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_125.GetValidatorSetByHeightResponse>): _125.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _125.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _125.GetLatestValidatorSetRequest;
                    toJSON(message: _125.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_125.GetLatestValidatorSetRequest>): _125.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _125.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _125.GetLatestValidatorSetResponse;
                    toJSON(message: _125.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_125.GetLatestValidatorSetResponse>): _125.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _125.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Validator;
                    fromJSON(object: any): _125.Validator;
                    toJSON(message: _125.Validator): unknown;
                    fromPartial(object: Partial<_125.Validator>): _125.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _125.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GetBlockByHeightRequest;
                    fromJSON(object: any): _125.GetBlockByHeightRequest;
                    toJSON(message: _125.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_125.GetBlockByHeightRequest>): _125.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _125.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GetBlockByHeightResponse;
                    fromJSON(object: any): _125.GetBlockByHeightResponse;
                    toJSON(message: _125.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_125.GetBlockByHeightResponse>): _125.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _125.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GetLatestBlockRequest;
                    fromJSON(_: any): _125.GetLatestBlockRequest;
                    toJSON(_: _125.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_125.GetLatestBlockRequest>): _125.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _125.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GetLatestBlockResponse;
                    fromJSON(object: any): _125.GetLatestBlockResponse;
                    toJSON(message: _125.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_125.GetLatestBlockResponse>): _125.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _125.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GetSyncingRequest;
                    fromJSON(_: any): _125.GetSyncingRequest;
                    toJSON(_: _125.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_125.GetSyncingRequest>): _125.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _125.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GetSyncingResponse;
                    fromJSON(object: any): _125.GetSyncingResponse;
                    toJSON(message: _125.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_125.GetSyncingResponse>): _125.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _125.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GetNodeInfoRequest;
                    fromJSON(_: any): _125.GetNodeInfoRequest;
                    toJSON(_: _125.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_125.GetNodeInfoRequest>): _125.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _125.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GetNodeInfoResponse;
                    fromJSON(object: any): _125.GetNodeInfoResponse;
                    toJSON(message: _125.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_125.GetNodeInfoResponse>): _125.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _125.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.VersionInfo;
                    fromJSON(object: any): _125.VersionInfo;
                    toJSON(message: _125.VersionInfo): unknown;
                    fromPartial(object: Partial<_125.VersionInfo>): _125.VersionInfo;
                };
                Module: {
                    encode(message: _125.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Module;
                    fromJSON(object: any): _125.Module;
                    toJSON(message: _125.Module): unknown;
                    fromPartial(object: Partial<_125.Module>): _125.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _126.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Coin;
                fromJSON(object: any): _126.Coin;
                toJSON(message: _126.Coin): unknown;
                fromPartial(object: Partial<_126.Coin>): _126.Coin;
            };
            DecCoin: {
                encode(message: _126.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.DecCoin;
                fromJSON(object: any): _126.DecCoin;
                toJSON(message: _126.DecCoin): unknown;
                fromPartial(object: Partial<_126.DecCoin>): _126.DecCoin;
            };
            IntProto: {
                encode(message: _126.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.IntProto;
                fromJSON(object: any): _126.IntProto;
                toJSON(message: _126.IntProto): unknown;
                fromPartial(object: Partial<_126.IntProto>): _126.IntProto;
            };
            DecProto: {
                encode(message: _126.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.DecProto;
                fromJSON(object: any): _126.DecProto;
                toJSON(message: _126.DecProto): unknown;
                fromPartial(object: Partial<_126.DecProto>): _126.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _128.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.GenesisOwners;
                fromJSON(object: any): _128.GenesisOwners;
                toJSON(message: _128.GenesisOwners): unknown;
                fromPartial(object: Partial<_128.GenesisOwners>): _128.GenesisOwners;
            };
            GenesisState: {
                encode(message: _128.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.GenesisState;
                fromJSON(object: any): _128.GenesisState;
                toJSON(message: _128.GenesisState): unknown;
                fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
            };
            Capability: {
                encode(message: _127.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Capability;
                fromJSON(object: any): _127.Capability;
                toJSON(message: _127.Capability): unknown;
                fromPartial(object: Partial<_127.Capability>): _127.Capability;
            };
            Owner: {
                encode(message: _127.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Owner;
                fromJSON(object: any): _127.Owner;
                toJSON(message: _127.Owner): unknown;
                fromPartial(object: Partial<_127.Owner>): _127.Owner;
            };
            CapabilityOwners: {
                encode(message: _127.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.CapabilityOwners;
                fromJSON(object: any): _127.CapabilityOwners;
                toJSON(message: _127.CapabilityOwners): unknown;
                fromPartial(object: Partial<_127.CapabilityOwners>): _127.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _299.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _130.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _130.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _130.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _130.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _130.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _130.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _130.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _130.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _130.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _130.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgVerifyInvariant;
                fromJSON(object: any): _130.MsgVerifyInvariant;
                toJSON(message: _130.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_130.MsgVerifyInvariant>): _130.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _130.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgVerifyInvariantResponse;
                fromJSON(_: any): _130.MsgVerifyInvariantResponse;
                toJSON(_: _130.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_130.MsgVerifyInvariantResponse>): _130.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _129.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.GenesisState;
                fromJSON(object: any): _129.GenesisState;
                toJSON(message: _129.GenesisState): unknown;
                fromPartial(object: Partial<_129.GenesisState>): _129.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _131.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PubKey;
                fromJSON(object: any): _131.PubKey;
                toJSON(message: _131.PubKey): unknown;
                fromPartial(object: Partial<_131.PubKey>): _131.PubKey;
            };
            PrivKey: {
                encode(message: _131.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PrivKey;
                fromJSON(object: any): _131.PrivKey;
                toJSON(message: _131.PrivKey): unknown;
                fromPartial(object: Partial<_131.PrivKey>): _131.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _132.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.BIP44Params;
                    fromJSON(object: any): _132.BIP44Params;
                    toJSON(message: _132.BIP44Params): unknown;
                    fromPartial(object: Partial<_132.BIP44Params>): _132.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _133.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Record;
                    fromJSON(object: any): _133.Record;
                    toJSON(message: _133.Record): unknown;
                    fromPartial(object: Partial<_133.Record>): _133.Record;
                };
                Record_Local: {
                    encode(message: _133.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Record_Local;
                    fromJSON(object: any): _133.Record_Local;
                    toJSON(message: _133.Record_Local): unknown;
                    fromPartial(object: Partial<_133.Record_Local>): _133.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _133.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Record_Ledger;
                    fromJSON(object: any): _133.Record_Ledger;
                    toJSON(message: _133.Record_Ledger): unknown;
                    fromPartial(object: Partial<_133.Record_Ledger>): _133.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _133.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Record_Multi;
                    fromJSON(_: any): _133.Record_Multi;
                    toJSON(_: _133.Record_Multi): unknown;
                    fromPartial(_: Partial<_133.Record_Multi>): _133.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _133.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Record_Offline;
                    fromJSON(_: any): _133.Record_Offline;
                    toJSON(_: _133.Record_Offline): unknown;
                    fromPartial(_: Partial<_133.Record_Offline>): _133.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _134.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.LegacyAminoPubKey;
                fromJSON(object: any): _134.LegacyAminoPubKey;
                toJSON(message: _134.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_134.LegacyAminoPubKey>): _134.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _135.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.PubKey;
                fromJSON(object: any): _135.PubKey;
                toJSON(message: _135.PubKey): unknown;
                fromPartial(object: Partial<_135.PubKey>): _135.PubKey;
            };
            PrivKey: {
                encode(message: _135.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.PrivKey;
                fromJSON(object: any): _135.PrivKey;
                toJSON(message: _135.PrivKey): unknown;
                fromPartial(object: Partial<_135.PrivKey>): _135.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _136.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.PubKey;
                fromJSON(object: any): _136.PubKey;
                toJSON(message: _136.PubKey): unknown;
                fromPartial(object: Partial<_136.PubKey>): _136.PubKey;
            };
            PrivKey: {
                encode(message: _136.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.PrivKey;
                fromJSON(object: any): _136.PrivKey;
                toJSON(message: _136.PrivKey): unknown;
                fromPartial(object: Partial<_136.PrivKey>): _136.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _300.MsgClientImpl;
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _139.QueryParamsRequest): Promise<_139.QueryParamsResponse>;
                validatorOutstandingRewards(request: _139.QueryValidatorOutstandingRewardsRequest): Promise<_139.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _139.QueryValidatorCommissionRequest): Promise<_139.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _139.QueryValidatorSlashesRequest): Promise<_139.QueryValidatorSlashesResponse>;
                delegationRewards(request: _139.QueryDelegationRewardsRequest): Promise<_139.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _139.QueryDelegationTotalRewardsRequest): Promise<_139.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _139.QueryDelegatorValidatorsRequest): Promise<_139.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _139.QueryDelegatorWithdrawAddressRequest): Promise<_139.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _139.QueryCommunityPoolRequest): Promise<_139.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _140.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _140.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _140.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _140.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _140.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _140.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _140.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _140.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _140.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _140.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _140.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _140.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _140.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _140.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _140.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _140.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _140.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _140.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _140.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _140.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _140.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _140.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _140.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _140.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _140.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _140.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _140.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _140.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _140.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _140.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _140.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _140.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _140.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _140.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _140.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _140.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _140.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgSetWithdrawAddress;
                fromJSON(object: any): _140.MsgSetWithdrawAddress;
                toJSON(message: _140.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_140.MsgSetWithdrawAddress>): _140.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _140.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _140.MsgSetWithdrawAddressResponse;
                toJSON(_: _140.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_140.MsgSetWithdrawAddressResponse>): _140.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _140.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _140.MsgWithdrawDelegatorReward;
                toJSON(message: _140.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_140.MsgWithdrawDelegatorReward>): _140.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _140.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _140.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _140.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_140.MsgWithdrawDelegatorRewardResponse>): _140.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _140.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _140.MsgWithdrawValidatorCommission;
                toJSON(message: _140.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_140.MsgWithdrawValidatorCommission>): _140.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _140.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _140.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _140.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_140.MsgWithdrawValidatorCommissionResponse>): _140.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _140.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgFundCommunityPool;
                fromJSON(object: any): _140.MsgFundCommunityPool;
                toJSON(message: _140.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_140.MsgFundCommunityPool>): _140.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _140.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _140.MsgFundCommunityPoolResponse;
                toJSON(_: _140.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_140.MsgFundCommunityPoolResponse>): _140.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _139.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryParamsRequest;
                fromJSON(_: any): _139.QueryParamsRequest;
                toJSON(_: _139.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_139.QueryParamsRequest>): _139.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _139.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryParamsResponse;
                fromJSON(object: any): _139.QueryParamsResponse;
                toJSON(message: _139.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_139.QueryParamsResponse>): _139.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _139.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _139.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _139.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_139.QueryValidatorOutstandingRewardsRequest>): _139.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _139.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _139.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _139.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_139.QueryValidatorOutstandingRewardsResponse>): _139.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _139.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryValidatorCommissionRequest;
                fromJSON(object: any): _139.QueryValidatorCommissionRequest;
                toJSON(message: _139.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_139.QueryValidatorCommissionRequest>): _139.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _139.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryValidatorCommissionResponse;
                fromJSON(object: any): _139.QueryValidatorCommissionResponse;
                toJSON(message: _139.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_139.QueryValidatorCommissionResponse>): _139.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _139.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryValidatorSlashesRequest;
                fromJSON(object: any): _139.QueryValidatorSlashesRequest;
                toJSON(message: _139.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_139.QueryValidatorSlashesRequest>): _139.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _139.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryValidatorSlashesResponse;
                fromJSON(object: any): _139.QueryValidatorSlashesResponse;
                toJSON(message: _139.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_139.QueryValidatorSlashesResponse>): _139.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _139.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryDelegationRewardsRequest;
                fromJSON(object: any): _139.QueryDelegationRewardsRequest;
                toJSON(message: _139.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_139.QueryDelegationRewardsRequest>): _139.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _139.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryDelegationRewardsResponse;
                fromJSON(object: any): _139.QueryDelegationRewardsResponse;
                toJSON(message: _139.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_139.QueryDelegationRewardsResponse>): _139.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _139.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _139.QueryDelegationTotalRewardsRequest;
                toJSON(message: _139.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_139.QueryDelegationTotalRewardsRequest>): _139.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _139.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _139.QueryDelegationTotalRewardsResponse;
                toJSON(message: _139.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_139.QueryDelegationTotalRewardsResponse>): _139.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _139.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _139.QueryDelegatorValidatorsRequest;
                toJSON(message: _139.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_139.QueryDelegatorValidatorsRequest>): _139.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _139.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _139.QueryDelegatorValidatorsResponse;
                toJSON(message: _139.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_139.QueryDelegatorValidatorsResponse>): _139.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _139.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _139.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _139.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_139.QueryDelegatorWithdrawAddressRequest>): _139.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _139.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _139.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _139.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_139.QueryDelegatorWithdrawAddressResponse>): _139.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _139.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryCommunityPoolRequest;
                fromJSON(_: any): _139.QueryCommunityPoolRequest;
                toJSON(_: _139.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_139.QueryCommunityPoolRequest>): _139.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _139.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryCommunityPoolResponse;
                fromJSON(object: any): _139.QueryCommunityPoolResponse;
                toJSON(message: _139.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_139.QueryCommunityPoolResponse>): _139.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _138.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.DelegatorWithdrawInfo;
                fromJSON(object: any): _138.DelegatorWithdrawInfo;
                toJSON(message: _138.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_138.DelegatorWithdrawInfo>): _138.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _138.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _138.ValidatorOutstandingRewardsRecord;
                toJSON(message: _138.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_138.ValidatorOutstandingRewardsRecord>): _138.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _138.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _138.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _138.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_138.ValidatorAccumulatedCommissionRecord>): _138.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _138.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _138.ValidatorHistoricalRewardsRecord;
                toJSON(message: _138.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_138.ValidatorHistoricalRewardsRecord>): _138.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _138.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _138.ValidatorCurrentRewardsRecord;
                toJSON(message: _138.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_138.ValidatorCurrentRewardsRecord>): _138.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _138.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.DelegatorStartingInfoRecord;
                fromJSON(object: any): _138.DelegatorStartingInfoRecord;
                toJSON(message: _138.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_138.DelegatorStartingInfoRecord>): _138.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _138.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ValidatorSlashEventRecord;
                fromJSON(object: any): _138.ValidatorSlashEventRecord;
                toJSON(message: _138.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_138.ValidatorSlashEventRecord>): _138.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _138.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GenesisState;
                fromJSON(object: any): _138.GenesisState;
                toJSON(message: _138.GenesisState): unknown;
                fromPartial(object: Partial<_138.GenesisState>): _138.GenesisState;
            };
            Params: {
                encode(message: _137.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Params;
                fromJSON(object: any): _137.Params;
                toJSON(message: _137.Params): unknown;
                fromPartial(object: Partial<_137.Params>): _137.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _137.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ValidatorHistoricalRewards;
                fromJSON(object: any): _137.ValidatorHistoricalRewards;
                toJSON(message: _137.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_137.ValidatorHistoricalRewards>): _137.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _137.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ValidatorCurrentRewards;
                fromJSON(object: any): _137.ValidatorCurrentRewards;
                toJSON(message: _137.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_137.ValidatorCurrentRewards>): _137.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _137.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ValidatorAccumulatedCommission;
                fromJSON(object: any): _137.ValidatorAccumulatedCommission;
                toJSON(message: _137.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_137.ValidatorAccumulatedCommission>): _137.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _137.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ValidatorOutstandingRewards;
                fromJSON(object: any): _137.ValidatorOutstandingRewards;
                toJSON(message: _137.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_137.ValidatorOutstandingRewards>): _137.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _137.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ValidatorSlashEvent;
                fromJSON(object: any): _137.ValidatorSlashEvent;
                toJSON(message: _137.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_137.ValidatorSlashEvent>): _137.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _137.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ValidatorSlashEvents;
                fromJSON(object: any): _137.ValidatorSlashEvents;
                toJSON(message: _137.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_137.ValidatorSlashEvents>): _137.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _137.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.FeePool;
                fromJSON(object: any): _137.FeePool;
                toJSON(message: _137.FeePool): unknown;
                fromPartial(object: Partial<_137.FeePool>): _137.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _137.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.CommunityPoolSpendProposal;
                fromJSON(object: any): _137.CommunityPoolSpendProposal;
                toJSON(message: _137.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_137.CommunityPoolSpendProposal>): _137.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _137.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.DelegatorStartingInfo;
                fromJSON(object: any): _137.DelegatorStartingInfo;
                toJSON(message: _137.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_137.DelegatorStartingInfo>): _137.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _137.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.DelegationDelegatorReward;
                fromJSON(object: any): _137.DelegationDelegatorReward;
                toJSON(message: _137.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_137.DelegationDelegatorReward>): _137.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _137.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _137.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _137.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_137.CommunityPoolSpendProposalWithDeposit>): _137.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _301.MsgClientImpl;
            QueryClientImpl: typeof _285.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _143.QueryEvidenceRequest): Promise<_143.QueryEvidenceResponse>;
                allEvidence(request?: _143.QueryAllEvidenceRequest): Promise<_143.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _144.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _144.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _144.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _144.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _144.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _144.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _144.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _144.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _144.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _144.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSubmitEvidence;
                fromJSON(object: any): _144.MsgSubmitEvidence;
                toJSON(message: _144.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_144.MsgSubmitEvidence>): _144.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _144.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _144.MsgSubmitEvidenceResponse;
                toJSON(message: _144.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_144.MsgSubmitEvidenceResponse>): _144.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _143.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryEvidenceRequest;
                fromJSON(object: any): _143.QueryEvidenceRequest;
                toJSON(message: _143.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_143.QueryEvidenceRequest>): _143.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _143.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryEvidenceResponse;
                fromJSON(object: any): _143.QueryEvidenceResponse;
                toJSON(message: _143.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_143.QueryEvidenceResponse>): _143.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _143.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryAllEvidenceRequest;
                fromJSON(object: any): _143.QueryAllEvidenceRequest;
                toJSON(message: _143.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_143.QueryAllEvidenceRequest>): _143.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _143.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryAllEvidenceResponse;
                fromJSON(object: any): _143.QueryAllEvidenceResponse;
                toJSON(message: _143.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_143.QueryAllEvidenceResponse>): _143.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _142.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.GenesisState;
                fromJSON(object: any): _142.GenesisState;
                toJSON(message: _142.GenesisState): unknown;
                fromPartial(object: Partial<_142.GenesisState>): _142.GenesisState;
            };
            Equivocation: {
                encode(message: _141.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Equivocation;
                fromJSON(object: any): _141.Equivocation;
                toJSON(message: _141.Equivocation): unknown;
                fromPartial(object: Partial<_141.Equivocation>): _141.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _302.MsgClientImpl;
            QueryClientImpl: typeof _286.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _147.QueryAllowanceRequest): Promise<_147.QueryAllowanceResponse>;
                allowances(request: _147.QueryAllowancesRequest): Promise<_147.QueryAllowancesResponse>;
                allowancesByGranter(request: _147.QueryAllowancesByGranterRequest): Promise<_147.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _148.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _148.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _148.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _148.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _148.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _148.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _148.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _148.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _148.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _148.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _148.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _148.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _148.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _148.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _148.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _148.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _148.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _148.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _148.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgGrantAllowance;
                fromJSON(object: any): _148.MsgGrantAllowance;
                toJSON(message: _148.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_148.MsgGrantAllowance>): _148.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _148.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgGrantAllowanceResponse;
                fromJSON(_: any): _148.MsgGrantAllowanceResponse;
                toJSON(_: _148.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_148.MsgGrantAllowanceResponse>): _148.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _148.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgRevokeAllowance;
                fromJSON(object: any): _148.MsgRevokeAllowance;
                toJSON(message: _148.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_148.MsgRevokeAllowance>): _148.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _148.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _148.MsgRevokeAllowanceResponse;
                toJSON(_: _148.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_148.MsgRevokeAllowanceResponse>): _148.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _147.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAllowanceRequest;
                fromJSON(object: any): _147.QueryAllowanceRequest;
                toJSON(message: _147.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_147.QueryAllowanceRequest>): _147.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _147.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAllowanceResponse;
                fromJSON(object: any): _147.QueryAllowanceResponse;
                toJSON(message: _147.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_147.QueryAllowanceResponse>): _147.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _147.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAllowancesRequest;
                fromJSON(object: any): _147.QueryAllowancesRequest;
                toJSON(message: _147.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_147.QueryAllowancesRequest>): _147.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _147.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAllowancesResponse;
                fromJSON(object: any): _147.QueryAllowancesResponse;
                toJSON(message: _147.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_147.QueryAllowancesResponse>): _147.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _147.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _147.QueryAllowancesByGranterRequest;
                toJSON(message: _147.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_147.QueryAllowancesByGranterRequest>): _147.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _147.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _147.QueryAllowancesByGranterResponse;
                toJSON(message: _147.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_147.QueryAllowancesByGranterResponse>): _147.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _146.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GenesisState;
                fromJSON(object: any): _146.GenesisState;
                toJSON(message: _146.GenesisState): unknown;
                fromPartial(object: Partial<_146.GenesisState>): _146.GenesisState;
            };
            BasicAllowance: {
                encode(message: _145.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BasicAllowance;
                fromJSON(object: any): _145.BasicAllowance;
                toJSON(message: _145.BasicAllowance): unknown;
                fromPartial(object: Partial<_145.BasicAllowance>): _145.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _145.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.PeriodicAllowance;
                fromJSON(object: any): _145.PeriodicAllowance;
                toJSON(message: _145.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_145.PeriodicAllowance>): _145.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _145.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.AllowedMsgAllowance;
                fromJSON(object: any): _145.AllowedMsgAllowance;
                toJSON(message: _145.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_145.AllowedMsgAllowance>): _145.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _145.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Grant;
                fromJSON(object: any): _145.Grant;
                toJSON(message: _145.Grant): unknown;
                fromPartial(object: Partial<_145.Grant>): _145.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _149.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.GenesisState;
                fromJSON(object: any): _149.GenesisState;
                toJSON(message: _149.GenesisState): unknown;
                fromPartial(object: Partial<_149.GenesisState>): _149.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _303.MsgClientImpl;
            QueryClientImpl: typeof _287.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _152.QueryProposalRequest): Promise<_152.QueryProposalResponse>;
                proposals(request: _152.QueryProposalsRequest): Promise<_152.QueryProposalsResponse>;
                vote(request: _152.QueryVoteRequest): Promise<_152.QueryVoteResponse>;
                votes(request: _152.QueryVotesRequest): Promise<_152.QueryVotesResponse>;
                params(request: _152.QueryParamsRequest): Promise<_152.QueryParamsResponse>;
                deposit(request: _152.QueryDepositRequest): Promise<_152.QueryDepositResponse>;
                deposits(request: _152.QueryDepositsRequest): Promise<_152.QueryDepositsResponse>;
                tallyResult(request: _152.QueryTallyResultRequest): Promise<_152.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _153.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _153.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _153.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _153.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _153.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _153.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _153.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _153.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _153.MsgExecLegacyContent;
                    };
                    vote(value: _153.MsgVote): {
                        typeUrl: string;
                        value: _153.MsgVote;
                    };
                    voteWeighted(value: _153.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _153.MsgVoteWeighted;
                    };
                    deposit(value: _153.MsgDeposit): {
                        typeUrl: string;
                        value: _153.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _153.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _153.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _153.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _153.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _153.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _153.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _153.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _153.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _153.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _153.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _153.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _153.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _153.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _153.MsgExecLegacyContent;
                    };
                    vote(value: _153.MsgVote): {
                        typeUrl: string;
                        value: _153.MsgVote;
                    };
                    voteWeighted(value: _153.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _153.MsgVoteWeighted;
                    };
                    deposit(value: _153.MsgDeposit): {
                        typeUrl: string;
                        value: _153.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _153.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _153.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _153.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _153.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _153.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _153.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _153.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _153.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _153.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _153.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _153.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgSubmitProposal;
                fromJSON(object: any): _153.MsgSubmitProposal;
                toJSON(message: _153.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_153.MsgSubmitProposal>): _153.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _153.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgSubmitProposalResponse;
                fromJSON(object: any): _153.MsgSubmitProposalResponse;
                toJSON(message: _153.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_153.MsgSubmitProposalResponse>): _153.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _153.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgExecLegacyContent;
                fromJSON(object: any): _153.MsgExecLegacyContent;
                toJSON(message: _153.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_153.MsgExecLegacyContent>): _153.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _153.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgExecLegacyContentResponse;
                fromJSON(_: any): _153.MsgExecLegacyContentResponse;
                toJSON(_: _153.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_153.MsgExecLegacyContentResponse>): _153.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _153.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgVote;
                fromJSON(object: any): _153.MsgVote;
                toJSON(message: _153.MsgVote): unknown;
                fromPartial(object: Partial<_153.MsgVote>): _153.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _153.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgVoteResponse;
                fromJSON(_: any): _153.MsgVoteResponse;
                toJSON(_: _153.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_153.MsgVoteResponse>): _153.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _153.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgVoteWeighted;
                fromJSON(object: any): _153.MsgVoteWeighted;
                toJSON(message: _153.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_153.MsgVoteWeighted>): _153.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _153.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgVoteWeightedResponse;
                fromJSON(_: any): _153.MsgVoteWeightedResponse;
                toJSON(_: _153.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_153.MsgVoteWeightedResponse>): _153.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _153.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeposit;
                fromJSON(object: any): _153.MsgDeposit;
                toJSON(message: _153.MsgDeposit): unknown;
                fromPartial(object: Partial<_153.MsgDeposit>): _153.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _153.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDepositResponse;
                fromJSON(_: any): _153.MsgDepositResponse;
                toJSON(_: _153.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_153.MsgDepositResponse>): _153.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _152.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryProposalRequest;
                fromJSON(object: any): _152.QueryProposalRequest;
                toJSON(message: _152.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_152.QueryProposalRequest>): _152.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _152.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryProposalResponse;
                fromJSON(object: any): _152.QueryProposalResponse;
                toJSON(message: _152.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_152.QueryProposalResponse>): _152.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _152.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryProposalsRequest;
                fromJSON(object: any): _152.QueryProposalsRequest;
                toJSON(message: _152.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_152.QueryProposalsRequest>): _152.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _152.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryProposalsResponse;
                fromJSON(object: any): _152.QueryProposalsResponse;
                toJSON(message: _152.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_152.QueryProposalsResponse>): _152.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _152.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryVoteRequest;
                fromJSON(object: any): _152.QueryVoteRequest;
                toJSON(message: _152.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_152.QueryVoteRequest>): _152.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _152.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryVoteResponse;
                fromJSON(object: any): _152.QueryVoteResponse;
                toJSON(message: _152.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_152.QueryVoteResponse>): _152.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _152.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryVotesRequest;
                fromJSON(object: any): _152.QueryVotesRequest;
                toJSON(message: _152.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_152.QueryVotesRequest>): _152.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _152.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryVotesResponse;
                fromJSON(object: any): _152.QueryVotesResponse;
                toJSON(message: _152.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_152.QueryVotesResponse>): _152.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _152.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsRequest;
                fromJSON(object: any): _152.QueryParamsRequest;
                toJSON(message: _152.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_152.QueryParamsRequest>): _152.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _152.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsResponse;
                fromJSON(object: any): _152.QueryParamsResponse;
                toJSON(message: _152.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_152.QueryParamsResponse>): _152.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _152.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryDepositRequest;
                fromJSON(object: any): _152.QueryDepositRequest;
                toJSON(message: _152.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_152.QueryDepositRequest>): _152.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _152.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryDepositResponse;
                fromJSON(object: any): _152.QueryDepositResponse;
                toJSON(message: _152.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_152.QueryDepositResponse>): _152.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _152.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryDepositsRequest;
                fromJSON(object: any): _152.QueryDepositsRequest;
                toJSON(message: _152.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_152.QueryDepositsRequest>): _152.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _152.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryDepositsResponse;
                fromJSON(object: any): _152.QueryDepositsResponse;
                toJSON(message: _152.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_152.QueryDepositsResponse>): _152.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _152.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryTallyResultRequest;
                fromJSON(object: any): _152.QueryTallyResultRequest;
                toJSON(message: _152.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_152.QueryTallyResultRequest>): _152.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _152.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryTallyResultResponse;
                fromJSON(object: any): _152.QueryTallyResultResponse;
                toJSON(message: _152.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_152.QueryTallyResultResponse>): _152.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _151.VoteOption;
            voteOptionToJSON(object: _151.VoteOption): string;
            proposalStatusFromJSON(object: any): _151.ProposalStatus;
            proposalStatusToJSON(object: _151.ProposalStatus): string;
            VoteOption: typeof _151.VoteOption;
            VoteOptionSDKType: typeof _151.VoteOption;
            ProposalStatus: typeof _151.ProposalStatus;
            ProposalStatusSDKType: typeof _151.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _151.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.WeightedVoteOption;
                fromJSON(object: any): _151.WeightedVoteOption;
                toJSON(message: _151.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_151.WeightedVoteOption>): _151.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _151.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Deposit;
                fromJSON(object: any): _151.Deposit;
                toJSON(message: _151.Deposit): unknown;
                fromPartial(object: Partial<_151.Deposit>): _151.Deposit;
            };
            Proposal: {
                encode(message: _151.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Proposal;
                fromJSON(object: any): _151.Proposal;
                toJSON(message: _151.Proposal): unknown;
                fromPartial(object: Partial<_151.Proposal>): _151.Proposal;
            };
            TallyResult: {
                encode(message: _151.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.TallyResult;
                fromJSON(object: any): _151.TallyResult;
                toJSON(message: _151.TallyResult): unknown;
                fromPartial(object: Partial<_151.TallyResult>): _151.TallyResult;
            };
            Vote: {
                encode(message: _151.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Vote;
                fromJSON(object: any): _151.Vote;
                toJSON(message: _151.Vote): unknown;
                fromPartial(object: Partial<_151.Vote>): _151.Vote;
            };
            DepositParams: {
                encode(message: _151.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.DepositParams;
                fromJSON(object: any): _151.DepositParams;
                toJSON(message: _151.DepositParams): unknown;
                fromPartial(object: Partial<_151.DepositParams>): _151.DepositParams;
            };
            VotingParams: {
                encode(message: _151.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.VotingParams;
                fromJSON(object: any): _151.VotingParams;
                toJSON(message: _151.VotingParams): unknown;
                fromPartial(object: Partial<_151.VotingParams>): _151.VotingParams;
            };
            TallyParams: {
                encode(message: _151.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.TallyParams;
                fromJSON(object: any): _151.TallyParams;
                toJSON(message: _151.TallyParams): unknown;
                fromPartial(object: Partial<_151.TallyParams>): _151.TallyParams;
            };
            GenesisState: {
                encode(message: _150.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisState;
                fromJSON(object: any): _150.GenesisState;
                toJSON(message: _150.GenesisState): unknown;
                fromPartial(object: Partial<_150.GenesisState>): _150.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _304.MsgClientImpl;
            QueryClientImpl: typeof _288.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _156.QueryProposalRequest): Promise<_156.QueryProposalResponse>;
                proposals(request: _156.QueryProposalsRequest): Promise<_156.QueryProposalsResponse>;
                vote(request: _156.QueryVoteRequest): Promise<_156.QueryVoteResponse>;
                votes(request: _156.QueryVotesRequest): Promise<_156.QueryVotesResponse>;
                params(request: _156.QueryParamsRequest): Promise<_156.QueryParamsResponse>;
                deposit(request: _156.QueryDepositRequest): Promise<_156.QueryDepositResponse>;
                deposits(request: _156.QueryDepositsRequest): Promise<_156.QueryDepositsResponse>;
                tallyResult(request: _156.QueryTallyResultRequest): Promise<_156.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _157.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _157.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _157.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _157.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _157.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _157.MsgSubmitProposal;
                    };
                    vote(value: _157.MsgVote): {
                        typeUrl: string;
                        value: _157.MsgVote;
                    };
                    voteWeighted(value: _157.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _157.MsgVoteWeighted;
                    };
                    deposit(value: _157.MsgDeposit): {
                        typeUrl: string;
                        value: _157.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _157.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _157.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _157.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _157.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _157.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _157.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _157.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _157.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _157.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _157.MsgSubmitProposal;
                    };
                    vote(value: _157.MsgVote): {
                        typeUrl: string;
                        value: _157.MsgVote;
                    };
                    voteWeighted(value: _157.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _157.MsgVoteWeighted;
                    };
                    deposit(value: _157.MsgDeposit): {
                        typeUrl: string;
                        value: _157.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _157.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _157.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _157.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _157.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _157.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _157.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _157.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _157.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _157.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgSubmitProposal;
                fromJSON(object: any): _157.MsgSubmitProposal;
                toJSON(message: _157.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_157.MsgSubmitProposal>): _157.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _157.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgSubmitProposalResponse;
                fromJSON(object: any): _157.MsgSubmitProposalResponse;
                toJSON(message: _157.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_157.MsgSubmitProposalResponse>): _157.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _157.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgVote;
                fromJSON(object: any): _157.MsgVote;
                toJSON(message: _157.MsgVote): unknown;
                fromPartial(object: Partial<_157.MsgVote>): _157.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _157.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgVoteResponse;
                fromJSON(_: any): _157.MsgVoteResponse;
                toJSON(_: _157.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_157.MsgVoteResponse>): _157.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _157.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgVoteWeighted;
                fromJSON(object: any): _157.MsgVoteWeighted;
                toJSON(message: _157.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_157.MsgVoteWeighted>): _157.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _157.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgVoteWeightedResponse;
                fromJSON(_: any): _157.MsgVoteWeightedResponse;
                toJSON(_: _157.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_157.MsgVoteWeightedResponse>): _157.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _157.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgDeposit;
                fromJSON(object: any): _157.MsgDeposit;
                toJSON(message: _157.MsgDeposit): unknown;
                fromPartial(object: Partial<_157.MsgDeposit>): _157.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _157.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgDepositResponse;
                fromJSON(_: any): _157.MsgDepositResponse;
                toJSON(_: _157.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_157.MsgDepositResponse>): _157.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _156.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryProposalRequest;
                fromJSON(object: any): _156.QueryProposalRequest;
                toJSON(message: _156.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_156.QueryProposalRequest>): _156.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _156.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryProposalResponse;
                fromJSON(object: any): _156.QueryProposalResponse;
                toJSON(message: _156.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_156.QueryProposalResponse>): _156.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _156.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryProposalsRequest;
                fromJSON(object: any): _156.QueryProposalsRequest;
                toJSON(message: _156.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_156.QueryProposalsRequest>): _156.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _156.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryProposalsResponse;
                fromJSON(object: any): _156.QueryProposalsResponse;
                toJSON(message: _156.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_156.QueryProposalsResponse>): _156.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _156.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryVoteRequest;
                fromJSON(object: any): _156.QueryVoteRequest;
                toJSON(message: _156.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_156.QueryVoteRequest>): _156.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _156.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryVoteResponse;
                fromJSON(object: any): _156.QueryVoteResponse;
                toJSON(message: _156.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_156.QueryVoteResponse>): _156.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _156.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryVotesRequest;
                fromJSON(object: any): _156.QueryVotesRequest;
                toJSON(message: _156.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_156.QueryVotesRequest>): _156.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _156.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryVotesResponse;
                fromJSON(object: any): _156.QueryVotesResponse;
                toJSON(message: _156.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_156.QueryVotesResponse>): _156.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _156.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsRequest;
                fromJSON(object: any): _156.QueryParamsRequest;
                toJSON(message: _156.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_156.QueryParamsRequest>): _156.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _156.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsResponse;
                fromJSON(object: any): _156.QueryParamsResponse;
                toJSON(message: _156.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_156.QueryParamsResponse>): _156.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _156.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDepositRequest;
                fromJSON(object: any): _156.QueryDepositRequest;
                toJSON(message: _156.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_156.QueryDepositRequest>): _156.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _156.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDepositResponse;
                fromJSON(object: any): _156.QueryDepositResponse;
                toJSON(message: _156.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_156.QueryDepositResponse>): _156.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _156.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDepositsRequest;
                fromJSON(object: any): _156.QueryDepositsRequest;
                toJSON(message: _156.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_156.QueryDepositsRequest>): _156.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _156.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDepositsResponse;
                fromJSON(object: any): _156.QueryDepositsResponse;
                toJSON(message: _156.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_156.QueryDepositsResponse>): _156.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _156.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryTallyResultRequest;
                fromJSON(object: any): _156.QueryTallyResultRequest;
                toJSON(message: _156.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_156.QueryTallyResultRequest>): _156.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _156.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryTallyResultResponse;
                fromJSON(object: any): _156.QueryTallyResultResponse;
                toJSON(message: _156.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_156.QueryTallyResultResponse>): _156.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _155.VoteOption;
            voteOptionToJSON(object: _155.VoteOption): string;
            proposalStatusFromJSON(object: any): _155.ProposalStatus;
            proposalStatusToJSON(object: _155.ProposalStatus): string;
            VoteOption: typeof _155.VoteOption;
            VoteOptionSDKType: typeof _155.VoteOption;
            ProposalStatus: typeof _155.ProposalStatus;
            ProposalStatusSDKType: typeof _155.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _155.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.WeightedVoteOption;
                fromJSON(object: any): _155.WeightedVoteOption;
                toJSON(message: _155.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_155.WeightedVoteOption>): _155.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _155.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.TextProposal;
                fromJSON(object: any): _155.TextProposal;
                toJSON(message: _155.TextProposal): unknown;
                fromPartial(object: Partial<_155.TextProposal>): _155.TextProposal;
            };
            Deposit: {
                encode(message: _155.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Deposit;
                fromJSON(object: any): _155.Deposit;
                toJSON(message: _155.Deposit): unknown;
                fromPartial(object: Partial<_155.Deposit>): _155.Deposit;
            };
            Proposal: {
                encode(message: _155.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Proposal;
                fromJSON(object: any): _155.Proposal;
                toJSON(message: _155.Proposal): unknown;
                fromPartial(object: Partial<_155.Proposal>): _155.Proposal;
            };
            TallyResult: {
                encode(message: _155.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.TallyResult;
                fromJSON(object: any): _155.TallyResult;
                toJSON(message: _155.TallyResult): unknown;
                fromPartial(object: Partial<_155.TallyResult>): _155.TallyResult;
            };
            Vote: {
                encode(message: _155.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Vote;
                fromJSON(object: any): _155.Vote;
                toJSON(message: _155.Vote): unknown;
                fromPartial(object: Partial<_155.Vote>): _155.Vote;
            };
            DepositParams: {
                encode(message: _155.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.DepositParams;
                fromJSON(object: any): _155.DepositParams;
                toJSON(message: _155.DepositParams): unknown;
                fromPartial(object: Partial<_155.DepositParams>): _155.DepositParams;
            };
            VotingParams: {
                encode(message: _155.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.VotingParams;
                fromJSON(object: any): _155.VotingParams;
                toJSON(message: _155.VotingParams): unknown;
                fromPartial(object: Partial<_155.VotingParams>): _155.VotingParams;
            };
            TallyParams: {
                encode(message: _155.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.TallyParams;
                fromJSON(object: any): _155.TallyParams;
                toJSON(message: _155.TallyParams): unknown;
                fromPartial(object: Partial<_155.TallyParams>): _155.TallyParams;
            };
            GenesisState: {
                encode(message: _154.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.GenesisState;
                fromJSON(object: any): _154.GenesisState;
                toJSON(message: _154.GenesisState): unknown;
                fromPartial(object: Partial<_154.GenesisState>): _154.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _305.MsgClientImpl;
            QueryClientImpl: typeof _289.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _160.QueryGroupInfoRequest): Promise<_160.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _160.QueryGroupPolicyInfoRequest): Promise<_160.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _160.QueryGroupMembersRequest): Promise<_160.QueryGroupMembersResponse>;
                groupsByAdmin(request: _160.QueryGroupsByAdminRequest): Promise<_160.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _160.QueryGroupPoliciesByGroupRequest): Promise<_160.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _160.QueryGroupPoliciesByAdminRequest): Promise<_160.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _160.QueryProposalRequest): Promise<_160.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _160.QueryProposalsByGroupPolicyRequest): Promise<_160.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _160.QueryVoteByProposalVoterRequest): Promise<_160.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _160.QueryVotesByProposalRequest): Promise<_160.QueryVotesByProposalResponse>;
                votesByVoter(request: _160.QueryVotesByVoterRequest): Promise<_160.QueryVotesByVoterResponse>;
                groupsByMember(request: _160.QueryGroupsByMemberRequest): Promise<_160.QueryGroupsByMemberResponse>;
                tallyResult(request: _160.QueryTallyResultRequest): Promise<_160.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _161.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _161.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _161.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _161.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _161.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _161.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _161.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _161.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _161.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _161.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _161.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _161.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _161.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _161.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _161.MsgCreateGroup): {
                        typeUrl: string;
                        value: _161.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _161.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _161.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _161.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _161.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _161.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _161.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _161.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _161.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _161.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _161.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _161.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _161.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _161.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _161.MsgWithdrawProposal;
                    };
                    vote(value: _161.MsgVote): {
                        typeUrl: string;
                        value: _161.MsgVote;
                    };
                    exec(value: _161.MsgExec): {
                        typeUrl: string;
                        value: _161.MsgExec;
                    };
                    leaveGroup(value: _161.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _161.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _161.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _161.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _161.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _161.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _161.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _161.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _161.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _161.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _161.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _161.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _161.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _161.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _161.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _161.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _161.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _161.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _161.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _161.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _161.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _161.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _161.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _161.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _161.MsgCreateGroup): {
                        typeUrl: string;
                        value: _161.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _161.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _161.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _161.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _161.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _161.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _161.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _161.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _161.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _161.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _161.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _161.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _161.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _161.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _161.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _161.MsgWithdrawProposal;
                    };
                    vote(value: _161.MsgVote): {
                        typeUrl: string;
                        value: _161.MsgVote;
                    };
                    exec(value: _161.MsgExec): {
                        typeUrl: string;
                        value: _161.MsgExec;
                    };
                    leaveGroup(value: _161.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _161.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _161.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _161.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _161.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _161.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _161.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _161.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _161.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _161.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _161.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _161.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _161.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _161.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _161.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _161.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _161.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _161.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _161.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _161.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _161.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _161.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _161.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _161.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _161.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _161.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _161.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _161.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _161.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _161.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _162.VoteOption;
            voteOptionToJSON(object: _162.VoteOption): string;
            proposalStatusFromJSON(object: any): _162.ProposalStatus;
            proposalStatusToJSON(object: _162.ProposalStatus): string;
            proposalResultFromJSON(object: any): _162.ProposalResult;
            proposalResultToJSON(object: _162.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _162.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _162.ProposalExecutorResult): string;
            VoteOption: typeof _162.VoteOption;
            VoteOptionSDKType: typeof _162.VoteOption;
            ProposalStatus: typeof _162.ProposalStatus;
            ProposalStatusSDKType: typeof _162.ProposalStatus;
            ProposalResult: typeof _162.ProposalResult;
            ProposalResultSDKType: typeof _162.ProposalResult;
            ProposalExecutorResult: typeof _162.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _162.ProposalExecutorResult;
            Member: {
                encode(message: _162.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Member;
                fromJSON(object: any): _162.Member;
                toJSON(message: _162.Member): unknown;
                fromPartial(object: Partial<_162.Member>): _162.Member;
            };
            Members: {
                encode(message: _162.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Members;
                fromJSON(object: any): _162.Members;
                toJSON(message: _162.Members): unknown;
                fromPartial(object: Partial<_162.Members>): _162.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _162.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ThresholdDecisionPolicy;
                fromJSON(object: any): _162.ThresholdDecisionPolicy;
                toJSON(message: _162.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_162.ThresholdDecisionPolicy>): _162.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _162.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.PercentageDecisionPolicy;
                fromJSON(object: any): _162.PercentageDecisionPolicy;
                toJSON(message: _162.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_162.PercentageDecisionPolicy>): _162.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _162.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.DecisionPolicyWindows;
                fromJSON(object: any): _162.DecisionPolicyWindows;
                toJSON(message: _162.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_162.DecisionPolicyWindows>): _162.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _162.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GroupInfo;
                fromJSON(object: any): _162.GroupInfo;
                toJSON(message: _162.GroupInfo): unknown;
                fromPartial(object: Partial<_162.GroupInfo>): _162.GroupInfo;
            };
            GroupMember: {
                encode(message: _162.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GroupMember;
                fromJSON(object: any): _162.GroupMember;
                toJSON(message: _162.GroupMember): unknown;
                fromPartial(object: Partial<_162.GroupMember>): _162.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _162.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GroupPolicyInfo;
                fromJSON(object: any): _162.GroupPolicyInfo;
                toJSON(message: _162.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_162.GroupPolicyInfo>): _162.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _162.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Proposal;
                fromJSON(object: any): _162.Proposal;
                toJSON(message: _162.Proposal): unknown;
                fromPartial(object: Partial<_162.Proposal>): _162.Proposal;
            };
            TallyResult: {
                encode(message: _162.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.TallyResult;
                fromJSON(object: any): _162.TallyResult;
                toJSON(message: _162.TallyResult): unknown;
                fromPartial(object: Partial<_162.TallyResult>): _162.TallyResult;
            };
            Vote: {
                encode(message: _162.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Vote;
                fromJSON(object: any): _162.Vote;
                toJSON(message: _162.Vote): unknown;
                fromPartial(object: Partial<_162.Vote>): _162.Vote;
            };
            execFromJSON(object: any): _161.Exec;
            execToJSON(object: _161.Exec): string;
            Exec: typeof _161.Exec;
            ExecSDKType: typeof _161.Exec;
            MsgCreateGroup: {
                encode(message: _161.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgCreateGroup;
                fromJSON(object: any): _161.MsgCreateGroup;
                toJSON(message: _161.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_161.MsgCreateGroup>): _161.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _161.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgCreateGroupResponse;
                fromJSON(object: any): _161.MsgCreateGroupResponse;
                toJSON(message: _161.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_161.MsgCreateGroupResponse>): _161.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _161.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateGroupMembers;
                fromJSON(object: any): _161.MsgUpdateGroupMembers;
                toJSON(message: _161.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_161.MsgUpdateGroupMembers>): _161.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _161.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _161.MsgUpdateGroupMembersResponse;
                toJSON(_: _161.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_161.MsgUpdateGroupMembersResponse>): _161.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _161.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateGroupAdmin;
                fromJSON(object: any): _161.MsgUpdateGroupAdmin;
                toJSON(message: _161.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_161.MsgUpdateGroupAdmin>): _161.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _161.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _161.MsgUpdateGroupAdminResponse;
                toJSON(_: _161.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_161.MsgUpdateGroupAdminResponse>): _161.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _161.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateGroupMetadata;
                fromJSON(object: any): _161.MsgUpdateGroupMetadata;
                toJSON(message: _161.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_161.MsgUpdateGroupMetadata>): _161.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _161.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _161.MsgUpdateGroupMetadataResponse;
                toJSON(_: _161.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_161.MsgUpdateGroupMetadataResponse>): _161.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _161.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgCreateGroupPolicy;
                fromJSON(object: any): _161.MsgCreateGroupPolicy;
                toJSON(message: _161.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_161.MsgCreateGroupPolicy>): _161.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _161.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _161.MsgCreateGroupPolicyResponse;
                toJSON(message: _161.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_161.MsgCreateGroupPolicyResponse>): _161.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _161.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _161.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _161.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_161.MsgUpdateGroupPolicyAdmin>): _161.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _161.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _161.MsgCreateGroupWithPolicy;
                toJSON(message: _161.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_161.MsgCreateGroupWithPolicy>): _161.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _161.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _161.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _161.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_161.MsgCreateGroupWithPolicyResponse>): _161.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _161.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _161.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _161.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_161.MsgUpdateGroupPolicyAdminResponse>): _161.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _161.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _161.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _161.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_161.MsgUpdateGroupPolicyDecisionPolicy>): _161.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _161.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _161.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _161.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_161.MsgUpdateGroupPolicyDecisionPolicyResponse>): _161.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _161.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _161.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _161.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_161.MsgUpdateGroupPolicyMetadata>): _161.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _161.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _161.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _161.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_161.MsgUpdateGroupPolicyMetadataResponse>): _161.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _161.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgSubmitProposal;
                fromJSON(object: any): _161.MsgSubmitProposal;
                toJSON(message: _161.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_161.MsgSubmitProposal>): _161.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _161.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgSubmitProposalResponse;
                fromJSON(object: any): _161.MsgSubmitProposalResponse;
                toJSON(message: _161.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_161.MsgSubmitProposalResponse>): _161.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _161.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgWithdrawProposal;
                fromJSON(object: any): _161.MsgWithdrawProposal;
                toJSON(message: _161.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_161.MsgWithdrawProposal>): _161.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _161.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgWithdrawProposalResponse;
                fromJSON(_: any): _161.MsgWithdrawProposalResponse;
                toJSON(_: _161.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_161.MsgWithdrawProposalResponse>): _161.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _161.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgVote;
                fromJSON(object: any): _161.MsgVote;
                toJSON(message: _161.MsgVote): unknown;
                fromPartial(object: Partial<_161.MsgVote>): _161.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _161.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgVoteResponse;
                fromJSON(_: any): _161.MsgVoteResponse;
                toJSON(_: _161.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_161.MsgVoteResponse>): _161.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _161.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgExec;
                fromJSON(object: any): _161.MsgExec;
                toJSON(message: _161.MsgExec): unknown;
                fromPartial(object: Partial<_161.MsgExec>): _161.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _161.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgExecResponse;
                fromJSON(_: any): _161.MsgExecResponse;
                toJSON(_: _161.MsgExecResponse): unknown;
                fromPartial(_: Partial<_161.MsgExecResponse>): _161.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _161.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgLeaveGroup;
                fromJSON(object: any): _161.MsgLeaveGroup;
                toJSON(message: _161.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_161.MsgLeaveGroup>): _161.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _161.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgLeaveGroupResponse;
                fromJSON(_: any): _161.MsgLeaveGroupResponse;
                toJSON(_: _161.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_161.MsgLeaveGroupResponse>): _161.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _160.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupInfoRequest;
                fromJSON(object: any): _160.QueryGroupInfoRequest;
                toJSON(message: _160.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_160.QueryGroupInfoRequest>): _160.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _160.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupInfoResponse;
                fromJSON(object: any): _160.QueryGroupInfoResponse;
                toJSON(message: _160.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_160.QueryGroupInfoResponse>): _160.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _160.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _160.QueryGroupPolicyInfoRequest;
                toJSON(message: _160.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_160.QueryGroupPolicyInfoRequest>): _160.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _160.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _160.QueryGroupPolicyInfoResponse;
                toJSON(message: _160.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_160.QueryGroupPolicyInfoResponse>): _160.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _160.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupMembersRequest;
                fromJSON(object: any): _160.QueryGroupMembersRequest;
                toJSON(message: _160.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_160.QueryGroupMembersRequest>): _160.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _160.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupMembersResponse;
                fromJSON(object: any): _160.QueryGroupMembersResponse;
                toJSON(message: _160.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_160.QueryGroupMembersResponse>): _160.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _160.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupsByAdminRequest;
                fromJSON(object: any): _160.QueryGroupsByAdminRequest;
                toJSON(message: _160.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_160.QueryGroupsByAdminRequest>): _160.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _160.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupsByAdminResponse;
                fromJSON(object: any): _160.QueryGroupsByAdminResponse;
                toJSON(message: _160.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_160.QueryGroupsByAdminResponse>): _160.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _160.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _160.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _160.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_160.QueryGroupPoliciesByGroupRequest>): _160.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _160.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _160.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _160.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_160.QueryGroupPoliciesByGroupResponse>): _160.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _160.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _160.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _160.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_160.QueryGroupPoliciesByAdminRequest>): _160.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _160.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _160.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _160.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_160.QueryGroupPoliciesByAdminResponse>): _160.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _160.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryProposalRequest;
                fromJSON(object: any): _160.QueryProposalRequest;
                toJSON(message: _160.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_160.QueryProposalRequest>): _160.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _160.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryProposalResponse;
                fromJSON(object: any): _160.QueryProposalResponse;
                toJSON(message: _160.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_160.QueryProposalResponse>): _160.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _160.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _160.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _160.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_160.QueryProposalsByGroupPolicyRequest>): _160.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _160.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _160.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _160.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_160.QueryProposalsByGroupPolicyResponse>): _160.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _160.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _160.QueryVoteByProposalVoterRequest;
                toJSON(message: _160.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_160.QueryVoteByProposalVoterRequest>): _160.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _160.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _160.QueryVoteByProposalVoterResponse;
                toJSON(message: _160.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_160.QueryVoteByProposalVoterResponse>): _160.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _160.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryVotesByProposalRequest;
                fromJSON(object: any): _160.QueryVotesByProposalRequest;
                toJSON(message: _160.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_160.QueryVotesByProposalRequest>): _160.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _160.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryVotesByProposalResponse;
                fromJSON(object: any): _160.QueryVotesByProposalResponse;
                toJSON(message: _160.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_160.QueryVotesByProposalResponse>): _160.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _160.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryVotesByVoterRequest;
                fromJSON(object: any): _160.QueryVotesByVoterRequest;
                toJSON(message: _160.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_160.QueryVotesByVoterRequest>): _160.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _160.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryVotesByVoterResponse;
                fromJSON(object: any): _160.QueryVotesByVoterResponse;
                toJSON(message: _160.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_160.QueryVotesByVoterResponse>): _160.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _160.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupsByMemberRequest;
                fromJSON(object: any): _160.QueryGroupsByMemberRequest;
                toJSON(message: _160.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_160.QueryGroupsByMemberRequest>): _160.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _160.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryGroupsByMemberResponse;
                fromJSON(object: any): _160.QueryGroupsByMemberResponse;
                toJSON(message: _160.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_160.QueryGroupsByMemberResponse>): _160.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _160.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryTallyResultRequest;
                fromJSON(object: any): _160.QueryTallyResultRequest;
                toJSON(message: _160.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_160.QueryTallyResultRequest>): _160.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _160.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryTallyResultResponse;
                fromJSON(object: any): _160.QueryTallyResultResponse;
                toJSON(message: _160.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_160.QueryTallyResultResponse>): _160.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _159.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.GenesisState;
                fromJSON(object: any): _159.GenesisState;
                toJSON(message: _159.GenesisState): unknown;
                fromPartial(object: Partial<_159.GenesisState>): _159.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _158.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EventCreateGroup;
                fromJSON(object: any): _158.EventCreateGroup;
                toJSON(message: _158.EventCreateGroup): unknown;
                fromPartial(object: Partial<_158.EventCreateGroup>): _158.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _158.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EventUpdateGroup;
                fromJSON(object: any): _158.EventUpdateGroup;
                toJSON(message: _158.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_158.EventUpdateGroup>): _158.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _158.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EventCreateGroupPolicy;
                fromJSON(object: any): _158.EventCreateGroupPolicy;
                toJSON(message: _158.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_158.EventCreateGroupPolicy>): _158.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _158.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EventUpdateGroupPolicy;
                fromJSON(object: any): _158.EventUpdateGroupPolicy;
                toJSON(message: _158.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_158.EventUpdateGroupPolicy>): _158.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _158.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EventSubmitProposal;
                fromJSON(object: any): _158.EventSubmitProposal;
                toJSON(message: _158.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_158.EventSubmitProposal>): _158.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _158.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EventWithdrawProposal;
                fromJSON(object: any): _158.EventWithdrawProposal;
                toJSON(message: _158.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_158.EventWithdrawProposal>): _158.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _158.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EventVote;
                fromJSON(object: any): _158.EventVote;
                toJSON(message: _158.EventVote): unknown;
                fromPartial(object: Partial<_158.EventVote>): _158.EventVote;
            };
            EventExec: {
                encode(message: _158.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EventExec;
                fromJSON(object: any): _158.EventExec;
                toJSON(message: _158.EventExec): unknown;
                fromPartial(object: Partial<_158.EventExec>): _158.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _158.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.EventLeaveGroup;
                fromJSON(object: any): _158.EventLeaveGroup;
                toJSON(message: _158.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_158.EventLeaveGroup>): _158.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _290.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                inflation(request?: _165.QueryInflationRequest): Promise<_165.QueryInflationResponse>;
                annualProvisions(request?: _165.QueryAnnualProvisionsRequest): Promise<_165.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _165.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryParamsRequest;
                fromJSON(_: any): _165.QueryParamsRequest;
                toJSON(_: _165.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_165.QueryParamsRequest>): _165.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _165.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryParamsResponse;
                fromJSON(object: any): _165.QueryParamsResponse;
                toJSON(message: _165.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_165.QueryParamsResponse>): _165.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _165.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryInflationRequest;
                fromJSON(_: any): _165.QueryInflationRequest;
                toJSON(_: _165.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_165.QueryInflationRequest>): _165.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _165.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryInflationResponse;
                fromJSON(object: any): _165.QueryInflationResponse;
                toJSON(message: _165.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_165.QueryInflationResponse>): _165.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _165.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _165.QueryAnnualProvisionsRequest;
                toJSON(_: _165.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_165.QueryAnnualProvisionsRequest>): _165.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _165.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _165.QueryAnnualProvisionsResponse;
                toJSON(message: _165.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_165.QueryAnnualProvisionsResponse>): _165.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _164.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Minter;
                fromJSON(object: any): _164.Minter;
                toJSON(message: _164.Minter): unknown;
                fromPartial(object: Partial<_164.Minter>): _164.Minter;
            };
            Params: {
                encode(message: _164.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Params;
                fromJSON(object: any): _164.Params;
                toJSON(message: _164.Params): unknown;
                fromPartial(object: Partial<_164.Params>): _164.Params;
            };
            GenesisState: {
                encode(message: _163.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.GenesisState;
                fromJSON(object: any): _163.GenesisState;
                toJSON(message: _163.GenesisState): unknown;
                fromPartial(object: Partial<_163.GenesisState>): _163.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _306.MsgClientImpl;
            QueryClientImpl: typeof _291.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _170.QueryBalanceRequest): Promise<_170.QueryBalanceResponse>;
                owner(request: _170.QueryOwnerRequest): Promise<_170.QueryOwnerResponse>;
                supply(request: _170.QuerySupplyRequest): Promise<_170.QuerySupplyResponse>;
                nFTs(request: _170.QueryNFTsRequest): Promise<_170.QueryNFTsResponse>;
                nFT(request: _170.QueryNFTRequest): Promise<_170.QueryNFTResponse>;
                class(request: _170.QueryClassRequest): Promise<_170.QueryClassResponse>;
                classes(request?: _170.QueryClassesRequest): Promise<_170.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _171.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _171.MsgSend): {
                        typeUrl: string;
                        value: _171.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _171.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _171.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _171.MsgSend): {
                        typeUrl: string;
                        value: _171.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _171.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _171.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _171.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgSend;
                fromJSON(object: any): _171.MsgSend;
                toJSON(message: _171.MsgSend): unknown;
                fromPartial(object: Partial<_171.MsgSend>): _171.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _171.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgSendResponse;
                fromJSON(_: any): _171.MsgSendResponse;
                toJSON(_: _171.MsgSendResponse): unknown;
                fromPartial(_: Partial<_171.MsgSendResponse>): _171.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _170.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryBalanceRequest;
                fromJSON(object: any): _170.QueryBalanceRequest;
                toJSON(message: _170.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_170.QueryBalanceRequest>): _170.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _170.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryBalanceResponse;
                fromJSON(object: any): _170.QueryBalanceResponse;
                toJSON(message: _170.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_170.QueryBalanceResponse>): _170.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _170.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryOwnerRequest;
                fromJSON(object: any): _170.QueryOwnerRequest;
                toJSON(message: _170.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_170.QueryOwnerRequest>): _170.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _170.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryOwnerResponse;
                fromJSON(object: any): _170.QueryOwnerResponse;
                toJSON(message: _170.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_170.QueryOwnerResponse>): _170.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _170.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QuerySupplyRequest;
                fromJSON(object: any): _170.QuerySupplyRequest;
                toJSON(message: _170.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_170.QuerySupplyRequest>): _170.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _170.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QuerySupplyResponse;
                fromJSON(object: any): _170.QuerySupplyResponse;
                toJSON(message: _170.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_170.QuerySupplyResponse>): _170.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _170.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryNFTsRequest;
                fromJSON(object: any): _170.QueryNFTsRequest;
                toJSON(message: _170.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_170.QueryNFTsRequest>): _170.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _170.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryNFTsResponse;
                fromJSON(object: any): _170.QueryNFTsResponse;
                toJSON(message: _170.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_170.QueryNFTsResponse>): _170.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _170.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryNFTRequest;
                fromJSON(object: any): _170.QueryNFTRequest;
                toJSON(message: _170.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_170.QueryNFTRequest>): _170.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _170.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryNFTResponse;
                fromJSON(object: any): _170.QueryNFTResponse;
                toJSON(message: _170.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_170.QueryNFTResponse>): _170.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _170.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryClassRequest;
                fromJSON(object: any): _170.QueryClassRequest;
                toJSON(message: _170.QueryClassRequest): unknown;
                fromPartial(object: Partial<_170.QueryClassRequest>): _170.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _170.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryClassResponse;
                fromJSON(object: any): _170.QueryClassResponse;
                toJSON(message: _170.QueryClassResponse): unknown;
                fromPartial(object: Partial<_170.QueryClassResponse>): _170.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _170.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryClassesRequest;
                fromJSON(object: any): _170.QueryClassesRequest;
                toJSON(message: _170.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_170.QueryClassesRequest>): _170.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _170.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryClassesResponse;
                fromJSON(object: any): _170.QueryClassesResponse;
                toJSON(message: _170.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_170.QueryClassesResponse>): _170.QueryClassesResponse;
            };
            Class: {
                encode(message: _169.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Class;
                fromJSON(object: any): _169.Class;
                toJSON(message: _169.Class): unknown;
                fromPartial(object: Partial<_169.Class>): _169.Class;
            };
            NFT: {
                encode(message: _169.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.NFT;
                fromJSON(object: any): _169.NFT;
                toJSON(message: _169.NFT): unknown;
                fromPartial(object: Partial<_169.NFT>): _169.NFT;
            };
            GenesisState: {
                encode(message: _168.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.GenesisState;
                fromJSON(object: any): _168.GenesisState;
                toJSON(message: _168.GenesisState): unknown;
                fromPartial(object: Partial<_168.GenesisState>): _168.GenesisState;
            };
            Entry: {
                encode(message: _168.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Entry;
                fromJSON(object: any): _168.Entry;
                toJSON(message: _168.Entry): unknown;
                fromPartial(object: Partial<_168.Entry>): _168.Entry;
            };
            EventSend: {
                encode(message: _167.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.EventSend;
                fromJSON(object: any): _167.EventSend;
                toJSON(message: _167.EventSend): unknown;
                fromPartial(object: Partial<_167.EventSend>): _167.EventSend;
            };
            EventMint: {
                encode(message: _167.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.EventMint;
                fromJSON(object: any): _167.EventMint;
                toJSON(message: _167.EventMint): unknown;
                fromPartial(object: Partial<_167.EventMint>): _167.EventMint;
            };
            EventBurn: {
                encode(message: _167.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.EventBurn;
                fromJSON(object: any): _167.EventBurn;
                toJSON(message: _167.EventBurn): unknown;
                fromPartial(object: Partial<_167.EventBurn>): _167.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _172.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.TableDescriptor;
                fromJSON(object: any): _172.TableDescriptor;
                toJSON(message: _172.TableDescriptor): unknown;
                fromPartial(object: Partial<_172.TableDescriptor>): _172.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _172.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.PrimaryKeyDescriptor;
                fromJSON(object: any): _172.PrimaryKeyDescriptor;
                toJSON(message: _172.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_172.PrimaryKeyDescriptor>): _172.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _172.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.SecondaryIndexDescriptor;
                fromJSON(object: any): _172.SecondaryIndexDescriptor;
                toJSON(message: _172.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_172.SecondaryIndexDescriptor>): _172.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _172.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.SingletonDescriptor;
                fromJSON(object: any): _172.SingletonDescriptor;
                toJSON(message: _172.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_172.SingletonDescriptor>): _172.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _173.StorageType;
            storageTypeToJSON(object: _173.StorageType): string;
            StorageType: typeof _173.StorageType;
            StorageTypeSDKType: typeof _173.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _173.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ModuleSchemaDescriptor;
                fromJSON(object: any): _173.ModuleSchemaDescriptor;
                toJSON(message: _173.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_173.ModuleSchemaDescriptor>): _173.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _173.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _173.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _173.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_173.ModuleSchemaDescriptor_FileEntry>): _173.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _292.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _175.QueryParamsRequest): Promise<_175.QueryParamsResponse>;
                subspaces(request?: _175.QuerySubspacesRequest): Promise<_175.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _175.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryParamsRequest;
                fromJSON(object: any): _175.QueryParamsRequest;
                toJSON(message: _175.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_175.QueryParamsRequest>): _175.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _175.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryParamsResponse;
                fromJSON(object: any): _175.QueryParamsResponse;
                toJSON(message: _175.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_175.QueryParamsResponse>): _175.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _175.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QuerySubspacesRequest;
                fromJSON(_: any): _175.QuerySubspacesRequest;
                toJSON(_: _175.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_175.QuerySubspacesRequest>): _175.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _175.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QuerySubspacesResponse;
                fromJSON(object: any): _175.QuerySubspacesResponse;
                toJSON(message: _175.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_175.QuerySubspacesResponse>): _175.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _175.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Subspace;
                fromJSON(object: any): _175.Subspace;
                toJSON(message: _175.Subspace): unknown;
                fromPartial(object: Partial<_175.Subspace>): _175.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _174.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ParameterChangeProposal;
                fromJSON(object: any): _174.ParameterChangeProposal;
                toJSON(message: _174.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_174.ParameterChangeProposal>): _174.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _174.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ParamChange;
                fromJSON(object: any): _174.ParamChange;
                toJSON(message: _174.ParamChange): unknown;
                fromPartial(object: Partial<_174.ParamChange>): _174.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _307.MsgClientImpl;
            QueryClientImpl: typeof _293.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _177.QueryParamsRequest): Promise<_177.QueryParamsResponse>;
                signingInfo(request: _177.QuerySigningInfoRequest): Promise<_177.QuerySigningInfoResponse>;
                signingInfos(request?: _177.QuerySigningInfosRequest): Promise<_177.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _179.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _179.MsgUnjail): {
                        typeUrl: string;
                        value: _179.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _179.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _179.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _179.MsgUnjail): {
                        typeUrl: string;
                        value: _179.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _179.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _179.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _179.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgUnjail;
                fromJSON(object: any): _179.MsgUnjail;
                toJSON(message: _179.MsgUnjail): unknown;
                fromPartial(object: Partial<_179.MsgUnjail>): _179.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _179.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgUnjailResponse;
                fromJSON(_: any): _179.MsgUnjailResponse;
                toJSON(_: _179.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_179.MsgUnjailResponse>): _179.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _178.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ValidatorSigningInfo;
                fromJSON(object: any): _178.ValidatorSigningInfo;
                toJSON(message: _178.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_178.ValidatorSigningInfo>): _178.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _178.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Params;
                fromJSON(object: any): _178.Params;
                toJSON(message: _178.Params): unknown;
                fromPartial(object: Partial<_178.Params>): _178.Params;
            };
            QueryParamsRequest: {
                encode(_: _177.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryParamsRequest;
                fromJSON(_: any): _177.QueryParamsRequest;
                toJSON(_: _177.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_177.QueryParamsRequest>): _177.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _177.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryParamsResponse;
                fromJSON(object: any): _177.QueryParamsResponse;
                toJSON(message: _177.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_177.QueryParamsResponse>): _177.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _177.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QuerySigningInfoRequest;
                fromJSON(object: any): _177.QuerySigningInfoRequest;
                toJSON(message: _177.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_177.QuerySigningInfoRequest>): _177.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _177.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QuerySigningInfoResponse;
                fromJSON(object: any): _177.QuerySigningInfoResponse;
                toJSON(message: _177.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_177.QuerySigningInfoResponse>): _177.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _177.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QuerySigningInfosRequest;
                fromJSON(object: any): _177.QuerySigningInfosRequest;
                toJSON(message: _177.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_177.QuerySigningInfosRequest>): _177.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _177.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QuerySigningInfosResponse;
                fromJSON(object: any): _177.QuerySigningInfosResponse;
                toJSON(message: _177.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_177.QuerySigningInfosResponse>): _177.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _176.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GenesisState;
                fromJSON(object: any): _176.GenesisState;
                toJSON(message: _176.GenesisState): unknown;
                fromPartial(object: Partial<_176.GenesisState>): _176.GenesisState;
            };
            SigningInfo: {
                encode(message: _176.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.SigningInfo;
                fromJSON(object: any): _176.SigningInfo;
                toJSON(message: _176.SigningInfo): unknown;
                fromPartial(object: Partial<_176.SigningInfo>): _176.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _176.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ValidatorMissedBlocks;
                fromJSON(object: any): _176.ValidatorMissedBlocks;
                toJSON(message: _176.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_176.ValidatorMissedBlocks>): _176.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _176.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MissedBlock;
                fromJSON(object: any): _176.MissedBlock;
                toJSON(message: _176.MissedBlock): unknown;
                fromPartial(object: Partial<_176.MissedBlock>): _176.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _308.MsgClientImpl;
            QueryClientImpl: typeof _294.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _182.QueryValidatorsRequest): Promise<_182.QueryValidatorsResponse>;
                validator(request: _182.QueryValidatorRequest): Promise<_182.QueryValidatorResponse>;
                validatorDelegations(request: _182.QueryValidatorDelegationsRequest): Promise<_182.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _182.QueryValidatorUnbondingDelegationsRequest): Promise<_182.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _182.QueryDelegationRequest): Promise<_182.QueryDelegationResponse>;
                unbondingDelegation(request: _182.QueryUnbondingDelegationRequest): Promise<_182.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _182.QueryDelegatorDelegationsRequest): Promise<_182.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _182.QueryDelegatorUnbondingDelegationsRequest): Promise<_182.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _182.QueryRedelegationsRequest): Promise<_182.QueryRedelegationsResponse>;
                delegatorValidators(request: _182.QueryDelegatorValidatorsRequest): Promise<_182.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _182.QueryDelegatorValidatorRequest): Promise<_182.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _182.QueryHistoricalInfoRequest): Promise<_182.QueryHistoricalInfoResponse>;
                pool(request?: _182.QueryPoolRequest): Promise<_182.QueryPoolResponse>;
                params(request?: _182.QueryParamsRequest): Promise<_182.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _184.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _184.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _184.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _184.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _184.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _184.MsgCreateValidator): {
                        typeUrl: string;
                        value: _184.MsgCreateValidator;
                    };
                    editValidator(value: _184.MsgEditValidator): {
                        typeUrl: string;
                        value: _184.MsgEditValidator;
                    };
                    delegate(value: _184.MsgDelegate): {
                        typeUrl: string;
                        value: _184.MsgDelegate;
                    };
                    beginRedelegate(value: _184.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _184.MsgBeginRedelegate;
                    };
                    undelegate(value: _184.MsgUndelegate): {
                        typeUrl: string;
                        value: _184.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _184.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _184.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _184.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _184.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _184.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _184.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _184.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _184.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _184.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _184.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _184.MsgCreateValidator): {
                        typeUrl: string;
                        value: _184.MsgCreateValidator;
                    };
                    editValidator(value: _184.MsgEditValidator): {
                        typeUrl: string;
                        value: _184.MsgEditValidator;
                    };
                    delegate(value: _184.MsgDelegate): {
                        typeUrl: string;
                        value: _184.MsgDelegate;
                    };
                    beginRedelegate(value: _184.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _184.MsgBeginRedelegate;
                    };
                    undelegate(value: _184.MsgUndelegate): {
                        typeUrl: string;
                        value: _184.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _184.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _184.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _184.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _184.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _184.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _184.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _184.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _184.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _184.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _184.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _184.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgCreateValidator;
                fromJSON(object: any): _184.MsgCreateValidator;
                toJSON(message: _184.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_184.MsgCreateValidator>): _184.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _184.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgCreateValidatorResponse;
                fromJSON(_: any): _184.MsgCreateValidatorResponse;
                toJSON(_: _184.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_184.MsgCreateValidatorResponse>): _184.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _184.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgEditValidator;
                fromJSON(object: any): _184.MsgEditValidator;
                toJSON(message: _184.MsgEditValidator): unknown;
                fromPartial(object: Partial<_184.MsgEditValidator>): _184.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _184.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgEditValidatorResponse;
                fromJSON(_: any): _184.MsgEditValidatorResponse;
                toJSON(_: _184.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_184.MsgEditValidatorResponse>): _184.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _184.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgDelegate;
                fromJSON(object: any): _184.MsgDelegate;
                toJSON(message: _184.MsgDelegate): unknown;
                fromPartial(object: Partial<_184.MsgDelegate>): _184.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _184.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgDelegateResponse;
                fromJSON(_: any): _184.MsgDelegateResponse;
                toJSON(_: _184.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_184.MsgDelegateResponse>): _184.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _184.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgBeginRedelegate;
                fromJSON(object: any): _184.MsgBeginRedelegate;
                toJSON(message: _184.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_184.MsgBeginRedelegate>): _184.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _184.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgBeginRedelegateResponse;
                fromJSON(object: any): _184.MsgBeginRedelegateResponse;
                toJSON(message: _184.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_184.MsgBeginRedelegateResponse>): _184.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _184.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgUndelegate;
                fromJSON(object: any): _184.MsgUndelegate;
                toJSON(message: _184.MsgUndelegate): unknown;
                fromPartial(object: Partial<_184.MsgUndelegate>): _184.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _184.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgUndelegateResponse;
                fromJSON(object: any): _184.MsgUndelegateResponse;
                toJSON(message: _184.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_184.MsgUndelegateResponse>): _184.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _183.BondStatus;
            bondStatusToJSON(object: _183.BondStatus): string;
            BondStatus: typeof _183.BondStatus;
            BondStatusSDKType: typeof _183.BondStatus;
            HistoricalInfo: {
                encode(message: _183.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.HistoricalInfo;
                fromJSON(object: any): _183.HistoricalInfo;
                toJSON(message: _183.HistoricalInfo): unknown;
                fromPartial(object: Partial<_183.HistoricalInfo>): _183.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _183.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.CommissionRates;
                fromJSON(object: any): _183.CommissionRates;
                toJSON(message: _183.CommissionRates): unknown;
                fromPartial(object: Partial<_183.CommissionRates>): _183.CommissionRates;
            };
            Commission: {
                encode(message: _183.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Commission;
                fromJSON(object: any): _183.Commission;
                toJSON(message: _183.Commission): unknown;
                fromPartial(object: Partial<_183.Commission>): _183.Commission;
            };
            Description: {
                encode(message: _183.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Description;
                fromJSON(object: any): _183.Description;
                toJSON(message: _183.Description): unknown;
                fromPartial(object: Partial<_183.Description>): _183.Description;
            };
            Validator: {
                encode(message: _183.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Validator;
                fromJSON(object: any): _183.Validator;
                toJSON(message: _183.Validator): unknown;
                fromPartial(object: Partial<_183.Validator>): _183.Validator;
            };
            ValAddresses: {
                encode(message: _183.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.ValAddresses;
                fromJSON(object: any): _183.ValAddresses;
                toJSON(message: _183.ValAddresses): unknown;
                fromPartial(object: Partial<_183.ValAddresses>): _183.ValAddresses;
            };
            DVPair: {
                encode(message: _183.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.DVPair;
                fromJSON(object: any): _183.DVPair;
                toJSON(message: _183.DVPair): unknown;
                fromPartial(object: Partial<_183.DVPair>): _183.DVPair;
            };
            DVPairs: {
                encode(message: _183.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.DVPairs;
                fromJSON(object: any): _183.DVPairs;
                toJSON(message: _183.DVPairs): unknown;
                fromPartial(object: Partial<_183.DVPairs>): _183.DVPairs;
            };
            DVVTriplet: {
                encode(message: _183.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.DVVTriplet;
                fromJSON(object: any): _183.DVVTriplet;
                toJSON(message: _183.DVVTriplet): unknown;
                fromPartial(object: Partial<_183.DVVTriplet>): _183.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _183.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.DVVTriplets;
                fromJSON(object: any): _183.DVVTriplets;
                toJSON(message: _183.DVVTriplets): unknown;
                fromPartial(object: Partial<_183.DVVTriplets>): _183.DVVTriplets;
            };
            Delegation: {
                encode(message: _183.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Delegation;
                fromJSON(object: any): _183.Delegation;
                toJSON(message: _183.Delegation): unknown;
                fromPartial(object: Partial<_183.Delegation>): _183.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _183.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.UnbondingDelegation;
                fromJSON(object: any): _183.UnbondingDelegation;
                toJSON(message: _183.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_183.UnbondingDelegation>): _183.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _183.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.UnbondingDelegationEntry;
                fromJSON(object: any): _183.UnbondingDelegationEntry;
                toJSON(message: _183.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_183.UnbondingDelegationEntry>): _183.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _183.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.RedelegationEntry;
                fromJSON(object: any): _183.RedelegationEntry;
                toJSON(message: _183.RedelegationEntry): unknown;
                fromPartial(object: Partial<_183.RedelegationEntry>): _183.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _183.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Redelegation;
                fromJSON(object: any): _183.Redelegation;
                toJSON(message: _183.Redelegation): unknown;
                fromPartial(object: Partial<_183.Redelegation>): _183.Redelegation;
            };
            Params: {
                encode(message: _183.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Params;
                fromJSON(object: any): _183.Params;
                toJSON(message: _183.Params): unknown;
                fromPartial(object: Partial<_183.Params>): _183.Params;
            };
            DelegationResponse: {
                encode(message: _183.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.DelegationResponse;
                fromJSON(object: any): _183.DelegationResponse;
                toJSON(message: _183.DelegationResponse): unknown;
                fromPartial(object: Partial<_183.DelegationResponse>): _183.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _183.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.RedelegationEntryResponse;
                fromJSON(object: any): _183.RedelegationEntryResponse;
                toJSON(message: _183.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_183.RedelegationEntryResponse>): _183.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _183.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.RedelegationResponse;
                fromJSON(object: any): _183.RedelegationResponse;
                toJSON(message: _183.RedelegationResponse): unknown;
                fromPartial(object: Partial<_183.RedelegationResponse>): _183.RedelegationResponse;
            };
            Pool: {
                encode(message: _183.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Pool;
                fromJSON(object: any): _183.Pool;
                toJSON(message: _183.Pool): unknown;
                fromPartial(object: Partial<_183.Pool>): _183.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _182.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryValidatorsRequest;
                fromJSON(object: any): _182.QueryValidatorsRequest;
                toJSON(message: _182.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_182.QueryValidatorsRequest>): _182.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _182.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryValidatorsResponse;
                fromJSON(object: any): _182.QueryValidatorsResponse;
                toJSON(message: _182.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_182.QueryValidatorsResponse>): _182.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _182.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryValidatorRequest;
                fromJSON(object: any): _182.QueryValidatorRequest;
                toJSON(message: _182.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_182.QueryValidatorRequest>): _182.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _182.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryValidatorResponse;
                fromJSON(object: any): _182.QueryValidatorResponse;
                toJSON(message: _182.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_182.QueryValidatorResponse>): _182.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _182.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _182.QueryValidatorDelegationsRequest;
                toJSON(message: _182.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_182.QueryValidatorDelegationsRequest>): _182.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _182.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _182.QueryValidatorDelegationsResponse;
                toJSON(message: _182.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_182.QueryValidatorDelegationsResponse>): _182.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _182.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _182.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _182.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_182.QueryValidatorUnbondingDelegationsRequest>): _182.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _182.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _182.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _182.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_182.QueryValidatorUnbondingDelegationsResponse>): _182.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _182.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryDelegationRequest;
                fromJSON(object: any): _182.QueryDelegationRequest;
                toJSON(message: _182.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_182.QueryDelegationRequest>): _182.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _182.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryDelegationResponse;
                fromJSON(object: any): _182.QueryDelegationResponse;
                toJSON(message: _182.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_182.QueryDelegationResponse>): _182.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _182.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _182.QueryUnbondingDelegationRequest;
                toJSON(message: _182.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_182.QueryUnbondingDelegationRequest>): _182.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _182.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _182.QueryUnbondingDelegationResponse;
                toJSON(message: _182.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_182.QueryUnbondingDelegationResponse>): _182.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _182.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _182.QueryDelegatorDelegationsRequest;
                toJSON(message: _182.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_182.QueryDelegatorDelegationsRequest>): _182.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _182.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _182.QueryDelegatorDelegationsResponse;
                toJSON(message: _182.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_182.QueryDelegatorDelegationsResponse>): _182.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _182.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _182.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _182.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_182.QueryDelegatorUnbondingDelegationsRequest>): _182.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _182.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _182.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _182.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_182.QueryDelegatorUnbondingDelegationsResponse>): _182.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _182.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryRedelegationsRequest;
                fromJSON(object: any): _182.QueryRedelegationsRequest;
                toJSON(message: _182.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_182.QueryRedelegationsRequest>): _182.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _182.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryRedelegationsResponse;
                fromJSON(object: any): _182.QueryRedelegationsResponse;
                toJSON(message: _182.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_182.QueryRedelegationsResponse>): _182.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _182.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _182.QueryDelegatorValidatorsRequest;
                toJSON(message: _182.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_182.QueryDelegatorValidatorsRequest>): _182.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _182.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _182.QueryDelegatorValidatorsResponse;
                toJSON(message: _182.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_182.QueryDelegatorValidatorsResponse>): _182.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _182.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _182.QueryDelegatorValidatorRequest;
                toJSON(message: _182.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_182.QueryDelegatorValidatorRequest>): _182.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _182.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _182.QueryDelegatorValidatorResponse;
                toJSON(message: _182.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_182.QueryDelegatorValidatorResponse>): _182.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _182.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryHistoricalInfoRequest;
                fromJSON(object: any): _182.QueryHistoricalInfoRequest;
                toJSON(message: _182.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_182.QueryHistoricalInfoRequest>): _182.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _182.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryHistoricalInfoResponse;
                fromJSON(object: any): _182.QueryHistoricalInfoResponse;
                toJSON(message: _182.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_182.QueryHistoricalInfoResponse>): _182.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _182.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryPoolRequest;
                fromJSON(_: any): _182.QueryPoolRequest;
                toJSON(_: _182.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_182.QueryPoolRequest>): _182.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _182.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryPoolResponse;
                fromJSON(object: any): _182.QueryPoolResponse;
                toJSON(message: _182.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_182.QueryPoolResponse>): _182.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _182.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryParamsRequest;
                fromJSON(_: any): _182.QueryParamsRequest;
                toJSON(_: _182.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_182.QueryParamsRequest>): _182.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _182.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryParamsResponse;
                fromJSON(object: any): _182.QueryParamsResponse;
                toJSON(message: _182.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_182.QueryParamsResponse>): _182.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _181.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.GenesisState;
                fromJSON(object: any): _181.GenesisState;
                toJSON(message: _181.GenesisState): unknown;
                fromPartial(object: Partial<_181.GenesisState>): _181.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _181.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.LastValidatorPower;
                fromJSON(object: any): _181.LastValidatorPower;
                toJSON(message: _181.LastValidatorPower): unknown;
                fromPartial(object: Partial<_181.LastValidatorPower>): _181.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _180.AuthorizationType;
            authorizationTypeToJSON(object: _180.AuthorizationType): string;
            AuthorizationType: typeof _180.AuthorizationType;
            AuthorizationTypeSDKType: typeof _180.AuthorizationType;
            StakeAuthorization: {
                encode(message: _180.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.StakeAuthorization;
                fromJSON(object: any): _180.StakeAuthorization;
                toJSON(message: _180.StakeAuthorization): unknown;
                fromPartial(object: Partial<_180.StakeAuthorization>): _180.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _180.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.StakeAuthorization_Validators;
                fromJSON(object: any): _180.StakeAuthorization_Validators;
                toJSON(message: _180.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_180.StakeAuthorization_Validators>): _180.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _185.SignMode;
                signModeToJSON(object: _185.SignMode): string;
                SignMode: typeof _185.SignMode;
                SignModeSDKType: typeof _185.SignMode;
                SignatureDescriptors: {
                    encode(message: _185.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.SignatureDescriptors;
                    fromJSON(object: any): _185.SignatureDescriptors;
                    toJSON(message: _185.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_185.SignatureDescriptors>): _185.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _185.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.SignatureDescriptor;
                    fromJSON(object: any): _185.SignatureDescriptor;
                    toJSON(message: _185.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_185.SignatureDescriptor>): _185.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _185.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.SignatureDescriptor_Data;
                    fromJSON(object: any): _185.SignatureDescriptor_Data;
                    toJSON(message: _185.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_185.SignatureDescriptor_Data>): _185.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _185.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _185.SignatureDescriptor_Data_Single;
                    toJSON(message: _185.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_185.SignatureDescriptor_Data_Single>): _185.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _185.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _185.SignatureDescriptor_Data_Multi;
                    toJSON(message: _185.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_185.SignatureDescriptor_Data_Multi>): _185.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _295.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _186.SimulateRequest): Promise<_186.SimulateResponse>;
                getTx(request: _186.GetTxRequest): Promise<_186.GetTxResponse>;
                broadcastTx(request: _186.BroadcastTxRequest): Promise<_186.BroadcastTxResponse>;
                getTxsEvent(request: _186.GetTxsEventRequest): Promise<_186.GetTxsEventResponse>;
                getBlockWithTxs(request: _186.GetBlockWithTxsRequest): Promise<_186.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _187.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Tx;
                fromJSON(object: any): _187.Tx;
                toJSON(message: _187.Tx): unknown;
                fromPartial(object: Partial<_187.Tx>): _187.Tx;
            };
            TxRaw: {
                encode(message: _187.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.TxRaw;
                fromJSON(object: any): _187.TxRaw;
                toJSON(message: _187.TxRaw): unknown;
                fromPartial(object: Partial<_187.TxRaw>): _187.TxRaw;
            };
            SignDoc: {
                encode(message: _187.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.SignDoc;
                fromJSON(object: any): _187.SignDoc;
                toJSON(message: _187.SignDoc): unknown;
                fromPartial(object: Partial<_187.SignDoc>): _187.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _187.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.SignDocDirectAux;
                fromJSON(object: any): _187.SignDocDirectAux;
                toJSON(message: _187.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_187.SignDocDirectAux>): _187.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _187.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.TxBody;
                fromJSON(object: any): _187.TxBody;
                toJSON(message: _187.TxBody): unknown;
                fromPartial(object: Partial<_187.TxBody>): _187.TxBody;
            };
            AuthInfo: {
                encode(message: _187.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.AuthInfo;
                fromJSON(object: any): _187.AuthInfo;
                toJSON(message: _187.AuthInfo): unknown;
                fromPartial(object: Partial<_187.AuthInfo>): _187.AuthInfo;
            };
            SignerInfo: {
                encode(message: _187.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.SignerInfo;
                fromJSON(object: any): _187.SignerInfo;
                toJSON(message: _187.SignerInfo): unknown;
                fromPartial(object: Partial<_187.SignerInfo>): _187.SignerInfo;
            };
            ModeInfo: {
                encode(message: _187.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ModeInfo;
                fromJSON(object: any): _187.ModeInfo;
                toJSON(message: _187.ModeInfo): unknown;
                fromPartial(object: Partial<_187.ModeInfo>): _187.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _187.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ModeInfo_Single;
                fromJSON(object: any): _187.ModeInfo_Single;
                toJSON(message: _187.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_187.ModeInfo_Single>): _187.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _187.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ModeInfo_Multi;
                fromJSON(object: any): _187.ModeInfo_Multi;
                toJSON(message: _187.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_187.ModeInfo_Multi>): _187.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _187.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Fee;
                fromJSON(object: any): _187.Fee;
                toJSON(message: _187.Fee): unknown;
                fromPartial(object: Partial<_187.Fee>): _187.Fee;
            };
            Tip: {
                encode(message: _187.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Tip;
                fromJSON(object: any): _187.Tip;
                toJSON(message: _187.Tip): unknown;
                fromPartial(object: Partial<_187.Tip>): _187.Tip;
            };
            AuxSignerData: {
                encode(message: _187.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.AuxSignerData;
                fromJSON(object: any): _187.AuxSignerData;
                toJSON(message: _187.AuxSignerData): unknown;
                fromPartial(object: Partial<_187.AuxSignerData>): _187.AuxSignerData;
            };
            orderByFromJSON(object: any): _186.OrderBy;
            orderByToJSON(object: _186.OrderBy): string;
            broadcastModeFromJSON(object: any): _186.BroadcastMode;
            broadcastModeToJSON(object: _186.BroadcastMode): string;
            OrderBy: typeof _186.OrderBy;
            OrderBySDKType: typeof _186.OrderBy;
            BroadcastMode: typeof _186.BroadcastMode;
            BroadcastModeSDKType: typeof _186.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _186.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.GetTxsEventRequest;
                fromJSON(object: any): _186.GetTxsEventRequest;
                toJSON(message: _186.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_186.GetTxsEventRequest>): _186.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _186.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.GetTxsEventResponse;
                fromJSON(object: any): _186.GetTxsEventResponse;
                toJSON(message: _186.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_186.GetTxsEventResponse>): _186.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _186.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.BroadcastTxRequest;
                fromJSON(object: any): _186.BroadcastTxRequest;
                toJSON(message: _186.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_186.BroadcastTxRequest>): _186.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _186.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.BroadcastTxResponse;
                fromJSON(object: any): _186.BroadcastTxResponse;
                toJSON(message: _186.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_186.BroadcastTxResponse>): _186.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _186.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.SimulateRequest;
                fromJSON(object: any): _186.SimulateRequest;
                toJSON(message: _186.SimulateRequest): unknown;
                fromPartial(object: Partial<_186.SimulateRequest>): _186.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _186.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.SimulateResponse;
                fromJSON(object: any): _186.SimulateResponse;
                toJSON(message: _186.SimulateResponse): unknown;
                fromPartial(object: Partial<_186.SimulateResponse>): _186.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _186.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.GetTxRequest;
                fromJSON(object: any): _186.GetTxRequest;
                toJSON(message: _186.GetTxRequest): unknown;
                fromPartial(object: Partial<_186.GetTxRequest>): _186.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _186.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.GetTxResponse;
                fromJSON(object: any): _186.GetTxResponse;
                toJSON(message: _186.GetTxResponse): unknown;
                fromPartial(object: Partial<_186.GetTxResponse>): _186.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _186.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.GetBlockWithTxsRequest;
                fromJSON(object: any): _186.GetBlockWithTxsRequest;
                toJSON(message: _186.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_186.GetBlockWithTxsRequest>): _186.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _186.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.GetBlockWithTxsResponse;
                fromJSON(object: any): _186.GetBlockWithTxsResponse;
                toJSON(message: _186.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_186.GetBlockWithTxsResponse>): _186.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _309.MsgClientImpl;
            QueryClientImpl: typeof _296.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _188.QueryCurrentPlanRequest): Promise<_188.QueryCurrentPlanResponse>;
                appliedPlan(request: _188.QueryAppliedPlanRequest): Promise<_188.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _188.QueryUpgradedConsensusStateRequest): Promise<_188.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _188.QueryModuleVersionsRequest): Promise<_188.QueryModuleVersionsResponse>;
                authority(request?: _188.QueryAuthorityRequest): Promise<_188.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _189.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _189.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _189.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _189.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _189.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _189.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _189.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _189.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _189.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _189.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _189.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _189.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _189.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _189.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _189.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _189.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _189.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _189.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _190.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Plan;
                fromJSON(object: any): _190.Plan;
                toJSON(message: _190.Plan): unknown;
                fromPartial(object: Partial<_190.Plan>): _190.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _190.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.SoftwareUpgradeProposal;
                fromJSON(object: any): _190.SoftwareUpgradeProposal;
                toJSON(message: _190.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_190.SoftwareUpgradeProposal>): _190.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _190.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _190.CancelSoftwareUpgradeProposal;
                toJSON(message: _190.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_190.CancelSoftwareUpgradeProposal>): _190.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _190.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ModuleVersion;
                fromJSON(object: any): _190.ModuleVersion;
                toJSON(message: _190.ModuleVersion): unknown;
                fromPartial(object: Partial<_190.ModuleVersion>): _190.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _189.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgSoftwareUpgrade;
                fromJSON(object: any): _189.MsgSoftwareUpgrade;
                toJSON(message: _189.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_189.MsgSoftwareUpgrade>): _189.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _189.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _189.MsgSoftwareUpgradeResponse;
                toJSON(_: _189.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_189.MsgSoftwareUpgradeResponse>): _189.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _189.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgCancelUpgrade;
                fromJSON(object: any): _189.MsgCancelUpgrade;
                toJSON(message: _189.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_189.MsgCancelUpgrade>): _189.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _189.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgCancelUpgradeResponse;
                fromJSON(_: any): _189.MsgCancelUpgradeResponse;
                toJSON(_: _189.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_189.MsgCancelUpgradeResponse>): _189.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _188.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryCurrentPlanRequest;
                fromJSON(_: any): _188.QueryCurrentPlanRequest;
                toJSON(_: _188.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_188.QueryCurrentPlanRequest>): _188.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _188.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryCurrentPlanResponse;
                fromJSON(object: any): _188.QueryCurrentPlanResponse;
                toJSON(message: _188.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_188.QueryCurrentPlanResponse>): _188.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _188.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryAppliedPlanRequest;
                fromJSON(object: any): _188.QueryAppliedPlanRequest;
                toJSON(message: _188.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_188.QueryAppliedPlanRequest>): _188.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _188.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryAppliedPlanResponse;
                fromJSON(object: any): _188.QueryAppliedPlanResponse;
                toJSON(message: _188.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_188.QueryAppliedPlanResponse>): _188.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _188.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _188.QueryUpgradedConsensusStateRequest;
                toJSON(message: _188.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_188.QueryUpgradedConsensusStateRequest>): _188.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _188.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _188.QueryUpgradedConsensusStateResponse;
                toJSON(message: _188.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_188.QueryUpgradedConsensusStateResponse>): _188.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _188.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryModuleVersionsRequest;
                fromJSON(object: any): _188.QueryModuleVersionsRequest;
                toJSON(message: _188.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_188.QueryModuleVersionsRequest>): _188.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _188.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryModuleVersionsResponse;
                fromJSON(object: any): _188.QueryModuleVersionsResponse;
                toJSON(message: _188.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_188.QueryModuleVersionsResponse>): _188.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _188.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryAuthorityRequest;
                fromJSON(_: any): _188.QueryAuthorityRequest;
                toJSON(_: _188.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_188.QueryAuthorityRequest>): _188.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _188.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.QueryAuthorityResponse;
                fromJSON(object: any): _188.QueryAuthorityResponse;
                toJSON(message: _188.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_188.QueryAuthorityResponse>): _188.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _310.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _191.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _191.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _191.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _191.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _191.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _191.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _191.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _191.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _191.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _191.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _191.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _191.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _191.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _191.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _191.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _191.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _191.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _191.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _191.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _191.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _191.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _191.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _191.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _191.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _191.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _191.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _191.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _192.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.BaseVestingAccount;
                fromJSON(object: any): _192.BaseVestingAccount;
                toJSON(message: _192.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_192.BaseVestingAccount>): _192.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _192.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ContinuousVestingAccount;
                fromJSON(object: any): _192.ContinuousVestingAccount;
                toJSON(message: _192.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_192.ContinuousVestingAccount>): _192.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _192.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.DelayedVestingAccount;
                fromJSON(object: any): _192.DelayedVestingAccount;
                toJSON(message: _192.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_192.DelayedVestingAccount>): _192.DelayedVestingAccount;
            };
            Period: {
                encode(message: _192.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.Period;
                fromJSON(object: any): _192.Period;
                toJSON(message: _192.Period): unknown;
                fromPartial(object: Partial<_192.Period>): _192.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _192.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.PeriodicVestingAccount;
                fromJSON(object: any): _192.PeriodicVestingAccount;
                toJSON(message: _192.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_192.PeriodicVestingAccount>): _192.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _192.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.PermanentLockedAccount;
                fromJSON(object: any): _192.PermanentLockedAccount;
                toJSON(message: _192.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_192.PermanentLockedAccount>): _192.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _191.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.MsgCreateVestingAccount;
                fromJSON(object: any): _191.MsgCreateVestingAccount;
                toJSON(message: _191.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_191.MsgCreateVestingAccount>): _191.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _191.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _191.MsgCreateVestingAccountResponse;
                toJSON(_: _191.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_191.MsgCreateVestingAccountResponse>): _191.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _191.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _191.MsgCreatePermanentLockedAccount;
                toJSON(message: _191.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_191.MsgCreatePermanentLockedAccount>): _191.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _191.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _191.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _191.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_191.MsgCreatePermanentLockedAccountResponse>): _191.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _191.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _191.MsgCreatePeriodicVestingAccount;
                toJSON(message: _191.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_191.MsgCreatePeriodicVestingAccount>): _191.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _191.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _191.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _191.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_191.MsgCreatePeriodicVestingAccountResponse>): _191.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _297.MsgClientImpl;
                };
                bank: {
                    v1beta1: _298.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _299.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _300.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _301.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _302.MsgClientImpl;
                };
                gov: {
                    v1: _303.MsgClientImpl;
                    v1beta1: _304.MsgClientImpl;
                };
                group: {
                    v1: _305.MsgClientImpl;
                };
                nft: {
                    v1beta1: _306.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _307.MsgClientImpl;
                };
                staking: {
                    v1beta1: _308.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _309.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _310.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _103.QueryConfigRequest): Promise<_103.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _106.QueryAccountsRequest): Promise<_106.QueryAccountsResponse>;
                        account(request: _106.QueryAccountRequest): Promise<_106.QueryAccountResponse>;
                        params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                        moduleAccounts(request?: _106.QueryModuleAccountsRequest): Promise<_106.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _106.Bech32PrefixRequest): Promise<_106.Bech32PrefixResponse>;
                        addressBytesToString(request: _106.AddressBytesToStringRequest): Promise<_106.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _106.AddressStringToBytesRequest): Promise<_106.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _110.QueryGrantsRequest): Promise<_110.QueryGrantsResponse>;
                        granterGrants(request: _110.QueryGranterGrantsRequest): Promise<_110.QueryGranterGrantsResponse>;
                        granteeGrants(request: _110.QueryGranteeGrantsRequest): Promise<_110.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _115.QueryBalanceRequest): Promise<_115.QueryBalanceResponse>;
                        allBalances(request: _115.QueryAllBalancesRequest): Promise<_115.QueryAllBalancesResponse>;
                        spendableBalances(request: _115.QuerySpendableBalancesRequest): Promise<_115.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _115.QueryTotalSupplyRequest): Promise<_115.QueryTotalSupplyResponse>;
                        supplyOf(request: _115.QuerySupplyOfRequest): Promise<_115.QuerySupplyOfResponse>;
                        params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                        denomMetadata(request: _115.QueryDenomMetadataRequest): Promise<_115.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _115.QueryDenomsMetadataRequest): Promise<_115.QueryDenomsMetadataResponse>;
                        denomOwners(request: _115.QueryDenomOwnersRequest): Promise<_115.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _125.GetNodeInfoRequest): Promise<_125.GetNodeInfoResponse>;
                            getSyncing(request?: _125.GetSyncingRequest): Promise<_125.GetSyncingResponse>;
                            getLatestBlock(request?: _125.GetLatestBlockRequest): Promise<_125.GetLatestBlockResponse>;
                            getBlockByHeight(request: _125.GetBlockByHeightRequest): Promise<_125.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _125.GetLatestValidatorSetRequest): Promise<_125.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _125.GetValidatorSetByHeightRequest): Promise<_125.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _139.QueryParamsRequest): Promise<_139.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _139.QueryValidatorOutstandingRewardsRequest): Promise<_139.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _139.QueryValidatorCommissionRequest): Promise<_139.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _139.QueryValidatorSlashesRequest): Promise<_139.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _139.QueryDelegationRewardsRequest): Promise<_139.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _139.QueryDelegationTotalRewardsRequest): Promise<_139.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _139.QueryDelegatorValidatorsRequest): Promise<_139.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _139.QueryDelegatorWithdrawAddressRequest): Promise<_139.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _139.QueryCommunityPoolRequest): Promise<_139.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _143.QueryEvidenceRequest): Promise<_143.QueryEvidenceResponse>;
                        allEvidence(request?: _143.QueryAllEvidenceRequest): Promise<_143.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _147.QueryAllowanceRequest): Promise<_147.QueryAllowanceResponse>;
                        allowances(request: _147.QueryAllowancesRequest): Promise<_147.QueryAllowancesResponse>;
                        allowancesByGranter(request: _147.QueryAllowancesByGranterRequest): Promise<_147.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _152.QueryProposalRequest): Promise<_152.QueryProposalResponse>;
                        proposals(request: _152.QueryProposalsRequest): Promise<_152.QueryProposalsResponse>;
                        vote(request: _152.QueryVoteRequest): Promise<_152.QueryVoteResponse>;
                        votes(request: _152.QueryVotesRequest): Promise<_152.QueryVotesResponse>;
                        params(request: _152.QueryParamsRequest): Promise<_152.QueryParamsResponse>;
                        deposit(request: _152.QueryDepositRequest): Promise<_152.QueryDepositResponse>;
                        deposits(request: _152.QueryDepositsRequest): Promise<_152.QueryDepositsResponse>;
                        tallyResult(request: _152.QueryTallyResultRequest): Promise<_152.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _156.QueryProposalRequest): Promise<_156.QueryProposalResponse>;
                        proposals(request: _156.QueryProposalsRequest): Promise<_156.QueryProposalsResponse>;
                        vote(request: _156.QueryVoteRequest): Promise<_156.QueryVoteResponse>;
                        votes(request: _156.QueryVotesRequest): Promise<_156.QueryVotesResponse>;
                        params(request: _156.QueryParamsRequest): Promise<_156.QueryParamsResponse>;
                        deposit(request: _156.QueryDepositRequest): Promise<_156.QueryDepositResponse>;
                        deposits(request: _156.QueryDepositsRequest): Promise<_156.QueryDepositsResponse>;
                        tallyResult(request: _156.QueryTallyResultRequest): Promise<_156.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _160.QueryGroupInfoRequest): Promise<_160.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _160.QueryGroupPolicyInfoRequest): Promise<_160.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _160.QueryGroupMembersRequest): Promise<_160.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _160.QueryGroupsByAdminRequest): Promise<_160.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _160.QueryGroupPoliciesByGroupRequest): Promise<_160.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _160.QueryGroupPoliciesByAdminRequest): Promise<_160.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _160.QueryProposalRequest): Promise<_160.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _160.QueryProposalsByGroupPolicyRequest): Promise<_160.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _160.QueryVoteByProposalVoterRequest): Promise<_160.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _160.QueryVotesByProposalRequest): Promise<_160.QueryVotesByProposalResponse>;
                        votesByVoter(request: _160.QueryVotesByVoterRequest): Promise<_160.QueryVotesByVoterResponse>;
                        groupsByMember(request: _160.QueryGroupsByMemberRequest): Promise<_160.QueryGroupsByMemberResponse>;
                        tallyResult(request: _160.QueryTallyResultRequest): Promise<_160.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                        inflation(request?: _165.QueryInflationRequest): Promise<_165.QueryInflationResponse>;
                        annualProvisions(request?: _165.QueryAnnualProvisionsRequest): Promise<_165.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _170.QueryBalanceRequest): Promise<_170.QueryBalanceResponse>;
                        owner(request: _170.QueryOwnerRequest): Promise<_170.QueryOwnerResponse>;
                        supply(request: _170.QuerySupplyRequest): Promise<_170.QuerySupplyResponse>;
                        nFTs(request: _170.QueryNFTsRequest): Promise<_170.QueryNFTsResponse>;
                        nFT(request: _170.QueryNFTRequest): Promise<_170.QueryNFTResponse>;
                        class(request: _170.QueryClassRequest): Promise<_170.QueryClassResponse>;
                        classes(request?: _170.QueryClassesRequest): Promise<_170.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _175.QueryParamsRequest): Promise<_175.QueryParamsResponse>;
                        subspaces(request?: _175.QuerySubspacesRequest): Promise<_175.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _177.QueryParamsRequest): Promise<_177.QueryParamsResponse>;
                        signingInfo(request: _177.QuerySigningInfoRequest): Promise<_177.QuerySigningInfoResponse>;
                        signingInfos(request?: _177.QuerySigningInfosRequest): Promise<_177.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _182.QueryValidatorsRequest): Promise<_182.QueryValidatorsResponse>;
                        validator(request: _182.QueryValidatorRequest): Promise<_182.QueryValidatorResponse>;
                        validatorDelegations(request: _182.QueryValidatorDelegationsRequest): Promise<_182.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _182.QueryValidatorUnbondingDelegationsRequest): Promise<_182.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _182.QueryDelegationRequest): Promise<_182.QueryDelegationResponse>;
                        unbondingDelegation(request: _182.QueryUnbondingDelegationRequest): Promise<_182.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _182.QueryDelegatorDelegationsRequest): Promise<_182.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _182.QueryDelegatorUnbondingDelegationsRequest): Promise<_182.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _182.QueryRedelegationsRequest): Promise<_182.QueryRedelegationsResponse>;
                        delegatorValidators(request: _182.QueryDelegatorValidatorsRequest): Promise<_182.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _182.QueryDelegatorValidatorRequest): Promise<_182.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _182.QueryHistoricalInfoRequest): Promise<_182.QueryHistoricalInfoResponse>;
                        pool(request?: _182.QueryPoolRequest): Promise<_182.QueryPoolResponse>;
                        params(request?: _182.QueryParamsRequest): Promise<_182.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _186.SimulateRequest): Promise<_186.SimulateResponse>;
                        getTx(request: _186.GetTxRequest): Promise<_186.GetTxResponse>;
                        broadcastTx(request: _186.BroadcastTxRequest): Promise<_186.BroadcastTxResponse>;
                        getTxsEvent(request: _186.GetTxsEventRequest): Promise<_186.GetTxsEventResponse>;
                        getBlockWithTxs(request: _186.GetBlockWithTxsRequest): Promise<_186.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _188.QueryCurrentPlanRequest): Promise<_188.QueryCurrentPlanResponse>;
                        appliedPlan(request: _188.QueryAppliedPlanRequest): Promise<_188.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _188.QueryUpgradedConsensusStateRequest): Promise<_188.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _188.QueryModuleVersionsRequest): Promise<_188.QueryModuleVersionsResponse>;
                        authority(request?: _188.QueryAuthorityRequest): Promise<_188.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
