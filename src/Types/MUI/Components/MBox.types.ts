import {SxProps, Theme} from "@mui/material";
import * as CSS from "csstype";

export interface IMBox {
    bgColor?: CSS.Property.BackgroundColor
    borderRadius?:CSS.Property.BorderRadius;
    width?: CSS.Property.Width ;
    height?: CSS.Property.Height
    backgroundSize ?: CSS.Property.BackgroundSize
    position?: CSS.Property.Position
    children?: React.ReactNode
    minHeight ?:CSS.Property.MinHeight
    maxHeight ?:CSS.Property.MaxHeight
    minWidth ?:CSS.Property.MinWidth
    maxWidth ?:CSS.Property. MaxWidth
    m ?:CSS.Property.Margin
    p ?:CSS.Property.Padding
    sx?: SxProps
}

export interface IMboxRoot {
    costumstats: IMBox,
    theme?:Theme
}