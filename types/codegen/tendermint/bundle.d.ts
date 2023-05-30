import * as _202 from "./abci/types";
import * as _203 from "./crypto/keys";
import * as _204 from "./crypto/proof";
import * as _205 from "./libs/bits/types";
import * as _206 from "./p2p/types";
import * as _207 from "./types/block";
import * as _208 from "./types/evidence";
import * as _209 from "./types/params";
import * as _210 from "./types/types";
import * as _211 from "./types/validator";
import * as _212 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _202.CheckTxType;
        checkTxTypeToJSON(object: _202.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _202.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _202.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _202.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _202.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _202.EvidenceType;
        evidenceTypeToJSON(object: _202.EvidenceType): string;
        CheckTxType: typeof _202.CheckTxType;
        CheckTxTypeSDKType: typeof _202.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _202.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _202.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _202.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _202.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _202.EvidenceType;
        EvidenceTypeSDKType: typeof _202.EvidenceType;
        Request: {
            encode(message: _202.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Request;
            fromJSON(object: any): _202.Request;
            toJSON(message: _202.Request): unknown;
            fromPartial(object: Partial<_202.Request>): _202.Request;
        };
        RequestEcho: {
            encode(message: _202.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestEcho;
            fromJSON(object: any): _202.RequestEcho;
            toJSON(message: _202.RequestEcho): unknown;
            fromPartial(object: Partial<_202.RequestEcho>): _202.RequestEcho;
        };
        RequestFlush: {
            encode(_: _202.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestFlush;
            fromJSON(_: any): _202.RequestFlush;
            toJSON(_: _202.RequestFlush): unknown;
            fromPartial(_: Partial<_202.RequestFlush>): _202.RequestFlush;
        };
        RequestInfo: {
            encode(message: _202.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestInfo;
            fromJSON(object: any): _202.RequestInfo;
            toJSON(message: _202.RequestInfo): unknown;
            fromPartial(object: Partial<_202.RequestInfo>): _202.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _202.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestSetOption;
            fromJSON(object: any): _202.RequestSetOption;
            toJSON(message: _202.RequestSetOption): unknown;
            fromPartial(object: Partial<_202.RequestSetOption>): _202.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _202.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestInitChain;
            fromJSON(object: any): _202.RequestInitChain;
            toJSON(message: _202.RequestInitChain): unknown;
            fromPartial(object: Partial<_202.RequestInitChain>): _202.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _202.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestQuery;
            fromJSON(object: any): _202.RequestQuery;
            toJSON(message: _202.RequestQuery): unknown;
            fromPartial(object: Partial<_202.RequestQuery>): _202.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _202.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestBeginBlock;
            fromJSON(object: any): _202.RequestBeginBlock;
            toJSON(message: _202.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_202.RequestBeginBlock>): _202.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _202.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestCheckTx;
            fromJSON(object: any): _202.RequestCheckTx;
            toJSON(message: _202.RequestCheckTx): unknown;
            fromPartial(object: Partial<_202.RequestCheckTx>): _202.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _202.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestDeliverTx;
            fromJSON(object: any): _202.RequestDeliverTx;
            toJSON(message: _202.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_202.RequestDeliverTx>): _202.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _202.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestEndBlock;
            fromJSON(object: any): _202.RequestEndBlock;
            toJSON(message: _202.RequestEndBlock): unknown;
            fromPartial(object: Partial<_202.RequestEndBlock>): _202.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _202.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestCommit;
            fromJSON(_: any): _202.RequestCommit;
            toJSON(_: _202.RequestCommit): unknown;
            fromPartial(_: Partial<_202.RequestCommit>): _202.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _202.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestListSnapshots;
            fromJSON(_: any): _202.RequestListSnapshots;
            toJSON(_: _202.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_202.RequestListSnapshots>): _202.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _202.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestOfferSnapshot;
            fromJSON(object: any): _202.RequestOfferSnapshot;
            toJSON(message: _202.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_202.RequestOfferSnapshot>): _202.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _202.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestLoadSnapshotChunk;
            fromJSON(object: any): _202.RequestLoadSnapshotChunk;
            toJSON(message: _202.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_202.RequestLoadSnapshotChunk>): _202.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _202.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.RequestApplySnapshotChunk;
            fromJSON(object: any): _202.RequestApplySnapshotChunk;
            toJSON(message: _202.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_202.RequestApplySnapshotChunk>): _202.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _202.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Response;
            fromJSON(object: any): _202.Response;
            toJSON(message: _202.Response): unknown;
            fromPartial(object: Partial<_202.Response>): _202.Response;
        };
        ResponseException: {
            encode(message: _202.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseException;
            fromJSON(object: any): _202.ResponseException;
            toJSON(message: _202.ResponseException): unknown;
            fromPartial(object: Partial<_202.ResponseException>): _202.ResponseException;
        };
        ResponseEcho: {
            encode(message: _202.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseEcho;
            fromJSON(object: any): _202.ResponseEcho;
            toJSON(message: _202.ResponseEcho): unknown;
            fromPartial(object: Partial<_202.ResponseEcho>): _202.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _202.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseFlush;
            fromJSON(_: any): _202.ResponseFlush;
            toJSON(_: _202.ResponseFlush): unknown;
            fromPartial(_: Partial<_202.ResponseFlush>): _202.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _202.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseInfo;
            fromJSON(object: any): _202.ResponseInfo;
            toJSON(message: _202.ResponseInfo): unknown;
            fromPartial(object: Partial<_202.ResponseInfo>): _202.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _202.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseSetOption;
            fromJSON(object: any): _202.ResponseSetOption;
            toJSON(message: _202.ResponseSetOption): unknown;
            fromPartial(object: Partial<_202.ResponseSetOption>): _202.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _202.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseInitChain;
            fromJSON(object: any): _202.ResponseInitChain;
            toJSON(message: _202.ResponseInitChain): unknown;
            fromPartial(object: Partial<_202.ResponseInitChain>): _202.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _202.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseQuery;
            fromJSON(object: any): _202.ResponseQuery;
            toJSON(message: _202.ResponseQuery): unknown;
            fromPartial(object: Partial<_202.ResponseQuery>): _202.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _202.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseBeginBlock;
            fromJSON(object: any): _202.ResponseBeginBlock;
            toJSON(message: _202.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_202.ResponseBeginBlock>): _202.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _202.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseCheckTx;
            fromJSON(object: any): _202.ResponseCheckTx;
            toJSON(message: _202.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_202.ResponseCheckTx>): _202.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _202.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseDeliverTx;
            fromJSON(object: any): _202.ResponseDeliverTx;
            toJSON(message: _202.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_202.ResponseDeliverTx>): _202.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _202.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseEndBlock;
            fromJSON(object: any): _202.ResponseEndBlock;
            toJSON(message: _202.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_202.ResponseEndBlock>): _202.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _202.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseCommit;
            fromJSON(object: any): _202.ResponseCommit;
            toJSON(message: _202.ResponseCommit): unknown;
            fromPartial(object: Partial<_202.ResponseCommit>): _202.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _202.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseListSnapshots;
            fromJSON(object: any): _202.ResponseListSnapshots;
            toJSON(message: _202.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_202.ResponseListSnapshots>): _202.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _202.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseOfferSnapshot;
            fromJSON(object: any): _202.ResponseOfferSnapshot;
            toJSON(message: _202.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_202.ResponseOfferSnapshot>): _202.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _202.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _202.ResponseLoadSnapshotChunk;
            toJSON(message: _202.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_202.ResponseLoadSnapshotChunk>): _202.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _202.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ResponseApplySnapshotChunk;
            fromJSON(object: any): _202.ResponseApplySnapshotChunk;
            toJSON(message: _202.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_202.ResponseApplySnapshotChunk>): _202.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _202.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ConsensusParams;
            fromJSON(object: any): _202.ConsensusParams;
            toJSON(message: _202.ConsensusParams): unknown;
            fromPartial(object: Partial<_202.ConsensusParams>): _202.ConsensusParams;
        };
        BlockParams: {
            encode(message: _202.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.BlockParams;
            fromJSON(object: any): _202.BlockParams;
            toJSON(message: _202.BlockParams): unknown;
            fromPartial(object: Partial<_202.BlockParams>): _202.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _202.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.LastCommitInfo;
            fromJSON(object: any): _202.LastCommitInfo;
            toJSON(message: _202.LastCommitInfo): unknown;
            fromPartial(object: Partial<_202.LastCommitInfo>): _202.LastCommitInfo;
        };
        Event: {
            encode(message: _202.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Event;
            fromJSON(object: any): _202.Event;
            toJSON(message: _202.Event): unknown;
            fromPartial(object: Partial<_202.Event>): _202.Event;
        };
        EventAttribute: {
            encode(message: _202.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.EventAttribute;
            fromJSON(object: any): _202.EventAttribute;
            toJSON(message: _202.EventAttribute): unknown;
            fromPartial(object: Partial<_202.EventAttribute>): _202.EventAttribute;
        };
        TxResult: {
            encode(message: _202.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.TxResult;
            fromJSON(object: any): _202.TxResult;
            toJSON(message: _202.TxResult): unknown;
            fromPartial(object: Partial<_202.TxResult>): _202.TxResult;
        };
        Validator: {
            encode(message: _202.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Validator;
            fromJSON(object: any): _202.Validator;
            toJSON(message: _202.Validator): unknown;
            fromPartial(object: Partial<_202.Validator>): _202.Validator;
        };
        ValidatorUpdate: {
            encode(message: _202.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ValidatorUpdate;
            fromJSON(object: any): _202.ValidatorUpdate;
            toJSON(message: _202.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_202.ValidatorUpdate>): _202.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _202.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.VoteInfo;
            fromJSON(object: any): _202.VoteInfo;
            toJSON(message: _202.VoteInfo): unknown;
            fromPartial(object: Partial<_202.VoteInfo>): _202.VoteInfo;
        };
        Evidence: {
            encode(message: _202.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Evidence;
            fromJSON(object: any): _202.Evidence;
            toJSON(message: _202.Evidence): unknown;
            fromPartial(object: Partial<_202.Evidence>): _202.Evidence;
        };
        Snapshot: {
            encode(message: _202.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Snapshot;
            fromJSON(object: any): _202.Snapshot;
            toJSON(message: _202.Snapshot): unknown;
            fromPartial(object: Partial<_202.Snapshot>): _202.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _204.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.Proof;
            fromJSON(object: any): _204.Proof;
            toJSON(message: _204.Proof): unknown;
            fromPartial(object: Partial<_204.Proof>): _204.Proof;
        };
        ValueOp: {
            encode(message: _204.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ValueOp;
            fromJSON(object: any): _204.ValueOp;
            toJSON(message: _204.ValueOp): unknown;
            fromPartial(object: Partial<_204.ValueOp>): _204.ValueOp;
        };
        DominoOp: {
            encode(message: _204.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.DominoOp;
            fromJSON(object: any): _204.DominoOp;
            toJSON(message: _204.DominoOp): unknown;
            fromPartial(object: Partial<_204.DominoOp>): _204.DominoOp;
        };
        ProofOp: {
            encode(message: _204.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ProofOp;
            fromJSON(object: any): _204.ProofOp;
            toJSON(message: _204.ProofOp): unknown;
            fromPartial(object: Partial<_204.ProofOp>): _204.ProofOp;
        };
        ProofOps: {
            encode(message: _204.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ProofOps;
            fromJSON(object: any): _204.ProofOps;
            toJSON(message: _204.ProofOps): unknown;
            fromPartial(object: Partial<_204.ProofOps>): _204.ProofOps;
        };
        PublicKey: {
            encode(message: _203.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.PublicKey;
            fromJSON(object: any): _203.PublicKey;
            toJSON(message: _203.PublicKey): unknown;
            fromPartial(object: Partial<_203.PublicKey>): _203.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _205.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.BitArray;
                fromJSON(object: any): _205.BitArray;
                toJSON(message: _205.BitArray): unknown;
                fromPartial(object: Partial<_205.BitArray>): _205.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _206.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.ProtocolVersion;
            fromJSON(object: any): _206.ProtocolVersion;
            toJSON(message: _206.ProtocolVersion): unknown;
            fromPartial(object: Partial<_206.ProtocolVersion>): _206.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _206.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.NodeInfo;
            fromJSON(object: any): _206.NodeInfo;
            toJSON(message: _206.NodeInfo): unknown;
            fromPartial(object: Partial<_206.NodeInfo>): _206.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _206.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.NodeInfoOther;
            fromJSON(object: any): _206.NodeInfoOther;
            toJSON(message: _206.NodeInfoOther): unknown;
            fromPartial(object: Partial<_206.NodeInfoOther>): _206.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _206.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.PeerInfo;
            fromJSON(object: any): _206.PeerInfo;
            toJSON(message: _206.PeerInfo): unknown;
            fromPartial(object: Partial<_206.PeerInfo>): _206.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _206.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.PeerAddressInfo;
            fromJSON(object: any): _206.PeerAddressInfo;
            toJSON(message: _206.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_206.PeerAddressInfo>): _206.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _211.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.ValidatorSet;
            fromJSON(object: any): _211.ValidatorSet;
            toJSON(message: _211.ValidatorSet): unknown;
            fromPartial(object: Partial<_211.ValidatorSet>): _211.ValidatorSet;
        };
        Validator: {
            encode(message: _211.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.Validator;
            fromJSON(object: any): _211.Validator;
            toJSON(message: _211.Validator): unknown;
            fromPartial(object: Partial<_211.Validator>): _211.Validator;
        };
        SimpleValidator: {
            encode(message: _211.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.SimpleValidator;
            fromJSON(object: any): _211.SimpleValidator;
            toJSON(message: _211.SimpleValidator): unknown;
            fromPartial(object: Partial<_211.SimpleValidator>): _211.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _210.BlockIDFlag;
        blockIDFlagToJSON(object: _210.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _210.SignedMsgType;
        signedMsgTypeToJSON(object: _210.SignedMsgType): string;
        BlockIDFlag: typeof _210.BlockIDFlag;
        BlockIDFlagSDKType: typeof _210.BlockIDFlag;
        SignedMsgType: typeof _210.SignedMsgType;
        SignedMsgTypeSDKType: typeof _210.SignedMsgType;
        PartSetHeader: {
            encode(message: _210.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.PartSetHeader;
            fromJSON(object: any): _210.PartSetHeader;
            toJSON(message: _210.PartSetHeader): unknown;
            fromPartial(object: Partial<_210.PartSetHeader>): _210.PartSetHeader;
        };
        Part: {
            encode(message: _210.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Part;
            fromJSON(object: any): _210.Part;
            toJSON(message: _210.Part): unknown;
            fromPartial(object: Partial<_210.Part>): _210.Part;
        };
        BlockID: {
            encode(message: _210.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.BlockID;
            fromJSON(object: any): _210.BlockID;
            toJSON(message: _210.BlockID): unknown;
            fromPartial(object: Partial<_210.BlockID>): _210.BlockID;
        };
        Header: {
            encode(message: _210.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Header;
            fromJSON(object: any): _210.Header;
            toJSON(message: _210.Header): unknown;
            fromPartial(object: Partial<_210.Header>): _210.Header;
        };
        Data: {
            encode(message: _210.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Data;
            fromJSON(object: any): _210.Data;
            toJSON(message: _210.Data): unknown;
            fromPartial(object: Partial<_210.Data>): _210.Data;
        };
        Vote: {
            encode(message: _210.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Vote;
            fromJSON(object: any): _210.Vote;
            toJSON(message: _210.Vote): unknown;
            fromPartial(object: Partial<_210.Vote>): _210.Vote;
        };
        Commit: {
            encode(message: _210.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Commit;
            fromJSON(object: any): _210.Commit;
            toJSON(message: _210.Commit): unknown;
            fromPartial(object: Partial<_210.Commit>): _210.Commit;
        };
        CommitSig: {
            encode(message: _210.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.CommitSig;
            fromJSON(object: any): _210.CommitSig;
            toJSON(message: _210.CommitSig): unknown;
            fromPartial(object: Partial<_210.CommitSig>): _210.CommitSig;
        };
        Proposal: {
            encode(message: _210.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Proposal;
            fromJSON(object: any): _210.Proposal;
            toJSON(message: _210.Proposal): unknown;
            fromPartial(object: Partial<_210.Proposal>): _210.Proposal;
        };
        SignedHeader: {
            encode(message: _210.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.SignedHeader;
            fromJSON(object: any): _210.SignedHeader;
            toJSON(message: _210.SignedHeader): unknown;
            fromPartial(object: Partial<_210.SignedHeader>): _210.SignedHeader;
        };
        LightBlock: {
            encode(message: _210.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.LightBlock;
            fromJSON(object: any): _210.LightBlock;
            toJSON(message: _210.LightBlock): unknown;
            fromPartial(object: Partial<_210.LightBlock>): _210.LightBlock;
        };
        BlockMeta: {
            encode(message: _210.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.BlockMeta;
            fromJSON(object: any): _210.BlockMeta;
            toJSON(message: _210.BlockMeta): unknown;
            fromPartial(object: Partial<_210.BlockMeta>): _210.BlockMeta;
        };
        TxProof: {
            encode(message: _210.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.TxProof;
            fromJSON(object: any): _210.TxProof;
            toJSON(message: _210.TxProof): unknown;
            fromPartial(object: Partial<_210.TxProof>): _210.TxProof;
        };
        ConsensusParams: {
            encode(message: _209.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.ConsensusParams;
            fromJSON(object: any): _209.ConsensusParams;
            toJSON(message: _209.ConsensusParams): unknown;
            fromPartial(object: Partial<_209.ConsensusParams>): _209.ConsensusParams;
        };
        BlockParams: {
            encode(message: _209.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.BlockParams;
            fromJSON(object: any): _209.BlockParams;
            toJSON(message: _209.BlockParams): unknown;
            fromPartial(object: Partial<_209.BlockParams>): _209.BlockParams;
        };
        EvidenceParams: {
            encode(message: _209.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.EvidenceParams;
            fromJSON(object: any): _209.EvidenceParams;
            toJSON(message: _209.EvidenceParams): unknown;
            fromPartial(object: Partial<_209.EvidenceParams>): _209.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _209.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.ValidatorParams;
            fromJSON(object: any): _209.ValidatorParams;
            toJSON(message: _209.ValidatorParams): unknown;
            fromPartial(object: Partial<_209.ValidatorParams>): _209.ValidatorParams;
        };
        VersionParams: {
            encode(message: _209.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.VersionParams;
            fromJSON(object: any): _209.VersionParams;
            toJSON(message: _209.VersionParams): unknown;
            fromPartial(object: Partial<_209.VersionParams>): _209.VersionParams;
        };
        HashedParams: {
            encode(message: _209.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.HashedParams;
            fromJSON(object: any): _209.HashedParams;
            toJSON(message: _209.HashedParams): unknown;
            fromPartial(object: Partial<_209.HashedParams>): _209.HashedParams;
        };
        Evidence: {
            encode(message: _208.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.Evidence;
            fromJSON(object: any): _208.Evidence;
            toJSON(message: _208.Evidence): unknown;
            fromPartial(object: Partial<_208.Evidence>): _208.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _208.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.DuplicateVoteEvidence;
            fromJSON(object: any): _208.DuplicateVoteEvidence;
            toJSON(message: _208.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_208.DuplicateVoteEvidence>): _208.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _208.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.LightClientAttackEvidence;
            fromJSON(object: any): _208.LightClientAttackEvidence;
            toJSON(message: _208.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_208.LightClientAttackEvidence>): _208.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _208.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.EvidenceList;
            fromJSON(object: any): _208.EvidenceList;
            toJSON(message: _208.EvidenceList): unknown;
            fromPartial(object: Partial<_208.EvidenceList>): _208.EvidenceList;
        };
        Block: {
            encode(message: _207.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.Block;
            fromJSON(object: any): _207.Block;
            toJSON(message: _207.Block): unknown;
            fromPartial(object: Partial<_207.Block>): _207.Block;
        };
    };
    const version: {
        App: {
            encode(message: _212.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.App;
            fromJSON(object: any): _212.App;
            toJSON(message: _212.App): unknown;
            fromPartial(object: Partial<_212.App>): _212.App;
        };
        Consensus: {
            encode(message: _212.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.Consensus;
            fromJSON(object: any): _212.Consensus;
            toJSON(message: _212.Consensus): unknown;
            fromPartial(object: Partial<_212.Consensus>): _212.Consensus;
        };
    };
}
