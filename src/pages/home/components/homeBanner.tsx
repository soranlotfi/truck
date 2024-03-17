import {Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
const backgroundImage = require('@/Assets/images/_a60dd74e-f058-49ba-a351-b4eb69a77818.jpg').default.src;

const HomeBanner = ()=>{
    return(
        <Grid item container justifyContent={"center"} alignItems={"center"} height={"95vh"} sx={{
            background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundPositionY:"bottom",
        }}>
            <Grid item container xs={8} rowSpacing={2} paddingTop={"8rem"}>
                <Grid item xs={12} textAlign={"center"} >
                    <MTypography fontSize={"2.3rem"} banner>نسل جدیدی از شرکت حمل و نقل</MTypography>
                </Grid>
                <Grid item xs={12} textAlign={"center"} >
                    <MTypography fontSize={"1.4rem"} banner>حمل بار با کمترین هزینه‌ و بهره‌وری بیشتر</MTypography>
                </Grid>
                <Grid item xs={12} textAlign={"center"} >
                    <MTypography banner fontSize={"1.4rem"}> ارتباطی مستقیم و بدون واسطه </MTypography>
                </Grid>
                <Grid item xs={12} textAlign={"center"} >
                    <MTypography banner fontSize={"1.4rem"}>راه حل حمل بار کاملا پایدار </MTypography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomeBanner