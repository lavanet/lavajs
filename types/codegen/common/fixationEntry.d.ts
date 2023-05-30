import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Entry {
    /** unique entry index (i.e. list key) */
    index: string;
    /** block when the entry was created */
    block: Long;
    /** block when the entry becomes stale */
    staleAt: Long;
    /** reference count */
    refcount: Long;
    /** the data saved in the entry */
    data: Uint8Array;
    /** block when the entry becomes deleted */
    deleteAt: Long;
}
export interface EntrySDKType {
    index: string;
    block: Long;
    stale_at: Long;
    refcount: Long;
    data: Uint8Array;
    delete_at: Long;
}
export declare const Entry: {
    encode(message: Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Entry;
    fromJSON(object: any): Entry;
    toJSON(message: Entry): unknown;
    fromPartial(object: Partial<Entry>): Entry;
};
