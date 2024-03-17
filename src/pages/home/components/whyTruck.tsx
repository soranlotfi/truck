import {Grid} from "@mui/material";
import {homedata} from "../../../StaticDatas/homepageData";
import MTypography from "@/components/MTypographi";
import React from "react";

const WhyTruck = ()=>{
    return(
        <Grid item container p={"2rem"} alignItems={"center"}>
            <Grid item container xs={5} sx={{perspective: "800px"}} p={"2rem 0"} justifyContent={"center"}>
                <img src={homedata.truckservices.whyTruck.image} width={150}/>
            </Grid>
            <Grid item container xs={7} rowSpacing={1} justifyContent={"center"}>
                <Grid item xs={12} textAlign={"center"}>
                    <MTypography color={"primary.main"} fontSize={"1.8rem"} fontWeight={"bold"}>{homedata.truckservices.whyTruck.title}</MTypography>
                </Grid>
                <Grid item xs={11} textAlign={"justify"}>
                    <MTypography fontSize={"1.1rem"} lineHeight={"2rem"}>{homedata.truckservices.whyTruck.text}</MTypography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WhyTruck