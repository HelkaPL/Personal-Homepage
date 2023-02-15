const colorNames = {
    white: "#FFFFFF",
    BG_Light_Mode: "#FBFBFE",
    lightGrey: "#E5E5E5",
    slateGray: "#6E7E91",
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
            textSecondary: colorNames.slateGray,
        },
        section: {
            background: colorNames.white,
        },
        themeSwitch: {
            background: colorNames.lightGrey,
            icon: colorNames.slateGray,
        }
    
        
    },
};

export const themeDark = {
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        site: {
            background: colorNames.blackText,
            textSecondary: colorNames.white,
        },
        section: {
            background: colorNames.white,
        },
        themeSwitch: {
            background: colorNames.lightGrey,
            icon: colorNames.slateGray,
        }

    },
};