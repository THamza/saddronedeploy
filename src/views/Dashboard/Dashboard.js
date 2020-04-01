import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  NumberOfWorkingDrones,
  NumberOfManagerDrones,
  TotalFlightTime,
  TotalAreaCovered,
  AverageManagerDroneState,
  AverageWorkerDroneState,
  CurrentTaskProgress,
  ConnectionTraffic,
  NumberOfMissions,
  AverageDronesNeeded,
  AverageTimeNeeded,
  TimeNeededPerMission,
  LatestMissions,
  UsersByDevice
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={3}
          xl={3}
          xs={6}
        >
          <NumberOfManagerDrones />
        </Grid>
        <Grid
          item
          lg={3}
          sm={3}
          xl={3}
          xs={6}
        >
          <TotalFlightTime />
        </Grid>

        <Grid
          item
          lg={3}
          sm={3}
          xl={3}
          xs={6}
        >
          <NumberOfWorkingDrones />
        </Grid>
        <Grid
          item
          lg={3}
          sm={3}
          xl={3}
          xs={6}
        >
          <TotalAreaCovered />
        </Grid>
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={6}
        >
          <AverageManagerDroneState />
        </Grid>
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={6}
        >
          <AverageWorkerDroneState />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <CurrentTaskProgress />
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={6}
        >
          <UsersByDevice />
          </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={6}
        >
          <ConnectionTraffic />
        </Grid>





        <Grid
          item
          lg={4}
          sm={4}
          xl={4}
          xs={4}
        >
          <NumberOfMissions />
        </Grid>

        <Grid
          item
          lg={4}
          sm={4}
          xl={4}
          xs={4}
        >
          <AverageDronesNeeded />
        </Grid>
        <Grid
          item
          lg={4}
          sm={4}
          xl={4}
          xs={4}
        >
          <AverageTimeNeeded />
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <TimeNeededPerMission />
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <LatestMissions />
        </Grid>

      </Grid>
    </div>
  );
};

export default Dashboard;
