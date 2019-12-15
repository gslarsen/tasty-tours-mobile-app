import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import ENV from "../env";
import { TOURS } from "../data/data";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
// const LATITUDE = 37.771707;
// const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = ENV.googleApiKey;

const MapScreenDynamic = props => {
  const tourId = props.navigation.getParam("tourId");
  const locName = props.navigation.getParam("name");

  const tour = TOURS.find(tour => tour.id === tourId);
  const tourLocations = tour.locations;
  const locationCoords = tourLocations.map(location => location.coordinates);

  const state = {
    coordinates: locationCoords
    //   {
    //     latitude: 37.3317876,
    //     longitude: -122.0054812
    //   },
    //   {
    //     latitude: 37.771707,
    //     longitude: -122.4053769
    //   }
    // ]
  };

  const [currState, setCurrState] = useState(state);

  const onMapPress = e => {
    setCurrState({
      coordinates: [...currState.coordinates, e.nativeEvent.coordinate]
    });
  };

  let mapView = null;

  return (
    <MapView
      initialRegion={{
        latitude: locationCoords[0].latitude,
        longitude: locationCoords[0].longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }}
      style={StyleSheet.absoluteFill}
      ref={c => (mapView = c)}
      onPress={onMapPress}
    >
      {currState.coordinates.map((coordinate, index) => (
        <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
      ))}
      {currState.coordinates.length >= 2 && (
        <MapViewDirections
          origin={currState.coordinates[0]}
          waypoints={
            currState.coordinates.length > 2
              ? currState.coordinates.slice(1, -1)
              : null
          }
          destination={currState.coordinates[currState.coordinates.length - 1]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          onStart={params => {
            console.log(
              `Started routing between "${params.origin}" and "${params.destination}"`
            );
          }}
          onReady={result => {
            console.log(`Distance: ${result.distance} km`);
            console.log(`Duration: ${result.duration} min.`);

            mapView.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: width / 20,
                bottom: height / 20,
                left: width / 20,
                top: height / 20
              }
            });
          }}
          onError={errorMessage => {
            console.log(errorMessage);
          }}
        />
      )}
    </MapView>
  );
};

export default MapScreenDynamic;
