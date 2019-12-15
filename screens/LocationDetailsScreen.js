import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  Button
} from "react-native";
import ViewMoreText from "react-native-view-more-text";

import { TOURS } from "../data/data";
import Colors from "../constants/Colors";

const LocationDetailsScreen = props => {
  // console.log('PROPS :', props.navigation.getParam('id'));
  const tourId = props.navigation.getParam("tourId");
  const locName = props.navigation.getParam("name");

  const renderViewMore = onPress => {
    return <Text onPress={onPress}>View more</Text>;
  };

  const renderViewLess = onPress => {
    return <Text onPress={onPress}>View less</Text>;
  };

  const renderListItem = data => {
    const tour = TOURS.find(item => item.id === tourId);
    const location = tour.locations.find(
      location => location.locationName === locName
    );

    return (
      <View>
        <View style={styles.summary}>
          <ViewMoreText
            numberOfLines={13}
            renderViewMore={this.renderViewMore}
            renderViewLess={this.renderViewLess}
            textStyle={{}}
          >
            <Text style={styles.text}>{location.summary}</Text>
          </ViewMoreText>
        </View>
        <Button
          title="Go to Map"
          color={Colors.primary}
          onPress={() => {
            console.log(props);
            props.navigation.navigate("MapDynamic", {});
          }}
        />
      </View>
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

LocationDetailsScreen.navigationOptions = navData => {
  // console.log('NAV OPTIONS:', navData.navigation.getParam('name'))
  const locName = navData.navigation.getParam("name");

  return {
    headerTitle: `${locName}`,
    headerStyle: {
      backgroundColor: Colors.primaryColor
      //backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: "white"
    // headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
  };
};

const styles = StyleSheet.create({
  summary: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  },
  text: {
    color: Colors.primaryColor,
    fontFamily: "open-sans",
    textAlign: "justify"
  }
});

export default LocationDetailsScreen;
