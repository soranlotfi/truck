import {Grid, styled, useTheme} from "@mui/material";
import MTypography from "@/components/MTypographi";
const backgroundImage = require('@/Assets/images/aubanner.webp').default.src;
import AboutUsPageDatas from "@/StaticDatas/aboutUsStaticDatas";



const Banner = ()=>{
    const {banner} = AboutUsPageDatas
    return(
        <Grid item container justifyContent={"center"} alignItems={"center"} height={"95vh"} sx={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url(${backgroundImage})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundPositionY:"bottom",
        }}>
            <Grid item container width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"end"}>
               <Grid item container alignItems={"center"} spacing={3} p={"2rem"}>
                   <Grid item xs={12} textAlign={"start"}>
                       <MTypography fontSize={"4rem"} fontWeight={"bold"} color={"primary.main"} >{banner.title}</MTypography>
                   </Grid>
                   <Grid item xs={7} textAlign={"start"}>
                       <MTypography fontSize={"2.5rem"} color={"primary.contrastText"} >{banner.subtitle}</MTypography>
                   </Grid>
               </Grid>
            </Grid>
        </Grid>
    )
}

export default Banner