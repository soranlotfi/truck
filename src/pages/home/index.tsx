import {setMode, useAppMuiController} from "@/Context/MUI";
import React, {useEffect} from "react";
import PageLayOut from "@/components/Layouts/PageLayOut";
import Banner from "@/pages/home/components/banner";
import Welcome from "@/pages/home/components/welcome";
import Services from "@/pages/home/components/services";
import WhyTruck from "@/pages/home/components/whyTruck";
import Targets from "@/pages/home/components/targets";
import Advantages from "@/pages/home/components/advantages";
const AppHomePage = () => {
    const [values, dispatch] = useAppMuiController()
    useEffect(() => {
        setMode(dispatch, "light")
    }, []);
    return (
        <PageLayOut>
            <Banner/>
            <Welcome/>
            <Services/>
            <WhyTruck/>
            <Targets/>
            <Advantages/>
        </PageLayOut>
    )
}

export default AppHomePage