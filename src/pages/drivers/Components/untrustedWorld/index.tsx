import {Grid} from "@mui/material";
import driverPageData from "@/StaticDatas/driversStaticData";
import MTypography from "@/components/MTypographi";
import Image from "next/image";

const UntrustedWorld = () => {
    const {untrustedWorld} = driverPageData
    return (
        <Grid item container xs={12} height={{xs:"160vh" , midsm :"120vh", sm:"110vh",md:"115vh" , lg:"120vh"}} padding={"4rem 0"}>
            <Grid item container height={"70vh"} justifyContent={"center"}
                  sx={{
                      background: `url(${untrustedWorld.background})`,
                      position: "relative",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                  }}>
                <Grid item container position={{xs :"relative" , lg:"absolute"}} bottom={{xs:"0" , sm:"-15%" , md:"-35%"}} xs={12} md={11}>
                    <Grid item textAlign={"start"} padding={"3rem 0"} xs={12} md={9}>
                        <MTypography fontWeight={"bold"} sx={{fontSize:{xs:"2rem" , md:"2.4rem"}}} color={"primary.contrastText"} lineHeight={1.5}>
                            {untrustedWorld.title}
                        </MTypography>
                    </Grid>
                    <Grid item borderRadius={".8rem"} container bgcolor={"primary.main"} overflow={"hidden"}>
                        <Grid item xs={12} xl={8} textAlign={"justify"} padding={{xs:"1rem" , lg:"6.5rem 1.5rem"}}>
                            <MTypography color={"primary.contrastText"} fontSize={"1.5rem"} lineHeight={1.75}>
                                {untrustedWorld.text}
                            </MTypography>
                        </Grid>
                        <Grid item display={{xs:"none" , xl:"flex"}} xs={4} sx={{
                            background: `url(${untrustedWorld.image})`,
                            position: "relative",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default UntrustedWorld