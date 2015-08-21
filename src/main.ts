/// <reference path="definitions/tsd.d.ts" />
import * as core from 'cu-core';
import events from 'cu-events';
const characterEvent = events.on("character", (data: any) => {
    console.dir('character data ' + JSON.stringify(data));
});
const enemyTargetEvent = events.on("enemytarget", (data: any) => {
    console.dir('enemytarget data ' + JSON.stringify(data));
});
const friendlyTargetEvent = events.on("friendlytarget", (data: any) => {
    console.dir('friendlytarget data ' + JSON.stringify(data));
});
