import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/styles";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ElevationScroll>
      <AppBar color="secondary">
        <Toolbar>
          <Grid
            container
            justify="space-around"
            direction="row"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3" className={classes.headerTitle}>seller.lk</Typography>
            </Grid>
            <Grid item>
              <Grid item container spacing={1}>
                <Grid item>
                  <Hidden smDown>
                    <Button variant="contained" className={classes.postAdBtn}>
                      Post Your Ad Free
                    </Button>
                  </Hidden>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.registerBtn}>
                    Register
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Login</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  registerBtn: {
    [theme.breakpoints.down("sm")]: {
      size: "small",
    },
    postAdBtn: {
      [theme.breakpoints.down("md")]: {
        size: "small",
      },
    },
  },
  headerTitle:{
    [theme.breakpoints.down("md")]: {
      fontSize:'2.5rem'
    },
  }
}));

export default Header;
