import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button
} from "react-native";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as WebBrowser from "expo-web-browser";

import ENV from "../env";
import Colors from "../constants/Colors";

class LocationHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.locationHeaderUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.place_id}&fields=name,price_level,rating,photo,user_ratings_total&key=${ENV.googleApiKey}`;
    this.menu = props.menu;
  }

  componentDidMount() {
    return fetch(this.locationHeaderUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            details: responseJson.result
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderPriceLevelDollars() {
    let result = "";

    for (let i = 0; i < this.state.details.price_level; ++i) {
      result += "$";
    }
    return result;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    const getMenu = () => {
      WebBrowser.openBrowserAsync(this.menu);
    };

    return (
      <View style={styles.container}>
        <View style={styles.starContainer}>
          <Text style={styles.rating}>{`${this.state.details.rating}`}</Text>
          <View style={styles.stars}>
            <Stars
              default={Math.round(this.state.details.rating * 2) / 2}
              half={true}
              spacing={1}
              count={5}
              starSize={50}
              backingColor="orange"
              fullStar={<Icon name={"star"} style={[styles.myStarStyle]} />}
              emptyStar={
                <Icon
                  name={"star-outline"}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <Icon name={"star-half"} style={[styles.myStarStyle]} />
              }
            />
          </View>
        </View>
        <Text style={styles.price}>
          {`${this.renderPriceLevelDollars(this.state.details.price_level)}`}
        </Text>

        <Button
          style={styles.headerButton}
          title="Menu"
          color={Colors.primaryColor}
          onPress={getMenu}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // marginHorizontal: '10%',
    width: "100%",
    paddingTop: 10
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center'
  },
  rating: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    textAlign: "center",
    color: "orange"
  },
  myStarStyle: {
    color: "orange",
    backgroundColor: "transparent",
    textShadowRadius: 2
  },
  myEmptyStarStyle: {
    color: "white"
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 15
  },
  headerButton: {
    fontFamily: "open-sans-bold",
    width: 20
  },
  stars: {
    paddingLeft: 5
  }
});

export default LocationHeader;
