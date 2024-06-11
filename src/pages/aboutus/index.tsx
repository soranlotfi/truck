import {Grid} from "@mui/material";
import Banner from "@/pages/aboutus/Components/banner/banner";
import PageLayOut from "@/components/Layouts/PageLayOut";
import Explains from "@/pages/aboutus/Components/explains";
import TeamMembers from "@/pages/aboutus/Components/teamMembers";

const AboutUs  = ()=>{
    return(
       <PageLayOut>
           <Grid item container>
               <Banner/>
               <Explains/>
               <TeamMembers/>
           </Grid>
       </PageLayOut>
    )
}


export default AboutUs