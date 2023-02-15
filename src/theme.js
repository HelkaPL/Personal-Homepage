const colorNames = {
    white: "#FFFFFF",
    BG_Light_Mode: "#FBFBFE",
    lightGrey: "#E5E5E5",
    textSecondary: "6E7E91",
    blackText: "#252525",
    cornflowerBlue: "#0366D6",
    dodgerBlue: "#2188FF",

}

export const themeLight = {
    colors: {
        primary: colorNames.cornflowerBlue,
        textPrimary: colorNames.blackText,
        site: {
            background: colorNames.BG_Light_Mode,
            text: colorNames.textSecondary,
        },
        
    },
};

export const themeDark = {
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        site: {
            background: colorNames.blackText,
            text: colorNames.white,
        },

    },
};