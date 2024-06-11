import {Grid, Theme, useTheme} from "@mui/material";
import MTypography from "@/components/MTypographi";
import MDivider from "@/components/MDivider";
import Image from "next/image";
import React from "react";
import driverPageData from "@/StaticDatas/driversStaticData";
import {useMediaQuery} from "@mui/system";

const WhyDriversChooseTruck = ()=>{
    const {truckOptions , mainTitle , truckTabletImage} = driverPageData
    const isDesktopSize = useMediaQuery((theme:Theme) => theme.breakpoints.up("md"))
    return(
        <Grid item container p={"4rem 0"}>
            <Grid item container>
                <Grid item container justifyContent={"center"} rowSpacing={".9rem"} padding={{xs:"2rem 0" , sm:"3rem"}}>
                    <Grid item xs={12} textAlign={"center"}>
                        <MTypography fontSize={"2rem"} fontWeight={"bold"}>{mainTitle}</MTypography>
                    </Grid>
                    <Grid item xs={12} textAlign={"center"} container justifyContent={"center"}>
                        <MDivider height={".3rem"} bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"} flexItem width={"30%"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} padding={{xs:"2rem 0" , md :"2rem"}} justifyContent={{xs:"center" , md:"end"}} rowSpacing={4}>
                {truckOptions.map((item , index)=>(
                    <Grid item key={index} container xs={10} md={6} lg={4} borderLeft={index>0 && isDesktopSize ? "1px solid" :"none"} borderColor={"warning.contrastText"} p={{xs:".5rem" , md:"1rem"}}>
                        <Grid item xs={12} textAlign={"start"}>
                            <Grid item container p={".5rem 0"} justifyContent={"center"} alignItems={"center"} width={70} height={70} borderRadius={"50%"} bgcolor={"primary.main"}>
                                <Image src={item.icon} alt={item.text} width={40} height={40}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} textAlign={"start"} padding={"2rem 0"}>
                            <MTypography fontSize={"1.5rem"} fontWeight={"bold"}>
                                {item.title}
                            </MTypography>
                        </Grid>
                        <Grid item xs={12} textAlign={"start"} >
                            <MTypography fontSize={"1.15rem"} fontWeight={"normal"} textAlign={"justify"}>
                                {item.text}
                            </MTypography>
                        </Grid>
                    </Grid>
                ))}
                <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} display={{xs:"none" , md:"flex"}}>
                    <Image draggable={false} src={truckTabletImage} alt={mainTitle} width={700} height={600}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WhyDriversChooseTruck