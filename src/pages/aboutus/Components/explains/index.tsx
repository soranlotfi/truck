import {Grid} from "@mui/material";
import AboutUsStaticDatas from "@/StaticDatas/aboutUsStaticDatas";
import MTypography from "@/components/MTypographi";
import Image from "next/image";
const Explains = ()=>{
    const {caption} = AboutUsStaticDatas
    return(
        <Grid item container padding={"3rem 0"}>
            <Grid item container padding={"2rem"} rowSpacing={4}>
                <Grid item xs={12} textAlign={"start"}>
                    <MTypography fontWeight={"bold"} fontSize={"2rem"}>
                        {caption.title}
                    </MTypography>
                </Grid>
                <Grid item xs={12} textAlign={"justify"}>
                    <MTypography  fontSize={"1.5rem"}>
                        {caption.subtitle}
                    </MTypography>
                </Grid>
            </Grid>
            <Grid item container justifyContent={"space-evenly"} padding={"4rem 0"}>
                {caption.options.map((item , index)=>(
                    <Grid key={index} item container xs={4} >
                        {/*<Grid item height={"50vh"} xs={12} sx={{background:`url(${item.image})` , backgroundSize:"cover" , backgroundPosition:"center"}}>
                        </Grid>*/}
                        <Grid item xs={12} container justifyContent={"center"} alignItems={"center"}>
                            <Image src={item.image} alt={item.title} width={500} height={400}/>
                        </Grid>
                        <Grid item container padding={"2rem 1rem"} rowSpacing={3}>
                            <Grid item xs={12} textAlign={"center"}>
                                <MTypography fontSize={"2.5rem"} color={"primary.main"}>{item.title}</MTypography>
                            </Grid>
                            <Grid item xs={12} textAlign={"justify"}>
                                <MTypography fontSize={"1.6rem"} >{item.caption}</MTypography>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}


export default Explains