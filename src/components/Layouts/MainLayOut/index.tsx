import {Grid} from "@mui/material";
import React from "react";
import PageLayOut from "@/components/Layouts/PageLayOut";
import HeaderTabBar from "@/components/Layouts/MainLayOut/Components/headerTabBar";
import {Image} from "@mui/icons-material";
import MButton from "@/components/MButton";
import MTypography from "@/components/MTypographi";
const truckLogo = require("@/Assets/images/icons-logo/trucklogo.png").default.src
interface layOut{
    children : React.ReactNode
}
const MainLayOut :React.FC<layOut>= ({children})=>{
    return(
          <Grid item container>
              <Grid item container justifyContent={"center"} alignItems={"center"} xs={12} p={"1rem"} position={"absolute"}>
                  <Grid
                      item
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      borderRadius={"2.5rem"}
                      border={"1px solid #0979DF"}
                      p={"0 1rem"}
                      sx={{background :"rgba(217,203,203,0.1)"}}
                  >
                      {/*the site logo*/}
                      <Grid item xs={2} container textAlign={"center"}>
                          <img src={truckLogo} width={160} height={40} alt={truckLogo}/>
                      </Grid>
                      <Grid item xs={8} container justifyContent={"center"} textAlign={"center"}>
                          <HeaderTabBar/>
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
                  </Grid>
              </Grid>
              <Grid item container>
                  {children}
              </Grid>
          </Grid>
    )
}


export default MainLayOut