import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Endpoint {
    iPPORT: string;
    useType: string;
    geolocation: Long;
}
export interface EndpointSDKType {
    iPPORT: string;
    useType: string;
    geolocation: Long;
}
export declare const Endpoint: {
    encode(message: Endpoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint;
    fromJSON(object: any): Endpoint;
    toJSON(message: Endpoint): unknown;
    fromPartial(object: Partial<Endpoint>): Endpoint;
};
