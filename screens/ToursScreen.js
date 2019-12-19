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

import { TOURS } from "../data/data";
import Colors from "../constants/Colors";

const ToursScreen = props => {
  // console.log('PROPS :', props.navigation.getParam('id'));

  const cityId = props.navigation.getParam("id");
  const availableItems = TOURS.filter(item => item.cityId === cityId);

  const renderListItem = data => {
    console.log('DATA item:', data.item)
    
    
      return (
        <View key={data.item.id}style={styles.tourItem}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("TourDetails", {
                id: data.item.id,
                name: data.item.name
              })
            }
          >
            <View>
              <View style={{ ...styles.tourRow, ...styles.tourHeader }}>
                <ImageBackground
                  source={require("../assets/hero.jpeg")}
                  style={styles.image}
                >
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

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={availableItems}
        renderItem={renderListItem}
        numColumns={1}
      />
    </View>
  );
};

ToursScreen.navigationOptions = navData => {
  // console.log('NAV OPTIONS:', navData.navigation.getParam('name'))
  const cityName = navData.navigation.getParam("name");

  return {
    headerTitle: `${cityName.match(/^(.+?),/)[1]} Tours`,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default ToursScreen;
