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
            <Text style={styles.text}>{item.name}</Text>
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
    headerTitle: `${cityName.match(/^(.+?),/)[1]} Tours`,
    headerStyle: {
      backgroundColor: Colors.primaryColor
      //backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: 'white'
    //headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 60,
    width: '70%',
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

export default ToursScreen;
