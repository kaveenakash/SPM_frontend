import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 800,
    minHeight:300
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    color:theme.palette.secondary.main,
    marginBottom:'2rem'
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function DescriptionCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          OVERVIEW
        </Typography>
        <Typography variant="subtitle2">
        good service.
        </Typography>
        <Typography variant="subtitle2">
        6 month warrenty.
        </Typography>
      
        <br/>
       
        
        <Typography variant="subtitle2">
        පරීක්ෂාවෙන් පසු මිල ගණන් සාකච්චා කල හැක
        </Typography>
        <Typography variant="subtitle2">
        ඉක්මනින් විකිණීමට.
        </Typography>
      </CardContent>
     
    </Card>
  );
}
