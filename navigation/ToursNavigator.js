import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CitiesScreen from '../screens/CitiesScreen';
import ToursScreen from '../screens/ToursScreen';
import TourDetailsScreen from '../screens/TourDetailsScreen';
import LocationDetailsScreen from '../screens/LocationDetailsScreen';

const ToursNavigator = createStackNavigator({
  Cities: CitiesScreen,
  Tours: ToursScreen,
  TourDetails: TourDetailsScreen,
  LocationDetails: LocationDetailsScreen
});

export default createAppContainer(ToursNavigator);

