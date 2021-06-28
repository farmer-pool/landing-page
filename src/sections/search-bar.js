import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { jsx, Box, Container, Image, Heading, Text } from "theme-ui";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";

import Button from "@material-ui/core/Button";
import { CenterFocusStrong } from "@material-ui/icons";
import animation from "assets/css/animation.module.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  section: {
    display: "grid",
    pt: [11, 11, 11, 12, 12, 12, 14],
    // pb: [7, 7, 7, 9, 9, 10, 11],
  },
  SearchField: {
    width: "40vw",
    height: "2rem",
    // border: ".1em solid black",
  },

  searchButton: {
    fontSize: "2rem",
    minHeight: "4rem",
    maxWidth: "20vw",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ minHeight: "1vh" }}
    >
      <Grid item>
        <Input className={classes.SearchField} />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          className={(classes.searchButton, animation["snip1417"])}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
