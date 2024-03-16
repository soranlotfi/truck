import React from "react";
import {SxProps} from "@mui/material";
import * as CSS from "csstype";

export interface IMButton {
    type?: "button" | "submit" | "reset",
    color?: CSS.Property.Color,
    bgcolor?: string,
    fontSize?:CSS.Property.FontSize,
    width?: CSS.Property.Width,
    height?: CSS.Property.Height,
    textAlign?: CSS.Property.TextAlign,
    padding?: CSS.Property.Padding,
    margin?: CSS.Property.Margin,
    sx?:SxProps,
    submit?: boolean,
    children?: React.ReactNode,
    onClick?:React.MouseEventHandler<HTMLButtonElement>

}

export interface IMButtonRoot{
    costumstats:IMButton
}