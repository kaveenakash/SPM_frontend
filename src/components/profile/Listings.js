import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'

export default function Listings() {
    const classes = useStyles()
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Card className={classes.root}>
                        <CardContent>
                            dasfdsf
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "4rem",
      minWidth: 950,
     
    },
    
  }));