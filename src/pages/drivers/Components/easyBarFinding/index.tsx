import {Grid} from "@mui/material";
import MBox from "@/components/MBox";
import driverPageData from "@/StaticDatas/driversStaticData";
import MTypography from "@/components/MTypographi";
import React from "react";

const EasyBarFinding = ()=>{
    const {easyWayToFindBars} = driverPageData
    return(
        <Grid item container  p={"3rem 0"}>
            <MBox width={"100%"} height={"90vh"}
                  sx={{background:`url(${easyWayToFindBars.image})`,
                      backgroundSize:"cover" ,
                      backgroundPosition:"center",
                  }}>
                <Grid item container height={"100%"} justifyContent={"center"} alignItems={"end"} p={"4rem 0"}>
                    <Grid item container xs={11}  alignItems={"start"} height={"30%"}>
                        <Grid item xs={12}  container alignItems={"center"} p={"1rem 0"}>
                            <MTypography fontWeight={"bold"} color={"primary.contrastText"} fontSize={"2.5rem"}>
                                {easyWayToFindBars.title}
                            </MTypography>
                        </Grid>
                        <Grid item xs={12} textAlign={"justify"}>
                            <MTypography  color={"primary.contrastText"} fontSize={"1.8rem"}>
                                {easyWayToFindBars.text}
                            </MTypography>
                        </Grid>
                    </Grid>
                </Grid>
            </MBox>
        </Grid>
    )
}

export default EasyBarFinding