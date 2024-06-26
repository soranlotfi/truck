import {Grid, styled, useTheme} from "@mui/material";
import MTypography from "@/components/MTypographi";
import Image from "next/image";
import ownerspageData from "@/StaticDatas/ownerspageData";



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
    const {applicationSection , headerSection} = ownerspageData
    const {downloadLinks} =  applicationSection
    return(
        <Grid item container justifyContent={"center"} alignItems={"center"} height={{xs:"100vh" , md:"90vh"}} sx={{
            background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${headerSection.backgroundImage})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundPositionY:"bottom",
        }}>
            <Grid item container xs={12} rowSpacing={2} width={"100%"} height={"100%"} position={"relative"} justifyContent={"center"} alignItems={"center"}>
                <Grid item container justifyContent={"start"} padding={{xs:".5rem" , md:"0 2rem"}} rowSpacing={6} display={{xs:"none" , lg:"flex"}}>
                    <Grid item xs={12} textAlign={{xs:"center" , md:"start"}}>
                        <MTypography fontSize={"3.54rem"} fontWeight={"bold"} color={"primary.main"}>{headerSection.title}</MTypography>
                    </Grid>
                    <Grid item xs={12} textAlign={{xs:"center" , md:"start"}}>
                        <MTypography fontSize={"2rem"}  color={"primary.contrastText"}>{headerSection.text}</MTypography>
                    </Grid>
                </Grid>
                <Grid item container position={"absolute"} bottom={{xs:"0" , md:"-10%"}} height={"100%"} justifyContent={"center"} alignItems={"end"}>
                    <Grid item xs={12} textAlign={"center"}>
                        <MTypography sx={{fontSize:{xs:"2rem" , sm:"2.3rem"}}} banner>دانلود اپلیکیشن نسخه صاحبان بار</MTypography>
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