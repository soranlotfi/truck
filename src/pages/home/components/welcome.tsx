import {Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
import MButton from "@/components/MButton";
import React from "react";
import Image from "next/image";

const Welcome = ()=>{
    return(
        <Grid item container justifyContent={"center"} alignItems={"center"} p={"2rem 0"} position={"relative"}>
            <Grid item xs={12} textAlign={"center"} p={"4rem 0"}>
                <Image
                    width={700}
                    height={300}
                    src={require("@/Assets/images/trucks-group.webp")}
                    alt={"truck group"}
                    style={{
                        position: "absolute",
                        top: "15%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default Welcome