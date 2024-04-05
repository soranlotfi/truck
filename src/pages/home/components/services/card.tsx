import React from "react";
import Image from "next/image";
import {Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
import Link from "next/link";

interface card {
    image: string
    title: string
    text: string
    path: string
}

const Card: React.FC<card> = ({image, title, text, path}) => {
    return (
        <Grid item container alignItems={"stretch"}>
            <Grid item
                  xs={12}
                  p={"9rem 0"}
                  sx={{
                      background: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "end",
                      backgroundRepeat: "no-repeat",
                      borderTopRightRadius:".8rem",
                      borderTopLeftRadius:".8rem"
                  }}
            >
            </Grid>
            <Grid item container bgcolor={"white"} position={"relative"}>
                <Grid item xs={12} p={".5rem 0"}>
                    <MTypography fontSize={"1.5rem"} fontWeight={"bold"} textAlign={"center"} >
                        {title}
                    </MTypography>
                </Grid>
                <Grid item xs={12} p={".8rem 1.5rem"}>
                    <MTypography fontSize={"1.3rem"} textAlign={"justify"} >
                        {text}
                    </MTypography>
                </Grid>
                <Grid item width={"40px"} height={"40px"} sx={{transform:"rotate(45deg)"}} bgcolor={"white"} position={"absolute"} top={"-5%"} right={"70%"}>

                </Grid>
            </Grid>
        </Grid>
    )
}


export default Card