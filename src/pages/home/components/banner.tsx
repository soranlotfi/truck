import {Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
const backgroundImage = require('@/Assets/images/_a60dd74e-f058-49ba-a351-b4eb69a77818.jpg').default.src;
import {homedata} from "@/StaticDatas/homepageData";
import {useEffect, useState} from "react";

const Banner = ()=>{
    let {headerImages} = homedata
    const [backGround , setBackground] = useState<string>("")
    const [number, setNumber] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            let newNumber = Math.floor(Math.random() * 3);
            setNumber(newNumber);
        }, 4000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setBackground(headerImages[number]);
    }, [number, headerImages]);
    return(
        <Grid item container justifyContent={"center"} alignItems={"center"} height={"95vh"} sx={{
            background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${backGround})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundPositionY:"bottom",
        }}>
            <Grid item container xs={12} md={8} rowSpacing={2} sx={{transform:"translate(0 , 30%)"}} padding={"0 .5rem"}>
                <Grid item xs={12} textAlign={"center"} >
                    <MTypography sx={{fontSize : {xs:"1.9rem" , md:"2.5rem"}}} banner>نسل جدیدی از شرکت حمل و نقل</MTypography>
                </Grid>
                <Grid item xs={12} textAlign={"center"} >
                    <MTypography  sx={{fontSize : {xs:"1.2rem" , md:"1.4rem"}}} banner fontWeight={"normal"}>حمل بار با کمترین هزینه‌ و بهره‌وری بیشتر</MTypography>
                </Grid>
                <Grid item xs={12} textAlign={"center"} >
                    <MTypography banner sx={{fontSize : {xs:"1.1rem" , md:"1.25rem"}}}> ارتباطی مستقیم و بدون واسطه </MTypography>
                </Grid>
                {/*<Grid item xs={12} textAlign={"center"} >
                    <MTypography banner fontSize={"1.2rem"}>راه حل حمل بار کاملا پایدار </MTypography>
                </Grid>*/}
            </Grid>
        </Grid>
    )
}

export default Banner