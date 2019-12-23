import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  ImageBackground,
  ActivityIndicator
} from "react-native";

import Colors from "../constants/Colors";
import ENV from "../env";

const CitiesScreen = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${ENV.hostURL}/cities`)
      .then(response => response.json())
      .then(responseJson => {
        setIsLoading(false);
        setData(responseJson.cities);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const renderListItem = data => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() =>
          props.navigation.navigate("Tours", {
            id: data.item._id,
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

  if (isLoading) {
    return <ActivityIndicator />;
  } else {
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
          keyExtractor={(item, idx) => item._id}
          data={data}
          renderItem={renderListItem}
          numColumns={1}
        />
      </View>
    );
  }
};

CitiesScreen.navigationOptions = {
  headerTitle: "TASTY TOURS",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
    textAlign: "center"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 80,
    width: "60%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    backgroundColor: Colors.accentColor,
    borderRadius: 7
  },
  text: {
    color: Colors.primaryColor,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 20
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
    fontSize: 50,
    color: "white",
    textAlign: "center"
  },
  headerButton: {
    color: "blue"
  }
});

export default CitiesScreen;
