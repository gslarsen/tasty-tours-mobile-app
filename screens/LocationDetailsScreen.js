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
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
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
            props.navigation.navigate("MapDynamic", {tourId,
              name: locName });
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
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Home"
          iconName="md-home"
          onPress={() => {
            navData.navigation.navigate('Cities');
          }}
        />
      </HeaderButtons>
    )
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
