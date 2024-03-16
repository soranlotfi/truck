import {Grid, Typography} from "@mui/material";
import MButton from "@/components/MButton";
import MInput from "@/components/MInput";
import MBox from "@/components/MBox";
import MTypography from "@/components/MTypographi";
import {setMode, useAppMuiController} from "@/Context/MUI";
import {useEffect} from "react";
import {useTranslation} from "next-i18next";

const AppHomePage = ()=>{
    const {t} = useTranslation('home')
    const[values,dispatch] = useAppMuiController()
    const {mode} = values.state
    useEffect(() => {
        setMode(dispatch , "light")
    }, []);
    return(
       <Grid item container p={"4rem"} bgcolor={"white.main"}>
           <MButton bgcolor={"warning.main"} color={"primary.main"}>Hello world</MButton>
           <MInput label={"shams"} error={true} sx={{margin:"4rem",borderColor :"red !important"}} fullWidth padding={"5rem"}/>
           <MBox p={"4rem"} bgColor={"red"}>
               <MButton bgcolor={"primary.main"} color={"primary.dark"} width={"10rem"}>
                   <Typography color={"white"}>
                       hello world
                   </Typography>
               </MButton>
           </MBox>
           <MTypography color={"warning.dark"} fontSize={"20rem"} transform={"capitalize"}>
               hello world
           </MTypography>
           <h1>{t('welcome')}</h1>
       </Grid>
    )
}

export default AppHomePage