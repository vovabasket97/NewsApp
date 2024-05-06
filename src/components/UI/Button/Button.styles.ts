import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: configStyles.colors.blue,
    borderRadius: 10,
    textAlign: 'center',
  },
  rounded: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: configStyles.colors.lightGray,
    aspectRatio: '1/1',
  },
  secondary: {
    backgroundColor: configStyles.colors.red,
  },
  text: {
    color: configStyles.colors.white,
    fontFamily: configStyles.fonts.roboto,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 35,
  },
  disabled: {
    opacity: 0.6,
  },
})
