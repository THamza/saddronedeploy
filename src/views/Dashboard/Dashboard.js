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
          xs={12}
        >
          <NumberOfManagerDrones />
        </Grid>
        <Grid
          item
          lg={3}
          sm={3}
          xl={3}
          xs={12}
        >
          <TotalFlightTime />
        </Grid>

        <Grid
          item
          lg={3}
          sm={3}
          xl={3}
          xs={12}
        >
          <NumberOfWorkingDrones />
        </Grid>
        <Grid
          item
          lg={3}
          sm={3}
          xl={3}
          xs={12}
        >
          <TotalAreaCovered />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <AverageManagerDroneState />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <AverageWorkerDroneState />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <CurrentTaskProgress />
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={9}
          xs={12}
        >
          <UsersByDevice />
          </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={9}
          xs={12}
        >
          <ConnectionTraffic />
        </Grid>





        <Grid
          item
          lg={3}
          sm={4}
          xl={3}
          xs={12}
        >
          <NumberOfMissions />
        </Grid>

        <Grid
          item
          lg={3}
          sm={4}
          xl={3}
          xs={12}
        >
          <AverageDronesNeeded />
        </Grid>
        <Grid
          item
          lg={3}
          sm={4}
          xl={3}
          xs={12}
        >
          <AverageTimeNeeded />
        </Grid>

        <Grid
          item
          lg={8}
          md={12  }
          xl={9}
          xs={12}
        >
          <TimeNeededPerMission />
        </Grid>

        <Grid
          item
          lg={4}
          md={12}
          xl={3}
          xs={12}
        >
          <LatestMissions />
        </Grid>

      </Grid>
    </div>
  );
};

export default Dashboard;
