import {SxProps, Theme} from "@mui/material";
import * as CSS from "csstype";

export interface IMTypography {
    color?: CSS.Property.Color,
    fontWeight?: CSS.Property.FontWeight,
    fontFamily?: CSS.Property.FontFamily,
    fontSize?: CSS.Property.FontSize,
    lineHeight?: CSS.Property.LineHeight,
    letterSpacing?: CSS.Property.LetterSpacing,
    Indent?: CSS.Property.TextIndent,
    transform?: CSS.Property.TextTransform,
    textAlign?: CSS.Property.TextAlign,
    sx?: SxProps,
    banner?:boolean
    children?: React.ReactNode
}

export interface IMTypographyRoot {
    costumstats: IMTypography
    theme?: Theme
}
