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
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import DescriptionIcon from '@material-ui/icons/Description';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImageIcon from '@material-ui/icons/Image';
import CheckIcon from '@material-ui/icons/Check';
import classNames from 'classnames/bind'


export default function IconList() {

  const classes = useStyles();

  let cx = classNames.bind(classes)
  const btnClass = cx({
    iconbuttonSelected: false,
    iconbuttonNotSelected: true,
    iconButtonChecked: false
  });
  const btnIcon = cx({
    iconSelected: false,
    iconNotSelected: true,
    iconChecked: false
  });

  return (
    <React.Fragment>
      <Grid container justify="space-around" >
        <Grid item>
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <Button
                variant="outlined"
                className={btnClass}
                size="large"
                disableRipple
              >
                {" "}
                <PersonIcon fontSize="large" className={btnIcon} />
              </Button>
            </Grid>
            <Grid item>
              <ArrowDropUpIcon fontSize="large" className={classes.arrowIcon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <Button
                variant="outlined"
                className={btnClass}
                size="large"
                disableRipple
              >
                {" "}
                <DescriptionIcon fontSize="large" className={btnIcon} />
              </Button>
            </Grid>
            <Grid item>
              {false &&<ArrowDropUpIcon fontSize="large" className={classes.arrowIcon} />}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <Button
                variant="outlined"
                className={btnClass}
                size="large"
                disableRipple
              >
                {" "}
                <InsertDriveFileIcon fontSize="large" className={classes.iconSelected} />
              </Button>
            </Grid>
            <Grid item>
            {false &&<ArrowDropUpIcon fontSize="large" className={classes.arrowIcon} />}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <Button
                variant="outlined"
                className={btnClass}
                size="large"
                disableRipple
              >
                {" "}
                <ImageIcon fontSize="large" className={classes.iconSelected} />
              </Button>
            </Grid>
            <Grid item>
            {false &&<ArrowDropUpIcon fontSize="large" className={classes.arrowIcon} />}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <Button
                variant="outlined"
                className={btnClass}
                size="large"
                disableRipple
              >
                {" "}
                <CheckIcon fontSize="large" className={classes.iconSelected} />
              </Button>
            </Grid>
            <Grid item>
            {false &&<ArrowDropUpIcon fontSize="large" className={classes.arrowIcon} />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  iconSelected: {
    fontSize: "55px",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
  },
  iconbuttonSelected: {
    borderRadius: 50,
    padding: "12px",
    borderColor: theme.palette.secondary.main,
  },
  iconNotSelected: {
    fontSize: "55px",
    color: theme.palette.common.seaGray,
    "&:hover": {
      color: theme.palette.common.seaGray,
      cursor: "pointer",
    },
  },
  iconbuttonNotSelected: {
    borderRadius: 50,
    padding: "12px",
    borderColor: theme.palette.common.seaGray,
  },
  iconChecked: {
    fontSize: "55px",
    color: theme.palette.common.seaGreen,
    "&:hover": {
      color: theme.palette.common.seaGreen,
      cursor: "pointer",
    },
  },
  iconButtonChecked: {
    borderRadius: 50,
    padding: "12px",
    borderColor: theme.palette.common.seaGreen,
  },
  arrowIcon: {
    fontSize: "50px",
    color: theme.palette.secondary.main,
  },
}));
