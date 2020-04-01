import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  MyMap,
  EstimatedWorkerDronesNeeded,
  EstimatedManagerDronesNeeded,
  EstimatedTimeDronesNeeded,
  InputMissionType,
  Weather
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Mapping = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>



      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Grid
          item
          lg={8}
          md={8}
          xl={9}
          xs={12}
        >
          <MyMap />
        </Grid>

        <Grid
          item
          lg={8}
          md={4}
          xl={9}
          xs={12}
        >
          <InputMissionType />

          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={0}
          >
            <Grid
              item
              lg={8}
              md={6}
              xl={9}
              xs={12}
            >
              <EstimatedManagerDronesNeeded />
            </Grid>

            <Grid
              item
              lg={8}
              md={6}
              xl={9}
              xs={12}
            >
              <EstimatedWorkerDronesNeeded />
            </Grid>

          </Grid>

          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <EstimatedTimeDronesNeeded />
          </Grid>
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Weather />
        </Grid>
      </Grid>
    </div>
  );
};

export default Mapping;
