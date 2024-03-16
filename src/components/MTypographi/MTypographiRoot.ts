import {styled, Typography} from "@mui/material";
import {IMTypographyRoot} from "@/Types/MUI/Components/MTypography.types";

const MTypographyRoot = styled(Typography)<IMTypographyRoot>(({costumstats,theme})=>{
    const {} = costumstats
    return{
        fontSize:"1rem"
    }
})


export default MTypographyRoot