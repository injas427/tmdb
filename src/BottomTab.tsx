import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import {COLORS, FONT_NAMES, FONT_SIZES} from "@theme"
import { IMAGES } from './assets/images';

const ROUTES = ["Dashboard", "Watch", "Media Library", "More"]

export const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={style.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
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
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            onPress={onPress}
            style={{ flex: 1, alignItems: "center", justifyContent:"center",}}
            key={route.key}
          >
            <Image source={IMAGES.bottomTab[ROUTES[index]]} style={{width: 20, height: 20, tintColor: isFocused ?  COLORS.white : COLORS.whiteOpacity(50)}} />
            <Text style={{ color: isFocused ?  COLORS.white : COLORS.whiteOpacity(50), marginTop: 10, fontFamily: isFocused ? FONT_NAMES.bold : FONT_NAMES.regular, fontSize: FONT_SIZES.small }}>
              {ROUTES[index]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 15
  }
})