import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  submitButtonEnabled:{
      background: '#4fb349',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: '35px',
      padding: '0 30px',
      boxShadow: '0 3px 5px 1px rgba(0, 0, 0, .2)'
  },
  submitButtonDisabled:{
      background: '#ec433e',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: '35px',
      padding: '0 30px',
      boxShadow: '0 3px 5px 1px rgba(0, 0, 0, .2)'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.success.dark
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  }
}));


const options = [
  'Choose a job',
  'Collect Fauna Data',
  'Collect Flora Data',
  'Collect Geological Data',
  'Collect Atmospheric Data',
  'Get Picture of the Area',
  'Map Ocean Floor'
];

let missionChoice = 0;
const InputMissionType = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
   const [selectedIndex, setSelectedIndex] = React.useState(1);

   const handleClickListItem = (event) => {
     setAnchorEl(event.currentTarget);
     missionChoice = event.currentTarget;
   };

   const handleMenuItemClick = (event, index) => {
     setSelectedIndex(index);
     missionChoice = index;
     setAnchorEl(null);
   };

   const handleClose = () => {
     setAnchorEl(null);
   };


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item
          >
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              MISSION LAUNCHER
            </Typography>
                    <Grid container
                    alignItems="center"
                    justify="flex-end"
                    >

                              <div className={classes.root}>
                                  <List component="nav" aria-label="Device settings">
                                    <ListItem
                                      button
                                      aria-haspopup="true"
                                      aria-controls="lock-menu"
                                      aria-label="Task to Perform:"
                                      onClick={handleClickListItem}
                                    >
                                      <ListItemText primary="Task to Perform" secondary={options[selectedIndex]} />
                                    </ListItem>
                                  </List>
                                  <Menu
                                    id="lock-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                  >
                                    {options.map((option, index) => (
                                      <MenuItem
                                        key={option}
                                        disabled={index === 0}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                      >
                                        {option}
                                      </MenuItem>
                                    ))}
                                  </Menu>
                                </div>
                                <Button variant="contained" className={clsx(classes.submitButtonEnabled, className)} onClick={() => {
                                    switch(missionChoice){
                                      case 1:
                                        break
                                      case 2:
                                        break
                                      case 3:
                                        break
                                      case 4:
                                        break
                                      case 5:
                                        break
                                      case 6:
                                        break
                                      default:

                                    }
                                  }}>
                                    Submit
                                  </Button>

                </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};


InputMissionType.propTypes = {
  className: PropTypes.string
};

export default InputMissionType;
