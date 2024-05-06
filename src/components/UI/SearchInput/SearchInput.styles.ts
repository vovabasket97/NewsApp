import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    paddingRight: 20,
  },
  reset: {
    zIndex: 1,
    position: 'absolute',
    right: 4,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
})
