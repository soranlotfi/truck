import {Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
import MDivider from "@/components/MDivider";
import ownerspageData from "@/StaticDatas/ownerspageData";
import React from "react";
import Image from "next/image";

const TruckAdvOwner = ()=>{
    const {truckAdvforOwners} = ownerspageData.applicationSection
    return(
        <Grid item container padding={"10rem 0"}>
            <Grid item container justifyContent={"center"} rowSpacing={".9rem"} paddingBottom={"3rem"}>
                <Grid item xs={12} textAlign={"center"} paddingBottom={"1.5rem"}>
                    <MTypography fontSize={"2rem"} fontWeight={"bold"}>مزایای تراک برای صاحبان بار</MTypography>
                </Grid>
                <Grid item xs={12} textAlign={"center"} container justifyContent={"center"}>
                    <MDivider height={".3rem"} bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"} flexItem width={"40%"}/>
                </Grid>
            </Grid>
            <Grid item container padding={".5rem 0"}>
                {
                    truckAdvforOwners.map((item , index)=>{
                        return(
                            <Grid item container bgcolor={index%2===0?"#f8f8f8" :"white"} flexDirection={index%2!==0 ? "row-reverse" : "row"} key={index}>
                                <Grid item container xs={8} justifyContent={"start"} padding={"3rem"} rowSpacing={10}>
                                    <Grid item xs={12}>
                                        <MTypography fontSize={"1.5rem"} fontWeight={"bold"}>{`${index+1}.${item.title}`}</MTypography>
                                    </Grid>
                                    <Grid item xs={8} alignSelf={"center"} textAlign={"center"}>
                                        <MTypography fontSize={"1.7rem"}>{item.text}</MTypography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4} container justifyContent={"center"} alignItems={"center"}>
                                    <Image src={item.image} alt={item.title} width={257} height={202}/>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

export default TruckAdvOwner