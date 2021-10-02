import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

export default function Listings() {
  const classes = useStyles();
  const imageUrl =
    "http://patpat-s3-live.s3.amazonaws.com/uploads/30ab9e94924fbbd7efa6682bbce08a29-710100.jpeg";
  return (
    <Container>
      <Grid container alignItems="center" direction="column" >
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <Grid container item justifyContent="space-between"> 
                <Grid item>
                  <Grid item container spacing={4}>
                    <Grid item>
                      <img
                        alt="Remy Sharp"
                        width="150rem"
                        src={imageUrl}
                        className={classes.large}
                      />
                    </Grid>
                    <Grid item>
                        <Grid item container direction="column">
                            <Grid item>
                            <Typography variant="subtitle1"> <li>Title - Land Sale in Malabe</li></Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant="subtitle1"><li>Price - Rs.45,0000</li></Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant="subtitle1"><li>Type - Land</li></Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant="subtitle1"><li>Location - Malabe</li></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item >
                  <Grid item container direction="column" justifyContent="center" alignItems="center">
                      <br/>
                      <br/>
                      
                      <Grid item>
                          sdfsdfs
                      </Grid>
                  </Grid>
                </Grid>
               
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
    minWidth: 850,
    backgroundColor: "#FFFDE7",
  },
}));
