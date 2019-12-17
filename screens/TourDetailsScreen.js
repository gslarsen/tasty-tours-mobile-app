import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Button
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import { TOURS } from "../data/data";
import Colors from "../constants/Colors";
import MapHeader from "../components/MapHeader";

const TourDetailsScreen = props => {
  // console.log('PROPS :', props.navigation.getParam('id'));

  const tourId = props.navigation.getParam("id");
  const locName = props.navigation.getParam("name");
  const tour = TOURS.find(item => item.id === tourId);
  const initialLocCoords = tour.locations[0].coordinates;

  const renderListItem = data => {
    return tour.locations.map(location => {
      return (
        <View key={location.locationName} style={styles.tourItem}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("LocationDetails", {
                tourId,
                name: location.locationName
              })
            }
          >
            <View>
              <View style={{ ...styles.tourRow, ...styles.tourHeader }}>
                <ImageBackground
                  source={{ uri: location.image }}
                  style={styles.image}
                >
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{location.locationName}</Text>
                  </View>
                </ImageBackground>
              </View>
              <View>
                <View style={{ ...styles.tourRow, ...styles.tourDetail }}>
                  <Text>{location.address.match(/^(.+?),/)[1]}</Text>
                  <Text>{location.phone}</Text>
                </View>
                <View
                  style={{
                    ...styles.tourRow,
                    paddingHorizontal: 10,
                    textAlign: "justify"
                  }}
                >
                  <Text numberOfLines={5}>{location.briefSummary}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, idx) => item.id}
        data={TOURS}
        renderItem={renderListItem}
        numColumns={1}
        ListHeaderComponent={
          <MapHeader
            style={styles.map}
            location={initialLocCoords}
            onPress={() => {
              props.navigation.navigate("MapDynamic", {
                tourId,
                name: locName
              });
            }}
          />
        }
      />
    </View>
  );
};

TourDetailsScreen.navigationOptions = navData => {
  console.log('NAV OPTIONS:', navData)
  const tourName = navData.navigation.getParam("name");

  return {
    headerTitle: `${tourName} Stops`,
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
            navData.navigation.navigate('Cities');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  tourItem: {
    height: 250,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  tourRow: {
    flexDirection: "row"
  },
  tourHeader: {
    height: "50%"
  },
  tourDetail: {
    paddingTop: 0,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "20%",
    paddingBottom: 10
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingVertical: 0,
    paddingHorizontal: 0
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    color: "white",
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: 115,
    justifyContent: "center"
  },
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  map: {
    marginBottom: 10,
    width: "100%",
    height: 75,
    borderColor: "#ccc",
    borderWidth: 1
  }
});

export default TourDetailsScreen;
