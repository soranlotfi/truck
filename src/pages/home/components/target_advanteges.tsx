import {Grid} from "@mui/material";
import MBox from "@/components/MBox";
import {homedata} from "@/pages/home/data";
import MTypography from "@/components/MTypographi";
import React from "react";

const Target_advanteges = ()=>{
    return(
        <Grid item container  p={"3rem 0"}>
            <MBox width={"100%"} height={"70vh"}
                  sx={{background:`url(${homedata.truckservices.service_target.image})`,
                      backgroundSize:"cover" ,
                      backgroundPosition:"center"}}>
                <Grid item container height={"100%"} justifyContent={"center"} alignItems={"end"}>
                    <Grid item container xs={11} height={"50%"} alignItems={"cenetr"}>
                        <Grid item xs={12}  container alignItems={"center"}>
                            <MTypography fontWeight={"bold"} color={"primary.main"} fontSize={"2rem"}>
                                {homedata.truckservices.service_target.title}
                            </MTypography>
                        </Grid>
                        <Grid item xs={8} textAlign={"justify"}>
                            <MTypography  color={"primary.contrastText"} fontSize={"1.4rem"}>
                                {homedata.truckservices.service_target.text}
                            </MTypography>
                        </Grid>
                    </Grid>
                </Grid>
            </MBox>
        </Grid>
    )
}

export default Target_advanteges