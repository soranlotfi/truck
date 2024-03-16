import {Box, styled} from "@mui/material";
import {IMboxRoot} from "@/Types/MUI/Components/MBox.types";

const MBoxRoot = styled(Box)<IMboxRoot>(({costumstats , theme})=>{
    const {
        width,
        height,
        bgColor,
        borderRadius,
        position,
        backgroundSize,
    } = costumstats
    return{
        width,
        height,
        backgroundColor : bgColor,
        borderRadius,
        position,
        backgroundSize
    }
})

export default MBoxRoot