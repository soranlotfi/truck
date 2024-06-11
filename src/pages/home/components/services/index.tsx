import {Box, Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
import {homedata} from "../../../../StaticDatas/homepageData";
import MDivider from "@/components/MDivider";
import React from "react";
import Card from "@/pages/home/components/services/card";
import MButton from "@/components/MButton";
const Index = () => {
    const {truckservices} = homedata
    return (
        <Grid item container p={"2rem 0"} justifyContent={"center"}>
            {/*truck services title*/}
            <Grid item container justifyContent={"center"} alignItems={"center"} rowSpacing={".9rem"}>
                <Grid item xs={3} container justifyContent={"end"} alignItems={"center"}>
                    <MDivider height={".1rem"} bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"}
                              flexItem width={"30%"}/>
                </Grid>
                <Grid item p={{xs:"2rem 0"}} textAlign={"center"}>
                    <MTypography fontSize={"2rem"} fontWeight={"bold"} color={"primary.main"}>{truckservices.title}</MTypography>
                </Grid>
                <Grid item xs={3} container justifyContent={"start"} alignItems={"center"}>
                    <MDivider height={".1rem"} bgcolor={"primary.main"} varient={"fullWidth"} orientation={"horizontal"} flexItem width={"30%"}/>
                </Grid>
            </Grid>
            <Grid item container paddingTop={"9rem"}>
                <Grid item
                      container
                      xs={12}
                      padding={"0 .5rem"}
                      paddingBottom={"9rem"}
                      sx={{
                          background: `url(${truckservices.background})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat"
                      }}
                >
                    <Grid item container position={"relative"} padding={{xs: "47rem 0",sm:"37rem 0" , md:"27rem 0" , lg:"20rem 0"}} >
                      {/*  cards*/}
                      <Grid item container justifyContent={"space-evenly"} alignItems={"stretch"} rowSpacing={5} position={"absolute"} top={"-10%"} left={0} width={"100%"}>
                          <Grid item container xs={12} sm={10} md={4}>
                              <Card image={truckservices.driver.image} title={truckservices.driver.title} text={truckservices.driver.text} path={"/drivers"}/>
                          </Grid>
                          <Grid item container xs={12} sm={10} md={4}>
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
                        <Grid item xs={10} md={3}>
                            <MButton padding={"2rem 0"} width={"100%"} height={"100%"} bgcolor={"primary.main"} color={"primary.contrastText"} fontWeight={"bold"} fontSize={"1.2rem"}>
                                دانلود نسخه رانندگان
                            </MButton>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <MButton padding={"2rem 0"} width={"100%"} color={"primary.contrastText"} height={"100%"} bgcolor={"error.main"} fontWeight={"bold"} fontSize={"1.2rem"}>
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