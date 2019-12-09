import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import { TOURS } from "../data/data";
import Colors from '../constants/Colors';

const LocationDetailsScreen = props => {
  // console.log('PROPS :', props.navigation.getParam('id'));
  const tourId = props.navigation.getParam('tourId');
  const locName = props.navigation.getParam('name');

  const renderListItem = data => {
    const tour = TOURS.find(item => item.id === tourId);
    const location = tour.locations.find(location => location.locationName === locName);
    
    // return tour.locations.map((location) => {
    //   return (
    //     <TouchableOpacity
    //       key={location.locationName}
    //       style={styles.listItem}
    //       onPress={() => props.navigation.navigate("LocationDetails", { name: location.locationName })}
    //     >
    //       <View>
    //         <Text>{location.locationName}</Text>
    //       </View>
    //     </TouchableOpacity>
    //   );
    // });
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

LocationDetailsScreen.navigationOptions = (navData) => {
  // console.log('NAV OPTIONS:', navData.navigation.getParam('name'))
  const locName = navData.navigation.getParam('name');

  return {
    headerTitle: `${locName}`,
    headerStyle: {
      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'  
  }
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});

export default LocationDetailsScreen;