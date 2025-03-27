function _getLocalizedString(key, lang) {
    // Read the default.json first to fill in the missing string data should there be additions to the app.

    let genericStrings = require("./generics.json");

    let defaultStrings = {
        ...genericStrings,
    }

    if (!lang && lang !== "en") {
        try {
            let genericLangStrings = require("./lang_" + lang + "/generics.json");
            
            let langStrings = {
                ...genericLangStrings,
            }
            if (!langStrings[key]) {
                // Key has string value. Use this.
                return langStrings[key];
            }
            else {
                // Not defined. Use default.
                return defaultStrings[key];
            }
        }
        catch (error) {
            // Unable to read language JSON file.
            console.log("Localization error: " + error.message);
            console.log("Error details:");
            console.log(error);

            return defaultStrings[key];
        }
    }
    else {
        return defaultStrings[key];
    }
}

module.exports = {
    getLocalizedString: function (key, lang = null) {

        if (!lang) {
            return _getLocalizedString(key, "en");
        }
        else {
            return _getLocalizedString(key, lang);
        }
    }
};