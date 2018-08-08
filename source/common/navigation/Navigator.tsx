import { createBottomTabNavigator, NavigationContainer } from 'react-navigation';

import Main from '~/Main/Main.scene';

const Navigator: NavigationContainer = createBottomTabNavigator({
    Main: {
        screen: Main,
        navigationOptions: () => ({
            title: 'Главная',
        })
    }
}, {
    initialRouteName: 'Main'
});

export default Navigator;