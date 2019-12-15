import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CitiesScreen from '../screens/CitiesScreen';
import ToursScreen from '../screens/ToursScreen';
import TourDetailsScreen from '../screens/TourDetailsScreen';
import LocationDetailsScreen from '../screens/LocationDetailsScreen';
import MapScreenStatic from '../screens/MapScreenStatic';
import MapScreenDynamic from '../screens/MapScreenDynamic';

const ToursNavigator = createStackNavigator({
  Cities: CitiesScreen,
  Tours: ToursScreen,
  TourDetails: TourDetailsScreen,
  LocationDetails: LocationDetailsScreen,
  MapStatic: MapScreenStatic,
  MapDynamic: MapScreenDynamic
});

export default createAppContainer(ToursNavigator);

