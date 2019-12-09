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

const ToursScreen = props => {
  // console.log('PROPS :', props.navigation.getParam('id'));

  const cityId = props.navigation.getParam('id');

  const renderListItem = data => {
    const availableItems = TOURS.filter(item => item.cityId === cityId );
    
    return availableItems.map((item) => {
      return (
        <TouchableOpacity
          key={item.id}
          style={styles.listItem}
          onPress={() => props.navigation.navigate("TourDetails", {id: item.id, name: item.name})}
        >
          <View>
            <Text>{item.name}</Text>
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

ToursScreen.navigationOptions = (navData) => {
  // console.log('NAV OPTIONS:', navData.navigation.getParam('name'))
  const cityName = navData.navigation.getParam('name');

  return {
    headerTitle: `${cityName} Tours`,
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

export default ToursScreen;
