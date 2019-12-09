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

const TourDetailsScreen = props => {
  const renderListItem = data => {
    console.log(data);
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => props.navigation.navigate("LocationDetails", {id: data.item.id, name: data.item.name})}
      >
        <View>
          <Text>{data.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
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

TourDetailsScreen.navigationOptions = {
  headerTitle: 'Tours',
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTintColor: 'white'
}

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});

export default TourDetailsScreen;