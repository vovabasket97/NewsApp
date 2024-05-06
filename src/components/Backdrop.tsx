import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet'
import { FC } from 'react'
import { Animated, Pressable, StyleSheet } from 'react-native'

interface BackdropProps extends BottomSheetBackdropProps {
  onPress?: () => void
}

const Backdrop: FC<BackdropProps> = ({ onPress, ...props }) => {
  return (
    <Animated.View style={styles.backdrop}>
      <Pressable style={styles.backdropPress} onPress={onPress}></Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  backdropPress: {
    width: '100%',
    height: '100%',
  },
})

export default Backdrop
