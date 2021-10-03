import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

export default function ViewDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <center>
          <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
        </center>
        <center>
          {" "}
          <img
            alt="Remy Sharp"
            width="150rem"
            src={'http://patpat-s3-live.s3.amazonaws.com/uploads/30ab9e94924fbbd7efa6682bbce08a29-710100.jpeg'}
            className={classes.large}
          />
        </center>
        <center> <DialogContent style={{ minWidth: 400 }}>
          <DialogContentText>Land Sale In Malabe</DialogContentText>
          <DialogContentText>Land Sale In Malabe</DialogContentText>
        </DialogContent></center>
        <DialogActions>
          <Button autoFocus onClick={() => props.handleView()} color="warning">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
    minWidth: 850,
    backgroundColor: "#FFFDE7",
  },
  editBtn: {
    "&:hover": {
      color: theme.palette.success.main,
    },
  },
  deleteBtn: {
    "&:hover": {
      color: theme.palette.error.main,
    },
  },
  viewBtn: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  large: {
    width: theme.spacing(35),
    height: theme.spacing(20),
  },
}));