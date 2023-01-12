import {CONST} from "./const.js";
import {hoverObservable} from "./hooks.js";

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

    activateListeners(html) {
        const anchor = game.settings.get(CONST.MODULE_NAME, "anchor");
        const that = this;
    }

    getData(options = {}) {
        return super.getData(options);
    }

    async render(force = false, options = {}) {
        await super._render(force, options);

        const that = this;
        const mask = game.settings.get(CONST.MODULE_NAME, "mask");

        this.element.css("--pb-font-size", game.settings.get(CONST.MODULE_NAME, "font-size"));
        this.element.css("--pb-font", game.settings.get(CONST.MODULE_NAME, "font"));
        this.element.css("--pb-width", game.settings.get(CONST.MODULE_NAME, "width") + "px");
        this.element.css("--pb-height", game.settings.get(CONST.MODULE_NAME, "height") + "px");
        this.element.css("--pb-mask", mask !== "" ? `url(../../../${mask})` : "none");
        this.element.css("--pb-horizontal", game.settings.get(CONST.MODULE_NAME, "horizontal"));
        this.element.css("--pb-vertical", game.settings.get(CONST.MODULE_NAME, "vertical"));
        this.element.css("--pb-label-bg-color", game.settings.get(CONST.MODULE_NAME, "labelBgColor"));

        const anchor = game.settings.get(CONST.MODULE_NAME, "anchor");

        this.element.attr("class", this.getAnchorClass(anchor));

        this.element.hide();



        hoverObservable.subscribe({
            next(x) {
                if (x.hovered) {
                    that.show(x.token);
                } else {
                    that.hide();
                }
            },
            error(err) {
                console.error(`${CONST.MODULE_NAME} ${err}`);
            },
            complete() {
                console.log(`${CONST.MODULE_NAME} done`);
            },

        })
        return this;
    }

    getAnchorClass = (anchorId) => {
        switch (anchorId) {
            case "a":
                return "top-left";
            case "b":
                return "top-right";
            case "c":
                return "bottom-right";
            case "d":
                return "bottom-left";
        }
    }

    show = token => {
        console.log(`${CONST.MODULE_NAME} show box`);

        const imgPath = token.document.actorLink
            ? game.settings.get(CONST.MODULE_NAME, "usedImgForBound") === "a" ?
                token.actor.img :
                token.document.texture.src
            : game.settings.get(CONST.MODULE_NAME, "usedImgForUnbound") === "a" ?
                token.actor.img :
                token.document.texture.src;

        const anchor = game.settings.get(CONST.MODULE_NAME, "anchor");
        const animation = game.settings.get(CONST.MODULE_NAME, "animation");
        const horizontalMargin = game.settings.get(CONST.MODULE_NAME, "horizontal");
        const showLabel = game.settings.get(CONST.MODULE_NAME, "showLabel");

        if (!showLabel) {
            this.element.find(".label").css("display", "none");
        }

        if (!ui.sidebar._collapsed && (anchor === "b" || anchor === "c")) {
            this.element.css("right", `calc(${horizontalMargin} + var(--sidebar-width))`);
        } else {
            this.element.css("right", `calc(${horizontalMargin} + 32px)`);
        }

        this.element.find(".portrait").css("background-image", `url(${imgPath}`);
        this.element.find(".label").html(token.actor.name);
        this.element.show();

        this.element.css("display", "");
        this.element.attr("class", this.getAnchorClass(anchor))

        if(animation !== "no-animation") {
            this.element.addClass(`animated ${animation}`);
        }
    };

    hide = () => {
        console.log(`${CONST.MODULE_NAME} hide box`);

        const anchor = game.settings.get(CONST.MODULE_NAME, "anchor");
        const animation = game.settings.get(CONST.MODULE_NAME, "outAnimation");

        this.element.css("display", "");
        this.element.attr("class", this.getAnchorClass(anchor))

        if(animation !== "no-animation") {
            this.element.addClass(`animated ${animation}`);
        }
    };
}
