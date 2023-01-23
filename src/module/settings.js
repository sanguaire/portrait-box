import {CONST} from "./const.js";

export const registerSettings = () => {

    game.settings.register(CONST.MODULE_NAME, "showLabel", {
        name: game.i18n.localize("pb.show-label"),
        hint: game.i18n.localize("pb.show-label-hint"),
        scope: "world",
        type: Boolean,
        default: true,
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "font", {
        name: game.i18n.localize("pb.font"),
        hint: game.i18n.localize("pb.font-hint"),
        scope: "world",
        type: String,
        default: "Signika",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "fontSize", {
        name: game.i18n.localize("pb.font-size"),
        hint: game.i18n.localize("pb.font-size-hint"),
        scope: "world",
        type: String,
        default: "var(--font-size-18)",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "labelVertical", {
        name: game.i18n.localize("pb.label-vertical"),
        hint: game.i18n.localize("pb.label-vertical-hint"),
        scope: "world",
        type: String,
        default: "0.5em",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "labelBgColor", {
        name: game.i18n.localize("pb.label-bg-color"),
        hint: game.i18n.localize("pb.label-bg-color-hint"),
        scope: "world",
        type: String,
        default: "#FFFFFF",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "height", {
        name: game.i18n.localize("pb.height"),
        hint: game.i18n.localize("pb.height-hint"),
        scope: "world",
        type: Number,
        default: "200",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "width", {
        name: game.i18n.localize("pb.width"),
        hint: game.i18n.localize("pb.width-hint"),
        scope: "world",
        type: Number,
        default: "200",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "imageFilter", {
        name: game.i18n.localize("pb.image-filter"),
        hint: game.i18n.localize("pb.image-filter-hint"),
        scope: "world",
        type: String,
        default: "",
        config: true,
        requiresReload: true,
    });

    game.settings.register(CONST.MODULE_NAME, "mask", {
        name: game.i18n.localize("pb.mask"),
        hint: game.i18n.localize("pb.mask-hint"),
        scope: "world",
        type: String,
        default: `modules/${CONST.MODULE_NAME}/assets/mask-wiggle.svg`,
        config: true,
        filePicker: "image",
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "border", {
        name: game.i18n.localize("pb.border"),
        hint: game.i18n.localize("pb.border-hint"),
        scope: "world",
        type: String,
        default: ``,
        config: true,
        filePicker: "image",
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "background", {
        name: game.i18n.localize("pb.background"),
        hint: game.i18n.localize("pb.background-hint"),
        scope: "world",
        type: String,
        default: ``,
        config: true,
        filePicker: "image",
        requiresReload: true,
    });

    game.settings.register(CONST.MODULE_NAME, "backgroundFilter", {
        name: game.i18n.localize("pb.background-filter"),
        hint: game.i18n.localize("pb.background-filter-hint"),
        scope: "world",
        type: String,
        default: "",
        config: true,
        requiresReload: true,
    });

    game.settings.register(CONST.MODULE_NAME, "anchor", {
        name: game.i18n.localize("pb.anchor"),
        hint: game.i18n.localize("pb.anchor-hint"),
        scope: "world",
        type: String,
        default: "b",
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
        scope: "world",
        type: String,
        default: "1em",
        config: true,
        requiresReload: true,

    });

    game.settings.register(CONST.MODULE_NAME, "vertical", {
        name: game.i18n.localize("pb.vertical"),
        hint: game.i18n.localize("pb.vertical-hint"),
        scope: "world",
        type: String,
        default: "1em",
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

    game.settings.register(CONST.MODULE_NAME, "showForPc", {
        name: game.i18n.localize("pb.show-for-pc"),
        hint: game.i18n.localize("pb.show-for-pc-hint"),
        scope: "world",
        type: Boolean,
        default: true,
        config: true,
        requiresReload: true,
    });

    game.settings.register(CONST.MODULE_NAME, "showForLinkedGmToken", {
        name: game.i18n.localize("pb.show-for-linked-gm-token"),
        hint: game.i18n.localize("pb.show-for-linked-gm-token-hint"),
        scope: "world",
        type: Boolean,
        default: true,
        config: true,
        requiresReload: true,
    });

    game.settings.register(CONST.MODULE_NAME, "showForUnlinkedGmToken", {
        name: game.i18n.localize("pb.show-for-unlinked-gm-token"),
        hint: game.i18n.localize("pb.show-for-unlinked-gm-token-hint"),
        scope: "world",
        type: Boolean,
        default: true,
        config: true,
        requiresReload: true,
    });

    game.settings.register(CONST.MODULE_NAME, "animation", {
        name: game.i18n.localize("pb.animation"),
        hint: game.i18n.localize("pb.animation-hint"),
        scope: "world",
        type: String,
        default: "no-animation",
        choices: CONST.ANIMATIONS,
        config: true,
        requiresReload: true,
    });

    game.settings.register(CONST.MODULE_NAME, "animationDuration", {
        name: game.i18n.localize("pb.animation-duration"),
        scope: "world",
        type: String,
        default: "1s",
        config: true,
        requiresReload: true,
    });

    game.settings.register(CONST.MODULE_NAME, "outAnimation", {
        name: game.i18n.localize("pb.out-animation"),
        hint: game.i18n.localize("pb.out-animation-hint"),
        scope: "world",
        type: String,
        default: "no-animation",
        choices: CONST.ANIMATIONS,
        config: true,
        requiresReload: true,
    });

    game.settings.register(CONST.MODULE_NAME, "outAnimationDuration", {
        name: game.i18n.localize("pb.out-animation-duration"),
        scope: "world",
        type: String,
        default: "1s",
        config: true,
        requiresReload: true,
    });

};
