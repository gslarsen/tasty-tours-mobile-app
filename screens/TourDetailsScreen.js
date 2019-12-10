import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  ImageBackground
} from "react-native";

import { TOURS } from "../data/data";
import Colors from "../constants/Colors";

const TourDetailsScreen = props => {
  // console.log('PROPS :', props.navigation.getParam('id'));

  const tourId = props.navigation.getParam("id");

  const renderListItem = data => {
    const tour = TOURS.find(item => item.id === tourId);

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
              <View style={{ ...styles.tourRow, ...styles.tourDetail }}>
                <Text numberOfLines={5}>{location.briefSummary}</Text>
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
      />
    </View>
  );
};

TourDetailsScreen.navigationOptions = navData => {
  // console.log('NAV OPTIONS:', navData.navigation.getParam('name'))
  const tourName = navData.navigation.getParam("name");

  return {
    headerTitle: `${tourName} Stops`,
    headerStyle: {
      backgroundColor: Colors.primaryColor
      // backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: "white"
    //headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  };
};

const styles = StyleSheet.create({
  tourItem: {
    height: 200,
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
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "50%",
    textAlign: "justify"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    color: "white",
    textAlign: "center"
  },
  image: {
    width: '100%',
    height: 100,
    justifyContent: "center"
  },
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

export default TourDetailsScreen;
