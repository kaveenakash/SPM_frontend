import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from '@material-ui/icons/Home';

export default function IconList() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
          <Grid item>
              <Grid item container>
                  <Grid item>
                  <Avatar variant="circle" className={classes.iconContainer} >
                      <HomeIcon fontSize="large" className={classes.icon} />
                    </Avatar>
                  </Grid>
                  <Grid item>

                  </Grid>
              </Grid>
          </Grid>
          <Grid item>
              <Grid item container>
                  <Grid item></Grid>
                  <Grid item></Grid>
              </Grid>
          </Grid>
          <Grid item>
              <Grid item container>
                  <Grid item></Grid>
                  <Grid item></Grid>
              </Grid>
          </Grid>
          <Grid item>
              <Grid item container>
                  <Grid item></Grid>
                  <Grid item></Grid>
              </Grid>
          </Grid>
          <Grid item>
              <Grid item container>
                  <Grid item></Grid>
                  <Grid item></Grid>
              </Grid>
          </Grid>
          <Grid item>
              <Grid item container>
                  <Grid item></Grid>
                  <Grid item></Grid>
              </Grid>
          </Grid>
          
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: "3rem",
  },
  card: {
    minHeight: 500,
  },
  iconContainer:{
    padding:'16px',
    backgroundColor:theme.palette.common.seaWhite
},
icon:{
    color:theme.palette.common.pureBlack,
    '&:hover':{
        color:theme.palette.secondary.main,
        cursor:'pointer'
    }
}
}));
