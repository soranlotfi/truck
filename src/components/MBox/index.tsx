import {forwardRef} from "react";
import {IMBox} from "@/Types/MUI/Components/MBox.types";
import MBoxRoot from "@/components/MBox/MBoxRoot";

const MBox = forwardRef<HTMLDivElement , IMBox>(
    ({
        bgColor,
        height,
        width,
        sx,
        children,
        backgroundSize,
        position,
        borderRadius,
         minHeight,
         maxHeight,
         minWidth,
         maxWidth,
         m,
         p,
        ...rest
    } , ref)=>(
        <MBoxRoot
            sx={sx}
            width={width}
            height={height}
            minHeight={minHeight}
            maxHeight={maxHeight}
            minWidth={minWidth}
            maxWidth={maxWidth}
            position={position}
            m={m}
            p={p}
            costumstats={{
                position,
                backgroundSize,
                borderRadius,
                bgColor,
                ...rest
            }}
            ref={ref}
        >
            {children}
        </MBoxRoot>
    ))

MBox.displayName="MBox"

export default MBox