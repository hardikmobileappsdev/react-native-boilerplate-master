import { createBottomTabNavigator } from 'react-navigation';

import Main from './components/Main';
import Home from './components/Home';

const BaseNavigation = createBottomTabNavigator({
  Main,
  Home,
});

export default BaseNavigation;
