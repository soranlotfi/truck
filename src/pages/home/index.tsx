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
            <Grid item container  p={"3rem 0"}>
                <MBox width={"100%"} height={"70vh"}
                      sx={{background:`url(${homedata.truckservices.service_target.image})`,
                          backgroundSize:"cover" ,
                          backgroundPosition:"center"}}>
                    <Grid item container height={"100%"} justifyContent={"center"} alignItems={"end"}>
                        <Grid item container xs={11} height={"50%"} alignItems={"cenetr"}>
                            <Grid item xs={12}  container alignItems={"center"}>
                                <MTypography fontWeight={"bold"} color={"primary.main"} fontSize={"2rem"}>
                                    {homedata.truckservices.service_target.title}
                                </MTypography>
                            </Grid>
                            <Grid item xs={8} textAlign={"justify"}>
                                <MTypography  color={"primary.contrastText"} fontSize={"1.4rem"}>
                                    {homedata.truckservices.service_target.text}
                                </MTypography>
                            </Grid>
                        </Grid>
                    </Grid>
                </MBox>
            </Grid>
        </PageLayOut>
    )
}

export default AppHomePage