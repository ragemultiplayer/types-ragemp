/// <reference path="../client.d.ts" />

declare interface MpGameUi {
    hasAdditionalTextLoaded(slot: number): boolean;
    flashAbilityBar(p0: object): void;
    setTextProportional(p0: boolean): void;
    addTextComponentInteger(value: number): void;
    setPlayerCashChange(cash: number, bank: number): void;
    setTextScale(sizex: number, sizey: number): void;
    setRadarZoom(zoomLevel: number): void;
    showHudComponentThisFrame(id: number): void;
    addTextComponentSubstringCash(cashAmount: number, p1: boolean): void;
    restartFrontendMenu(menuHash: number | string, p1: number): void;
    addTextComponentSubstringTime(timestamp: number, flags: number): void;
    isNamedRendertargetLinked(hash: number | string): boolean;
    lockMinimapPosition(x: number, y: number): void;
    getTextSubstring(text: string, position: number, length: number): string;
    addTextComponentSubstringLocalized(gxtEntryHash: number | string): void;
    setNotificationFlashColor(red: number, green: number, blue: number, alpha: number): void;
    keyHudColour(p0: boolean, p1: object): void;
    getNamedRendertargetRenderId(p0: string): object;
    doesTextBlockExist(gxt: string): boolean;
    setNotificationMessage(picName1: string, picName2: string, flash: boolean, iconType: MpGameUiIconTypes, sender: string, subject: string): number;
    setTextChatUnk(p0: boolean): void;
    setNotificationTextEntry(type: string): void;
    getHudComponentPosition(p0: object): number;
    setRadarBigmapEnabled(toggleBigMap: boolean, showFullMap: boolean): void;
    displayHelpTextFromStringLabel(p0: object, loop: boolean, beep: boolean, shape: number): void;
    setTextEntry(text: string): void;
    displayAreaName(toggle: boolean): void;
    lockMinimapAngle(angle: number): void;
    clearAdditionalText(p0: number, p1: boolean): void;
    drawNotification(blink: boolean, p1: boolean): number;
    setGpsFlashes(toggle: boolean): void;
    drawNotification3(blink: boolean, p1: boolean): number;
    hideSpecialAbilityLockonOperation(p0: object, p1: boolean): void;
    setTextEdge(p0: number, r: number, g: number, b: number, a: number): void;
    drawNotification2(blink: boolean, p1: boolean): number;
    resetHudComponentValues(id: number): void;
    setTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void;
    addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): MpBlip;
    enableDeathbloodSeethrough(p0: boolean): void;
    setTextJustification(justifyType: MpGameUiJustifyTypes): void;
    hasHeadDisplayLoaded(headDisplayId: number): boolean;
    clearFloatingHelp(p0: object, p1: boolean): void;
    setTextGxtEntry(entry: string): void;
    setNotificationMessageClanTag2(picName1: string, picName2: string, flash: boolean, iconType1: MpGameUiIconTypes, sender: string, subject: string, duration: number, clanTag: string, iconType2: MpGameUiIconTypes, p9: number): number;
    setTextEntryForWidth(text: string): void;
    registerNamedRendertarget(p0: string, p1: boolean): boolean;
    setMinimapBlockWaypoint(toggle: boolean): void;
    addTrevorRandomModifier(headDisplayId: number): boolean;
    setRadarAsInteriorThisFrame(interior: number | string, x: number, y: number, z: number, p4: number): void;
    addBlipForCoord(x: number, y: number, z: number): MpBlip;
    objectDecalToggle(hash: number | string): void;
    setGpsFlags(p0: number, p1: number): void;
    setNotificationMessageClanTag(picName1: string, picName2: string, flash: boolean, iconType: MpGameUiIconTypes, sender: string, subject: string, duration: number, clanTag: string): number;
    setTextRenderId(renderId: number): void;
    setMissionName(p0: boolean, name: string): void;
    requestAdditionalText2(gxt: string, slot: number): void;
    addNextMessageToPreviousBriefs(p0: boolean): void;
    setTextWrap(start: number, end: number): void;
    setHeadDisplayFlag(headDisplayId: MpGameUiHeadDisplayFlag, sprite: number, toggle: boolean): void;
    setTextFont(fontType: number): void;
    hideHudComponentThisFrame(id: number): void;
    toggleStealthRadar(toggle: boolean): void;
    setTextRightJustify(toggle: boolean): void;
    addTextComponentSubstringPlayerName(text: string): void;
    isMinimapAreaRevealed(x: number, y: number, radius: number): boolean;
    setWarningMessage3(entryHeader: string, entryLine1: string, instructionalKey: object, entryLine2: string, p4: object, p5: object, p6: object, p7: object, p8: object, p9: boolean): void;
    requestAdditionalText(gxt: string, slot: number): void;
    setFrontendActive(active: boolean): void;
    setMinimapComponent(p0: number, p1: boolean, p2: number): object;
    setPlayerBlipPositionThisFrame(x: number, y: number): void;
    isNamedRendertargetRegistered(p0: string): boolean;
    setWarningMessage(entryLine1: string, instructionalKey: number, entryLine2: string, p3: boolean, p4: object, p5: object, p6: object, background: boolean): void;
    getLabelText(labelName: string): string;
    getHudColour(hudIndex: number, r: number, g: number, b: number, a: number): MpGameUiHudColorData;
    getLengthOfStringWithThisTextLabel(gxt: string): number;
    setTextComponentFormat(inputType: string): void;
    getTextScreenWidth(p0: boolean): number;
    removeBlip(blip: MpBlip): MpBlip;
    isStreamingAdditionalText(p0: number): boolean;
    setCursorSprite(spriteId: number): void;
    clearHelp(toggle: boolean): void;
    setMinimapVisible(toggle: boolean): void;
    addTextComponentSubstringWebsite(website: string): void;
    displayHelpTextThisFrame(message: string, p1: boolean): void;
    displayCash(toggle: boolean): void;
    setAbilityBarValue(p0: number, p1: number): void;
    drawSubtitleTimed(time: number, p1: boolean): void;
    displayRadar(Toggle: boolean): object;
    flashWantedDisplay(p0: boolean): object;
    setTextLeading(p0: boolean): void;
    displayAmmoThisFrame(display: boolean): void;
    displayHud(toggle: boolean): void;
    setHudComponentPosition(id: number, p1: number, p2: number): void;
    setLoadingPromptTextEntry(string: string): void;
    doesTextLabelExist(gxt: string): boolean;
    hasThisAdditionalTextLoaded(gxt: string, slot: number): boolean;
    getTextSubstringSafe(text: string, position: number, length: number, maxLength: number): string;
    setTextEntry2(p0: string): void;
    isHudComponentActive(id: MpGameUiHudComponentIds): boolean;
    respondingAsTemp(p0: number): void;
    showLoadingPrompt(busySpinnerType: number): void;
    addBlipForPickup(pickup: MpPickup): MpBlip;
    removeNotification(notifactionId: number): void;
    setTextColour(red:  number, green:  number, blue:  number, alpha:  number): void;
    setTextCentre(align: boolean): void;
    setWidescreenFormat(p0: object): void;
    addTextComponentItemString(labelName: string): void;
    setRadarZoomLevelThisFrame(zoomLevel: number): void;
    drawText(x: number, y: number): void;
    getTextSubstringSlice(text: string, startPosition: number, endPosition: number): string;
    setHeadDisplayWanted(headDisplayId: number, wantedlvl: number): void;
    clearThisPrint(p0:string): void;
    getStreetNameFromHashKey(hash: number | string): string;
    setMinimapAttitudeIndicatorLevel(altitude: number, p1: boolean): void;
    getTextScaleHeight(size: number, font: number): number;
    setWarningMessage2(entryHeader: string, entryLine1: string, instructionalKey: number, entryLine2: string, p4: boolean, p5: object, p6: object, p7: object, background: boolean): void;
    isScriptedHudComponentActive(id: number): boolean;
    setHeadDisplayString(headDisplayId: number, string: string): void;
    setPauseMenuActive(toggle: boolean): void;
    isPauseMenuActive(): boolean;
    hideScriptedHudComponentThisFrame(id: number): void;
    addTextComponentFloat(value: number, decimalPlaces: number): void;
    releaseNamedRendertarget(p0: object): boolean;
    showWeaponWheel(forcedShow: boolean): void;
    activateFrontendMenu(menuhash: number | string, Toggle_Pause: boolean, p2: number): void;
    setUseridsUihidden(p0: object, p1: object): boolean;
    drawNotification4(blink: boolean, p1: boolean): number;
    getLengthOfLiteralString(string: string): number;
    setHudColour(hudIndex: number, r: number, g: number, b: number, a: number): void;
    linkNamedRendertarget(hash: number | string): void;
    setMinimapRevealed(toggle: boolean): void;
    beginTextCommandSetBlipName(gxtentry: string): void;
    getBlipInfoIdCoord(p0: number): MpVector3;
    setMultiplayerHudCash(p0: number, p1: number): void;
    setNewWaypoint(x: number, y: number): void;
}

interface MpGameUiHudColorData {
    hudIndex: number;
    r: number;
    g: number;
    b: number;
    a: number;
}

declare enum MpGameUiIconTypes {
    chatBox = 1,
    email = 2,
    addFriendRequest = 3,
    nothing1 = 4,
    nothing2 = 5,
    nothing3 = 6,
    rightJumpingArrow = 7,
    rpIcon = 8,
    dollarIcon = 9
}

declare enum MpGameUiJustifyTypes {
    centerJustify = 0,
    leftJustify = 1,
    rightJustify = 2
}

declare enum MpGameUiHeadDisplayFlag {
    TextWithOutline = 0,
    NoneEmpty,
    HealthBar,
    AudioSpeaker,
    FlagOrPaused,
    Flag,
    PassiveMode,
    WantedStar,
    SteeringWheel,
    Headset,
    HighlightPlayer,
    TextNoOutline,
    ArrowDown,
    BreifCase,
    LittleUser,
    RankNumber,
    VoiceIndicator
}

declare enum MpGameUiHudComponentIds {
    hud = 0,
    hudWantedStars = 1,
    hudWeaponIcon = 2,
    hudCash = 3,
    hudMpCash = 4,
    hudMpMessage = 5,
    hudVehicleName = 6,
    hudAreaName = 7,
    hudVehicleinterface = 8,
    hudStreetName = 9,
    hudHelpText = 10,
    hudFloatingHelpText1 = 11,
    hudFloatingHelpText2 = 12,
    hudCashChange = 13,
    hudReticle = 14,
    hudSubtitleText = 15,
    hudRadioStations = 16,
    hudSavingGame = 17,
    hudGameStream = 18,
    hudWeaponWheel = 19,
    hudWeaponWheelStats = 20,
    maxHudComponents = 21,
    maxHudWeapons = 22,
    maxScriptedHudComponents = 141
}
