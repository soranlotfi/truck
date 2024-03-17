import React from 'react';
import styled from 'styled-components';
import {Tab, Tabs} from '@mui/material'
import navList from "@/StaticDatas/navList";
import {setTabBar, useAppMuiController} from "@/Context/MUI";
import {useRouter} from "next/router";
import {fontWeight} from "@mui/system";

const StyledTab = styled(Tab)(() => {
    return {
        fontWeight: "normal",
        textTransform: "capitalize",
        fontSize: "1.2rem",
        fontFamily: "Vazir !important",
        "&.MuiTab-root": {
            color: "white !important",
            zIndex: 1,
            padding: "1rem 1.5rem !important",
            borderRadius: "0.8rem !important",
        },

        "&.Mui-selected ": {
            color: "#0979DF !important",
            fontWeight: "bold"
        }
    }
})

const StyledTabs = styled(Tabs)(() => {
    return {
        borderRadius: "0.8rem",
        "&.MuiTabs-indicator": {
            backgroundColor: "blue !important",
            height: "10rem !important",
        },
    }
})


export default function HeaderTabBar() {
    const Router = useRouter()
    const [values, dispatch] = useAppMuiController();
    const {tabbarValue: value} = values.state;
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabBar(dispatch, newValue);
    };

    return (
        <StyledTabs
            value={value}
            onChange={handleChange}
            variant={"scrollable"}
        >
            {navList
                .map((navItem, index: number) => (
                    <StyledTab
                        key={index}
                        label={navItem.text}
                        /*
                                                onClick={() => Router.replace(navItem.path)}
                        */
                    />
                ))}
        </StyledTabs>
    );
}