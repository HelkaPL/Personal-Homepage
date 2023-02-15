const colorNames = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    lightGrey: "#E5E5E5",
    slateGray: "#6E7E91",
    mineShaft: "#363636",
    blackText: "#252525",
    cornflowerBlue: "#0366D6",
    dodgerBlue: "#2188FF",
    mercury: "#E5E5E5",
    doveGray: "#6D6D6D",
}

export const themeLight = {
    colors: {
        primary: colorNames.cornflowerBlue,
        textPrimary: colorNames.blackText,
        textSecondary: colorNames.slateGray,
        background: {
            site: colorNames.whiteLilac,
            section: colorNames.white,
        },
        themeSwitch: {
            text: colorNames.slateGray,
            background: colorNames.mercury,
            icon: colorNames.white,
        },
    
        
    },
};

export const themeDark = {
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        textSecondary: colorNames.white,
        background: {
            site: colorNames.blackText,
            section: colorNames.mineShaft,
        },
        themeSwitch: {
            text: colorNames.white,
            background: colorNames.doveGray,
            icon: colorNames.blackText,
        },

    },
};