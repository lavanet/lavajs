import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Policy, PolicySDKType } from "../projects/project";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Plan {
    index: string;
    /** the epoch that this plan was created */
    block: Long;
    /** plan price (in ulava) */
    price?: Coin;
    /** allow CU overuse flag */
    allowOveruse: boolean;
    /** price of CU overuse */
    overuseRate: Long;
    /** plan description (for humans) */
    description: string;
    /** plan type */
    type: string;
    /** discount for buying the plan for a year */
    annualDiscountPercentage: Long;
    planPolicy?: Policy;
}
export interface PlanSDKType {
    index: string;
    block: Long;
    price?: CoinSDKType;
    allow_overuse: boolean;
    overuse_rate: Long;
    description: string;
    type: string;
    annual_discount_percentage: Long;
    plan_policy?: PolicySDKType;
}
export declare const Plan: {
    encode(message: Plan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Plan;
    fromJSON(object: any): Plan;
    toJSON(message: Plan): unknown;
    fromPartial(object: Partial<Plan>): Plan;
};
