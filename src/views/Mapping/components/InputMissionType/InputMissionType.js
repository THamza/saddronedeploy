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

import { SnackbarProvider, useSnackbar } from 'notistack';


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


let missionChoice = 0;
const options = [
  'Choose a job',
  'Collect Fauna Data',
  'Collect Flora Data',
  'Collect Geological Data',
  'Collect Atmospheric Data',
  'Get Picture of the Area',
  'Map Ocean Floor'
];

function Snack() {

  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick0 = (variant, msg) => () => {
    // variant could be success, error, warning, info, or default
          enqueueSnackbar(msg,  {variant});
    }
  const handleClick1 = () => () => {
    // variant could be success, error, warning, info, or default
          enqueueSnackbar("Checking Available Manager Drones...",  {variant: "success"});
          setTimeout(() => {
              enqueueSnackbar("Manager D.: Detecting fauna in the area...",  {variant: "info"});
              setTimeout(() => {
                  enqueueSnackbar("Manager D.: Deploying Worker Drones...",  {variant: "success"});
                  setTimeout(() => {
                      enqueueSnackbar("Worker D.: Processing...",  {variant: "info"});
                      setTimeout(() => {
                          enqueueSnackbar("Manager D.: Merging Collected Data...",  {variant: "info"});
                          setTimeout(() => {
                              enqueueSnackbar("Task Completed Successfully",  {variant: "success"});
                          }, 3000);
                      }, 7000);
                  }, 5000);
              }, 4000);
          }, 4000);
    }

  const handleClick4 = () => () => {
    // variant could be success, error, warning, info, or default
        enqueueSnackbar("Estimating Weather Conditions...", {variant: "info"});
          setTimeout(() => {
              enqueueSnackbar("Dangerous Flight Conditions Detected", {variant: "warning"});
              setTimeout(() => {
                  enqueueSnackbar("Task Cancelled!", {variant: "error"});
                  setTimeout(() => {
                      enqueueSnackbar("Task Enqueued for Rescheduling", {variant: "info"});
                  }, 3000);
              }, 2000);
          }, 5000);
    }
  const handleClick6 = (variant, message) => () => {
    // variant could be success, error, warning, info, or default
          enqueueSnackbar(message,  {variant});
    }

    function BRender(props) {
      if (missionChoice === 0) {
        return <Button Disabled onClick={handleClick0("info", "Please Delimit a Location and Choose a Task")
        }>Submit</Button>
      }
      else if (missionChoice === 1) {
        return <Button className={clsx(classes.submitButtonEnabled)} onClick={handleClick1()}>Submit</Button>
      }
      else if (missionChoice === 4) {
        return <Button className={clsx(classes.submitButtonEnabled)} onClick={handleClick4()}>Submit</Button>
      }
      else if (missionChoice === 6) {
        return <Button className={clsx(classes.submitButtonDisabled)} onClick={handleClick6("error", "No Aquatic Drones Found")
        }>Submit</Button>
      }
      return <div></div>
    }

  return (
    <React.Fragment>
    <BRender />
    </React.Fragment>
  );
}



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

                                  <SnackbarProvider maxSnack={10}>
                                   <React.Fragment>
                                    <Snack/>
                                      </React.Fragment>
                                  </SnackbarProvider>

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
