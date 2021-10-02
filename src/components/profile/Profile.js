import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

import TotalListings from './TotalListings'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
    minWidth: 950,
    margin: "3rem",
    padding: "3rem",
    backgroundColor: "#F0F4F6",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(5);
  console.log(props.loginData);
  const imageUrl =
    "https://lh3.googleusercontent.com/ogw/ADea4I5IcdXO7JcJ-4L38PfnTqCuRl_RuSaFiewjb2zn=s83-c-mo";
  return (
    <Grid container justifyContent="center">
      <Card className={classes.root}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Grid item container spacing={6}>
                <Grid item> <Avatar
                alt="Remy Sharp"
                width="3rem"
                src={imageUrl}
                className={classes.large}
              /></Grid>
                <Grid item>
              <Grid item container direction="column">
                <Grid item>
                  <Grid item container spacing={2} direction="column">
                    <Grid item>
                      <Typography variant="h5">kaveenakash1998@gmail.com</Typography>
                      <Typography variant="subtitle2">Seller</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">
                        <Box
                        
                       
                          borderColor="transparent"
                        >
                          <Rating name="disabled" value={value} disabled />
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                </Grid>
                <Grid item></Grid>
              </Grid>

                </Grid>
              </Grid>
            </Grid>
            <Grid item> <TotalListings/></Grid>
          </Grid>

          
        </CardContent>
      </Card>
    </Grid>
  );
}
