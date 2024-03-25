import {Grid} from "@mui/material";
import Banner from "@/pages/drivers/components/banner";
import PageLayOut from "@/components/Layouts/PageLayOut";
import MTypography from "@/components/MTypographi";
import {homedata} from "@/StaticDatas/homepageData";
import MDivider from "@/components/MDivider";
import React from "react";

const Drivers = ()=>{
    return(
        <PageLayOut>
            <Grid item container paddingBottom={"30rem"}>
                <Banner/>
                <Grid item container p={"2rem 0"}>
                    <Grid item container>
                        <Grid item container justifyContent={"center"} rowSpacing={".9rem"}>
                            <Grid item xs={12} textAlign={"center"}>
                                <MTypography fontSize={"2rem"} fontWeight={"bold"}>{homedata.truckservices.title}</MTypography>
                            </Grid>
                            <Grid item xs={12} textAlign={"center"} container justifyContent={"center"}>
                                <MDivider height={".3rem"} bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"} flexItem width={"30%"}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </PageLayOut>
    )
}


export default Drivers