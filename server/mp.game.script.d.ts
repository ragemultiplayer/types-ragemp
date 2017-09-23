/// <reference path="../index.d.ts" />

declare module mp.game {
    class script {
        static getThreadName(threadId: number): string;
        static getEventdata(p0: number, eventIndex: number, eventData: number, p3: number): number;
        static getNumberOfInstancesOfStreamedScript(scriptHash: string | number): number;
        static isThreadActive(threadId: number): boolean;
        static setNoLoadingScreen(toggle: boolean);
        static triggerScriptEvent(p0: number, argsStruct: mp.Vector3, argsStructSize: number, bitset: number): mp.Vector3;
        static hasStreamedScriptLoaded(scriptHash: string | number): boolean;
        static getNumberOfEvents(p0: number): number;
        static requestScript(scriptName: string);
        static getEventExists(p0: number, eventIndex: number): boolean;
        static setStreamedScriptAsNoLongerNeeded(scriptHash: string | number);
        static terminateThread(threadId: number);
        static setScriptAsNoLongerNeeded(scriptName: string);
        static requestStreamedScript(scriptHash: string | number);
        static getEventAtIndex(p0: number, eventIndex: number): number;
        static hasScriptLoaded(scriptName: string): boolean;
        static isStreamedScriptRunning(scriptHash: string | number): boolean;
        static doesScriptExist(scriptName: string): boolean;
    }
}