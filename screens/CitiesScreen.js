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
    <View style={{ flex: 1 }}>
      <View>
        <ImageBackground
          style={styles.image}
          source={require("../assets/hero.jpeg")}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Tasty Tours</Text>
          </View>
        </ImageBackground>
      </View>
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
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
    textAlign: 'center'
  },  
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 60,
    width: "70%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    backgroundColor: Colors.accentColor,
    borderRadius: 7
  },
  text: {
    color: Colors.primaryColor,
    fontFamily: "open-sans-bold",
    textAlign: "center"
  },
  image: {
    width: 400,
    height: 200,
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 7,
    borderRadius: 10,
    justifyContent: "center"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: "lobster",
    fontSize: 40,
    color: "white",
    textAlign: "center"
  },
  headerButton: {
    color: "blue"
  }
});

export default CitiesScreen;
