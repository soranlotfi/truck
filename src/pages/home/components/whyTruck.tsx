import {Grid} from "@mui/material";
import {homedata} from "../../../StaticDatas/homepageData";
import MTypography from "@/components/MTypographi";
import React from "react";
import MDivider from "@/components/MDivider";
import Image from "next/image";

const WhyTruck = ()=>{
    const {whyTruck} = homedata.truckservices
    const {truckReasons} = whyTruck
    return(
        <Grid item container p={"2rem"} alignItems={"center"}>
            <Grid item container rowSpacing={3} justifyContent={"center"}>
                <Grid item container justifyContent={"center"} alignItems={"center"} rowSpacing={".9rem"} padding={"1rem 0"}>
                    <Grid item xs={3} container justifyContent={"end"} alignItems={"center"}>
                        <MDivider height={".1rem"} bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"}
                                  flexItem width={"30%"}/>
                    </Grid>
                    <Grid item p={" 0 1rem"} textAlign={"center"}>
                        <MTypography fontSize={"2rem"} fontWeight={"bold"} color={"primary.main"}>{whyTruck.title}</MTypography>
                    </Grid>
                    <Grid item xs={3} container justifyContent={"start"} alignItems={"center"}>
                        <MDivider height={".1rem"} bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"} flexItem width={"30%"}/>
                    </Grid>
                </Grid>
                <Grid item container xs={10} justifyContent={"space-evenly"} spacing={6} p={"2rem"}>
                    {truckReasons.map((item , index)=>(
                        <Grid key={index} item container xs={3} justifyContent={"center"}>
                            <Grid item width={100} height={100} borderRadius={"50%"} border={"1px solid"} borderColor={"primary.main"} container justifyContent={"center"} alignItems={"center"}>
                                <Image src={item.icon} alt={item.subTitle} width={50} height={50} draggable={false} />
                            </Grid>
                            <Grid item xs={12} textAlign={"center"}>
                                <MTypography fontSize={"1rem"} color={"primary.main"}>{item.subTitle}</MTypography>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>

                <Grid item xs={10} textAlign={"justify"} >
                    <MTypography fontSize={"1.4rem"} lineHeight={"2.5rem"}>{whyTruck.text}</MTypography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WhyTruck