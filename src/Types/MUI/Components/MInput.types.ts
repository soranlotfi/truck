import * as CSS from "csstype";
import {ChangeEventHandler} from "react";
import {SxProps} from "@mui/material";

export interface IMInput {
    type ?:"email | text | password"
    fullWidth?: boolean;
    placeholder?: string;
    width?: CSS.Property.Width | number;
    border?: CSS.Property.Border | number;
    padding?: CSS.Property.Padding | number;
    height?: CSS.Property.Height | number;
    value?: string
    name?: string
    id?: string
    label?: string
    form?:boolean
    error?:boolean
    sx?:SxProps
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | undefined>
}

export interface IMInputRoot {
    costumstats: IMInput
}