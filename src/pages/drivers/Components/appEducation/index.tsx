import {Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
import MDivider from "@/components/MDivider";
import React from "react";

const AppEducation  = ()=>{
    return(
        <Grid item container>
            <Grid item container>
                <Grid item container justifyContent={"center"} rowSpacing={".9rem"} padding={"3rem"}>
                    <Grid item xs={12} textAlign={"center"} paddingBottom={"1rem"}>
                        <MTypography fontSize={"2rem"} fontWeight={"bold"}>آموزش گام به گام استفاده از اپلیکیشن رانندگان</MTypography>
                    </Grid>
                    <Grid item xs={12} textAlign={"center"} container justifyContent={"center"}>
                        <MDivider height={".3rem"} bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"} flexItem width={"40%"}/>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" style={{ height: '20vh' }}>
                    <Grid item xs={12}>
                        <iframe
                            src="https://www.aparat.com/video/video/embed/videohash/ExBsH/vt/frame"
                            title="Example Aparat Video"
                            allowFullScreen
                            style={{
                                width:"800px",
                                height: "450px",
                                display: "block", // Ensure the iframe is displayed as a block element
                                margin: "auto" // Center the iframe horizontally
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AppEducation