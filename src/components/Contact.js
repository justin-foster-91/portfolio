import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import { useFormData } from 'herotofu-react';


const Contact = () => {
  const { formState, getFormSubmitHandler } = useFormData('https://public.herotofu.com/v1/0d35d7f0-56d5-11ef-8375-1b1d42270640');

  const classes = useStyles();

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <form className={classes.form} onSubmit={getFormSubmitHandler()}>
          <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            required
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            className={classes.field}
            type="email"
            name="email"
            required
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            name="message"
            required
          />
          <Button
            type="submit"
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
          >
            Contact Me
          </Button>
          {!!formState.status && <div className={classes.formStatus}>Current form status is: {formState.status}</div>}
        </form>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
  formStatus: {
    textAlign: "center",
    marginBottom: "1rem",
    marginTop: "1rem",
  }
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

export default Contact;
