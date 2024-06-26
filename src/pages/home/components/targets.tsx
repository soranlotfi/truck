import {Grid} from "@mui/material";
import MBox from "@/components/MBox";
import {homedata} from "../../../StaticDatas/homepageData";
import MTypography from "@/components/MTypographi";
import React from "react";

const Targets = ()=>{
    return(
        <Grid item container  p={"3rem 0"}>
            <MBox width={"100%"} height={"80vh"}
                  sx={{background:`url(${homedata.truckservices.service_target.image})`,
                      backgroundSize:"cover" ,
                      backgroundPosition:"center",
            }}>
                <Grid item container height={"100%"} justifyContent={"center"} alignItems={{xs:"center" , md:"end"}}>
                    <Grid item container xs={12} md={11} height={"50%"} alignItems={"center"}>
                        <Grid item xs={12}  container alignItems={"center"}>
                            <MTypography fontWeight={"bold"} color={"primary.main"} fontSize={"2rem"}>
                                {homedata.truckservices.service_target.title}
                            </MTypography>
                        </Grid>
                        <Grid item xs={11} md={8} textAlign={"justify"}>
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

export default Targets