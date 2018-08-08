import { Platform, AsyncStorage } from 'react-native';

export default Platform.OS === 'web' ? localStorage : AsyncStorage;