import {Button, styled, useTheme} from "@mui/material";
import {IMButtonRoot} from "@/Types/MUI/Components/MButton.types";

const MButtonRoot = styled(Button)<IMButtonRoot>(({costumstats})=>{
    const{bgcolor,fontWeight,color,width , fontSize,height} =  costumstats
    const theme = useTheme()
    const themeBgColor = bgcolor?.split('.').reduce((obj:any, key:string) => obj[key], theme.palette);
    const themeColor = color?.split('.').reduce((obj:any, key:string) => obj[key], theme.palette);
    return {
        "&:hover":{
            border:`1px solid ${themeBgColor}`,
            color:themeBgColor + "!important",
        },
        fontSize,
        fontFamily:"Vazir",
        fontWeight,
        color : themeColor,
        backgroundColor:themeBgColor,
        width,
        height,
    }
})


export default MButtonRoot