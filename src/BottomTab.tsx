import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {COLORS, FONT_NAMES, FONT_SIZES} from '@theme';
import {IMAGES} from '@images/index';

const ROUTES = ['Dashboard', 'Watch', 'Media Library', 'More'];

export const MyTabBar = ({state, navigation}) => {
  return (
    <View style={style.tabBarContainer}>
      {state.routes.map((route, index) => {
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
            style={style.button}
            key={route.key}>
            <Image
              source={IMAGES.bottomTab[ROUTES[index]]}
              style={[
                style.image,
                {
                  tintColor: isFocused ? COLORS.white : COLORS.whiteOpacity(50),
                },
              ]}
            />
            <Text
              style={[
                style.label,
                {
                  color: isFocused ? COLORS.white : COLORS.whiteOpacity(50),
                  fontFamily: isFocused ? FONT_NAMES.bold : FONT_NAMES.regular,
                },
              ]}>
              {ROUTES[index]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 15,
  },
  button: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  image: {
    width: 20,
    height: 20,
  },
  label: {
    marginTop: 10,
    fontSize: FONT_SIZES.small,
  },
});
