import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconList from '../reusable/IconList'
import { makeStyles } from "@material-ui/styles";

export default function VehicleAddForm() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
          <Grid container direction="column">
              <Grid item>
                    <IconList/>
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
}));
