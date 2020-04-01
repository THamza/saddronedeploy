import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

import { Map as LeafletMap, TileLayer, Marker, Polyline } from 'react-leaflet';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '400px'
  }
}));



const MyMap = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [markers, setMarkers] = useState([]);
  const [lines, setLines] = useState([]);
  const [lastLat, setLastLat] = useState(0);
  const [lastLng, setLastLng] = useState(0);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
        }
        title="World Map"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>

        <LeafletMap
        center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        onClick={(e)=>{
          console.log(markers)
          setMarkers(markers => [...markers, [e.latlng.lat,e.latlng.lng]]);
          if(lastLat !== 0 && lastLng !== 0){
            setLines(lines => [...lines, {
                from_lat: lastLat,
                from_long: lastLng,
                to_lat: e.latlng.lat,
                to_long: e.latlng.lng,
              }])
          }

          setLastLat(e.latlng.lat)
          setLastLng(e.latlng.lng)
        }}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {markers.map((marker)=>
          <Marker position={marker}>
          </Marker>
         )}

         {lines.map(({id, from_lat, from_long, to_lat, to_long}) => {
        return <Polyline key={id} positions={[
          [from_lat, from_long], [to_lat, to_long],
        ]} color={'red'} />
        })}

      </LeafletMap>


        </div>

      </CardContent>
    </Card>
  );
};

MyMap.propTypes = {
  className: PropTypes.string
};

export default MyMap;
