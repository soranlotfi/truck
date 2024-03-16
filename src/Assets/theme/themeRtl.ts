import { createTheme, Theme } from '@mui/material';
import colors from './base/colors';
import pxToRem from "@/Assets/theme/functions/pxToRem";
const primaryTheme: Theme = createTheme({
    direction: "rtl",
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1840,
        },
    },
    spacing: 9,
    palette: { ...colors,
        mode: 'light',
    },
});

// Extend the theme with your custom function
const themeRtl = {
    ...primaryTheme,
    functions: {
        pxToRem,
    },
};

export default themeRtl;
