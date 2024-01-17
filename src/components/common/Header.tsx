import {IMAGES} from '@src/assets/images';
import {COLORS, FONT_NAMES, FONT_SIZES} from '@src/theme';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DebounceInput} from './DebounceInput';

type HeaderTypes = {
  title: string;
  showSearch?: boolean;
  onSearchShow?: () => void;
  onSearchClose?: () => void;
  onSearch?: (e: string) => void;
  searchKeyword?: string;
};

export const Header = ({
  title,
  showSearch = false,
  onSearchShow = () => {},
  onSearchClose = () => {},
  onSearch = () => {},
  searchKeyword = '',
}: HeaderTypes) => {
  const [shouldShowSearch, setShouldShowSearch] = useState(false);

  const handleSearchIconPress = () => setShouldShowSearch(prev => !prev);

  useEffect(() => {
    if (shouldShowSearch) {
      onSearchShow();
    } else {
      onSearchClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldShowSearch]);

  const handleSearchKeyword = (text: string) => {
    onSearch(text);
  };

  return (
    <View style={style.headerContainer}>
      {!shouldShowSearch ? (
        <>
          <Text style={style.title}>{title}</Text>
          {showSearch && (
            <TouchableOpacity onPress={handleSearchIconPress}>
              <Image source={IMAGES.search} style={style.headerIcon} />
            </TouchableOpacity>
          )}
        </>
      ) : (
        <View style={style.searchContainer}>
          <Image source={IMAGES.search} style={style.headerIcon} />
          <DebounceInput
            value={searchKeyword}
            onChangeText={handleSearchKeyword}
            placeholder="TV Shows Movies and More"
          />
          <TouchableOpacity onPress={handleSearchIconPress}>
            <Image source={IMAGES.close} style={style.closeIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    height: 54,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
  },
  title: {
    fontFamily: FONT_NAMES.medium,
    color: COLORS.blue500,
    fontSize: FONT_SIZES.large,
  },
  searchContainer: {
    backgroundColor: COLORS.white500,
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIcon: {
    width: 40,
    height: 40,
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
});
