import {Grid} from "@mui/material";
import PageLayOut from "@/components/Layouts/PageLayOut";
import Banner from "@/pages/owners/Components/banner/banner";
import TruckAdvOwner from "@/pages/owners/Components/truckAdvOwner";
import OwnerServices from "@/pages/owners/Components/ownerServices";
import AppEducation from "@/pages/owners/Components/appEducation";

const Owners = () => {
    return (
        <PageLayOut>
            <Grid item container >
                <Banner/>
                <TruckAdvOwner/>
                <OwnerServices/>
                <AppEducation/>
            </Grid>
        </PageLayOut>
    )
}


export default Owners