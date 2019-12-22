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

const ToursScreen = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const cityId = props.navigation.getParam("id");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/tours")
      .then(response => response.json())
      .then(responseJson => {
        setIsLoading(false);
        setData(responseJson.tours.filter(item => item.cityId === cityId));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const renderListItem = data => {
    let image = data.item.image;

    return (
      <View key={data.item._id} style={styles.tourItem}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("TourDetails", {
              id: data.item._id,
              name: data.item.name
            })
          }
        >
          <View>
            <View style={{ ...styles.tourRow, ...styles.tourHeader }}>
              <ImageBackground source={{ uri: image }} style={styles.image}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{data.item.name}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ ...styles.tourRow, ...styles.tourDetail }}>
              <Text>{data.item.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  if (isLoading) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={styles.list}>
        <FlatList
          keyExtractor={item => item._id}
          data={data}
          renderItem={renderListItem}
          numColumns={1}
        />
      </View>
    );
  }
};

ToursScreen.navigationOptions = navData => {
  const cityName = navData.navigation.getParam("name");

  return {
    headerTitle: `${cityName.match(/^(.+?),/)[1]} Tours`,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
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
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

export default ToursScreen;
