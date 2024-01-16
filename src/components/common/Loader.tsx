import { COLORS } from "@src/theme"
import React from "react"
import { ActivityIndicator, Modal, View } from "react-native"

export const Loader = ({isVisible = false}: {isVisible: boolean}) => <Modal
visible={isVisible}
transparent
style={{flex: 1}}
>

  <View style={{flex: 1, backgroundColor: COLORS.blackOpacity(40), justifyContent: "center", alignItems: "center"}}>
    <ActivityIndicator size={"large"} />
  </View>
</Modal>