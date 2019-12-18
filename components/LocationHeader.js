import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground
} from "react-native";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import ENV from "../env";
import Colors from "../constants/Colors";

class LocationHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.locationHeaderUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.place_id}&fields=name,price_level,rating,photo,user_ratings_total&key=${ENV.googleApiKey}`;
  }

  componentDidMount() {
    return fetch(this.locationHeaderUrl)
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson.result)
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

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 100
          }}
        >
          <Text>
            {`Price: ${this.renderPriceLevelDollars(this.state.details.price_level)}`}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={styles.details}>{`${this.state.details.rating}`}</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  details: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    color: "orange",
    paddingRight: 4
  },
  myStarStyle: {
    color: "orange",
    backgroundColor: "transparent",
    textShadowRadius: 2
  },
  myEmptyStarStyle: {
    color: "white"
  }
});

export default LocationHeader;
