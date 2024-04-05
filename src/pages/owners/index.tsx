import {Grid} from "@mui/material";
import PageLayOut from "@/components/Layouts/PageLayOut";
import Banner from "@/pages/owners/Components/banner/banner";
import TruckAdvOwner from "@/pages/owners/Components/truckAdvOwner";

const Owners = () => {
    return (
        <PageLayOut>
            <Grid item container paddingBottom={"30rem"}>
                <Banner/>
                <TruckAdvOwner/>
            </Grid>
        </PageLayOut>
    )
}


export default Owners