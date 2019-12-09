import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import { CITIES } from "../data/data";
import Colors from '../constants/Colors';

const CitiesScreen = props => {
  const renderListItem = data => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => props.navigation.navigate("Tours", {id: data.item.id, name: data.item.name})}
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
      data={CITIES}
      renderItem={renderListItem}
      numColumns={1}
    />
  );
};

CitiesScreen.navigationOptions = {
  headerTitle: 'Tasty Tours',
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

export default CitiesScreen;
