import {CONST} from "./const.js";

export class PortraitBox extends Application {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            left: 0,
            top: 0,
            width: game.settings.get(CONST.MODULE_NAME, "width"),
            height: game.settings.get(CONST.MODULE_NAME, "height"),
            id: CONST.MODULE_NAME,
            template: `modules/${CONST.MODULE_NAME}/templates/portrait-box.html`,
            popOut: false
        });
    }

    async _injectHTML(html) {
        $("#interface")
            .after(html);

        this._element = html;

        //html.hide().fadeIn(200);
    }

    getData(options={}) {
        return super.getData(options);
    }

    async render(force = false, options = {}) {
        await super._render(force, options);

        this.element.css("--pb-width", game.settings.get(CONST.MODULE_NAME, "width") + "px");
        this.element.css("--pb-height", game.settings.get(CONST.MODULE_NAME, "height") + "px");
        this.element.css("--pb-mask", `url(../../../${game.settings.get(CONST.MODULE_NAME, "mask")})`);
        this.element.css("--pb-font-size", game.settings.get(CONST.MODULE_NAME, "font-size"));
        this.element.css("--pb-horizontal", game.settings.get(CONST.MODULE_NAME, "horizontal"));
        this.element.css("--pb-vertical", game.settings.get(CONST.MODULE_NAME, "vertical"));
        this.element.css("--pb-label-bg-color", game.settings.get(CONST.MODULE_NAME, "labelBgColor"));

        const anchor = game.settings.get(CONST.MODULE_NAME, "anchor");

        switch (anchor) {
            case "a":
                this.element.addClass("top-left");
                break;
            case "b":
                this.element.addClass("top-right");
                break;
            case "c":
                this.element.addClass("bottom-right");
                break;
            case "d":
                this.element.addClass("bottom-left");
                break;
        }

        //this.element.css("display", "none");
        this.element.hide();

        return this;
    }

    show(token) {
        this.element.find(".portrait").css("background-image", `url(${token.actor.img}`);
        this.element.fadeIn(1000);
    }

    hide() {
        this.element.fadeOut(500);
    }
}
