import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const PropertyBasicForm = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const classes = useStyles();
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          label="Display Name"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Display Name *</Typography>
              </InputLabel>{" "}
              <Input  fullWidth {...field} />
            </>
          )}
        />
        <br/>
        <br/>
        <Controller
          name="tpNumber"
          control={control}
          defaultValue=""
          label="Display Name"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Display Telephone Number *</Typography>
              </InputLabel>{" "}
              <Input  fullWidth {...field} />
            </>
          )}
        />
        <br/>
        <br/>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          label="Display Name"
          render={({ field }) => (
            <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Display Email *</Typography>
              </InputLabel>{" "}
              <Input  fullWidth {...field} />
            </>
          )}
        />
        <br/>
        <br/>
        <Controller
          name="district"
          control={control}
          render={({ field }) => (
              <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Selct Your District *</Typography>
              </InputLabel>
            <Select
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
            </>
          )}
        />
        <br/>
        <Controller
          name="area"
          control={control}
          render={({ field }) => (
              <>
              <InputLabel htmlFor="input-with-icon-adornment">
                <Typography variant="subtitle2">Selct Your Area *</Typography>
              </InputLabel>
            <Select
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
            </>
          )}
        />
        <br/>
      <center><Button className={classes.nextButton} type="submit" variant="outlined" align="right" color="secondary">Next</Button></center>  
      </form>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
   nextButton:{
    borderRadius:40,
    '&:hover':{
        backgroundColor:theme.palette.secondary.main,
        color:theme.palette.common.seaWhite
      }
   }
  }));
export default PropertyBasicForm;
