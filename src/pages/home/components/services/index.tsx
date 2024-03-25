import {Box, Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
import {homedata} from "../../../../StaticDatas/homepageData";
import MDivider from "@/components/MDivider";
import React from "react";
import Card from "@/pages/home/components/services/card";
import MButton from "@/components/MButton";


const Image = ({src, alt, zIndex}: { src: any, alt: any, zIndex: any }) => (
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
            zIndex: zIndex,
            border: "1px solid #0979DF",
            borderRadius: ".6rem",
            transition: "all .3s ease-in-out",
            cursor: "pointer",
            "&:hover": {
                transform: "rotateY(0)", // Rotate the image 45 degrees around the Y-axis
                marginLeft: "-4rem",
                zIndex: "10",
                width: "50%",
                /*
                                height:"80vh"
                */

            }
        }}
    />
);
const Index = () => {
    const {truckservices} = homedata
    return (
        <Grid item container p={"2rem 0"} justifyContent={"center"}>
            {/*truck services title*/}
            <Grid item container justifyContent={"center"} alignItems={"center"} rowSpacing={".9rem"}>
                <Grid item xs={4} container justifyContent={"end"} alignItems={"center"}>
                    <MDivider height={".1rem"} bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"}
                              flexItem width={"30%"}/>
                </Grid>
                <Grid item p={" 0 1rem"} textAlign={"center"}>
                    <MTypography fontSize={"2rem"} fontWeight={"bold"} color={"primary.main"}>{truckservices.title}</MTypography>
                </Grid>
                <Grid item xs={4} container justifyContent={"start"} alignItems={"center"}>
                    <MDivider height={".1rem"} bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"} flexItem width={"30%"}/>
                </Grid>
            </Grid>
            <Grid item container paddingTop={"9rem"}>
                <Grid item
                      container
                      xs={12}
                      paddingBottom={"6rem"}
                      sx={{
                          background: `url(${truckservices.background})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat"
                      }}
                >
                    <Grid item container position={"relative"} height={"60vh"}>
                      {/*  cards*/}
                      <Grid item container justifyContent={"space-evenly"} alignItems={"stretch"} position={"absolute"} top={"-10%"} left={0} width={"100%"}>
                          <Grid itm container xs={4} >
                              <Card image={truckservices.driver.image} title={truckservices.driver.title} text={truckservices.driver.text} path={"/drivers"}/>
                          </Grid>
                          <Grid itm container xs={4} >
                              <Card image={truckservices.owner.image} title={truckservices.owner.title} text={truckservices.owner.text} path={"/owners"}/>
                          </Grid>
                      </Grid>
                    </Grid>
                    <Grid item container alignItems={"end"} height={"30vh"} justifyContent={"center"}  spacing={4}>
                        <Grid item xs={12} textAlign={"center"}>
                            <MTypography fontSize={"1.5rem"} color={"white"}>
                                جهت استفاده از خدمات اپلیکیشن ما را دانلود کنید.
                            </MTypography>
                        </Grid>
                        <Grid item xs={3} height={"12vh"}>
                            <MButton width={"100%"} height={"100%"} bgcolor={"primary.main"} color={"primary.contrastText"} fontWeight={"bold"} fontSize={"1.2rem"}>
                                دانلود نسخه رانندگان
                            </MButton>
                        </Grid>
                        <Grid item xs={3} height={"12vh"}>
                            <MButton width={"100%"} color={"primary.contrastText"} height={"100%"} bgcolor={"error.main"} fontWeight={"bold"} fontSize={"1.2rem"}>
                                دانلود نسخه صاحبان بار
                            </MButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Index