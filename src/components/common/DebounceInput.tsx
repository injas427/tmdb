import { FONT_NAMES, FONT_SIZES } from "@src/theme"
import React, { useRef, useState } from "react"
import { StyleSheet, TextInput } from "react-native"

type DebounceInputType = {
  debounceDelay?: number,
  onChangeText: (e:string) => void;
  value: string;
  placeholder: string
}

export const DebounceInput = ({debounceDelay = 500, onChangeText = () => {}, value = "", placeholder="Search"}: DebounceInputType) => {

  const [inputText, setInputText] = useState(value)

  const timerRef = useRef()

  const handleChangeText = (text:string) => {
    setInputText(text)
    if(timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      onChangeText(text)
    }, debounceDelay);
  }

return <TextInput onChangeText={handleChangeText} value={inputText} style={style.input}/>
}

const style = StyleSheet.create({
  input: {
    flex: 1,
    alignSelf: "flex-start",
    fontFamily: FONT_NAMES.regular,
    fontSize: FONT_SIZES.medium
  }
})