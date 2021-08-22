import React from "react";
import Modal from "react-modal";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
const customStyles = {
  content: {
    top: "40%",
    minWidth: "40%",
    minHeight: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderColor:"#EBAC26",
    backgroundImage: ' linear-gradient(to right top, #9e9e9e, #b3b3b3, #c9c9c9, #dfdfdf, #f5f5f5)'
    
  },
};

const ModalCard = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={props.IsPostModalOpen}
        onRequestClose={props.closePostModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Grid container direction="column">
          <Grid item>
            <Typography align="center" variant="h5" className={classes.header}>
              Please Select Category
            </Typography>
            <br />
            <Divider variant="fullWidth" />
          </Grid>
          <Grid item>
            <Grid item container justifyContent="center" direction="row">
              <Grid item>
                <Grid item container direction="column" alignItems="center">
                  <Grid item>
                    <Avatar variant="circle" className={classes.iconContainer}>
                      <BusinessCenterIcon
                        fontSize="large"
                        className={classes.icon}
                      />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                    Services
                    </Typography>
                   </Grid>
                  <Grid item>
                    <Checkbox
                     icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                     checkedIcon={<CheckBoxIcon fontSize="large" />}
                      checked={checked}
                      onChange={handleChange}
                      size="large"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item></Grid>
              <Grid item></Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 600,
    fontSize: "25px",
  },
  iconContainer: {
    padding: "16px",
  },
  icon: {
    color: theme.palette.common.pureBlack,
    "&:hover": {
      color: theme.palette.secondary.dark,
      cursor: "pointer",
    },
  },
}));

export default ModalCard;
