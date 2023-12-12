import { Grid,Card,CardContent,Button } from '@mui/material';
import React from 'react';
import { navData } from './navData';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <Card sx={{bgcolor:"beige"}}>
            <CardContent>
               <Grid container spacing={5}>
                  {
                    navData.map((item)=>
                    <Grid item xs={item.xs}>
                      <Link to={item.path}>
                         <Button sx={{color:'brown'}} variant='contained' fullWidth color='inherit' >{item.label}</Button>
                      </Link>
                    </Grid>
                    )
                  }
               </Grid>
            </CardContent>
           </Card>
    );
};

