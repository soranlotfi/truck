import {setMode, useAppMuiController} from "@/Context/MUI";
import React, {useEffect} from "react";
import {useTranslation} from "next-i18next";
import PageLayOut from "@/components/Layouts/PageLayOut";
import HomeBanner from "@/pages/home/components/homeBanner";
import {Divider, Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
import MButton from "@/components/MButton";
import Welcome from "@/pages/home/components/welcome";
import {homedata} from "@/pages/home/data";
import MDivider from "@/components/MDivider";
import MBox from "@/components/MBox";
import Services from "@/pages/home/components/services";
import WhyTruck from "@/pages/home/components/whyTruck";
import Target_advanteges from "@/pages/home/components/target_advanteges";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const AppHomePage = () => {
    const [values, dispatch] = useAppMuiController()
    useEffect(() => {
        setMode(dispatch, "light")
    }, []);
    return (
        <PageLayOut>
            <HomeBanner/>
            <Welcome/>
            <Services/>
            <WhyTruck/>
            <Target_advanteges/>
            <Grid item container p={"2rem 0"} justifyContent={"center"} alignItems={"Center"}>
                {/*title*/}
                <Grid item container justifyContent={"Center"} rowSpacing={1}>
                    <Grid item xs={12} textAlign={"center"}>
                        <MTypography fontSize={"2rem"} fontWeight={"bold"}>{homedata.truckservices.advantageSection.title}</MTypography>
                    </Grid>
                    <Grid item xs={12} textAlign={"center"} container justifyContent={"center"}>
                        <MDivider bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"} flexItem width={"45%"}/>
                    </Grid>
                </Grid>
            {/*    advantages*/}
                <Grid item container justifyContent={"space-evenly"} columnSpacing={"2rem"} p={"4rem 0"}>
                    {
                        homedata.truckservices.advantageSection.advantageCards.map((card, index) => (
                            <Grid item container xs={4} height={"35vh"} key={index}>
                             <MBox width={"100%"} height={"100%"} advantage>
                                <Grid item container height={"100%"} p={"1rem .5rem"} justifyContent={"center"}>
                                    <Grid item container xs={12} alignItems={"center"} justifyContent={"space-between"}>
                                        <Grid item xs={2} container alignItems={"center"} justifyContent={"center"}>
                                            <CheckCircleIcon sx={{width:"3rem" , height:"3rem"}} color={"primary"}/>
                                        </Grid>
                                        <Grid item xs={10} textAlign={"center"}>
                                            <MTypography fontSize={"1.6rem"} fontWeight={"bold"}>{card.title}</MTypography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={11} textAlign={"justify"}>
                                        <MTypography fontSize={"1.2rem"}>
                                            {card.text}
                                        </MTypography>
                                    </Grid>
                                </Grid>
                             </MBox>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </PageLayOut>
    )
}

export default AppHomePage