import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  Image
} from "react-native";

import { CITIES } from "../data/data";
import Colors from "../constants/Colors";

const CitiesScreen = props => {
  const renderListItem = data => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() =>
          props.navigation.navigate("Tours", {
            id: data.item.id,
            name: data.item.name
          })
        }
      >
        <View>
          <Text style={styles.text}>{data.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Image style={styles.image} source={require("../assets/hero.jpeg")} />
      <FlatList
        keyExtractor={(item, idx) => item.id}
        data={CITIES}
        renderItem={renderListItem}
        numColumns={1}
      />
    </View>
  );
};

CitiesScreen.navigationOptions = {
  headerTitle: "TASTY TOURS",
  headerStyle: {
    backgroundColor: Colors.primaryColor
    //backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerTintColor: 'white'
  //headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 60,
    width: "70%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    backgroundColor: Colors.accentColor
  },
  text: {
    color: Colors.primaryColor,
    fontFamily: "open-sans-bold",
    textAlign: "center"
  },
  image: {
    width: 400,
    height: 200,
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 6.5
  }
});

export default CitiesScreen;
