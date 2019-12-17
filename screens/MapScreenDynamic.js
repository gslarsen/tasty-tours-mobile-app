import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, Platform } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import ENV from "../env";
import { TOURS } from "../data/data";
import Colors from "../constants/Colors";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.09;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = ENV.googleApiKey;

const MapScreenDynamic = props => {
  const tourId = props.navigation.getParam("tourId");
  const locName = props.navigation.getParam("name");

  const tour = TOURS.find(tour => tour.id === tourId);
  const tourLocations = tour.locations;
  const locationCoords = tourLocations.map(location => location.coordinates);

  const state = {
    locations: tourLocations.map(location => location.locationName),
    coordinates: locationCoords
  };

  const [currState, setCurrState] = useState(state);
  let length = 0;
  let time = 0;

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
      onPoiClick={e => console.log(e)}
    >
      <Marker
        coordinate={{
          latitude: locationCoords[0].latitude + 0.0002,
          longitude: locationCoords[0].longitude
        }}
        style={{
          backgroundColor: Colors.accentColor,
          padding: 5,
          borderRadius: 0.5
        }}
      >
        <View>
          <Text style={{ fontSize: 8 }}>{`Distance: ${length} m\nTime: ${time}`}</Text>
        </View>
      </Marker>

      {currState.coordinates.map((coordinate, index) => (
        <MapView.Marker
          key={`coordinate_${index}`}
          coordinate={coordinate}
          style={{
            backgroundColor: Colors.accentColor,
            padding: 5,
            borderRadius: 0.5
          }}
        >
          <View>
            <Text style={{ fontSize: 8 }}>{state.locations[index]}</Text>
          </View>
        </MapView.Marker>
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
            console.log(`Distance: ${result.distance * 0.621371} m`);
            length = (result.distance * 0.621371).toFixed(1);
            console.log(`Duration: ${result.duration} min`);
            time = result.duration.toFixed(1);

            mapView.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: width / 10,
                bottom: height / 10,
                left: width / 10,
                top: height / 10
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

MapScreenDynamic.navigationOptions = navData => {
  // console.log('NAV OPTIONS:', navData.navigation.getParam('name'))
  const tourName = navData.navigation.getParam("name");

  return {
    headerTitle: `${tourName}`,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Home"
          iconName="md-home"
          onPress={() => {
            navData.navigation.navigate("Cities");
          }}
        />
      </HeaderButtons>
    )
  };
};

export default MapScreenDynamic;
