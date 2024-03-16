import {styled, Typography} from "@mui/material";
import {IMTypographyRoot} from "@/Types/MUI/Components/MTypography.types";

const MTypographyRoot = styled(Typography)<IMTypographyRoot>(({costumstats,theme})=>{
    const {banner} = costumstats
    function bannerTextSyles(){
        return{
            color : "white" ,
            fontWeight:"bold"
        }
    }
    return{
        ...(banner && bannerTextSyles())
    }
})


export default MTypographyRoot