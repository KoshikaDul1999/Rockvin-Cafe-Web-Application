/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
export type CallSummaryAnsweredBy = "unknown" | "machine_start" | "machine_end_beep" | "machine_end_silence" | "machine_end_other" | "human" | "fax";
export type CallSummaryCallState = "ringing" | "completed" | "busy" | "fail" | "noanswer" | "canceled" | "answered" | "undialed";
export type CallSummaryCallType = "carrier" | "sip" | "trunking" | "client";
export type CallSummaryProcessingState = "complete" | "partial";
/**
 * Options to pass to fetch a CallSummaryInstance
 */
export interface CallSummaryContextFetchOptions {
    /**  */
    processingState?: CallSummaryProcessingState;
}
export interface CallSummaryContext {
    /**
     * Fetch a CallSummaryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed CallSummaryInstance
     */
    fetch(callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
    /**
     * Fetch a CallSummaryInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed CallSummaryInstance
     */
    fetch(params: CallSummaryContextFetchOptions, callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CallSummaryContextSolution {
    callSid: string;
}
export declare class CallSummaryContextImpl implements CallSummaryContext {
    protected _version: V1;
    protected _solution: CallSummaryContextSolution;
    protected _uri: string;
    constructor(_version: V1, callSid: string);
    fetch(params?: CallSummaryContextFetchOptions | ((error: Error | null, item?: CallSummaryInstance) => any), callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CallSummaryContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CallSummaryResource {
    account_sid: string;
    call_sid: string;
    call_type: CallSummaryCallType;
    call_state: CallSummaryCallState;
    answered_by: CallSummaryAnsweredBy;
    processing_state: CallSummaryProcessingState;
    created_time: Date;
    start_time: Date;
    end_time: Date;
    duration: number;
    connect_duration: number;
    from: any;
    to: any;
    carrier_edge: any;
    client_edge: any;
    sdk_edge: any;
    sip_edge: any;
    tags: Array<string>;
    url: string;
    attributes: any;
    properties: any;
    trust: any;
    annotation: any;
}
export declare class CallSummaryInstance {
    protected _version: V1;
    protected _solution: CallSummaryContextSolution;
    protected _context?: CallSummaryContext;
    constructor(_version: V1, payload: CallSummaryResource, callSid: string);
    accountSid: string;
    callSid: string;
    callType: CallSummaryCallType;
    callState: CallSummaryCallState;
    answeredBy: CallSummaryAnsweredBy;
    processingState: CallSummaryProcessingState;
    createdTime: Date;
    startTime: Date;
    endTime: Date;
    duration: number;
    connectDuration: number;
    from: any;
    to: any;
    carrierEdge: any;
    clientEdge: any;
    sdkEdge: any;
    sipEdge: any;
    tags: Array<string>;
    url: string;
    attributes: any;
    properties: any;
    trust: any;
    annotation: any;
    private get _proxy();
    /**
     * Fetch a CallSummaryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed CallSummaryInstance
     */
    fetch(callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
    /**
     * Fetch a CallSummaryInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed CallSummaryInstance
     */
    fetch(params: CallSummaryContextFetchOptions, callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        callSid: string;
        callType: CallSummaryCallType;
        callState: CallSummaryCallState;
        answeredBy: CallSummaryAnsweredBy;
        processingState: CallSummaryProcessingState;
        createdTime: Date;
        startTime: Date;
        endTime: Date;
        duration: number;
        connectDuration: number;
        from: any;
        to: any;
        carrierEdge: any;
        clientEdge: any;
        sdkEdge: any;
        sipEdge: any;
        tags: string[];
        url: string;
        attributes: any;
        properties: any;
        trust: any;
        annotation: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CallSummarySolution {
    callSid: string;
}
export interface CallSummaryListInstance {
    _version: V1;
    _solution: CallSummarySolution;
    _uri: string;
    (): CallSummaryContext;
    get(): CallSummaryContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function CallSummaryListInstance(version: V1, callSid: string): CallSummaryListInstance;
export {};
