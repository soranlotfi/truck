import {Grid, Typography} from "@mui/material";
import MButton from "@/components/MButton";
import MInput from "@/components/MInput";
import MBox from "@/components/MBox";
import MTypography from "@/components/MTypographi";
import {setMode, useAppMuiController} from "@/Context/MUI";
import {useEffect} from "react";
import {useTranslation} from "next-i18next";
import MainLayOut from "@/components/Layouts/MainLayOut";
import PageLayOut from "@/components/Layouts/PageLayOut";
const backgroundImage = require('@/Assets/images/_a60dd74e-f058-49ba-a351-b4eb69a77818.jpg').default.src;

const AppHomePage = () => {
    const {t} = useTranslation('home')
    const [values, dispatch] = useAppMuiController()
    const {mode} = values.state
    useEffect(() => {
        setMode(dispatch, "light")
    }, []);
    return (
        <PageLayOut>
            <Grid item container>
                <Grid item container justifyContent={"center"} alignItems={"center"} height={"100vh"} sx={{
                    background: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    backgroundPositionY:"bottom",
                }}>
                    <Grid item container xs={8} p={"3rem"}>
                        <Grid item xs={12} textAlign={"center"}>
                            <MTypography fontSize={"2.5rem"} color={"white"} fontWeight={"bold"}>نسل جدیدی از شرکت حمل و نقل</MTypography>
                            <MTypography>حمل بار با کمترین هزینه‌ و بهره‌وری بیشتر</MTypography>
                            <MTypography>ارتباطی مستقیم و بدون واسطه </MTypography>
                            <MTypography>راه حل حمل بار کاملا پایدار </MTypography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </PageLayOut>
    )
}

export default AppHomePage