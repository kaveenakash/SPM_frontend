import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import IconList from "../reusable/IconList";
import { makeStyles } from "@material-ui/styles";
import PropertyBasicForm from "./PropertyBasicForm";

export default function VehicleAddForm() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Grid container direction="column" spacing={2}>
          <Grid item className={classes.iconContainer}>
            <IconList />
            <Divider />
          </Grid>
          <Grid item>
            <center><Typography variant="h3" className={classes.formHeader}>
              Basic Details
            </Typography></center>
          </Grid>
          <Grid item>
            <Grid item container justify="center">
              <Grid item xs={6}>
                <PropertyBasicForm />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
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
  iconContainer: {
    marginTop: "3rem",
  },
  formHeader: {
    fontSize: "1.4rem",
    fontWeight: 400,
    color: "#778899",
  },
}));
