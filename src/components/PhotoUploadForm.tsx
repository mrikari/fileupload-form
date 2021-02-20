import {
  Container,
  FormControl,
  Button,
  FormGroup,
  makeStyles,
  Theme,
  createStyles,
  TextField,
  TextareaAutosize,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    control: {
      width: "100%",
    },
    fields: {
      paddingBottom: "0.5em",
      "& > *": {
        paddingBottom: "0.5em",
      },
    },
    button: {
      width: "100%",
    },
    toolbar: theme.mixins.toolbar,
  })
);

export function CameraField() {
  return (
    <Box display="flex">
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          size="medium"
        >
          <PhotoCamera />
        </IconButton>
      </label>
      <input
        style={{ marginTop: "10px", marginBottom: "10px" }}
        type="file"
        id="icon-button-file"
        accept="image/*;capture=camera"
      />
    </Box>
  );
}

export function PhotoUploadForm() {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">CameraForm</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
      <Container>
        <form action="." method="post">
          <FormControl className={classes.control}>
            <FormGroup className={classes.fields}>
              <TextField required label="NAME1" helperText="input name1" />
              <TextField required label="NAME2" helperText="input name2" />
              <TextField required label="NAME3" helperText="input name3" />
              <TextField required label="NAME4" helperText="input name4" />
              <TextareaAutosize rowsMin={8} required></TextareaAutosize>
            </FormGroup>
            <FormGroup>
              <CameraField />
              <Button
                className={classes.button}
                variant="contained"
                component="label"
              >
                submit
                <input type="submit" hidden />
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Container>
    </>
  );
}
