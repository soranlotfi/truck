import React from "react";
import MainLayOut from "@/components/Layouts/MainLayOut";
import Footer from "@/components/Layouts/PageLayOut/components/footer";

interface layOut {
    children: React.ReactNode
}

const PageLayOut: React.FC<layOut> = ({children}) => {
    return (
        <MainLayOut>
            {children}
            <Footer/>
        </MainLayOut>
    )
}


export default PageLayOut