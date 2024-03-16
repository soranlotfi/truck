import {Button, styled, useTheme} from "@mui/material";
import {IMButtonRoot} from "@/Types/MUI/Components/MButton.types";

const MButtonRoot = styled(Button)<IMButtonRoot>(({costumstats})=>{
    const{bgcolor,color,width , fontSize,height} =  costumstats
    const theme = useTheme()
    const themeBgColor = bgcolor?.split('.').reduce((obj:any, key:string) => obj[key], theme.palette);
    const themeColor = color?.split('.').reduce((obj:any, key:string) => obj[key], theme.palette);
    return {
        fontSize,
        color : themeColor,
        backgroundColor:themeBgColor + "!important",
        width,
        height,
    }
})


export default MButtonRoot