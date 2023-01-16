import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_ROUTES} from './RouteConst';
import AppConfigComponent from '../appConfig';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Scorecart'}
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        {SCREEN_ROUTES.map(route => (
          <Stack.Screen key={route.key} name={route.name}>
            {props => <AppConfigComponent {...props} routeData={{...route}} />}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

{
  /* <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
  <View
    style={{
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    }}>
    <Section title="Step One">
      Edit <Text style={styles.highlight}>App.js</Text> to change this screen
      and then come back to see your edits.
    </Section>
    <Section title="See Your Changes">
      <ReloadInstructions />
    </Section>
    <Section title="Debug">
      <DebugInstructions />
    </Section>
    <Section title="Learn More">
      Read the docs to discover what to do next:
    </Section>
    <LearnMoreLinks />
  </View>
</ScrollView>; */
}
