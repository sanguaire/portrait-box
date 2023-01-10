import {CONST} from "./const.js";
export const registerSettings = () => {

    game.settings.register(CONST.MODULE_NAME, "font-size", {
        name: game.i18n.localize("pb.font-size"),
        hint: game.i18n.localize("pb.font-size"),
        scope: "client",
        type: String,
        default: "var(--font-size-18)",
        config: true
    });

    game.settings.register(CONST.MODULE_NAME, "height", {
        name: game.i18n.localize("pb.height"),
        hint: game.i18n.localize("pb.height"),
        scope: "client",
        type: Number,
        default: "500",
        config: true
    });

    game.settings.register(CONST.MODULE_NAME, "labelBgColor", {
        name: game.i18n.localize("pb.label-bg-color"),
        hint: game.i18n.localize("pb.label-bg-color"),
        scope: "client",
        type: String,
        default: "#FFFFFF",
        config: true
    });

    game.settings.register(CONST.MODULE_NAME, "width", {
        name: game.i18n.localize("pb.width"),
        hint: game.i18n.localize("pb.width"),
        scope: "client",
        type: Number,
        default: "300",
        config: true
    });

    game.settings.register(CONST.MODULE_NAME, "mask", {
        name: game.i18n.localize("pb.mask"),
        hint: game.i18n.localize("pb.mask"),
        scope: "client",
        type: String,
        default: `modules/${CONST.MODULE_NAME}/assets/mask-wiggle.svg`,
        config: true,
        filePicker: "image"
    });

    game.settings.register(CONST.MODULE_NAME, "anchor", {
        name: game.i18n.localize("pb.anchor"),
        hint: game.i18n.localize("pb.anchor"),
        scope: "client",
        type: String,
        default: "a",
        choices: {
          "a": game.i18n.localize("pb.top-left"),
          "b": game.i18n.localize("pb.top-right"),
          "c": game.i18n.localize("pb.bottom-right"),
          "d": game.i18n.localize("pb.bottom-left")
        },
        config: true
    });

    game.settings.register(CONST.MODULE_NAME, "horizontal", {
        name: game.i18n.localize("pb.horizontal"),
        hint: game.i18n.localize("pb.horizontal"),
        scope: "client",
        type: String,
        default: "5em",
        config: true
    });

    game.settings.register(CONST.MODULE_NAME, "vertical", {
        name: game.i18n.localize("pb.vertical"),
        hint: game.i18n.localize("pb.vertical"),
        scope: "client",
        type: String,
        default: "5em",
        config: true
    });
};
