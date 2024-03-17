import {Box, styled} from "@mui/material";
import {IMboxRoot} from "@/Types/MUI/Components/MBox.types";

const MBoxRoot = styled(Box)<IMboxRoot>(({costumstats , theme})=>{
    const {
        service,
        width,
        height,
        bgColor,
        borderRadius,
        position,
        backgroundSize,
        backUrl,
    } = costumstats
    function serviceStyle(){
        return{
            backgroundSize:"cover !important",
            boxShadow:" 2px 6px 21px 0px rgba(0,0,0,0.75);",
            background : `url(${backUrl})`,
            backgroundPosition:"center",
            borderRadius:".8rem",
            perspective:"283px !important",
            transform:"rotateY(25deg)",
/*
            transformStyle:"preserve-3d"
*/
        }
    }
    return{
        width,
        height,
        backgroundColor : bgColor,
        borderRadius,
        position,
        backgroundSize,
        backgroundImage:backUrl,
        ...(service && serviceStyle()),

    }
})

export default MBoxRoot