import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const AmountCard = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item className={classes.paperContainer}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid
            item
            container
            justify="center"
            spacing={1}
            alignItems="baseline"
          >
            <Grid item>
              <Typography variant="h5" className={classes.amountTitle}>
                LKR{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" className={classes.amount}>
                {" "}
                5,350,000
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item className={classes.paperContainer}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid item container justify="center" alignItems="center" spacing={2}>
            <Grid item>
              <Typography variant="subtitle2">BEST LEASE RENTAL :</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">LKR 84,996</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item className={classes.paperContainer}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid item container justify="center" alignItems="center" spacing={2}>
            <Grid item>
              <Typography variant="subtitle2">DOWN PAYMENT :</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5"> LKR 1,070,00</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          fullWidth
          className={classes.contactSellerBtn}
        >
          Contact Seller
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    width: "23rem",
    background:
      "radial-gradient(circle, rgba(251,220,63,0.12368697478991597) 5%, rgba(252,219,70,0.31976540616246496) 97%)",
    borderColor: theme.palette.secondary.main,
  },
  paperContainer: {
    marginBottom: "0.5rem",
  },
  contactSellerBtn: {
    fontFamily: "Montserrat",
    fontSize: "16px",
  },
  amountTitle: {
    fontSize: "24px",
    color: theme.palette.secondary.main,
  },
  amount: {
    fontSize: "24px",
    fontWeight: 700,
    color: theme.palette.secondary.main,
  },
  contactSellerBtn: {
    color: theme.palette.common.seaWhite,
    fontFamily: "Montserrat",
    backgroundColor: theme.palette.secondary.main,
    fontSize: "16px",
    fontWeight: 400,
  },
}));

export default AmountCard;
