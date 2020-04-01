import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  LinearProgress
} from '@material-ui/core';
import ManagerDroneIcon from '@material-ui/icons/HdrStrong';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  progress: {
    marginTop: theme.spacing(3),
  },
  colorPrimary: {
    backgroundColor: '#B2DFDB',
  },
  barColorPrimary: {
    backgroundColor: '#479f4b',
  }
}));

const AverageManagerDroneState = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

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
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              AVERAGE MANAGER DRONE STATE
            </Typography>
            <Typography variant="h3">92.6%</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <ManagerDroneIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <LinearProgress
          classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}}
          className={classes.progress}
          value={92.6}
          variant="determinate"
        />
      </CardContent>
    </Card>
  );
};

AverageManagerDroneState.propTypes = {
  className: PropTypes.string
};

export default AverageManagerDroneState;
