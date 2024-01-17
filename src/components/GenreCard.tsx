import {COLORS, FONT_NAMES} from '@src/theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const GenreCard = ({item}) => (
  <View style={style.cardContainer}>
    <Text style={{fontFamily: FONT_NAMES.bold, color: COLORS.primary}}>
      {item.name}
    </Text>
  </View>
);

const style = StyleSheet.create({
  cardContainer: {
    height: 100,
    flex: 1 / 2,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderEndEndRadius: 10,
    backgroundColor: COLORS.blackOpacity(10),
    margin: 5,
  },
});
