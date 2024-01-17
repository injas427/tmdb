import {COLORS} from '@src/theme';
import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

export const Loader = ({isLoading = false}: {isLoading: boolean}) => (
  <Modal visible={isLoading} transparent style={style.flex}>
    <View style={style.loaderContainer}>
      <ActivityIndicator size={'large'} />
    </View>
  </Modal>
);

const style = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    backgroundColor: COLORS.blackOpacity(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
});
