import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Image
} from "react-native";
import ViewMoreText from "react-native-view-more-text";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import LocationHeader from "../components/LocationHeader";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const LocationDetailsScreen = props => {
  const tourId = props.navigation.getParam("tourId");
  const locName = props.navigation.getParam("name");
  const place_id = props.navigation.getParam("place_id");
  const menu = props.navigation.getParam("menu");
  const summary = props.navigation.getParam("summary");
  const image = props.navigation.getParam("image");

  const renderViewMore = onPress => {
    return <Text onPress={onPress}>View more</Text>;
  };

  const renderViewLess = onPress => {
    return <Text onPress={onPress}>View less</Text>;
  };
  
  return (
    <View>
    <ScrollView style={styles.summary}>
      <Image style={styles.image} source={{ uri: image }} />
      
      <LocationHeader style={styles.header} place_id={place_id} menu={menu} />
      
        <ViewMoreText
          numberOfLines={17}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{}}
        >
          <Text style={styles.text}>{summary}</Text>
        </ViewMoreText>
        <View><Text style={{color: 'white'}}>-</Text></View>
      </ScrollView>
    </View>
  );
};

LocationDetailsScreen.navigationOptions = navData => {
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
