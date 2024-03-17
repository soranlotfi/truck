import {Grid} from "@mui/material";
import MTypography from "@/components/MTypographi";
import MButton from "@/components/MButton";
import React from "react";

const Welcome = ()=>{
    return(
        <Grid item container justifyContent={"center"} alignItems={"center"} p={"2rem 0"}>
            <Grid item xs={12} textAlign={"center"}>
                <MTypography fontSize={"2rem"} fontWeight={"bold"}>به تراک خوش آمدید</MTypography>
            </Grid>
            <Grid item xs={12} textAlign={"center"} p={"2rem 0"}>
                <MTypography fontSize={"1.3rem"} fontWeight={"normal"}>شبکه حمل و نقل دیجیتال</MTypography>
            </Grid>
            <Grid item container alignItems={"center"} justifyContent={"center"} p={"3rem 0"} spacing={4}>
                <Grid item xs={3} height={"15vh"}>
                    <MButton width={"100%"} height={"100%"} bgcolor={"primary.main"} color={"primary.contrastText"} fontWeight={"bold"} fontSize={"1.5rem"}>
                        اپلیکیشن رانندگان
                    </MButton>
                </Grid>
                <Grid item xs={3} height={"15vh"}>
                    <MButton width={"100%"} color={"primary.contrastText"} height={"100%"} bgcolor={"error.main"} fontWeight={"bold"} fontSize={"1.5rem"}>
                        اپلیکیشن صاحبان بار
                    </MButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Welcome