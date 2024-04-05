import {Grid} from "@mui/material";
import Banner from "@/pages/drivers/Components/banner/banner";
import PageLayOut from "@/components/Layouts/PageLayOut";
import React from "react";
import WhyDriversChooseTruck from "@/pages/drivers/Components/whyDriversChooseTruck";
import EndTriditionals from "@/pages/drivers/Components/endTriditionals";
import EasyBarFinding from "@/pages/drivers/Components/easyBarFinding";
import AppEducation from "@/pages/drivers/Components/appEducation";
import UntrustedWorld from "@/pages/drivers/Components/untrustedWorld";

const Drivers = ()=>{
    return(
        <PageLayOut>
            <Grid item container>
                <Banner/>
                <WhyDriversChooseTruck/>
                <EndTriditionals/>
                <EasyBarFinding/>
                <AppEducation/>
                <UntrustedWorld/>
            </Grid>
        </PageLayOut>
    )
}


export default Drivers