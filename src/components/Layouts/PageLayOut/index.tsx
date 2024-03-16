import {Grid} from "@mui/material";
import React from "react";
import {Main} from "next/document";
import MainLayOut from "@/components/Layouts/MainLayOut";
interface layOut{
    children : React.ReactNode
}
const PageLayOut :React.FC<layOut>= ({children})=>{
    return(
        <MainLayOut>
            {children}
        </MainLayOut>
    )
}


export default PageLayOut