import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  Image
} from "react-native";
import ViewMoreText from "react-native-view-more-text";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import LocationHeader from "../components/LocationHeader";
import HeaderButton from "../components/HeaderButton";
import { TOURS } from "../data/data";
import Colors from "../constants/Colors";

const LocationDetailsScreen = props => {
  const tourId = props.navigation.getParam("tourId");
  const locName = props.navigation.getParam("name");
  const place_id = props.navigation.getParam("place_id");
  const menu = props.navigation.getParam("menu");

  const renderViewMore = onPress => {
    return <Text onPress={onPress}>View more</Text>;
  };

  const renderViewLess = onPress => {
    return <Text onPress={onPress}>View less</Text>;
  };

  const tour = TOURS.find(item => item.id === tourId);

  const location = tour.locations.find(
    location => location.locationName === locName
  );
  
  return (
    <View>
      <Image style={styles.image} source={{ uri: location.image }} />
      <LocationHeader style={styles.header} place_id={place_id} menu={menu} />
      <View style={styles.summary}>
        <ViewMoreText
          numberOfLines={17}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{}}
        >
          <Text style={styles.text}>{location.summary}</Text>
        </ViewMoreText>
      </View>
    </View>
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
            navData.navigation.navigate("Cities");
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
    padding: 10
  },
  text: {
    fontFamily: "open-sans",
    textAlign: "justify"
  },
  image: {
    marginTop: 15,
    width: 400,
    height: 200,
    borderRadius: 10,
    marginLeft: 6
  },
  header: {
    marginTop: 50
  }
});

export default LocationDetailsScreen;
