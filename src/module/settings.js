import {CONST} from "./const.js";

export const registerSettings = () => {

    game.settings.register(CONST.MODULE_NAME, "font", {
        name: game.i18n.localize("pb.font"),
        hint: game.i18n.localize("pb.font-hint"),
        scope: "client",
        type: String,
        default: "Signika",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "font-size", {
        name: game.i18n.localize("pb.font-size"),
        hint: game.i18n.localize("pb.font-size-hint"),
        scope: "client",
        type: String,
        default: "var(--font-size-18)",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "labelBgColor", {
        name: game.i18n.localize("pb.label-bg-color"),
        hint: game.i18n.localize("pb.label-bg-color-hint"),
        scope: "client",
        type: String,
        default: "#FFFFFF",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "height", {
        name: game.i18n.localize("pb.height"),
        hint: game.i18n.localize("pb.height-hint"),
        scope: "client",
        type: Number,
        default: "500",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "width", {
        name: game.i18n.localize("pb.width"),
        hint: game.i18n.localize("pb.width-hint"),
        scope: "client",
        type: Number,
        default: "300",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "mask", {
        name: game.i18n.localize("pb.mask"),
        hint: game.i18n.localize("pb.mask-hint"),
        scope: "client",
        type: String,
        default: `modules/${CONST.MODULE_NAME}/assets/mask-wiggle.svg`,
        config: true,
        filePicker: "image",
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "anchor", {
        name: game.i18n.localize("pb.anchor"),
        hint: game.i18n.localize("pb.anchor-hint"),
        scope: "client",
        type: String,
        default: "a",
        choices: {
            "a": game.i18n.localize("pb.top-left"),
            "b": game.i18n.localize("pb.top-right"),
            "c": game.i18n.localize("pb.bottom-right"),
            "d": game.i18n.localize("pb.bottom-left")
        },
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "horizontal", {
        name: game.i18n.localize("pb.horizontal"),
        hint: game.i18n.localize("pb.horizontal-hint"),
        scope: "client",
        type: String,
        default: "5em",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "vertical", {
        name: game.i18n.localize("pb.vertical"),
        hint: game.i18n.localize("pb.vertical-hint"),
        scope: "client",
        type: String,
        default: "5em",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "usedImgForBound", {
        name: game.i18n.localize("pb.for-bound"),
        hint: game.i18n.localize("pb.for-bound-hint"),
        scope: "world",
        type: String,
        default: "a",
        choices: {
            "a": game.i18n.localize("pb.actor-img"),
            "b": game.i18n.localize("pb.token-img"),
        },
        config: true,
        requiresReload: true,
    });

    game.settings.register(CONST.MODULE_NAME, "usedImgForUnbound", {
        name: game.i18n.localize("pb.for-unbound"),
        hint: game.i18n.localize("pb.for-unbound-hint"),
        scope: "world",
        type: String,
        default: "a",
        choices: {
            "a": game.i18n.localize("pb.actor-img"),
            "b": game.i18n.localize("pb.token-img"),
        },
        config: true,
        requiresReload: true,
    });

    game.settings.register(CONST.MODULE_NAME, "animation", {
        name: game.i18n.localize("pb.animation"),
        hint: game.i18n.localize("pb.animation-hint"),
        scope: "client",
        type: String,
        default: "heartBeat",
        choices: CONST.ANIMATIONS,
        config: true,
    });

    game.settings.register(CONST.MODULE_NAME, "outAnimation", {
        name: game.i18n.localize("pb.out-animation"),
        hint: game.i18n.localize("pb.out-animation-hint"),
        scope: "client",
        type: String,
        default: "no-animation",
        choices: CONST.ANIMATIONS,
        config: true,
    });

};
