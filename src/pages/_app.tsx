import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import themeRtl from "@/Assets/theme/themeRtl";
import {AppMuiProvider} from "@/Context/MUI";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from 'stylis-plugin-rtl'
import {CacheProvider} from "@emotion/react";
import {useEffect} from "react";

export default function App({Component, pageProps}: AppProps) {

    const cacheRTL = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
        prepend: true,
    });
    const cacheLTR = createCache({
        key: 'muiltr',
        prepend: true,
    });
    useEffect(() => {
        document.body.dir = "rtl"
    }, [])

    return (
        <AppMuiProvider>
            <CacheProvider value={themeRtl.direction === 'rtl' ? cacheRTL : cacheLTR}>
                <ThemeProvider theme={themeRtl}>
                    <Component  {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </AppMuiProvider>
    )
}

