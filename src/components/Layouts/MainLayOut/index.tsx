import {Grid} from "@mui/material";
import React, {useEffect} from "react";
import HeaderTabBar from "@/components/Layouts/MainLayOut/Components/headerTabBar/normal";
import Image from "next/image";
import {useMediaQuery} from "@mui/system";
import MobileSize from "@/components/Layouts/MainLayOut/Components/headerTabBar/mobileSize";
const truckLogo = require("@/Assets/images/icons-logo/trucklogo.png").default.src
interface layOut{
    children : React.ReactNode
}
const MainLayOut :React.FC<layOut>= ({children})=>{
    return(
          <Grid item container justifyContent={"center"}>
              <Grid item container justifyContent={"space-between"} alignItems={"end"} xs={12} md={11} p={"1rem"} position={"absolute"}>
                 {/* <Grid
                      item
                      container
                      justifyContent={"space-between"}
                      flexDirection={{xs:"row-reverse" , md :"row"}}
                      alignItems={"end"}
                      borderBottom={"1px solid #fff"}
                      p={"1rem"}
                  >
                      the site logo
                      <Grid item xs={4} container textAlign={"start"}>
                          <Image src={truckLogo} width={250} height={48} alt={truckLogo}/>
                      </Grid>
                      <Grid item xs={8} container display={{xs:"none" , md:"flex"}} justifyContent={{xs:"start" , md:"end"}} alignItems={"end"}>
                          <HeaderTabBar/>
                      </Grid>
                      <Grid item xs={7} container display={{xs:"flex" , md:"none"}} justifyContent={{xs:"start" , md:"end"}} alignItems={"end"}>
                          <MobileSize/>
                      </Grid>
                      <Grid item xs={2} container justifyContent={"center"}>
                         <Grid item xs={4}>
                             <MButton>
                                 <MTypography>ورود</MTypography>
                             </MButton>
                         </Grid>
                          <Grid item xs={4}>
                             <MButton>
                                 <MTypography>ثبت نام</MTypography>
                             </MButton>
                         </Grid>
                      </Grid>
                  </Grid>*/}
              </Grid>
              <Grid item container>
                  {children}
              </Grid>
          </Grid>
    )
}


export default MainLayOut