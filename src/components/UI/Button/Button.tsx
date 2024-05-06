import { FC, PropsWithChildren, memo } from 'react'
import { ActivityIndicator, Pressable, StyleProp, Text, ViewStyle } from 'react-native'

import { styles } from './Button.styles'

interface ButtonProps extends PropsWithChildren {
  onPress?: () => void
  type?: 'rounded' | 'secondary'
  style?: StyleProp<ViewStyle>
  loading?: boolean
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ onPress, children, type, style, loading, disabled }) => {
  const innerTag = type === 'rounded' ? children : <Text style={styles.text}>{children}</Text>

  return (
    <Pressable disabled={disabled} style={[styles.button, type && styles[type], disabled && styles.disabled, style]} onPress={onPress}>
      {loading ? <ActivityIndicator color="black" /> : innerTag}
    </Pressable>
  )
}

export default memo(Button)
