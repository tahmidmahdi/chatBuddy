import React from 'react';
import { ScrollView, StyleProp, StyleSheet, View, ViewProps, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Layout: React.FC<{
  children: React.ReactNode;
  style?: StyleProp<ViewProps>;
}> = ({ children, style }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const styles = {
    marginHorizontal: 10,
  };
  const viewStyles = StyleSheet.compose(styles, style);
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={viewStyles}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
