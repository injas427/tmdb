import { IMAGES } from "@src/assets/images";
import { COLORS, FONT_NAMES, FONT_SIZES} from "@src/theme";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type HeaderTypes = {
  title: string;
  showSearch?: boolean;
  onSearchShow?: () => void,
  onSearchClose?: () => void,
}

export const Header = ({title, showSearch = false, onSearchShow = () => {}, onSearchClose = () => {}}: HeaderTypes) => {
  const [shouldShowSearch, setShouldShowSearch] = useState(false)

  const handleSearchIconPress = () => setShouldShowSearch(prev => !prev)

  useEffect(() => {
    if(shouldShowSearch) onSearchShow()
    else onSearchClose()
  }, [shouldShowSearch])
  


return <View style={style.headerContainer} >
  {!shouldShowSearch ? <><Text style={style.title} >{title}</Text>
  {showSearch && <TouchableOpacity onPress={handleSearchIconPress} >
  <Image source={IMAGES.search} style={{width: 40, height: 40}} />
  </TouchableOpacity>}
  </>: <View style={{backgroundColor: "#F2F2F6", flex: 1, borderRadius: 30, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}} >
  <Image source={IMAGES.search} style={{width: 40, height: 40}} />
  <TextInput placeholder="TV Shows Movies and More"  style={{flex: 1, alignSelf: "flex-start", fontFamily: FONT_NAMES.regular, fontSize: FONT_SIZES.medium}}/>
  <TouchableOpacity onPress={handleSearchIconPress} >
    <Image source={IMAGES.close} style={{width: 30, height: 30}} />
    </TouchableOpacity>
    </View>}
</View>
}

const style = StyleSheet.create({
  headerContainer: {
    height: 54,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22
  },
  title: {
    fontFamily: FONT_NAMES.medium,
    color: COLORS.blue500,
    fontSize: FONT_SIZES.large,
  }
})