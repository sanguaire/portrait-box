import {CONST} from "./const.js";
import {hoverObservable} from "./hooks.js";
import {getSetting} from "./utils.js";

export class PortraitBox extends Application {

    settings = {};

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

    }

    activateListeners(html) {

    }

    getData(options = {}) {
        return super.getData(options);
    }

    async render(force = false, options = {}) {
        await super._render(force, options);

        this.#initSettings();
        this.#initCssVariables();

        const that = this;

        hoverObservable.subscribe({
            next(x) {
                if (x.hovered) {
                    that.show(x.token);
                } else {
                    that.hide(x.token);
                }
            },
            error(err) {
                console.error(`${CONST.MODULE_NAME} ${err}`);
            },
            complete() {
                console.log(`${CONST.MODULE_NAME} done`);
            },
        });

        this.element.css("opacity", "0.0");
        return this;
    }

    #initSettings = () => {
        this.settings.anchor = getSetting("anchor")
        this.settings.animation = getSetting("animation");
        this.settings.outAnimation = getSetting("outAnimation");
        this.settings.horizontal = getSetting("horizontal");
        this.settings.vertical = getSetting("vertical");
        this.settings.showLabel = getSetting("showLabel");
        this.settings.mask = getSetting("mask");
        this.settings.border = getSetting("border");
        this.settings.fontSize = getSetting("fontSize");
        this.settings.font = getSetting("font");
        this.settings.width = getSetting("width");
        this.settings.heigth = getSetting("height");
        this.settings.labelBgColor = getSetting("labelBgColor");
        this.settings.labelVertical = getSetting("labelVertical");
        this.settings.showPc = getSetting("showForPc");
        this.settings.showLinkedGm = getSetting("showForLinkedGmToken");
        this.settings.showUnlinkedGm = getSetting("showForUnlinkedGmToken");
        this.settings.animationDuration = getSetting("animationDuration");
        this.settings.outAnimationDuration = getSetting("outAnimationDuration");
        this.settings.background = getSetting("background");
        this.settings.backgroundFilter = getSetting("backgroundFilter");
        this.settings.imageFilter = getSetting("imageFilter");
    }

    #initCssVariables() {
        const mask = this.settings.mask;
        const border = this.settings.border;
        const background = this.settings.background

        this.element.css("--pb-font-size", this.settings.fontSize);
        this.element.css("--pb-font", this.settings.font);
        this.element.css("--pb-width", this.settings.width + "px");
        this.element.css("--pb-height", this.settings.heigth + "px");
        this.element.css("--pb-mask", mask !== "" ? `url(../../../${mask})` : "none");
        this.element.css("--pb-horizontal", this.settings.horizontal);
        this.element.css("--pb-vertical", this.settings.vertical);
        this.element.css("--pb-label-bg-color", this.settings.labelBgColor);
        this.element.css("--pb-border", border !== "" ? `url(../../../${border})` : "none");
        this.element.css("--pb-label-vertical", this.settings.labelVertical);
        this.element.css("--pb-background", background !== "" ? `url(../../../${background})` : "none");
        this.element.css("--pb-background-filter", this.settings.backgroundFilter);
        this.element.css("--pb-image-filter", this.settings.imageFilter);
        this.element.attr("class", CONST.ANCHOR_CLASSES[this.settings.anchor]);
    }

    show = token => {
        if (!this.shouldShown(token))
            return;

        const imgPath = token.document.isLinked
            ? game.settings.get(CONST.MODULE_NAME, "usedImgForBound") === "a" ?
                token.actor.img :
                token.document.texture.src
            : game.settings.get(CONST.MODULE_NAME, "usedImgForUnbound") === "a" ?
                token.actor.img :
                token.document.texture.src;

        if (!this.settings.showLabel) {
            this.element.find(".label").css("display", "none");
        }

        if (!ui.sidebar._collapsed && (this.settings.anchor === "b" || this.settings.anchor === "c")) {
            this.element.css("right", `calc(${this.settings.horizontal} + var(--sidebar-width))`);
        } else {
            this.element.css("right", `calc(${this.settings.horizontal} + 32px)`);
        }

        this.element.find(".portrait").css("background-image", `url(${imgPath}`);
        this.element.find(".label").html(token.actor.name);

        this.element.attr("class", CONST.ANCHOR_CLASSES[this.settings.anchor]);

        if (this.settings.animationDuration !== "") {
            this.element.css("--animate-duration", this.settings.animationDuration);
        }

        if (this.settings.animation !== "no-animation") {
            this.element.addClass(`animate__animated ${this.settings.animation}`);
        } else {
            this.element.css("opacity", "1.0");
        }
    };

    hide = (token) => {
        if (!this.shouldShown(token))
            return;

        this.element.attr("class", CONST.ANCHOR_CLASSES[this.settings.anchor])

        if (this.settings.outAnimationDuration !== "") {
            this.element.css("--animate-duration", this.settings.outAnimationDuration);
        }

        if (this.settings.outAnimation !== "no-animation") {
            this.element.addClass(`animate__animated ${this.settings.outAnimation}`);
        } else {
            this.element.css("opacity", "0.0");
        }

    };

    shouldShown = (token) => {
        return (this.settings.showPc && token.document.hasPlayerOwner) ||
            (this.settings.showLinkedGm && !token.document.hasPlayerOwner && token.document.isLinked) ||
            (this.settings.showUnlinkedGm && !token.document.hasPlayerOwner && !token.document.isLinked);
    };
}
