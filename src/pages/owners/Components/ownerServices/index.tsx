import {Grid} from "@mui/material";
import MBox from "@/components/MBox";
import MTypography from "@/components/MTypographi";
import React from "react";
import ownerspageData from "@/StaticDatas/ownerspageData";
import Image from "next/image";

const OwnerServices = ()=>{
    const {transprtServices} = ownerspageData.applicationSection
    const{banner , ownersServices}=transprtServices
    return(
            <Grid item container>
                <MBox width={"100%"} height={"90vh"} sx={{
                          background: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.0)), url(${banner.image})`,
                          backgroundSize:"cover" ,
                          backgroundPosition:"center",
                      }}>
                    <Grid item container height={"100%"} justifyContent={"center"} alignItems={"end"} p={"4rem 0"}>
                        <Grid item container xs={11}  alignItems={"start"} height={"30%"}>
                            <Grid item xs={12}  container alignItems={"center"} p={"1rem 0"}>
                                <MTypography fontWeight={"bold"} color={"primary.contrastText"} fontSize={"2.5rem"}>
                                    {banner.title}
                                </MTypography>
                            </Grid>
                            <Grid item xs={12} textAlign={"justify"}>
                                <MTypography  color={"primary.contrastText"} fontSize={"1.8rem"} >
                                    {banner.text}
                                </MTypography>
                            </Grid>
                        </Grid>
                    </Grid>
                </MBox>

                <Grid item container padding={"3rem 0"} justifyContent={"center"} rowGap={2}>
                    {ownersServices.map((item,index)=>{
                        return(
                            <Grid item container key={index} flexDirection={index%2==0 ? "row" : "row-reverse"} xs={11}>
                                <Grid item xs={6} height={"50vh"} sx={{background:`url(${item.image})`,backgroundSize:"contain" , backgroundPosition:"start , end" , backgroundRepeat:"no-repeat"}}>
                                    <img src={item.image} alt={item.text} style={{width:"100%" , height:"100%"}} draggable={false}/>
                                </Grid>
                                <Grid item xs={6} container padding={"1rem 2.5rem"} alignItems={"start"} rowSpacing={4}>
                                    <Grid item xs={12} >
                                        <MTypography fontWeight={"bold"} fontSize={"2rem"}>{item.title}</MTypography>
                                    </Grid>
                                    <Grid item xs={12} textAlign={"justify"}>
                                        <MTypography  fontSize={"1.5rem"}>{item.text}</MTypography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
        </Grid>
    )
}


export default OwnerServices