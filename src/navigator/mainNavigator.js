import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList73186561Navigator from '../features/ArticleList73186561/navigator';
import ArticleList75186559Navigator from '../features/ArticleList75186559/navigator';
import BlankScreen71186557Navigator from '../features/BlankScreen71186557/navigator';
import UserProfile186547Navigator from '../features/UserProfile186547/navigator';
import Tutorial186546Navigator from '../features/Tutorial186546/navigator';
import NotificationList186518Navigator from '../features/NotificationList186518/navigator';
import Settings186517Navigator from '../features/Settings186517/navigator';
import Settings186509Navigator from '../features/Settings186509/navigator';
import UserProfile186507Navigator from '../features/UserProfile186507/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList73186561: { screen: ArticleList73186561Navigator },
ArticleList75186559: { screen: ArticleList75186559Navigator },
BlankScreen71186557: { screen: BlankScreen71186557Navigator },
UserProfile186547: { screen: UserProfile186547Navigator },
Tutorial186546: { screen: Tutorial186546Navigator },
NotificationList186518: { screen: NotificationList186518Navigator },
Settings186517: { screen: Settings186517Navigator },
Settings186509: { screen: Settings186509Navigator },
UserProfile186507: { screen: UserProfile186507Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
