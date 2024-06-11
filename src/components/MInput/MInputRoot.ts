import {styled, TextField} from "@mui/material";
import {IMInput, IMInputRoot} from "@/Types/MUI/Components/MInput.types";

const MInputRoot = styled(TextField)<IMInputRoot>(({costumstats}) => {
    const {width, error, height, padding,advise} = costumstats

    function styles() {
        return {
            backgroundColor: "red",
            border: "10px solid red"
        }
    }

    function advisementStyle() {
        return {
            "& .MuiInputBase-root": {
                borderColor: 'red !important',
                backgroundColor: "#E9EEF3"
            },
            ' & label.Mui-focused': {
                color: "black"
            },
            ' & .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor:error ? "red !important" : "blue",
                    borderWidth:"2px"
                },

            },
            "& .MuiInputLabel-root": {
                fontSize: "1rem",
                fontWeight: "bold !important",
                borderRadius: "10px !important",
                color: error ? "red !important" : "inherit",
                padding: "0 10px !important",
            },
        }
    }

    return {
        "& .MuiInputBase-root": {
            borderColor: 'red !important',
            backgroundColor: "#E9EEF3"
        },
        ' & label.Mui-focused': {
            color: "black"
        },
        ' & .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor:error ? "red !important" : "blue",
                borderWidth:"2px"
            },

        },
        "& .MuiInputLabel-root": {
            fontSize: "1rem",
            fontWeight: "bold !important",
            borderRadius: "10px !important",
            color: error ? "red !important" : "inherit",
            padding: "0 10px !important",
        },

/*
        ...(error && sazmanStyle())
*/
    }
})


export default MInputRoot