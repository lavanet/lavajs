import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Subscription {
    /** creator pays for the subscription */
    creator: string;
    /** consumer uses the subscription */
    consumer: string;
    /** when the subscription was created */
    block: Long;
    /** index (name) of plan */
    planIndex: string;
    /** when the plan was created */
    planBlock: Long;
    /** total requested duration in months */
    durationTotal: Long;
    /** remaining duration in months */
    durationLeft: Long;
    /** expiry time of current month */
    monthExpiryTime: Long;
    /** when previous month expired */
    prevExpiryBlock: Long;
    /** CU allowance during current month */
    monthCuTotal: Long;
    /** CU remaining during current month */
    monthCuLeft: Long;
    /** CU remaining for previous month */
    prevCuLeft: Long;
}
export interface SubscriptionSDKType {
    creator: string;
    consumer: string;
    block: Long;
    plan_index: string;
    plan_block: Long;
    duration_total: Long;
    duration_left: Long;
    month_expiry_time: Long;
    prev_expiry_block: Long;
    month_cu_total: Long;
    month_cu_left: Long;
    prev_cu_left: Long;
}
export declare const Subscription: {
    encode(message: Subscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subscription;
    fromJSON(object: any): Subscription;
    toJSON(message: Subscription): unknown;
    fromPartial(object: Partial<Subscription>): Subscription;
};
