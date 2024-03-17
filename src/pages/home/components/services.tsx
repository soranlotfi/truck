import {Box, Grid, styled} from "@mui/material";
import MTypography from "@/components/MTypographi";
import {homedata} from "../../../StaticDatas/homepageData";
import MDivider from "@/components/MDivider";
import MBox from "@/components/MBox";
import React from "react";


const Image = ({ src , alt , zIndex} : {src :any , alt : any , zIndex:any}) => (
    <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
            width: "33%",
            height: "100%",
            transform: "rotateY(35deg)", // Rotate the image 45 degrees around the Y-axis
            boxShadow: "-1px 6px 27px 0px rgba(9,121,223,1)", // Apply a shadow
            marginLeft: "-4rem",
            zIndex:zIndex,
            border: "1px solid #0979DF",
            borderRadius: ".6rem",
        }}
    />
);
const Services = ()=>{
    return(
        <Grid item container p={"2rem 0"} justifyContent={"center"}>
            {/*truck services title*/}
            <Grid item container justifyContent={"center"} rowSpacing={".9rem"}>
                <Grid item xs={12} textAlign={"center"}>
                    <MTypography fontSize={"2rem"} fontWeight={"bold"}>{homedata.truckservices.title}</MTypography>
                </Grid>
                <Grid item xs={12} textAlign={"center"} container justifyContent={"center"}>
                    <MDivider height={".3rem"} bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"} flexItem width={"30%"}/>
                </Grid>
            </Grid>
            <Grid item container p={"3rem 0"}>
                {/* for drivers section*/}
                <Grid item container p={"2rem"} alignItems={"center"} bgcolor={"secondary.contrastText"}>
                    <Grid item container xs={8} rowSpacing={1}>
                        <Grid item xs={12} textAlign={"start"}>
                            <MTypography fontSize={"1.3rem"} fontWeight={"bold"}>{homedata.truckservices.driver.title}</MTypography>
                        </Grid>
                        <Grid item xs={10} textAlign={"justify"}>
                            <MTypography fontSize={"1.2rem"}>{homedata.truckservices.driver.text}</MTypography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} height={"40vh"}>
                        <MBox service backUrl={homedata.truckservices.driver.image} width={"100%"} height={"100%"}></MBox>
                    </Grid>
                </Grid>
                {/*online services erverywhere*/}
                <Grid item container p={"2rem"} alignItems={"center"}>
                    <Grid item container xs={5} sx={{perspective: "800px"}} p={"2rem 0"} justifyContent={"center"}>
                        <Image
                           zIndex={2}
                            src={homedata.truckservices.onlineservices.image}
                            alt={"app-img"}
                        />
                        <Image
                            zIndex={1}
                            src={homedata.truckservices.onlineservices.image3}
                            alt={"app-img"}
                        />
                        <Image
                            zIndex={0}
                            alt={"app-img"}
                            src={homedata.truckservices.onlineservices.image2}
                        />
                    </Grid>
                    <Grid item container xs={7} rowSpacing={1} justifyContent={"center"}>
                        <Grid item xs={12} textAlign={"center"}>
                            <MTypography color={"primary.main"} fontSize={"1.8rem"} fontWeight={"bold"}>{homedata.truckservices.onlineservices.title}</MTypography>
                        </Grid>
                        <Grid item xs={12} textAlign={"center"}>
                            <MTypography
                                fontSize={"1.2rem"}>{homedata.truckservices.onlineservices.subtitle}</MTypography>
                        </Grid>
                        <Grid item xs={11} textAlign={"justify"}>
                            <MTypography fontSize={"1.1rem"} lineHeight={"2rem"}>{homedata.truckservices.onlineservices.text}</MTypography>
                        </Grid>
                    </Grid>
                </Grid>
                {/*for the owners*/}
                <Grid item container p={"2rem"} alignItems={"center"} bgcolor={"secondary.contrastText"}>
                    <Grid item container xs={8} rowSpacing={1}>
                        <Grid item xs={12} textAlign={"start"}>
                            <MTypography fontSize={"1.3rem"} fontWeight={"bold"}>{homedata.truckservices.owner.title}</MTypography>
                        </Grid>
                        <Grid item xs={10} textAlign={"justify"}>
                            <MTypography fontSize={"1.2rem"}>{homedata.truckservices.owner.text}</MTypography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} height={"40vh"}>
                        <MBox service backUrl={homedata.truckservices.owner.image} width={"100%"} height={"100%"}></MBox>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Services