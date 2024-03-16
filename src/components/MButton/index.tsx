import {forwardRef} from "react";
import {IMButton} from "@/Types/MUI/Components/MButton.types";
import MButtonRoot from "@/components/MButton/MButtonRoot";

const MButton = forwardRef<HTMLButtonElement,IMButton>(
    (
        {
            type,
            color,
            bgcolor,
            fontSize,
            width,
            height,
            textAlign,
            padding,
            margin,
            sx,
            submit,
            children,
            onClick,
            ...rest
        },
        ref
    )=>{
        return(
            <MButtonRoot
                ref={ref}
                sx={sx}
                onClick={onClick}
                type={type}
                costumstats={{
                    fontSize,
                    color,
                    textAlign,
                    type,
                    bgcolor,
                    width,
                    height,
                    padding,
                    margin,
                    submit,
                    ...rest

                }}
            >
                {children}
            </MButtonRoot>
        )
    }
)

MButton.displayName = "MButton"
export default MButton