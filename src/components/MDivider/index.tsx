import {Divider, DividerPropsVariantOverrides, useTheme} from "@mui/material";
import {OverridableStringUnion} from "@mui/types";
import {width} from "@mui/system";

interface Divider{
    bgcolor:string,
    varient : OverridableStringUnion<"fullWidth" | "inset" | "middle", DividerPropsVariantOverrides> | undefined,
    orientation :"horizontal" | "vertical" | undefined
    flexItem:boolean
    width:string
    height : string
}
const Mdivider : React.FC<Divider> = ({bgcolor,height ,width , varient , orientation,flexItem})=>{
    const theme = useTheme()
    const themeBgColor = bgcolor?.split('.').reduce((obj:any, key:string) => obj[key], theme.palette);
    return(
        <Divider
            orientation={orientation}
            variant={varient}
            sx={{backgroundColor:themeBgColor , height : height , borderRadius:"20rem" , width:width}}
            flexItem={flexItem}
        />
    )
}


export default Mdivider