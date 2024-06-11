import {Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
import Image from "next/image";
import React from "react";
import driverPageData from "@/StaticDatas/driversStaticData";

const EndTriditionals =()=>{
    const {advantages,title} = driverPageData.appAdvantagesSection
    return(
        <Grid item container rowSpacing={6} >
            <Grid item xs={12} textAlign={"center"}>
                <MTypography fontSize={"2.5rem"} fontWeight={"bold"}>
                    {title}
                </MTypography>
            </Grid>
            <Grid item container justifyContent={{xs:"center" , md:"space-evenly"}} rowGap={8} padding={{xs:"2rem .5rem" , md:"2rem"}}>
                {advantages.map((item , index)=>{
                    return(
                        <Grid item container xs={12} md={5}  bgcolor={"secondary.contrastText"} borderRadius={".87rem"} key={index} p={"1rem"} spacing={3}  sx={{boxShadow: "0px 5px 13px 0px rgba(189,189,189,1)"}}>
                            <Grid item container alignItems={"center"}>
                                <Grid item xs={3} textAlign={"end"}>
                                    <Image src={item.icon} alt={item.title} width={100} height={100}/>
                                </Grid>
                                <Grid item xs={9} textAlign={"center"}>
                                    <MTypography fontSize={"1.9rem"} fontWeight={"bold"}>
                                        {item.title}
                                    </MTypography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} textAlign={"center"} p={"1rem 0"}>
                                <MTypography fontSize={"1.4rem"} >
                                    {item.text}
                                </MTypography>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}


export default EndTriditionals
