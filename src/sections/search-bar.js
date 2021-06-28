import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { jsx, Box, Container, Image, Heading, Text } from "theme-ui";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';

import Button from '@material-ui/core/Button';
import { CenterFocusStrong } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  section: {
    display: "grid",
    pt: [11, 11, 11, 12, 12, 12, 14],
    // pb: [7, 7, 7, 9, 9, 10, 11],
  },
  SearchField:{
    display: "grid",
    left: "50%",
    gridRow: "1 / span 1",
    // maxWidth: [null, null, null, 455, 660],
  },
  
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 3,
    backgroundColor: '#3eac5c',
    borderColor: '#3eac5c',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#3eac5c',
      borderColor: '#3eac5c',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#3eac5c',
      borderColor: '#3eac5c',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #3eac5c',
    },
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Grid
  container
  spacing={3}
  direction="row"
  alignItems="center"
  justify="center"
  style={{ minHeight: '1vh' }}
>

  <Grid item xs={2.5}>
          <TextField id="outlined-basic"  label="Launcher ID" variant="outlined" style = {{width: 350}}/>
        </Grid> 
        <Grid item xs={1}>
          <Button
        variant="contained"
        color="secondary"
        className={classes.root}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
      </Grid>      

</Grid> 
  );
}