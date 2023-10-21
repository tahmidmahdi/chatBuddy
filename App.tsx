/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/Home/Home';
import colors from './src/themes/colors';
const Stack = createStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('🚀 ~ file: App.tsx:30 ~ isDarkMode:', isDarkMode);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colors.primaryDark,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle="light-content" backgroundColor={backgroundStyle.backgroundColor} />
    //   <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}
    //     >
    //       {/* <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come
    //         back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">Read the docs to discover what to do next:</Section> */}
    //       <Text preset="small">Hello</Text>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
