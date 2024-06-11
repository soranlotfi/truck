import {Grid} from "@mui/material";
import MInput from "@/components/MInput";

const Advisement = ()=>{
    return(
        <Grid item container>
            <Grid item xs={6}></Grid>
            <Grid item container xs={6}>
                <Grid item container xs={12}>
                    <Grid item xs={8}>
                        <MInput placeholder={"نام"} fullWidth/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}




export default Advisement