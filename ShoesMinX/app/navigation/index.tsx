import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Category from '../screen/Category/'
import Home from '../screen/Home/'
const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Category:{screen:Category},

})
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;