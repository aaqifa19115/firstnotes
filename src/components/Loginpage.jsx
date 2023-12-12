import { Grid , Card , CardContent,TextField,Button } from "@mui/material";
import React from "react"; 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';


export const Loginpage=()=>{
    return(
     <Grid  sx={{marginTop:"50px"}} container spacing={2}>
     <Grid  item xs={1}></Grid>
     <Grid id="loginn" item xs={7}>
        {/* <Card>
            <CardContent> */}
            {/* </CardContent>
        </Card> */}
     </Grid>
     <Grid  item xs={3}>
                <Grid item xs={12}>
                   <h2 align="center" style={{color:"blue"}}>Login </h2>
                   <TextField variant="outlined" label="Enter Email Id" fullWidth/>
                   <br /><br />
                   <TextField variant="outlined" label="Enter Password" fullWidth/>
                   <br /><br />
                   <Grid container spacing={2}>
                   <Grid item xs={6}><input type="checkbox" />Remember me </Grid>
                   <Grid align="right" sx={{color:"blue"}} item xs={6}><u>forget Password</u></Grid>
                   </Grid>
                   <br />
                   <Grid item xs={12}>
                     <Button fullWidth  variant="outlined" >Log in</Button>
                   </Grid> <br />
                   <Grid align="center" item xs={12}> - or -</Grid> <br />
                   <Grid container spacing={1}>
                   <Grid item xs={4}>
                   <Button sx={{textTransform:"capitalize"}} variant="outlined" fullWidth ><FacebookOutlinedIcon></FacebookOutlinedIcon>facebook</Button>
                   </Grid>
                   <Grid item xs={4}>
                   <Button sx={{textTransform:"capitalize"}} color="error" variant="outlined" fullWidth><GoogleIcon></GoogleIcon>Google</Button>
                   </Grid>
                   <Grid item xs={4}>
                   <Button sx={{textTransform:"capitalize"}} variant="outlined"  fullWidth><TwitterIcon></TwitterIcon>twitter</Button>
                   </Grid>
                   </Grid>
                </Grid>
    </Grid>
    <Grid item xs={1}></Grid>
    </Grid>
    );
}