import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform
} from "react-native";

import { TOURS } from "../data/data";
import Colors from '../constants/Colors';


const TourDetailsScreen = props => {
  // console.log('PROPS :', props.navigation.getParam('id'));

  const tourId = props.navigation.getParam('id');

  const renderListItem = data => {
    const tour = TOURS.find(item => item.id === tourId );
    
    return tour.locations.map((location) => {
      return (
        <TouchableOpacity
          key={location.locationName}
          style={styles.listItem}
          onPress={() => props.navigation.navigate("LocationDetails", { tourId, name: location.locationName })}
        >
          <View>
            <Text style={styles.text}>{location.locationName}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <FlatList
      keyExtractor={(item, idx) => item.id}
      data={TOURS}
      renderItem={renderListItem}
      numColumns={1}
    />
  );
};


TourDetailsScreen.navigationOptions = (navData) => {
  // console.log('NAV OPTIONS:', navData.navigation.getParam('name'))
  const tourName = navData.navigation.getParam('name');

  return {
    headerTitle: `${tourName} Stops`,
    headerStyle: {
      backgroundColor: Colors.primaryColor
      // backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: 'white'
    //headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  },
  text: {
    color: Colors.primaryColor,
    fontFamily: 'open-sans-bold',
    textAlign: "center"
  }
});

export default TourDetailsScreen;