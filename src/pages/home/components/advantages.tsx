import {Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
import {homedata} from "../../../StaticDatas/homepageData";
import MDivider from "@/components/MDivider";
import MBox from "@/components/MBox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

const Advantages = ()=>{
    return(
        <Grid item container p={"2rem 0"} justifyContent={"center"} alignItems={"Center"}>
            {/*title*/}
            <Grid item container justifyContent={"Center"} rowSpacing={1}>
                <Grid item xs={12} textAlign={"center"}>
                    <MTypography fontSize={"2rem"} fontWeight={"bold"}>{homedata.truckservices.advantageSection.title}</MTypography>
                </Grid>
                <Grid item xs={12} textAlign={"center"} container justifyContent={"center"}>
                    <MDivider height={".3rem"} bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"} flexItem width={"45%"}/>
                </Grid>
            </Grid>
            {/*    advantages*/}
            <Grid item container justifyContent={"space-evenly"} columnSpacing={"2rem"} p={"4rem 0"}>
                {
                    homedata.truckservices.advantageSection.advantageCards.map((card, index) => (
                        <Grid item container xs={4} key={index}>
                            <MBox width={"100%"} height={"100%"} advantage>
                                <Grid item container height={"100%"} p={"1rem .5rem"} justifyContent={"center"}>
                                    <Grid item container xs={12} alignItems={"center"} justifyContent={"space-between"} paddingBottom={"2rem"}>
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
    )
}


export default Advantages