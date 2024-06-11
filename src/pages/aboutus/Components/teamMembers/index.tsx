import {Grid} from "@mui/material";
import MDivider from "@/components/MDivider";
import MTypography from "@/components/MTypographi";
import AboutUsStaticDatas from "@/StaticDatas/aboutUsStaticDatas";
import Image from "next/image";
const TeamMembers =  () =>{
    const {outTeam} = AboutUsStaticDatas.caption
    return(
        <Grid item container padding={"3rem 0"} justifyContent={"center"}>
            <Grid item container justifyContent={"center"} xs={10}>
                <Grid item xs={12} padding={"2rem 0"}>
                    <MDivider bgcolor={"error.contrastText"} varient={"fullWidth"} orientation={"horizontal"} flexItem={true} width={"100%"} height={".3rem"}/>
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                    <MTypography fontSize={"2.5rem"} fontWeight={"bold"} color={"primary.main"}>تیم ما</MTypography>
                </Grid>
                <Grid item container justifyContent={"space-evenly"} alignItems={"center"} padding={"4rem 0"} rowSpacing={6}>
                    {
                        outTeam.map((item , index)=>(
                            <Grid item xs={4} container key={index} justifyContent={"center"}  rowSpacing={3}>
                                <Grid container item xs={12} justifyContent={"center"}>
                                    <Image src={item.image} alt={item.name} width={250} height={250} draggable={false} style={{border:"3px solid #0979DF" , borderRadius:"50%"}}/>
                                </Grid>
                               <Grid item container>
                                   <Grid item xs={12} textAlign={"center"}>
                                       <MTypography fontSize={"1.5rem"} fontWeight={"bold"}>{item.name}</MTypography>
                                   </Grid>
                                   <Grid item xs={12} textAlign={"center"}>
                                       <MTypography fontSize={"1.5rem"} color={"info.contrastText"}>{item.expertise}</MTypography>
                                   </Grid>
                               </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>

        </Grid>
    )
}

export default TeamMembers