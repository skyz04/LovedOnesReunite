import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import MatchScreen from './screens/MatchScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'LovedOnesReunite' }} />
        <Stack.Screen name="Post" component={PostScreen} options={{ title: 'Report Missing' }} />
        <Stack.Screen name="Match" component={MatchScreen} options={{ title: 'Found Someone?' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
dsfb