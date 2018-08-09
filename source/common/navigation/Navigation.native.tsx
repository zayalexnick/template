import { createBottomTabNavigator, NavigationContainer } from 'react-navigation';

import Main from '~/Main/screens/Main.screen';

const Navigator: NavigationContainer = createBottomTabNavigator({
    Main: {
        screen: Main,
        navigationOptions: () => ({
            title: 'Главная'
        })
    }
});

export default Navigator;