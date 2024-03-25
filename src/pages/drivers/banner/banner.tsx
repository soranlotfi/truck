import {Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
const backgroundImage = require('@/Assets/images/driverbanner.webp').default.src;
import driverPageData from "@/StaticDatas/driversStaticData";
import Image from "next/image";
import Link from "next/link";
const Banner = ()=>{
    const {downloadLinks} = driverPageData.applicationSection
    return(
        <Grid item container justifyContent={"center"} alignItems={"center"} height={"95vh"} sx={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundPositionY:"bottom",
        }}>
            <Grid item container xs={12} rowSpacing={2} width={"100%"} height={"100%"} position={"relative"} justifyContent={"center"}>
               <Grid item container position={"absolute"} bottom={"-6%"} justifyContent={"center"} alignItems={"center"}>
                   <Grid item xs={12} textAlign={"center"} p={"6rem"}>
                       <MTypography fontSize={"2.3rem"} banner>دانلود اپلیکیشن نسخه رانندگان</MTypography>
                   </Grid>
                   <Grid item container justifyContent={"center"} alignItems={"center"} gap={3} flexDirection={"row-reverse"}>
                       {downloadLinks.map((item,index)=>(
                           <Grid item container xs={3} key={index} bgcolor={"#fff"} justifyContent={"center"} alignItems={"center"} borderRadius={".8rem"} p={"1rem 0"} sx={{boxShadow:' 0px 0px 21px 3px rgba(0,0,0,0.1)'
                           }}>
                               <Grid item xs={9}>
                                   <Link href={"https://www.google.com"} target={"_blank"} style={{textDecoration:"none" , color:"inherit"}}>
                                       <MTypography fontSize={"1.4rem"} fontWeight={"bold"}>{item.text}</MTypography>
                                   </Link>
                               </Grid>
                               <Grid item xs={2}>
                                   <Image src={item.icon} alt={item.text} width={50} height={50}/>
                               </Grid>
                           </Grid>
                       ))}
                   </Grid>
               </Grid>
            </Grid>
        </Grid>
    )
}

export default Banner