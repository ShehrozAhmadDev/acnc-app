import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const MyTabBar = ({state, descriptors, navigation, screenIcons}: any) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const IconComponent = screenIcons[label]; 

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              ...styles.tabItem,
              backgroundColor: isFocused ? '#800000' : '#121111',
            }}>
            <IconComponent fill={isFocused ? '#fff' : '#626262'} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
