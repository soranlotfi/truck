import {forwardRef} from "react";
import {IMTypography} from "@/Types/MUI/Components/MTypography.types";
import MTypographiRoot from "@/components/MTypographi/MTypographiRoot";

const MTypography = forwardRef<HTMLParagraphElement , IMTypography>(
    (
        {
            children,
            fontSize,
            fontFamily,
            sx,
            Indent,
            textAlign,
            fontWeight,
            letterSpacing,
            lineHeight,
            transform,
            banner,
            color
        },
            ref
    )=>{
        return(
            <MTypographiRoot
                fontSize={fontSize}
                fontWeight={fontWeight}
                fontFamily={"Vazir"}
                sx={sx}
                ref={ref}
                color={color}
                textAlign={textAlign}
                letterSpacing={letterSpacing}
                lineHeight={lineHeight}
                textTransform={transform}
                costumstats={{banner}}
            >
                {children}
            </MTypographiRoot>
        )
    }
)

MTypography.displayName="MTypography"
export default MTypography