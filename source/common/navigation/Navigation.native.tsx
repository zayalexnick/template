import { createBottomTabNavigator, NavigationContainer, createStackNavigator } from 'react-navigation';

import Main from '~/Main/screens/Main.screen';
import EventsList from '~/Events/List/screens/List.screen';

const Navigator: NavigationContainer = createBottomTabNavigator({
    Main: {
        screen: Main,
        navigationOptions: () => ({
            title: 'Главная'
        })
    },
    Events: {
        screen: createStackNavigator({
            List: {
                screen: EventsList,
            }
        }),
        navigationOptions: () => ({
            title: 'Афиша'
        })
    }
});

export default Navigator;