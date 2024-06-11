import {Grid} from "@mui/material";
import MDivider from "@/components/MDivider";
import MTypography from "@/components/MTypographi";
import {footerDate} from "@/StaticDatas/footerData";
import Link from "next/link";
import Image from "next/image"
const  truckLogo = require("@/Assets/images/icons-logo/trucklogo.png").default.src
const Footer = ()=>{
    return(
        <Grid item container p={{xs:"2rem .5rem" , md:"2rem 3rem"}} bgcolor={"warning.contrastText"} sx={{borderTopLeftRadius:".8rem" , borderTopRightRadius:".8rem"}}>
            <Grid item  container alignItems={"center"} >
                <Grid item xs={8} sm={10} md={11}>
                    <MDivider height={".1rem"} bgcolor={"primary.contrastText"} varient={"fullWidth"} orientation={"horizontal"} flexItem width={"100%"}/>
                </Grid>
                <Grid item xs={1}>
                    <Image alt={"logo"} src={truckLogo} width={100} height={30} draggable={false}/>
                </Grid>
            </Grid>
            {/*our contatcs */}
            <Grid item container justifyContent={"space-between"} alignItems={"start"} columnSpacing={3}>
                <Grid item container xs={6} md={3}>
                        <Grid item xs={12} textAlign={"start"} p={"1rem 0"}>
                            <MTypography color={"primary.contrastText"} fontSize={"1.3rem"}>
                                {footerDate.costumers.title}
                            </MTypography>
                        </Grid>
                       <Grid item container spacing={1}>
                           {footerDate.costumers.costumersList.map((item , index)=>(
                               <Grid item xs={12} textAlign={"start"} key={index}>
                                   <MTypography color={"primary.contrastText"} fontSize={"1.05rem"}>
                                       {item}
                                   </MTypography>
                               </Grid>
                           ))}
                       </Grid>
                </Grid>
                {/*    links */}
                    <Grid item container xs={6} md={3}>
                        <Grid item container>
                            <Grid item xs={12} textAlign={"start"} p={"1rem 0"}>
                                <MTypography color={"primary.contrastText"} fontSize={"1.3rem"}>
                                    {footerDate.links.title}
                                </MTypography>
                            </Grid>
                            <Grid item container spacing={1}>
                                {footerDate.links.linksList.map((item , index)=>(
                                    <Grid item xs={12} textAlign={"start"} key={index}>
                                        <Link href={item.path}>
                                            <MTypography color={"primary.contrastText"} fontSize={"1.05rem"}>
                                                {item.name}
                                            </MTypography>
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                </Grid>
                {/*    contaact */}
                <Grid item container xs={12} md={3}>
                    <Grid item container>
                        <Grid item xs={12} textAlign={"start"} p={"1rem 0"}>
                            <MTypography color={"primary.contrastText"} fontSize={"1.3rem"}>
                                {footerDate.contactUs.title}
                            </MTypography>
                        </Grid>
                        <Grid item container>
                           <Grid item xs={12} textAlign={"start"}>
                               <MTypography color={"primary.contrastText"} fontSize={"1rem"} lineHeight={"1.8rem"}>
                                   آدرس : {footerDate.contactUs.address}
                               </MTypography>
                           </Grid>
                            <Grid item xs={12} textAlign={"start"} p={"1rem 0"}>
                               <MTypography color={"primary.contrastText"} fontSize={"1rem"} lineHeight={"1.8rem"}>
                                   شماره تماس : {footerDate.contactUs.phoneNumber}
                               </MTypography>
                           </Grid>
                            <Grid item xs={12} container justifyContent={"space-evenly"} p={"1rem 0"}>
                                {footerDate.contactUs.socialmedias.map((item , index)=>(
                                    <Grid item key={index} xs={3}>
                                        <a href={item.href} target={"_blank"}>
                                            <Image src={item.icon} alt={"socialmediaIcon"} width={30} height={30}/>
                                        </a>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer