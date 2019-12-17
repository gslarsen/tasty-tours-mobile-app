import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground
} from "react-native";

import ENV from "../env";

const MapHeader = props => {
  let imageHeaderUrl;

  imageHeaderUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.latitude},${props.location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${ENV.googleApiKey}`;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.mapPreview, ...props.style }}
    >
      {props.location ? (
        <ImageBackground
          style={styles.mapImage}
          source={{ uri: imageHeaderUrl }}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Tour Map</Text>
          </View>
        </ImageBackground>
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center"
  },
  mapImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingVertical: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 35,
    color: "black",
    textAlign: "center"
  }
});

export default MapHeader;
