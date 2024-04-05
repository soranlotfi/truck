import {Grid} from "@mui/material";
import driverPageData from "@/StaticDatas/driversStaticData";
import MTypography from "@/components/MTypographi";
import Image from "next/image";

const UntrustedWorld = () => {
    const {untrustedWorld} = driverPageData
    return (
        <Grid item container xs={12} height={"120vh"} padding={"4rem 0"}>
            <Grid item container height={"70vh"} justifyContent={"center"}
                  sx={{
                      background: `url(${untrustedWorld.background})`,
                      position: "relative",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                  }}>
                <Grid item container position={"absolute"} bottom={"-35%"} xs={10}>
                    <Grid item textAlign={"start"} padding={"3rem 0"} xs={9}>
                        <MTypography fontWeight={"bold"} fontSize={"2.8rem"} color={"primary.contrastText"} lineHeight={1.5}>
                            {untrustedWorld.title}
                        </MTypography>
                    </Grid>
                    <Grid item borderRadius={".8rem"} container bgcolor={"primary.main"} overflow={"hidden"}>
                        <Grid item xs={8} textAlign={"justify"} padding={"6.5rem 1.5rem"}>
                            <MTypography color={"primary.contrastText"} fontSize={"1.5rem"} lineHeight={1.8}>
                                {untrustedWorld.text}
                            </MTypography>
                        </Grid>
                        <Grid item xs={4} sx={{
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