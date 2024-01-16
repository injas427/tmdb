import { IMAGES } from "@src/assets/images";
import { COLORS, FONT_NAMES, FONT_SIZES} from "@src/theme";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


type HeaderTypes = {
  title: string;
  showSearch?: boolean
}

export const Header = ({title, showSearch = false}: HeaderTypes) => <View style={style.headerContainer} >
  <Text style={style.title} >{title}</Text>
  {showSearch && <TouchableOpacity >
  <Image source={IMAGES.search} style={{width: 40, height: 40}} />
  </TouchableOpacity>
  }
</View>

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
    fontFamily: FONT_NAMES.bold,
    color: COLORS.blue500,
    fontSize: FONT_SIZES.large
  }
})