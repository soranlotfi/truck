import {setMode, useAppMuiController} from "@/Context/MUI";
import React, {useEffect} from "react";
import {useTranslation} from "next-i18next";
import PageLayOut from "@/components/Layouts/PageLayOut";
import HomeBanner from "@/pages/home/components/homeBanner";
import {Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
import MButton from "@/components/MButton";
import Welcome from "@/pages/home/components/welcome";

const AppHomePage = () => {
    const [values, dispatch] = useAppMuiController()
    useEffect(() => {
        setMode(dispatch, "light")
    }, []);
    return (
        <PageLayOut>
           <HomeBanner/>
           <Welcome/>
        </PageLayOut>
    )
}

export default AppHomePage