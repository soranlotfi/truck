import {Grid, styled, useTheme} from "@mui/material";
import MTypography from "@/components/MTypographi";
const backgroundImage = require('@/Assets/images/driverbanner.webp').default.src;
import driverPageData from "@/StaticDatas/driversStaticData";
import Image from "next/image";
import Link from "next/link";



const Banner = ()=>{
    const theme = useTheme()
    const DownLoadBox = styled(Grid)(()=> {
        const {palette} = theme
        return {
            backgroundColor: "#fff",
            transition: "all .3s ease-in-out",
            padding: "1.5rem 0",
            boxShadow: ' 0px 0px 21px 3px rgba(0,0,0,0.1)',
            cursor: "pointer",
            borderRadius: "1.8rem",
            '&:hover':{
                backgroundColor:palette.primary.main,
                color:palette.primary.contrastText
            }
        }
    })
    const {downloadLinks} = driverPageData.applicationSection
    return(
        <Grid item container justifyContent={"center"} alignItems={"center"} height={{xs:"110vh" , md:"95vh"}} sx={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundPositionY:"bottom",
        }}>
            <Grid item container xs={12} rowSpacing={2} width={"100%"} height={"100%"} position={"relative"} justifyContent={"center"}>
               <Grid item container position={"absolute"} bottom={{xs:"0" , md:"-6%"}} justifyContent={"center"} alignItems={"center"}>
                   <Grid item xs={12} textAlign={"center"} p={{xs:"2rem 0" , md:"6rem"}}>
                       <MTypography sx={{fontSize:{xs:"2rem" , sm:"2.3rem"}}} banner>دانلود اپلیکیشن نسخه رانندگان</MTypography>
                   </Grid>
                   <Grid item container justifyContent={"center"} alignItems={"center"} gap={3} flexDirection={"row-reverse"}>
                       {downloadLinks.map((item,index)=>(
                           <DownLoadBox item container onClick={()=>window.open("https://www.google.com" , "_blank")}  xs={12} md={5.5} lg={3.5} xl={3.5}  key={index} bgcolor={"#fff"} justifyContent={"center"} alignItems={"center"}>
                               <Grid item xs={9} sm={10} textAlign={"center"}>
                                       <MTypography sx={{fontSize:{xs:"1.4rem" , md:"2rem"}}} fontWeight={"bold"}>{item.text}</MTypography>
                               </Grid>
                               <Grid item container justifyContent={{xs:"center"}} xs={3} sm={2}>
                                   <Image src={item.icon} alt={item.text} width={60} height={60}/>
                               </Grid>
                           </DownLoadBox>
                       ))}
                   </Grid>
               </Grid>
            </Grid>
        </Grid>
    )
}

export default Banner