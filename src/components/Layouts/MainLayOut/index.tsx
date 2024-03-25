import {Grid} from "@mui/material";
import React from "react";
import PageLayOut from "@/components/Layouts/PageLayOut";
import HeaderTabBar from "@/components/Layouts/MainLayOut/Components/headerTabBar";
import Image from "next/image";
import MButton from "@/components/MButton";
import MTypography from "@/components/MTypographi";
const truckLogo = require("@/Assets/images/icons-logo/trucklogo.png").default.src
interface layOut{
    children : React.ReactNode
}
const MainLayOut :React.FC<layOut>= ({children})=>{
    return(
          <Grid item container justifyContent={"center"}>
              <Grid item container justifyContent={"space-between"} alignItems={"end"} xs={11} p={"1rem"} position={"absolute"}>
                  <Grid
                      item
                      container
                      justifyContent={"space-between"}
                      alignItems={"end"}
                      borderBottom={"1px solid #fff"}
                      p={"1rem"}
                  >
                      {/*the site logo*/}
                      <Grid item xs={2} container textAlign={"center"}>
                          <Image src={truckLogo} width={250 } height={48} alt={truckLogo}/>
                      </Grid>
                      <Grid item xs={10} container justifyContent={"end"} alignItems={"end"}>
                          <HeaderTabBar/>
                      </Grid>
                     {/* <Grid item xs={2} container justifyContent={"center"}>
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
                      </Grid>*/}
                  </Grid>
              </Grid>
              <Grid item container>
                  {children}
              </Grid>
          </Grid>
    )
}


export default MainLayOut