/// <reference path="../client.d.ts" />

declare interface MpGameVehicle {
    getRandomVehicleModelInMemory(p0: boolean, modelHash: number, p2: number): MpVehicleRandomVehicleModel;
    hasPreloadModsFinished(p0: object): boolean;
    getTotalDurationOfVehicleRecording(p0: object, p1: object): object;
    setVehicleModelIsSuppressed(model: number | string, suppressed: boolean): void;
    getTotalDurationOfVehicleRecordingId(p0: object): number;
    hasVehicleAssetLoaded(vehicleAsset: number): boolean;
    isPlaybackGoingOnForVehicle(p0: object): boolean;
    getRotationOfVehicleRecordingAtTime(p0: object, p1: number, p2: object): number;
    getVehicleRecordingId(p0: object, p1: object): object;
    deleteScriptVehicleGenerator(vehicleGenerator: number): void;
    setVehicleDensityMultiplierThisFrame(multiplier: number): void;
    setFarDrawVehicles(toggle: boolean): void;
    startPlaybackRecordedVehicleUsingAi(p0: object, p1: object, p2: object, p3: number, p4: object): void;
    getVehicleModelMaxNumberOfPassengers(modelHash: number | string): number;
    setGarbageTrucks(toggle: boolean): object;
    getPositionInRecording(p0: object): number;
    getVehicleinterfaceMaxAcceleration(p0: object): number;
    addVehicleStuckCheckWithWarp(p0: object, p1: number, p2: object, p3: boolean, p4: boolean, p5: boolean, p6: object): void;
    hasVehicleRecordingBeenLoaded(p0: object, p1: object): boolean;
    getRandomVehicleInSphere(x: number, y: number, z: number, radius: number, modelHash: number | string, flags: number): MpVehicle | object;
    isThisModelAQuadbike(model: number | string): boolean;
    startPlaybackRecordedVehicle(p0: object, p1: object, p2: object, p3: boolean): void;
    getCurrentPlaybackForVehicle(p0: object): object;
    isThisModelABoat(model: number | string): boolean;
    removeVehiclesFromGeneratorsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unk: object): void;
    getVehicleinterfaceMaxBraking(p0: object): number;
    getVehicleinterfaceMaxAgility(p0: object): number;
    getVehicleModelMaxTraction(modelHash: number | string): number;
    stopPlaybackRecordedVehicle(p0: object): void;
    getTimePositionInRecording(p0: object): number;
    deleteMissionTrain(train: MpVehicle): MpVehicle;
    setAllLowPriorityVehicleGeneratorsActive(active: boolean): void;
    isAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): boolean;
    pausePlaybackRecordedVehicle(p0: object): void;
    createMissionTrain(variation: number, x: number, y: number, z: number, direction: boolean): MpVehicle | object;
    setPlaybackSpeed(p0: object, speed: number): object;
    setPlaybackToUseAiTryToRevertBackLater(p0: object, p1: object, p2: object, p3: boolean): void;
    setVehicleShootAtTarget(driver: MpPed | object, entity: MpEntity | object, xTarget: number, yTarget: number, zTarget: number): void;
    preloadVehicleMod(p0: object, p1: object, p2: object): void;
    startPlaybackRecordedVehicleWithFlags(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object): void;
    isCopVehicleInArea3d(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): boolean;
    isThisModelACar(model: number | string): boolean;
    setRandomTrains(toggle: boolean): void;
    requestVehicleAsset(vehicleHash: number | string, vehicleAsset: number): void;
    removeVehicleStuckCheck(p0: object): void;
    setRandomBoats(toggle: boolean): object;
    setCargobobHookPosition(p0: object, p1: number, p2: number, p3: boolean): void;
    unpausePlaybackRecordedVehicle(p0: object): void;
    getVehicleModelAcceleration(modelHash: number | string): number;
    skipTimeInPlaybackRecordedVehicle(p0: object, p1: number): void;
    isThisModelAnEmergencyBoat(model: number | string): boolean;
    doesVehicleExistWithDecorator(decorator: string): boolean;
    createScriptVehicleGenerator(x: number, y: number, z: number, heading: number, p4: number, p5: number, modelHash: number | string, p7: number, p8: number, p9: number, p10: number, p11: boolean, p12: boolean, p13: boolean, p14: boolean, p15: boolean, p16: number): number;
    isThisModelAPlane(model: number | string): boolean;
    getNumModColors(p0: number, p1: boolean): number;
    skipToEndAndStopPlaybackRecordedVehicle(p0: object): void;
    isThisModelATrain(model: number | string): boolean;
    removeVehicleAsset(vehicleAsset: number): void;
    isPlaybackUsingAiGoingOnForVehicle(p0: object): boolean;
    createVehicle(modelHash: number | string, x: number, y: number, z: number, heading: number, networkHandle: boolean, vehiclehandle: boolean): object;
    requestVehicleRecording(p0: object, p1: object): void;
    getDisplayNameFromVehicleModel(modelHash: number | string): string;
    setRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;
    getRandomVehicleBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): MpVehicle | object;
    isThisModelABike(model: number | string): boolean;
    setMissionTrainAsNoLongerNeeded(train: MpVehicle, p1: boolean): MpVehicle;
    isThisModelABicycle(model: number | string): boolean;
    setAllVehicleGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): void;
    getRandomVehicleFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): MpVehicle | object;
    setNumberOfParkedVehicles(value: number): object;
    isVehicleInGarageArea(garageName: string, vehicle: MpVehicle | object): boolean;
    getPositionOfVehicleRecordingAtTime(p0: object, p1: number, p2: object): number;
    setScriptVehicleGenerator(vehicleGenerator: object, enabled: boolean): void;
    getVehicleinterfaceMaxTraction(p0: object): number;
    getVehicleModelMaxBraking(modelHash: number | string): number;
    isThisModelAHeli(model: number | string): boolean;
    getVehicleinterfaceFromName(modelHash: number | string): number;
    setParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;
    removeVehicleRecording(p0: object, p1: object): void;
    getVehicleModelMaxSpeed(modelHash: number | string): number;
    disableVehicleWeapon(disabled: boolean, weaponHash: number | string, vehicle: MpVehicle | object, owner: MpPed | object): void;
    doesScriptVehicleGeneratorExist(vehicleGenerator: number): boolean;
    getClosestVehicle(x: number, y: number, z: number, radius: number, modelHash: number | string, flags: number): MpVehicle | object;
    displayDistantVehicles(toggle: boolean): void;
    switchTrainTrack(intersectionId: number, state: boolean): object;
}
