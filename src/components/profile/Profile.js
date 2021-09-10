import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:"6rem",
    minWidth: 650,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log(props.loginData)
  return (
    <Grid container justifyContent="center">

    <Card className={classes.root}>
      <CardContent>
        <center><Typography variant="h4">User Profile</Typography></center>
        <br/>
        <br/>
        
        <center><Avatar alt="Remy Sharp" fontSize="large" src={props.loginData.profileObj.imageUrl} className={classes.large}/></center>
        <br/>
        <center><Typography variant="h5"> {props.loginData.profileObj.name}</Typography></center>
        <center><Typography variant="h5"> {props.loginData.profileObj.email}</Typography></center>
        <br/>
        <br/>
        <center><Button variant="contained" color="secondary">Close</Button> </center>

       </CardContent>
    </Card>

    </Grid>
  );
}
