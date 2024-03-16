import React from 'react';
import styled from 'styled-components';
import {Tab, Tabs} from '@mui/material'
import navList from "@/StaticDatas/navList";
import {setTabBar, useAppMuiController} from "@/Context/MUI";
import {useRouter} from "next/router";
import {fontWeight} from "@mui/system";

const StyledTab = styled(Tab)(()=>{
    return {
        fontWeight: "bold",
        textTransform:"capitalize",
        fontSize:"1.2rem",
       "&.MuiTab-root" : {
        color: "#3568b1",
        zIndex: 1,
        padding: "1rem 1.5rem",
        borderRadius: "0.8rem",
    } ,

        "&.Mui-selected " :{
        color: "#cf9b00 !important",
    }
    }
})

const StyledTabs = styled(Tabs)(()=>{
    return {
        borderRadius: "0.8rem",
        "&.MuiTabs-indicator" : {
            backgroundColor: "blue !important",
             height: "10rem",
        } ,
    }
})



export default function HeaderTabBar() {
    const Router = useRouter()
    const [values, dispatch] = useAppMuiController();
    console.log(values)
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
                .map((navItem , index:number) => (
                    <StyledTab
                        key={index}
                        label={navItem.text}
                        onClick={() => Router.replace(navItem.path)}
                    />
                ))}
        </StyledTabs>
    );
}