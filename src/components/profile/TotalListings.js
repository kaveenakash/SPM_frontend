import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const percentage = 66;
export default function TotalListings() {
    return (
      
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <Typography variant="h5">Total Listings</Typography>
            </Grid>
            <Grid item>
          
                <Typography variant="h6">5</Typography>

          </Grid>
          <br/>
            <Grid item>
                <Typography variant="h5">Messages</Typography>
            </Grid>
            <Grid item>
          
                <Typography variant="h6">2</Typography>

          </Grid>
          </Grid>
        
   

    )
}
