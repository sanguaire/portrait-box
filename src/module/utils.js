import {CONST} from "./const.js";

export const getSetting = (settingName) => {
    return game.settings.get(CONST.MODULE_NAME, settingName);
};
