/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigation from '@navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './app/store';

const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
