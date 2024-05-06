import React, { ForwardRefRenderFunction, PropsWithChildren, forwardRef } from 'react'
import { TextInputProps as RNTextInputProps, StyleProp, TextInput, View, ViewStyle } from 'react-native'

import { placeHolderColor, styles } from './Input.styles'

interface InputProps extends PropsWithChildren<RNTextInputProps> {
  defaultValue?: string
  inputStyle?: StyleProp<ViewStyle>
}

const Input: ForwardRefRenderFunction<TextInput, InputProps> = ({ children, inputStyle, ...props }, ref) => {
  return (
    <View style={[styles.container, props.style]}>
      {children}
      <TextInput placeholderTextColor={placeHolderColor} style={[styles.input, inputStyle]} {...props} ref={ref} />
    </View>
  )
}

export default forwardRef(Input)
