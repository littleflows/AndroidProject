/**
 * @format
 */

import { AppRegistry } from 'react-native';

// import LandingPage from './LandingPage';
import HomeScreen from './HomeScreen';
// import UserPage from './UserPage';
// import SignUp from './SignUp';
// import SignIn from './SignIn';

import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => LandingPage);
AppRegistry.registerComponent(appName, () => HomeScreen);
// AppRegistry.registerComponent(appName, () => UserPage);
// AppRegistry.registerComponent(appName, () => SignUp);
// AppRegistry.registerComponent(appName, () => SignIn);