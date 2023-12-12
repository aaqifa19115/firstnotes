import React from "react" ; 
import { Grid,Card,CardContent} from "@mui/material";
import { Loginpage } from "./Loginpage";
import { Todo } from "./Todo";

export const Project=()=>{
    return(
        <Card sx={{marginTop:"30px"}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid align="center" item xs={12}>
                     <h2>App's and Projects are here :</h2> 
                    </Grid>
                    <Todo />
                    <br />
                    <br />
                    <Loginpage />
                </Grid>
            </CardContent>
            </Card>
        );
}