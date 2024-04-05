import {Grid} from "@mui/material";
import Banner from "@/pages/drivers/Components/banner/banner";
import PageLayOut from "@/components/Layouts/PageLayOut";
import React from "react";
import driverPageData from "@/StaticDatas/driversStaticData";
import WhyDriversChooseTruck from "@/pages/drivers/Components/whyDriversChooseTruck";
import MTypography from "@/components/MTypographi";
import Image from "next/image";
import EndTriditionals from "@/pages/drivers/Components/endTriditionals";
import EasyBarFinding from "@/pages/drivers/Components/easyBarFinding";
import AppEducation from "@/pages/drivers/Components/appEducation";

const Drivers = ()=>{
    return(
        <PageLayOut>
            <Grid item container paddingBottom={"30rem"}>
                <Banner/>
                <WhyDriversChooseTruck/>
                <EndTriditionals/>
                <EasyBarFinding/>
                <AppEducation/>
            </Grid>
        </PageLayOut>
    )
}


export default Drivers