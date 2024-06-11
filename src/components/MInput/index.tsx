import {forwardRef} from "react";
import {IMInput} from "@/Types/MUI/Components/MInput.types";
import MInputRoot from "@/components/MInput/MInputRoot";

const MInput = forwardRef<HTMLDivElement, IMInput>(
    (
        {
            advise,
            sx,
            type,
            name,
            value,
            label,
            placeholder,
            error,
            height,
            onChange,
            width,
             border,
            id,
            padding,
            fullWidth
        },
        ref
    ) => {
        return (
            <MInputRoot
                sx={sx}
                name={name}
                value={value}
                label={label}
                type={type}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                fullWidth={fullWidth}
                costumstats={{
                    advise,
                    padding,
                    height,
                    border,
                    error,
                    width,

                }}
            />
        )
    }
)

MInput.displayName = "MInput"
export default MInput